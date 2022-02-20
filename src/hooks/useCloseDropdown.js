import { useEffect } from 'react'

export const useCloseDropdown = (ref, stateHandler) => {
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        ref.current.dropdown && !ref.current.dropdown.contains(event.target) && 
        ref.current.button && !ref.current.button.contains(event.target)
      ) {
        stateHandler()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    
    return (() => document.removeEventListener('mousedown', handleClickOutside))
  }, [ref, stateHandler])
}