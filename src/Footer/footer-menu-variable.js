import { location } from "../Env";

// Menu Footer Structure
const MenuVariable = [
  {
    id: "movie",
    label: "Movie",
    className: "footer-parent-menu",
    children: [
      {
        id: "movie-child-01",
        label: "Popular Movie",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-child-02",
        label: "Best of Week",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-child-03",
        label: "Top IMdb",
        className: "footer-child-menu",
        link: `${location}/`
      }
    ]
  },
  {
    id: "tv",
    label: "TV Series",
    className: "footer-parent-menu",
    children: [
      {
        id: "movie-child-01",
        label: "Popular Movie",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-child-02",
        label: "Best of Week",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-child-03",
        label: "Top IMdb",
        className: "footer-child-menu",
        link: `${location}/`
      }
    ]
  },
  {
    id: "help",
    label: "Help",
    className: "footer-parent-menu",
    children: [
      {
        id: "movie-help-01",
        label: "Term of Use",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-help-02",
        label: "Privacy Policy",
        className: "footer-child-menu",
        link: `${location}/`
      },
      {
        id: "movie-help-03",
        label: "Support",
        className: "footer-child-menu",
        children: [
          {
            id: "movie-support-01",
            label: "Contact Us",
            className: "footer-litle-child-menu",
            link: `${location}/`
          },
          {
            id: "movie-support-02",
            label: "FAQ",
            className: "footer-litle-child-menu",
            link: `${location}/`
          }
        ]
      }
    ]
  }
];

export default MenuVariable;
