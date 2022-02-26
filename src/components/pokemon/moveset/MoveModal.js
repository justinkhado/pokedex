import React, { useEffect, useRef } from 'react'
import {
  ModalContainer,
  MoveInfo,
  MoveValues,
  MoveDescription,
  CloseButton
} from './MoveModal.styled'
import { DamageClass } from './Moveset.styled';
import { Type } from '../../../sharedStyles/Type'
import physicalIcon from '../../../assets/icons/Physical.png';
import specialIcon from '../../../assets/icons/Special.png';
import statusIcon from '../../../assets/icons/Status.png';

const MoveModal = ({ move, closeModal }) => {
  const modalRef = useRef(null)

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        event.preventDefault()
        closeModal()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('touchend', handleClickOutside)
    document.addEventListener('touchmove', handleClickOutside)

    return (() => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchend', handleClickOutside)
      document.addEventListener('touchmove', handleClickOutside)
    })
  }, [closeModal])

  return (
    <ModalContainer type={move.type} ref={modalRef}>
      <h3>{move.name.replace('-', ' ')}</h3>
      <CloseButton onClick={closeModal}>&#9932;</CloseButton>
      <MoveInfo>
        <div>
          <Type type={move.type}>{move.type}</Type>
          <DamageClass>
            {move.damage_class === 'physical' && <img src={physicalIcon} alt='physical' title='physical' />}
            {move.damage_class === 'special' && <img src={specialIcon} alt='special' title='special' />}
            {move.damage_class === 'status' && <img src={statusIcon} alt='status' title='status' />}
          </DamageClass>
        </div>
        <MoveValues type={move.type}>
          <div>
            <span>Power</span>
            <span>{move.power || '-'}</span>
          </div>
          <div>
            <span>Accuracy</span>
            <span>{move.accuracy || '-'}</span>
          </div>
          <div>
            <span>PP</span>
            <span>{move.pp}</span>
          </div>
        </MoveValues>
        <MoveDescription type={move.type}>
          <p>{move.effect}</p>
        </MoveDescription>
      </MoveInfo>
    </ModalContainer>
  )
}

export default MoveModal