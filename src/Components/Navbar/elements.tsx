import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Popper from "@material-ui/core/Popper";
import { MainGreen, SecondaryGrey } from "Colors";
import { Link } from "Components";

export const StyledHeader = styled(Typography)`
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

export const SubLinksBox = styled.div`
  display: block;
  position: absolute;
  background-color: ${SecondaryGrey};
  border-radius: 3px;
  padding-bottom: 5px;
  padding-top: 5px;
  left: -62px;
  padding-right: 5px;
`;

export const StyledPopper = styled(Popper)<{ isMobile?: boolean }>`
  && {
    z-index: 999999;
    ${({ isMobile }) => isMobile && "width: 52%"};
  }
`;

export const DropDownLink = styled(Link)`
  padding: 6px;
  border-radius: 5px;
`;

export const MobileNavButton: React.FC = ({ children }) => (
  <StyledMobileNavButton variant="outlined">{children}</StyledMobileNavButton>
);
