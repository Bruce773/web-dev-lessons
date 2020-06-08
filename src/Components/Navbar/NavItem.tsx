import React, { useState, useEffect } from "react";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import { Link } from "Components";
import { NavPageType } from "./Navbar";
import { StyledPopper, SubLinksBox, DropDownLink } from "./elements";
import { UseIsMobile } from "Hooks";

export const NavItem = ({
  ItemData: { name, location, icon, sublinks },
  NavButton,
  clickEvent,
}: {
  NavButton: React.ElementType;
  ItemData: NavPageType;
  clickEvent: number;
}) => {
  const [buttonRef, setButtonRef] = useState();
  const { isMobile } = UseIsMobile();
  const subMenuIsDown = Boolean(buttonRef);

  useEffect(() => {
    setButtonRef(undefined);
  }, [clickEvent]);

  return (
    <>
      <Link style={{ textAlign: "center" }} to={location ? location : ""}>
        <div
          onClick={(e: any) => {
            console.log(buttonRef, subMenuIsDown);
            setButtonRef(buttonRef ? undefined : e.currentTarget);
          }}
        >
          <NavButton>
            {isMobile && icon}
            {name}
            {sublinks?.length &&
              (subMenuIsDown ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />)}
          </NavButton>
        </div>
      </Link>
      {sublinks && sublinks.length && (
        <StyledPopper
          isMobile={isMobile}
          anchorEl={buttonRef}
          open={subMenuIsDown}
        >
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
