import React from "react";
import { render } from "@testing-library/react";

import Button from "./FireflySpinner";

describe("FireflyButton", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world" variant="contained"/>);
  });
});