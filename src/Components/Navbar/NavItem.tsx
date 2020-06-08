import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Link } from "Components";
import { NavPageType } from "./Navbar";
import { StyledPopper, SubLinksBox, DropDownLink } from "./elements";

export const NavItem = ({
  ItemData: { name, location, icon, sublinks },
  NavButton,
  isMobile,
  clickEvent,
}: {
  NavButton: React.ElementType;
  ItemData: NavPageType;
  isMobile: boolean;
  clickEvent: number;
}) => {
  const [buttonRef, setButtonRef] = useState();
  const subMenuIsDown = Boolean(buttonRef);

  useEffect(() => {
    setButtonRef(undefined);
  }, [clickEvent]);

  return (
    <>
      <Link style={{ textAlign: "center" }} to={location ? location : ""}>
        <NavButton
          onClick={(e: any) => {
            setButtonRef(buttonRef ? undefined : e.currentTarget);
          }}
        >
          {isMobile && icon}
          {name}
          {sublinks?.length &&
            (subMenuIsDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
        </NavButton>
      </Link>
      {sublinks && sublinks.length && (
        <StyledPopper anchorEl={buttonRef} open={subMenuIsDown}>
          <SubLinksBox>
            {sublinks.map(({ name, location, icon }) => (
              <DropDownLink
                key={`${name}-dropdown-item`}
                style={{ textAlign: "center" }}
                to={location ? location : ""}
              >
                <NavButton>
                  {isMobile && icon}
                  {name}
                </NavButton>
              </DropDownLink>
            ))}
          </SubLinksBox>
        </StyledPopper>
      )}
    </>
  );
};
