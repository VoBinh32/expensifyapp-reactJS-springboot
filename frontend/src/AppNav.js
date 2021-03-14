import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Nav, Navbar, NavItem, NavbarBrand, NavLink } from "reactstrap";

export const AppNav = () => {
  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">Expense Tracker Application</NavbarBrand>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="/">Home</NavLink>
          </NavItem>

          <NavItem>
            <NavLink href="/expenses">Expenses</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
};
