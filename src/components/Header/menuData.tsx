import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About Us",
    path: "/about",
    newTab: false,
  },
  {
    id: 3,
    title: "Services",
    newTab: false,
    submenu: [
      {
        id: 31,
        title: "Web Development",
        path: "/services/web-development",
        newTab: false,
      },
      {
        id: 32,
        title: "SEO Services",
        path: "/services/seo",
        newTab: false,
      },
      {
        id: 33,
        title: "Paid Advertising",
        path: "/services/paid-ads",
        newTab: false,
      },
      {
        id: 34,
        title: "Social Media Marketing",
        path: "/services/social-media",
        newTab: false,
      },
      {
        id: 35,
        title: "E-Commerce Solutions",
        path: "/services/ecommerce",
        newTab: false,
      },
      {
        id: 36,
        title: "Brand Identity & Design",
        path: "/services/branding",
        newTab: false,
      },
    ],
  },
  {
    id: 4,
    title: "Blogs",
    path: "/blog",
    newTab: false,
  },
  {
    id: 5,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];
export default menuData;
