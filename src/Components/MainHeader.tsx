import React from "react";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";
import { MainGreen, PrimaryGrey } from "Colors";

const StyledMainHeader = styled(Typography)`
  && {
    font-size: 2.5rem;
    color: ${MainGreen};
  }
`;

const StyledSubtitle = styled(Typography)`
  && {
    font-size: 1.09rem;
    color: ${PrimaryGrey};
    letter-spacing: 1px;
    font-weight: 100;
  }
`;

export const MainHeader: React.FC = () => (
  <>
    <StyledMainHeader variant="h1">WebDev Lessons</StyledMainHeader>
    <StyledSubtitle variant="h3">
      (Lessons in Website Development)
    </StyledSubtitle>
  </>
);
