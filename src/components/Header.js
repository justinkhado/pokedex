import React from 'react'
import { StyledHeader, StyledLink } from './Header.styled'

const Header = () => {
  return (
    <StyledHeader>
      <h1>
        <StyledLink to='/home'>Pok&eacute;dex</StyledLink>
      </h1>
    </StyledHeader>
  )
}

export default Header