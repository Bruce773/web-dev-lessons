import React, { useState } from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import { Link } from "Components";
import { MainGreen } from "Colors";
import { navPages } from "./Navbar";

const StyledHeader = styled(Typography)`
  && {
    color: ${MainGreen};
    text-transform: none;
    font-weight: 400;
  }
`;

const StyledMobileNavButton = styled(Button)`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 90%;
`;

const MobileNavButton: React.FC = ({ children }) => (
  <StyledMobileNavButton variant="outlined">{children}</StyledMobileNavButton>
);

export const NavItems: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:600px)");

  const [showNavMenu, setShowNavMenu] = useState(!isMobile);

  const LinkMainHeader: React.FC = () => (
    <Link to="/">
      <Button>
        <StyledHeader variant={isMobile ? "h5" : "h6"}>
          WebDev Lessons
        </StyledHeader>
      </Button>
    </Link>
  );

  const NavButton = isMobile ? MobileNavButton : Button;

  const buildNavItemsList = () =>
    navPages.map(({ name, location, icon }) => (
      <Link style={{ textAlign: "center" }} to={location ? location : ""}>
        <NavButton>
          {isMobile ? icon : null}
          {name}
        </NavButton>
      </Link>
    ));

  return (
    <>
      {isMobile ? (
        <>
          <Toolbar>
            <IconButton
              onClick={() => setShowNavMenu(!showNavMenu)}
              style={{ paddingLeft: "0px" }}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ paddingLeft: "12px" }}>
              <LinkMainHeader />
            </div>
          </Toolbar>
          {showNavMenu && buildNavItemsList()}
        </>
      ) : (
        <Toolbar>
          <LinkMainHeader /> {buildNavItemsList()}
        </Toolbar>
      )}
    </>
  );
};
