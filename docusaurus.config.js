module.exports = {
  title: "Daresay Accessibility Checklist",
  tagline: "The tagline of my site",
  url: "https://ambitious-sky-06541c103.azurestaticapps.net/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "daresay", // Usually your GitHub org/user name.
  projectName: "a11ychecklist", // Usually your repo name.
  plugins: ["docusaurus-plugin-sass"],
  stylesheets: [
    "https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@300;400;500;700",
  ],
  customFields: {
    showProgressBar: false,
    aliasRoutes: {
      // "/abc/": ["/def/", "/ghi/"],
      "/gifs/": ["/video/"],
      "/video/": ["/images/"],
      "/audio/": ["/video/"],
      "/controls/": ["/buttons/"],
    },
  },
  themeConfig: {
    disableDarkMode: true,
    navbar: {
      hideOnScroll: false,
      title: "Accessibility Checklist",
      logo: {
        alt: "Daresay Logo",
        src: "img/logo.svg",
        srcDark: "img/logo_darkmode.svg",
      },
      links: [
        // {
        //   to: "docs/",
        //   activeBasePath: "docs",
        //   label: "Docs",
        //   position: "left",
        // },
        // { to: "blog", label: "Blog", position: "left" },
        //{
        //  href: "https://github.com/daresaydigital/a11ychecklist",
        //  label: "GitHub",
        //  position: "left",
        //},
      ],
    },
    footer: false,
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: "landing",
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/daresaydigital/a11ychecklist/edit/master",
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/daresaydigital/a11ychecklist/edit/master/blog",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.scss"),
        },
      },
    ],
  ],
};
