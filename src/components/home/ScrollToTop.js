import React, { useEffect, useState } from 'react'
import { ScrollButton } from './ScrollToTop.styled'
import { default as upArrow } from '../../assets/icons/up-arrow.svg'

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
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <ScrollButton onClick={scrollToTop} visible={visible}>
      <img src={upArrow} alt='up arrow' />
    </ScrollButton>
  )
}

export default ScrollToTop