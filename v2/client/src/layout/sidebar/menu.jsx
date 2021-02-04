import { Home, List, Coffee } from "react-feather";
export const MENUITEMS = [
  {
    menutitle: null,
    menucontent: null,
    displaytopmenu: false,
    Items: [
      {
        title: "Home",
        icon: Home,
        type: "link",
        path: `${process.env.PUBLIC_URL}/home`,
        active: true,
      },
      {
        title: "My Lists",
        icon: List,
        type: "link",
        path: `${process.env.PUBLIC_URL}/my-lists`,
        active: false,
        badge: "badge badge-success",
        badgetxt: "0",
      },
      {
        title: "Demo Page",
        icon: Coffee,
        type: "link",
        path: `${process.env.PUBLIC_URL}/demo`,
        active: false,
      },
    ],
  },
];
