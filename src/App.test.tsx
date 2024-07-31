import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import App from "./App";
import { Wrapper } from "./utils/test-utils";

describe("IncreaseButton", () => {
  test("renders", () => {
    render(<Wrapper><App /></Wrapper>);
    expect(screen.getByText('React')).to.exist;
  });
});