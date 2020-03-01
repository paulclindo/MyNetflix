import React from 'react';
import TMDBLogo from "../images/tmdb_logo.svg"
import RMDBLogo from "../images/reactMovie_logo.png"
import { StyledHeader, StyledTMDBLogo, StyledRMDBLogo } from '../styles/StyledHeader';
import { StyledNavigation } from '../styles/StyledNavigation';

const Header = () => {
  return (
    <>
      <StyledHeader>
        <div className="header-content">
          <StyledTMDBLogo src={TMDBLogo} />
          <StyledRMDBLogo src={RMDBLogo} />
        </div>
      </StyledHeader >
      {/* <StyledNavigation>
        <div className="navigation-content">
          <p>Home | Back</p>
        </div>
      </StyledNavigation> */}
    </>
  );
}

export default Header;