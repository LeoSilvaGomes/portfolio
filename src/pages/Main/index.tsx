import React from 'react'
import { Container, Content, Box } from './styles'

import AboutMe from '../AboutMe'
import Professional from '../Professional'

function Main() {
  return (
    <Container>
      <Content id="sliderMain">
        <Box>
          <Professional/>
        </Box>
        <Box>
          <AboutMe />
        </Box>
      </Content>
    </Container>
  )
}

export default Main