/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

import useWrapperScroll from '../Model/useWrapperScroll'
import { useTransform } from 'framer-motion'

import { Container, Header, Logo, Burger, Footer } from './styles'

const UniqueOverlay: React.FC = () => {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burger />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="#">UI Clone</a>
          </li>
          <li>
            <a href="#">made with 💖</a>
          </li>
          <li>
            <a href="#">By Renan Pereira</a>
          </li>
        </ul>
      </Footer>
    </Container>
  )
}

export default UniqueOverlay
