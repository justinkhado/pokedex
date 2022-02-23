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
    document.addEventListener('touchstart', handleClickOutside)
    
    return (() => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('touchstart', handleClickOutside)
    })
  }, [ref, stateHandler])

  useEffect(() => {
    const handleTouchStart = (event) => {
      if (ref.current.button && !ref.current.button.contains(event.target)) {
        ref.current.button.blur()
      }
    }
    window.addEventListener('touchstart', handleTouchStart)
    return (() => window.removeEventListener('touchstart', handleTouchStart))
  }, [ref])
}