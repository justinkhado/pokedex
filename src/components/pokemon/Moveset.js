import React, { useEffect, useState, useRef } from 'react'
import pokemonService from '../../services/pokemon'
import {
  MoveContainer,
  Movelist,
  MovelistFilter,
  MovelistTable,
  MovelistHeaders,
  MovelistBody,
  MovelistRow,
  DamageClass,
  EmptyMovelist,
  MoveModal,
  MoveInfo,
  MoveValues,
  CloseButton
} from './Moveset.styled'
import { SectionHeader } from '../../sharedStyles/SectionStyles'
import { Type } from '../../sharedStyles/Type.styled'
import physicalIcon from '../../assets/icons/Physical.png';
import specialIcon from '../../assets/icons/Special.png';
import statusIcon from '../../assets/icons/Status.png';

const Moveset = ({ id }) => {
  const isMounted = useRef(true)
  const modalRef = useRef(null)
  const [moveset, setMoveset] = useState({})
  const [method, setMethod] = useState('level-up')
  const [generation, setGeneration] = useState('vii')
  const [selectedMove, setSelectedMove] = useState({})

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setSelectedMove({})
      }
    }
    document.addEventListener('mouseup', handleClickOutside)
    
    return (() => document.removeEventListener('mouseup', handleClickOutside))
  }, [])

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

  if (!moveset) {
    return (<></>)
  }

  return (
    <MoveContainer>
      <SectionHeader>Moveset</SectionHeader>
      <Movelist>
        <MovelistFilter>
          <select onChange={handleMethodChange}>
            {['level-up', 'machine', 'tutor', 'egg'].map(methodName =>
              <option key={methodName} value={methodName}>{methodName}</option>  
            )}
          </select>
          <select onChange={handleGenChange} value={generation}>
            {Object.keys(moveset).map(gen =>
              <option key={gen} value={gen}>{`gen ${gen}`}</option>
            )}
          </select>
        </MovelistFilter>
        <MovelistTable>
          <table>
          <thead>
            <MovelistHeaders>
              {method === 'level-up' && <th>lvl</th>}
              {method === 'machine' && <th>Num</th>}
              {['egg', 'tutor'].includes(method) && <th>-</th>}
              {['Name', 'Type', 'Power', 'Acc', 'Class'].map(col => 
                <th key={col}>{col}</th>  
              )}
            </MovelistHeaders>
          </thead>
          <MovelistBody>
            {moveset[generation] && moveset[generation][method].length !== 0 ?
              moveset[generation][method].map((move, index) =>
                <MovelistRow key={index} onClick={() => setSelectedMove(move)}>                
                  {method === 'level-up' && <td>{move.level}</td>}
                  {method === 'machine' && <td>{move.machine}</td>}
                  {['egg', 'tutor'].includes(method) && <td>-</td>}
                  <td>{move.name.replace('-', ' ')}</td>
                  <td><Type type={move.type}>{move.type}</Type></td>
                  {move.power ? <td>{move.power}</td> : <td>-</td>}
                  {move.accuracy ? <td>{move.accuracy}%</td> : <td>-</td>}
                  <td>
                    <DamageClass>
                      {move.damage_class === 'physical' && <img src={physicalIcon} alt='physical' title='physical' />}
                      {move.damage_class === 'special' && <img src={specialIcon} alt='special' title='special' />}
                      {move.damage_class === 'status' && <img src={statusIcon} alt='status' title='status' />}
                    </DamageClass>        
                  </td>
                </MovelistRow>
              ) :              
              <EmptyMovelist>
                <td colSpan={6}>{`No ${method.toUpperCase()} moves in Generation ${generation.toUpperCase()}`}</td>
              </EmptyMovelist>
            } 
          </MovelistBody>
          </table>
        </MovelistTable>

        {selectedMove.name && 
          <MoveModal type={selectedMove.type} ref={modalRef}>
            <h3>{selectedMove.name.replace('-', ' ')}</h3>
            <CloseButton onClick={() => setSelectedMove({})}>&#9932;</CloseButton>
            <MoveInfo>
              <div>
                <Type type={selectedMove.type}>{selectedMove.type}</Type>
                <DamageClass>
                  {selectedMove.damage_class === 'physical' && <img src={physicalIcon} alt='physical' title='physical' />}
                  {selectedMove.damage_class === 'special' && <img src={specialIcon} alt='special' title='special' />}
                  {selectedMove.damage_class === 'status' && <img src={statusIcon} alt='status' title='status' />}
                </DamageClass>
              </div>
              <MoveValues type={selectedMove.type}>
                <div>
                  <span>Power</span>
                  <span>{selectedMove.power || '-'}</span>
                </div>
                <div>
                  <span>Accuracy</span>
                  <span>{selectedMove.accuracy || '-'}</span>
                </div>
                <div>
                  <span>PP</span>
                  <span>{selectedMove.pp}</span>
                </div>
              </MoveValues>
              <p>{selectedMove.effect}</p>
            </MoveInfo>
          </MoveModal>
        }        
      </Movelist>
    </MoveContainer>
  )
}

export default Moveset