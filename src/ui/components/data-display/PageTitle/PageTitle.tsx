import React from "react";
import {
  PageTitleContainer,
  PageTitleStyled,
  PageSubtitledStyled,
} from "./PageTitle.style";

interface PageTitleProps {
  title: string;
  subtitle: string;
}

const PageTitle: React.FC<PageTitleProps> = (props) => {
  return (
    <PageTitleContainer>
      <PageTitleStyled>{props.title}</PageTitleStyled>
      <PageSubtitledStyled>{props.subtitle}</PageSubtitledStyled>
    </PageTitleContainer>
  );
};

export default PageTitle;
