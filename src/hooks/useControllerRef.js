import { useEffect, useRef } from 'react'

export const useControllerRef = () => {
  const controllerRef = useRef(null)

  useEffect(() => {
    controllerRef.current = new AbortController()
    return () => controllerRef.current.abort()
  }, [])

  return controllerRef
}