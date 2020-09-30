import React, { useRef } from 'react'

import { Container } from './styles'

const ModelsWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef(null)

  return <Container>{children}</Container>
}

export default ModelsWrapper
