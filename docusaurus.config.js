module.exports = {
  title: "Daresay Accessibility Checklist",
  tagline: "The tagline of my site",
  url: "https://ambitious-sky-06541c103.azurestaticapps.net/",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "daresay", // Usually your GitHub org/user name.
  projectName: "a11ychecklist", // Usually your repo name.
  plugins: [
    'docusaurus-plugin-sass',
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
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
        {
          href: "https://github.com/daresaydigital/a11ychecklist",
          label: "GitHub",
          position: "right",
        },
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
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
