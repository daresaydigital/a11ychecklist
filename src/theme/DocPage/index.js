/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import React from 'react';
import { MDXProvider } from '@mdx-js/react';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import renderRoutes from '@docusaurus/renderRoutes';
import Layout from '@theme/Layout';
import DocSidebar from '@theme/DocSidebar';
import MDXComponents from '@theme/MDXComponents';
import NotFound from '@theme/NotFound';
import { matchPath } from '@docusaurus/router';

import styles from './styles.module.css';

var aliasRoutesAdded = false;

function DocPage(props) {
  const { route: baseRoute, docsMetadata, location } = props;
  // case-sensitive route such as it is defined in the sidebar
  const currentRoute =
    baseRoute.routes.find((route) => {
      return matchPath(location.pathname, route);
    }) || {};
  const { permalinkToSidebar, docsSidebars, version } = docsMetadata;
  const nodePath = currentRoute.path;
  const rootPath = nodePath ? nodePath.split("/").slice(0, -1).concat(["index"]).join("/") : nodePath;
  const sidebar = permalinkToSidebar[nodePath];
  const sidebarWithFallback = sidebar || permalinkToSidebar[rootPath]

  const {
    siteConfig: { customFields: { aliasRoutes = {} }, themeConfig = {} } = {},
    isClient,
  } = useDocusaurusContext();

  const { sidebarCollapsible = true } = themeConfig;

  if (aliasRoutesAdded === false) {
    const shouldBeAdded = [];
    baseRoute.routes.forEach(route => {
      Object.keys(aliasRoutes).forEach(origin => {
        if (route.path.indexOf(origin) === 0) {
          aliasRoutes[origin].forEach(aroute => {
            shouldBeAdded.push(Object.assign({}, route, { path: route.path.replace(origin, aroute) }));
          });
        }
      });
    });
    shouldBeAdded.forEach(route => baseRoute.routes.push(route));
    aliasRoutesAdded = true;
  }

  if (Object.keys(currentRoute).length === 0) {
    return <NotFound {...props} />;
  }

  return (
    <Layout version={version} key={isClient}>
      <div className={styles.docPage}>
        {sidebarWithFallback && (
          <div className={styles.docSidebarContainer} role="complementary">
            <DocSidebar
              docsSidebars={docsSidebars}
              path={sidebar ? nodePath : rootPath}
              sidebar={sidebarWithFallback}
              sidebarCollapsible={sidebarCollapsible}
            />
          </div>
        )}
        <main className={styles.docMainContainer}>
          <MDXProvider components={MDXComponents}>
            {renderRoutes(baseRoute.routes)}
          </MDXProvider>
        </main>
      </div>
    </Layout>
  );
}

export default DocPage;
