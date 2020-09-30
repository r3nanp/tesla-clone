import React from 'react'

import DefaultOverlayContent from '../DefaultOverlayContent'
import { ModelsWrapper, ModelsSection } from '../Model'

import { Container } from './styles'

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            'Model One',
            'Model Two',
            'Model Three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map(modelName => (
            <ModelsSection
              key={modelName}
              className="colored"
              modelName="Model One"
              overlayNode={
                <DefaultOverlayContent
                  label="Model One"
                  description="Order Online from Delivery"
                />
              }
            />
          ))}
        </div>
      </ModelsWrapper>
    </Container>
  )
}

export default Page
