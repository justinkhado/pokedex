import React, { useEffect, useState } from 'react'
import { useControllerRef } from '../../../hooks/useControllerRef'
import MoveTable from './MoveTable'
import MoveModal from './MoveModal'
import pokemonService from '../../../services/pokemon'
import {
  MoveContainer,
  Movelist,
  MovelistFilter,
  Methods,
  MethodTab,
  MethodInput,
  GenerationSelect
} from './Moveset.styled'
import { SectionHeader } from '../../../sharedStyles/SectionStyles'

const Moveset = ({ id }) => {
  const [moveset, setMoveset] = useState({})
  const [method, setMethod] = useState('level-up')
  const [generation, setGeneration] = useState('vii')
  const [selectedMove, setSelectedMove] = useState({})
  const controllerRef = useControllerRef()

  useEffect(() => {
    pokemonService
      .getMoveset(id, controllerRef.current)
      .then(returnedMoveset => {
        if (!controllerRef.current.signal.aborted) {
          setMoveset(returnedMoveset)
        }
      })
  }, [id, controllerRef])

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
      <Movelist modalOpen={selectedMove.name}>
        <MovelistFilter>
          <Methods>
            {['level-up', 'machine', 'tutor', 'egg'].map(methodName =>
              <MethodTab key={methodName}>
                <MethodInput
                  methodName={methodName}
                  checked={methodName === method || false}
                  onChange={(event) => setMethod(event.target.value)}
                />
                <label htmlFor={methodName}>{methodName}</label>
              </MethodTab>
            )}
          </Methods>
          <GenerationSelect onChange={handleGenChange} value={generation}>
            {Object.keys(moveset).map(gen =>
              <option key={gen} value={gen}>{`gen ${gen}`}</option>
            )}
          </GenerationSelect>
        </MovelistFilter>
        <MoveTable moveset={moveset} method={method} generation={generation} selectMove={handleSelectMove} />
      </Movelist>
      {selectedMove.name &&
        <MoveModal move={selectedMove} closeModal={() => handleSelectMove({})} />
      }
    </MoveContainer>
  )
}

export default Moveset