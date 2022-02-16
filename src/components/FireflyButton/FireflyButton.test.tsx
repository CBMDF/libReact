import React from "react";
import { render } from "@testing-library/react";

import Button from "./FireflyButton";

describe("FireflyButton", () => {
  test("renders the Button component", () => {
    render(<Button label="Hello world" variant="info" />);
  });
});
