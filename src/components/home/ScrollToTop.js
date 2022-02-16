import React from 'react'
import { useInView } from 'react-intersection-observer'
import { ScrollButton, ScrollCheck } from './ScrollToTop.styled'
import { ReactComponent as UpArrow } from '../../assets/icons/up-arrow.svg'

const ScrollToTop = () => {
  const [ref, inView] = useInView()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <ScrollButton onClick={scrollToTop} visible={!inView}>
        <UpArrow />
      </ScrollButton>
      <ScrollCheck ref={ref}></ScrollCheck>
    </>
  )
}

export default ScrollToTop