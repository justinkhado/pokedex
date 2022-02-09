import React, { useEffect, useState } from 'react'
import pokemonService from '../../services/pokemon'
import {
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
import { 
  SectionContainer,
  SectionHeader,
  SectionBody
} from '../../sharedStyles/SectionStyles'
import { Type } from '../../sharedStyles/Type.styled'
import physicalIcon from '../../assets/icons/Physical.png';
import specialIcon from '../../assets/icons/Special.png';
import statusIcon from '../../assets/icons/Status.png';

const Moveset = ({ id }) => {
  const [moveset, setMoveset] = useState({})
  const [method, setMethod] = useState('level-up')
  const [generation, setGeneration] = useState('vii')
  const [selectedMove, setSelectedMove] = useState({})

  useEffect(() => {
    pokemonService
      .getMoveset(id)
      .then(returnedMoveset => {
        setMoveset(returnedMoveset)
      })
  }, [id])

  const handleMethodChange = (event) => {
    setMethod(event.target.value)
  }

  const handleGenChange = (event) => {
    setGeneration(event.target.value)
  }

  if (!moveset) {
    return (<></>)
  }

  return (
    <SectionContainer>
      <SectionHeader>Moveset</SectionHeader>
      <SectionBody>
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
        <Movelist>
          <MovelistTable>
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
                        {move.damage_class === 'physical' && <img src={physicalIcon} alt='physical' />}
                        {move.damage_class === 'special' && <img src={specialIcon} alt='special' />}
                        {move.damage_class === 'status' && <img src={statusIcon} alt='status' />}
                      </DamageClass>        
                    </td>
                  </MovelistRow>
                ) :              
                <EmptyMovelist>
                  <td colSpan={6}>{`No moves for ${method.toUpperCase()} in Generation ${generation.toUpperCase()}`}</td>
                </EmptyMovelist>
              } 
            </MovelistBody>
          </MovelistTable>
          {selectedMove.name && <MoveModal type={selectedMove.type}>
            <h3>{selectedMove.name.replace('-', ' ')}</h3>
            <CloseButton onClick={() => setSelectedMove('')}>&#9932;</CloseButton>
            <MoveInfo>
              <div>
                <Type type={selectedMove.type}>{selectedMove.type}</Type>
                <DamageClass>
                  {selectedMove.damage_class === 'physical' && <img src={physicalIcon} alt='physical' />}
                  {selectedMove.damage_class === 'special' && <img src={specialIcon} alt='special' />}
                  {selectedMove.damage_class === 'status' && <img src={statusIcon} alt='status' />}
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
          </MoveModal>}
        </Movelist>
      </SectionBody>
    </SectionContainer>
  )
}

export default Moveset