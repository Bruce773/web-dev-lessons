import React, { useState } from "react";
import styled from "styled-components";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Typography from "@material-ui/core/Typography";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Link } from "Components";
import { MainGreen } from "Colors";
import { navPages, NavPageType } from "./Navbar";

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

const LinkMainHeader: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <Link to="/">
    <Button>
      <StyledHeader variant={isMobile ? "h5" : "h6"}>
        WebDev Lessons
      </StyledHeader>
    </Button>
  </Link>
);

const NavItem = ({
  ItemData: { name, location, icon, sublinks },
  NavButton,
  isMobile,
}: {
  NavButton: React.ElementType;
  ItemData: NavPageType;
  isMobile: boolean;
}) => {
  const [subMenuIsDown, setSubMenuIsDown] = useState(false);

  return (
    <>
      <Link style={{ textAlign: "center" }} to={location ? location : ""}>
        <NavButton onClick={() => setSubMenuIsDown(!subMenuIsDown)}>
          {isMobile && icon}
          {name}
          {sublinks?.length &&
            (subMenuIsDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
        </NavButton>
      </Link>
      {sublinks && sublinks.length && (
        <>
          {subMenuIsDown && (
            <>
              {sublinks.map(({ name, location, icon }) => (
                <Link
                  style={{ textAlign: "center" }}
                  to={location ? location : ""}
                >
                  <NavButton>
                    {isMobile && icon}
                    {name}
                  </NavButton>
                </Link>
              ))}
            </>
          )}
        </>
      )}
    </>
  );
};

const NavItemsList: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
  const NavButton = isMobile ? MobileNavButton : Button;

  return (
    <>
      {navPages.map(itemData => (
        <NavItem
          isMobile={isMobile}
          ItemData={{ ...itemData }}
          NavButton={NavButton}
        />
      ))}
    </>
  );
};

export const NavItems: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:600px)");

  const [showNavMenu, setShowNavMenu] = useState(!isMobile);

  return (
    <>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              onClick={() => setShowNavMenu(!showNavMenu)}
              style={{ paddingLeft: "0px" }}
            >
              <MenuIcon />
            </IconButton>
            <div style={{ paddingLeft: "12px" }}>
              <LinkMainHeader isMobile={isMobile} />
            </div>
          </>
        ) : (
          <>
            <LinkMainHeader isMobile={isMobile} />
            <NavItemsList isMobile={isMobile} />
          </>
        )}
      </Toolbar>
      {isMobile && showNavMenu && <NavItemsList isMobile={isMobile} />}
    </>
  );
};
