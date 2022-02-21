import styled from 'styled-components'
import { SectionContainer, SectionBody } from '../../../sharedStyles/SectionStyles'
import { device } from '../../../sharedStyles/breakpoints'

export const MoveContainer = styled(SectionContainer)`
  @media only screen and (${device.md}) {
    width: min(80rem, 90%);
  }

  @media only screen and (${device.lg}) {
    width: 90rem;
    grid-column: span 12;
    align-self: start;
  }
`

export const Movelist = styled(SectionBody)`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  padding-right: 0;
`

export const MovelistFilter = styled.div`
  display: flex;
  flex-direction: column-reverse;
  gap: 2rem;
  align-items: center;
  width: 95%;
  max-width: 60rem;

  @media only screen and (${device.sm}) {
    flex-direction: row;
    justify-content: space-between;
    width: 90%;
    height: 4rem;
  }

  @media only screen and (${device.md}) {
    height: 5rem;
  }
`

export const GenerationSelect = styled.select`
  height: fit-content;
  width: fit-content;
  padding: .5em .5em .3em 0;
  color: ${props => props.theme[`${props.theme.type}Dark`]};
  border: none;
  border-bottom: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
  font-size: ${props => props.theme.fontSm};
  text-transform: uppercase;
  cursor: pointer;

  @media only screen and (${device.sm}) {
    align-self: flex-start;
    margin-right: 1rem;
  }

  @media only screen and (${device.md}) {
    font-size: ${props => props.theme.fontMd};
    font-weight: 700;
  }

  @media only screen and (${device.lg}) {
    margin-right: 3rem;
  }

  option {
    font-size: ${props => props.theme.fontXs};

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontSm};
    }
  }
`

export const Methods = styled.div`
  display: flex;
  gap: .4rem;

  @media only screen and (${device.sm}) {
    align-self: flex-end;
    margin-left: .2rem;
  }
`

export const MethodTab = styled.div`
  label {
    position: relative;
    display: block;
    border: 1px solid ${props => props.theme[`${props.theme.type}Dark`]};
    border-bottom: none;
    border-radius: 1rem 1rem 0 0;
    padding: .8rem 1rem .3rem;
    background-color: ${props => props.theme[`${props.theme.type}Light`]}50;
    font-size: ${props => props.theme.fontSm};
    text-transform: uppercase;
    cursor: pointer;

    @media only screen and (${device.md}) {
      font-size: ${props => props.theme.fontMd};
    }
  }

  input:checked + label {
    background-color: ${props => props.theme[`${props.theme.type}Dark`]};
    color: ${props => props.theme.white};
  }
`

export const MethodInput = styled.input.attrs(props => ({
  type: 'radio',
  name: 'method',
  id: props.methodName,
  value: props.methodName
}))`
  position: absolute;
  left: -100vw;
`

export const DamageClass = styled.div`
  display: flex;
  justify-content: center;
  
  img {
    width: 3.5rem;

    @media only screen and (${device.lg}) {
      width: 4.5rem;
    }
  }
`
