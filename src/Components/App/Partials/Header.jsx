import React from "react";
import { Link } from "react-router-dom";

import styled from "styled-components";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

const MainNav = styled.ul`
  list-style-type: none;
  display: flex;

  li {
    a {
      text-decoration: none;
      display: block;
      padding: 8px;
      background-color: ${({ theme }) => theme.colors.Surface};
      color: ${({ theme }) => theme.colors.OnSurface};
      &:hover {
        filter: brightness(85%);
      }
    }
    &:first-of-type {
      margin-right: auto;
    }
  }
`;

const Header = () => {
  const { loggedIn, setLoggedOut } = useLoginStore();
  return (
    <MainNav>
      <li>
        <Link to="/">Home</Link>
      </li>
      {loggedIn && (
        <li>
          <Link to="/user">Profile</Link>
        </li>
      )}
      {!loggedIn ? (
        <li>
          <Link to="/login">Login</Link>
        </li>
      ) : (
        <li>
          <Link onClick={() => setLoggedOut()}>Log out</Link>
        </li>
      )}
    </MainNav>
  );
};

export default Header;
