import React, { useState, useEffect } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import { Link } from "Components";
import { navPages } from "./Navbar";
import { StyledHeader, MobileNavButton } from "./elements";
import { NavItem } from "./NavItem";

const LinkMainHeader: React.FC<{ isMobile: boolean }> = ({ isMobile }) => (
  <Link to="/">
    <Button>
      <StyledHeader variant={isMobile ? "h5" : "h6"}>
        WebDev Lessons
      </StyledHeader>
    </Button>
  </Link>
);

const NavItemsList: React.FC<{ isMobile: boolean; clickEvent: number }> = ({
  isMobile,
  clickEvent,
}) => (
  <>
    {navPages.map(itemData => (
      <NavItem
        clickEvent={clickEvent}
        key={itemData.name}
        isMobile={isMobile}
        ItemData={{ ...itemData }}
        NavButton={isMobile ? MobileNavButton : Button}
      />
    ))}
  </>
);

export const NavItems: React.FC = () => {
  const isMobile = !useMediaQuery("(min-width:600px)");
  const [showNavMenu, setShowNavMenu] = useState(!isMobile);
  const [clickEvent, setClickEvent] = useState(0);

  useEffect(() => {
    setShowNavMenu(v => (v && isMobile && clickEvent !== 0 ? false : v));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [clickEvent]);

  return (
    <>
      <ClickAwayListener
        // Cause a state change to trickle down to dropdown submenus
        onClickAway={() => setClickEvent(n => (n < 2 ? n + 1 : 0))}
      >
        <div>
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
                <NavItemsList clickEvent={clickEvent} isMobile={isMobile} />
              </>
            )}
          </Toolbar>
          {isMobile && showNavMenu && (
            <NavItemsList clickEvent={clickEvent} isMobile={isMobile} />
          )}
        </div>
      </ClickAwayListener>
    </>
  );
};
