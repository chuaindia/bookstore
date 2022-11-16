import React from 'react';
import { ImUser } from 'react-icons/im';
import { NavLink, Nav, NavMenu } from './NavigationBarItems';
import '../App.css';

const Navbar = () => (
  <>
    <Nav>
      <NavMenu>
        <NavLink className="NavigationBarLogo">Bookstore CMS</NavLink>
        <NavLink to="/" activeStyle>
          Books
        </NavLink>
        <NavLink to="/Categories" activeStyle>
          Categories
        </NavLink>
      </NavMenu>
      <NavMenu>
        <NavLink>
          <div className="Panel">
            <ImUser />
          </div>
        </NavLink>
      </NavMenu>
    </Nav>
  </>
);

export default Navbar;
