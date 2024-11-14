import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "./Navbar";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should render and verify all header items", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>,
    );

    const menuLinks = screen.getAllByText(/MENU/i);
    const enterLinks = screen.getAllByText(/ENTRAR/i);
    const contactLinks = screen.getAllByText(/CONTATO/i);

    expect(menuLinks).toBeDefined();
    expect(enterLinks).toBeDefined();
    expect(contactLinks).toBeDefined();
  });
});
