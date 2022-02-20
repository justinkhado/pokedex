import React, { useRef, useState } from 'react'
import { useCloseDropdown } from '../../../hooks/useCloseDropdown'
import {  
  AbilitiesContainer,
  AbilitiesHeader,
  AbilitySelect,
  SelectButton,
  AbilityOptions,
  AbilityOption,
  SingleAbility
} from './Abilities.styled'

const Abilities = ({ abilities }) => {
  const [ability, setAbility] = useState(0)
  const [selectingAbility, setSelectingAbility] = useState(false)

  const selectRef = useRef({})
  
  useCloseDropdown(selectRef, () => { setSelectingAbility(false) })

  const handleAbilityChange = (event) => {
    setAbility(parseInt(event.target.value))
    setSelectingAbility(selected => !selected)
  }

  const handleSelectClick = (event) => {
    if (selectingAbility) {
      event.currentTarget.blur()
    }
    setSelectingAbility(selected => !selected)
  }

  return (
    <AbilitiesContainer>
      <AbilitiesHeader>
        <span>Abilities</span>
        {abilities.length > 1 ?
          <AbilitySelect selecting={selectingAbility}>
            <SelectButton
              ref={element => selectRef.current.button = element}
              onClick={handleSelectClick}
            >
              {abilities[ability].name.replace('-', ' ')}
            </SelectButton>
            {selectingAbility && 
              <AbilityOptions ref={element => selectRef.current.dropdown = element}>
                {abilities.map((abilityOption, index) =>
                  <AbilityOption
                    key={abilityOption.name}
                    value={index}
                    onClick={handleAbilityChange}
                    isCurrent={index === ability}
                  >
                    {abilityOption.name.replace('-', ' ')}
                  </AbilityOption>
                )}
              </AbilityOptions>
            }
          </AbilitySelect>
          :
          <SingleAbility>{abilities[0].name.replace('-', ' ')}</SingleAbility>
        }
      </AbilitiesHeader>
      <div>
        <p>{abilities[ability].effect}</p>
      </div>
    </AbilitiesContainer>
  )
}

export default Abilities