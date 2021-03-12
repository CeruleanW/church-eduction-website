import React from "react";
import CardsPageBase from './Cards/CardsPageBase';
import {data} from "../data/courses.json";
import Intro from './Intro';
import Title from './Intro/Title';
import Description from './Intro/Description';
// import { Link } from '@material-ui/core';


export default function EducationPage(props) {
  const {pageTitle} = props;
  const description =
    "培養造就屬靈帶領，讓弟兄姊妹能在神的話語上進深，掌握基本的聖經解釋和查經帶領方法。";
  const bg =
    "https://cdn.pixabay.com/photo/2017/03/23/09/08/bible-2167778_960_720.jpg";
  const cardList = data;
  const itemKey = "courses";

  return (
    <>
    <CardsPageBase
      itemType={itemKey}
      {...{ pageTitle, bg, cardList }}
    >
      <Intro bg={bg}>
        <Title text={pageTitle} />
        <Description>
        {description}
        </Description>
      </Intro>
    </CardsPageBase>
  </>
  );
}
