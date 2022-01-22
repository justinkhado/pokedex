import React, { useEffect, useState } from 'react'
import { ScrollButton } from '../sharedStyles/ScrollToTop.styled'

const ScrollToTop = () => {  
  const [visible, setVisible] = useState(false)
  
  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = window.scrollY
      if (scrolled > 100) {
        setVisible(true)
      }
      else {
        setVisible(false)
      }
    }
    
    window.addEventListener('scroll', toggleVisible)
    return () => window.removeEventListener('scroll', toggleVisible)
  }, [])
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0 })
  }

  return (
    <ScrollButton onClick={scrollToTop} visible={visible}>
      &rarr;
    </ScrollButton>
  )
}

export default ScrollToTop