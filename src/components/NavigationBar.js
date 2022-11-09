import React from 'react';
import { NavLink, Nav, NavMenu } from './NavigationBarItems';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink to="/" activeStyle>
          Books
        </NavLink>
        <NavLink to="/Categories" activeStyle>
          Categories
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;