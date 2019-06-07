import { withPrefix } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import Container from '../Atoms/Container'
import Link from '../Atoms/Link'
import Wrapper from '../Atoms/Wrapper'
import * as variable from '../constants'

const MainNav = styled.ul`
  display: flex;
  flex-direction: row;
  list-style: none;
  overflow-x: auto;

  li {
    a {
      display: block;
      padding: ${variable.ESIZE.SINGLE};
      text-decoration: none;
      border-radius: ${variable.EBORDERRADIUS.MEDIUM};

      &:hover,
      &:active,
      &:focus {
        background-color: white;
        color: ${variable.EBACKGROUND_COLOUR.SURFACE_ALT};
      }
      &.active {
        background-color: ${variable.EBACKGROUND_COLOUR.SURFACE};
        color: ${variable.EBACKGROUND_COLOUR.SURFACE_ALT};
      }
    }
  }
`

const HeaderContainer = styled(Container)`
  overflow-x: hidden;

  @media (min-width: ${variable.EBREAKPOINT.MEDIUM}) {
    display: flex;

    > a {
      flex: 1;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    > ul {
      flex: 3;
    }
  }
`

const Header = ({ navItems, siteTitle }) => (
  <Wrapper
    backgroundColour={variable.EBACKGROUND_COLOUR.SURFACE}
    textColor={'white'}
    bufferBottom={variable.ESIZE.SINGLE}
  >
    <HeaderContainer>
      <Link to="/">
        <img src={WhiteLogo} alt={props.siteTitle} width="210" height="auto" />
      </Link>
      <MainNav>
        {navItems
          ? navItems.edges.map(item => (
              <li key={item.node.frontmatter.path}>
                <Link activeClassName="active" to={withPrefix(item.node.frontmatter.path)}>
                  {item.node.frontmatter.title}
                </Link>
              </li>
            ))
          : null}
      </MainNav>
    </HeaderContainer>
  </Wrapper>
)

export default Header
