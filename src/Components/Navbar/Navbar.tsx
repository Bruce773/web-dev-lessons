import React from "react";
import AppBar from "@material-ui/core/AppBar";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import CodeIcon from "@material-ui/icons/Code";
import { SecondaryGrey } from "Colors";
import { NavItems } from "./NavItems";

export interface NavPageType {
  name: string;
  location?: string;
  icon: JSX.Element;
  sublinks?: NavPageType[];
}

export const navPages: NavPageType[] = [
  {
    name: "Home",
    location: "/",
    icon: <HomeIcon fontSize="small" style={{ marginRight: "5px" }} />,
  },
  {
    name: "About",
    location: "/about",
    icon: <InfoIcon fontSize="small" style={{ marginRight: "5px" }} />,
  },
  {
    name: "Courses",
    icon: <CodeIcon fontSize="small" style={{ marginRight: "5px" }} />,
    sublinks: [
      {
        name: "Our Courses",
        icon: <InfoIcon fontSize="small" style={{ marginRight: "5px" }} />,
        location: "/our-courses",
      },
      {
        name: "HTML",
        icon: <InfoIcon fontSize="small" style={{ marginRight: "5px" }} />,
        location: "/course-html",
      },
      {
        name: "JavaScript",
        icon: <InfoIcon fontSize="small" style={{ marginRight: "5px" }} />,
        location: "/course-javascript",
      },
    ],
  },
];

export const Navbar: React.FC = () => (
  <AppBar style={{ backgroundColor: SecondaryGrey }} title="WebDev Lessons">
    <NavItems />
  </AppBar>
);
