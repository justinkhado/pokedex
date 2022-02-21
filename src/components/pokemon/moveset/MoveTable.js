import React from 'react'
import {
  TableContainer,
  MovelistHeaders,
  MovelistBody,
  MovelistRow,
  EmptyMovelist
} from './MoveTable.styled'
import { DamageClass } from './Moveset.styled';
import { Type } from '../../../sharedStyles/Type'
import physicalIcon from '../../../assets/icons/physical.png';
import specialIcon from '../../../assets/icons/special.png';
import statusIcon from '../../../assets/icons/status.png';

const MoveTable = ({ moveset, method, generation, selectMove }) => {
  return (
    <TableContainer>
      <table>
        <thead>
          <MovelistHeaders>
            {method === 'level-up' && <th>lvl</th>}
            {method === 'machine' && <th>Num</th>}
            {['egg', 'tutor'].includes(method) && <th>-</th>}
            {['Name', 'Type', 'Class', 'Pwr', 'Acc'].map(col => 
              <th key={col}>{col}</th>  
            )}
          </MovelistHeaders>
        </thead>
        <MovelistBody>
          {moveset[generation] && moveset[generation][method].length !== 0 ?
            moveset[generation][method].map((move, index) =>
              <MovelistRow key={index} onClick={() => selectMove(move)}>                
                {method === 'level-up' && <td>{move.level}</td>}
                {method === 'machine' && <td>{move.machine}</td>}
                {['egg', 'tutor'].includes(method) && <td>-</td>}
                <td>{move.name.replace('-', ' ')}</td>
                <td><Type type={move.type}>{move.type}</Type></td>
                <td>
                  <DamageClass>
                    {move.damage_class === 'physical' && <img src={physicalIcon} alt='physical' title='physical' />}
                    {move.damage_class === 'special' && <img src={specialIcon} alt='special' title='special' />}
                    {move.damage_class === 'status' && <img src={statusIcon} alt='status' title='status' />}
                  </DamageClass>        
                </td>
                {move.power ? <td>{move.power}</td> : <td>-</td>}
                {move.accuracy ? <td>{move.accuracy}%</td> : <td>-</td>}
              </MovelistRow>
            ) :              
            <EmptyMovelist>
              <td colSpan={6}>{`No ${method.toUpperCase()} moves in Generation ${generation.toUpperCase()}`}</td>
            </EmptyMovelist>
          } 
        </MovelistBody>
      </table>
    </TableContainer>
  )
}

export default MoveTable