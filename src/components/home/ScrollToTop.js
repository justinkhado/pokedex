import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ScrollButton, ScrollCheck } from './ScrollToTop.styled'
import { default as upArrow } from '../../assets/icons/up-arrow.svg'

const ScrollToTop = () => {
  const [ref, inView] = useInView()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ScrollButton onClick={scrollToTop} visible={!inView}>
        <img src={upArrow} alt='up arrow' />
      </ScrollButton>
      <ScrollCheck ref={ref}></ScrollCheck>
    </>
  )
}

export default ScrollToTop