import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Navbar from "../app/shared/Navbar";
import { store } from "../app/store/store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import LoginPage from "../app/components/LoginPage";
import RegisterPage from "../app/components/RegisterPage";

describe("Navbar Component", () => {
  it("should render 'register' ", () => {
    render(
      <Provider store={store}>
        <BrowserRouter>
          <Navbar />
        </BrowserRouter>
      </Provider>
    );
    const register = screen.getByRole("button", { name: "Register" });
    const login = screen.getByRole("button", { name: "Login" });
    expect(register).toBeInTheDocument();
    expect(login).toBeInTheDocument();
  });

  it("should show login page upon click of login", () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
          <Routes>
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const login = screen.getByRole("button", { name: /login/i });
    fireEvent.click(login);
    expect(screen.getByText(/login to your account/i)).toBeInTheDocument();
  });

  it("should show register page upon click of register", async () => {
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={["/"]}>
          <Navbar />
          <Routes>
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </MemoryRouter>
      </Provider>
    );
    const register = screen.getByRole("button", { name: /register/i });
    fireEvent.click(register);

    expect(screen.getByTestId("register-page")).toBeInTheDocument();
  });
});
