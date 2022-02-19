import React, { useState } from 'react'
import {  
  AbilitiesContainer,
  AbilitiesHeader,
  AbilitySelect,
  AbilityOptions,
  AbilityOption,
  SingleAbility
} from './Abilities.styled'

const Abilities = ({ abilities }) => {
  const [ability, setAbility] = useState(0)
  const [selectingAbility, setSelectingAbility] = useState(false)

  const handleAbilityChange = (event) => {
    setAbility(parseInt(event.target.value))
    setSelectingAbility(selected => !selected)
  }

  return (
    <AbilitiesContainer>
      <AbilitiesHeader>
        <span>Abilities</span>
        {abilities.length > 1 ?
          <AbilitySelect>
            <button onClick={() => setSelectingAbility(selected => !selected)}>
              {abilities[ability].name.replace('-', ' ')}
            </button>
            {selectingAbility && 
              <AbilityOptions>
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