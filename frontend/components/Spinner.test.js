import Spinner from "./Spinner.js";
import { render, screen } from "@testing-library/react"; 
import React from "react";

// Import the Spinner component into this file and test
// that it renders what it should for the different props it can take.
test('sanity', () => {
  const {rerender} = render(<Spinner on={false} />)
  expect(screen.queryByText("Please wait...")).not.toBeVisible;
  
  rerender(<Spinner on={true} />)
  expect(screen.queryByText("Please wait...")).toBeVisible;
})
