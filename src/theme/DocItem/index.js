/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from "react";

import Head from "@docusaurus/Head";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
// import DocPaginator from "@theme/DocPaginator";
import useTOCHighlight from "@theme/hooks/useTOCHighlight";
import Link from "@docusaurus/Link";
import CompletedCheckMark from "@theme/CompletedCheckMark"
import {ProgressProvider} from "@theme/ProgressBar"

import clsx from "clsx";
import styles from "./styles.module.scss";

import BackSVG from "../../../static/img/back.svg"


const LINK_CLASS_NAME = "table-of-contents__link";
const ACTIVE_LINK_CLASS_NAME = "table-of-contents__link--active";
const TOP_OFFSET = 100;

function DocTOC({ headings }) {
  useTOCHighlight(LINK_CLASS_NAME, ACTIVE_LINK_CLASS_NAME, TOP_OFFSET);
  return (
    <div className="col col--3">
      <div className={styles.tableOfContents}>
        <Headings headings={headings} />
      </div>
    </div>
  );
}

/* eslint-disable jsx-a11y/control-has-associated-label */
function Headings({ headings, isChild }) {
  if (!headings.length) {
    return null;
  }
  return (
    <ul
      className={
        isChild ? "" : "table-of-contents table-of-contents__left-border"
      }
    >
      {headings.map((heading) => (
        <li key={heading.id}>
          <a
            href={`#${heading.id}`}
            className={LINK_CLASS_NAME}
            dangerouslySetInnerHTML={{ __html: heading.value }}
          />
          <Headings isChild headings={heading.children} />
        </li>
      ))}
    </ul>
  );
}

function DocItem(props) {
  const { siteConfig = {} } = useDocusaurusContext();
  const { url: siteUrl, title: siteTitle } = siteConfig;
  const { content: DocContent } = props;
  const { metadata } = DocContent;
  const {
    description,
    title,
    permalink,
    editUrl,
    lastUpdatedAt,
    lastUpdatedBy,
    version,
    latestVersionMainDocPermalink,
  } = metadata;
  const {
    frontMatter: {
      id: docId,
      image: metaImage,
      keywords,
      hide_title: hideTitle,
      hide_table_of_contents: hideTableOfContents = true,
      tags,
      show_completed_mark = true,
    },
  } = DocContent;

  const backTo = props.route.path.split("/").slice(0, -1).concat(["index"]).join("/");

  const metaTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaImageUrl = useBaseUrl(metaImage, { absolute: true });

  return (
    <>
      <Head>
        <title>{metaTitle}</title>
        <meta property="og:title" content={metaTitle} />
        {description && <meta name="description" content={description} />}
        {description && (
          <meta property="og:description" content={description} />
        )}
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {metaImage && <meta property="og:image" content={metaImageUrl} />}
        {metaImage && <meta property="twitter:image" content={metaImageUrl} />}
        {metaImage && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
        {permalink && <meta property="og:url" content={siteUrl + permalink} />}
        {permalink && <link rel="canonical" href={siteUrl + permalink} />}
      </Head>
      <div
        className={clsx("container padding-vert--lg", styles.docItemWrapper)}
      >
        <div className="row">
          <div
            className={clsx("col", {
              [styles.docItemCol]: !hideTableOfContents,
            })}
          >
            {latestVersionMainDocPermalink && (
              <div
                className="alert alert--warning margin-bottom--md"
                role="alert"
              >
                {version === "next" ? (
                  <div>
                    This is unreleased documentation for {siteTitle}{" "}
                    <strong>{version}</strong> version.
                  </div>
                ) : (
                  <div>
                    This is archived documentation for {siteTitle}{" "}
                    <strong>v{version}</strong>, which is no longer actively
                    maintained.
                  </div>
                )}
                <div className="margin-top--md">
                  For up-to-date documentation, see the{" "}
                  <strong>
                    <Link to={latestVersionMainDocPermalink}>
                      latest version
                    </Link>
                  </strong>
                  .
                </div>
              </div>
            )}
            <div className={styles.docItemContainer}>
              <article>
                {backTo !== permalink && permalink !== "/" && (
                  <Link to={backTo} className={styles.back}>
                    <BackSVG /> Back
                  </Link>
                )}
                {version && (
                  <div>
                    <span className="badge badge--secondary">
                      Version: {version}
                    </span>
                  </div>
                )}
                {!hideTitle && (
                  <header>
                    <h2 className={styles.docTitle}>{title}</h2>

                    {tags && tags.length && (
                      <aside className="tags">
                        {tags.map((tag, index) => (
                          <a href="#" aria-label={tag} key={`${tag}-${index}`}>
                            {tag}
                          </a>
                        ))}
                      </aside>
                    )}
                  </header>
                )}
                <ProgressProvider>
                  {show_completed_mark &&  (
                    <div className={styles.completed_mark}>
                      <CompletedCheckMark id={docId} />
                    </div>
                  )}
                  <div className="markdown">
                    <DocContent />
                  </div>
                </ProgressProvider>
              </article>
              {(editUrl || lastUpdatedAt || lastUpdatedBy) && (
                <div className="margin-vert--xl">
                  <div className="row">
                    <div className="col">
                      {editUrl && (
                        <a
                          href={editUrl}
                          target="_blank"
                          rel="noreferrer noopener"
                        >
                          <svg
                            fill="currentColor"
                            height="1.2em"
                            width="1.2em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 40 40"
                            style={{
                              marginRight: "0.3em",
                              verticalAlign: "sub",
                            }}
                          >
                            <g>
                              <path d="m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z" />
                            </g>
                          </svg>
                          Edit this page
                        </a>
                      )}
                    </div>
                    {(lastUpdatedAt || lastUpdatedBy) && (
                      <div className="col text--right">
                        <em>
                          <small>
                            Last updated{" "}
                            {lastUpdatedAt && (
                              <>
                                on{" "}
                                <time
                                  dateTime={new Date(
                                    lastUpdatedAt * 1000
                                  ).toISOString()}
                                  className={styles.docLastUpdatedAt}
                                >
                                  {new Date(
                                    lastUpdatedAt * 1000
                                  ).toLocaleDateString()}
                                </time>
                                {lastUpdatedBy && " "}
                              </>
                            )}
                            {lastUpdatedBy && (
                              <>
                                by <strong>{lastUpdatedBy}</strong>
                              </>
                            )}
                            {process.env.NODE_ENV === "development" && (
                              <div>
                                <small>
                                  {" "}
                                  (Simulated during dev for better perf)
                                </small>
                              </div>
                            )}
                          </small>
                        </em>
                      </div>
                    )}
                  </div>
                </div>
              )}
              {/* <div className="margin-vert--lg">
                <DocPaginator metadata={metadata} />
              </div> */}
            </div>
          </div>
          {!hideTableOfContents && DocContent.rightToc && (
            <DocTOC headings={DocContent.rightToc} />
          )}
        </div>
      </div>
    </>
  );
}

export default DocItem;
