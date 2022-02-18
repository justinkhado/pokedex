import React, { useEffect, useState, useRef } from 'react'
import MoveTable from './MoveTable'
import MoveModal from './MoveModal'
import pokemonService from '../../../services/pokemon'
import {
  MoveContainer,
  Movelist,
  MovelistFilter,
  Methods,
  MethodTab
} from './Moveset.styled'
import { SectionHeader } from '../../../sharedStyles/SectionStyles'

const Moveset = ({ id }) => {
  const isMounted = useRef(true)
  const [moveset, setMoveset] = useState({})
  const [method, setMethod] = useState('level-up')
  const [generation, setGeneration] = useState('vii')
  const [selectedMove, setSelectedMove] = useState({})

  useEffect(() => {
    pokemonService
      .getMoveset(id)
      .then(returnedMoveset => {
        if (isMounted.current) {
          setMoveset(returnedMoveset)
        }
      })
    
    return () => { isMounted.current = false }
  }, [id])

  const handleMethodChange = (event) => {
    setMethod(event.target.value)
    event.currentTarget.blur()
  }

  const handleGenChange = (event) => {
    setGeneration(event.target.value)
    event.currentTarget.blur()
  }

  const handleSelectMove = (move) => {
    setSelectedMove(move)
  }

  if (!moveset) {
    return (<></>)
  }

  return (
    <MoveContainer>
      <SectionHeader>Moveset</SectionHeader>
      <Movelist>
        <MovelistFilter>
          <Methods>
            {['level-up', 'machine', 'tutor', 'egg'].map(methodName =>
              <MethodTab key={methodName}>
                <input
                  type='radio'
                  id={methodName}
                  value={methodName}
                  name='method'
                  checked={methodName === method || false}
                  onChange={(event) => setMethod(event.target.value)}
                />
                <label htmlFor={methodName}>{methodName}</label>
              </MethodTab>
            )}
          </Methods>
          <select onChange={handleGenChange} value={generation}>
            {Object.keys(moveset).map(gen =>
              <option key={gen} value={gen}>{`gen ${gen}`}</option>
            )}
          </select>
        </MovelistFilter>
        <MoveTable moveset={moveset} method={method} generation={generation} selectMove={handleSelectMove} />
        {selectedMove.name && 
          <MoveModal move={selectedMove} closeModal={() => handleSelectMove({})} />
        }        
      </Movelist>
    </MoveContainer>
  )
}

export default Moveset