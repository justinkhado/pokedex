import styled from 'styled-components'
import { SectionBody } from '../../../sharedStyles/SectionStyles'
import { device } from '../../../sharedStyles/breakpoints'

export const AbilitiesContainer = styled(SectionBody)`
  color: ${props => props.theme.blackLight};
  padding: 0;

  @media only screen and (${device.lg}) {
    margin-top: 2rem;
  }

  p {
    margin: 0;
    padding: 2rem 3rem;
    font-size: ${props => props.theme.fontSm};

    @media only screen and (${device.md}) {
      padding: 2.5rem 4rem;
      font-size: ${props => props.theme.fontLg};
      line-height: 2.3rem;
    }
  }
`

export const AbilitiesHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem 1rem 3rem;
  background-image: linear-gradient(
    120deg,
    ${props => props.theme[`${props.theme.type}Dark`]} 0,
    ${props => props.theme[`${props.theme.type}Dark`]} 38%,
    ${props => props.theme[`${props.theme.type}Light`]} 38%
  );
  text-transform: uppercase;
  font-size: ${props => props.theme.fontMd};
  font-weight: 500;

  @media only screen and (${device.md}) {
    padding: 2rem 2rem 2rem 3rem;
    font-size: ${props => props.theme.fontLg};
  }

  span:first-child {
    color: ${props => props.theme.white};
  }

  select {
    background-color: transparent;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: inherit;
    font-weight: 500;
    letter-spacing: 1px;
    color: ${props => props.theme.black};
    
    option {
      background-color: ${props => props.theme[`${props.theme.type}Light`]};

      @media only screen and (${device.md}) {
        font-size: ${props => props.theme.fontMd};
      }
    }
  }
`

export const AbilitySelect = styled.div`
  position: relative;

  & > button {
    position: relative;
    padding: .5rem 3rem .5rem .2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    text-transform: uppercase;
    font-size: inherit;
    font-weight: 400;
    letter-spacing: 1px;
    color: ${props => props.theme.black};

    &:hover {
      border-bottom: 1px solid black;
      margin-bottom: -1px;
    }

    &::after {
      content: '';
      position: absolute;
      right: 0;
      width: 0; 
      height: 0;
      top: 50%;
      transform: translateY(-60%);
      border-left: .5em solid transparent;
      border-right: .5em solid transparent;
      border-top: .6em solid ${props => props.theme.black};
    }
  }
`

export const AbilityOptions = styled.div`
  position: absolute;
  right: 1.5rem;
  width: max-content;
  min-width: calc(100% - 1.5rem);
  display: flex;
  flex-direction: column;
  border: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
`

export const AbilityOption = styled.button`
  ${props => props.isCurrent && `display: none;`}
  padding: 1rem 1.5rem;    
  background-color: ${props => props.theme[`${props.theme.type}Light`]};
  border: none;
  cursor: pointer;
  font-size: ${props => props.theme.fontSm};
  text-transform: uppercase;

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontMd};
  }

  &:hover {
    filter: brightness(.8);
  }
`

export const SingleAbility = styled.div`
  padding: .5rem 3rem .5rem .2rem;
  text-transform: uppercase;
  font-size: inherit;
  font-weight: 400;
  letter-spacing: 1px;
  color: ${props => props.theme.black};
`