import React from "react";
import Radio from '@mui/material/Radio';

const FireflyRadioButton = (props: any) => {

  return  <Radio {...props}>{props.label}</Radio>;
};

export default FireflyRadioButton;
