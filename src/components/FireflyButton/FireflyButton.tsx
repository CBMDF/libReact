import React from "react";
import Button from '@mui/material/Button';

const FireflyButton = (props: any) => {

  return  <Button {...props}>{props.label}</Button>;
};

export default FireflyButton;
