import React, { useState } from 'react'
import { 
  Container, 
  Content, 
  Welcome, 
  SocialIcon,
  ArrowLeft,
  ArrowRight, 
  Box, 
  Animation, 
  CircleOne, 
  CircleTwo, 
  Arrow 
} from './styles'

import { 
  FaGithub, 
  FaEnvelope, 
  FaLinkedin, 
  FaAngleRight, 
  FaAngleLeft, 
  FaAngleUp 
} from 'react-icons/fa'

export default function AboutMe() {
  const [content, setContent] = useState(true)

  function handleMainContent() {
    document.querySelector("#sliderMain")?.scrollBy(0, -300)
  }

  function handleAboutMe(event: string) {
    if(event === "right") {
      setContent(false)
      document.querySelector("#sliderAbout")?.scrollBy(300, 0)
    }
    else if (event === "left") {
      setContent(true)
      document.querySelector("#sliderAbout")?.scrollBy(-300, 0)
    }
  }

  return(
    <Container>
      <Arrow>
        <FaAngleUp size={40} color="rgba(255, 190, 0)" onClick={handleMainContent}/>
      </Arrow>
      <Content id="sliderAbout">
        <Box>
          <SocialIcon>
            <FaEnvelope size={25} color="rgba(255, 190, 0)"/>
            <FaLinkedin size={25} color="rgba(255, 190, 0)"/>
            <FaGithub size={25} color="rgba(255, 190, 0)"/>
          </SocialIcon>
          <Welcome>
            <div>
              <h2>Hi there</h2>
              <p>I am Leonardo Gomes</p>
            </div>
            <h2>Software Enginner</h2>
          </Welcome>
        </Box>

        <Box>
          <ArrowLeft visible={content}>
            <FaAngleLeft size={40} color="rgba(255, 190, 0)" onClick={() => handleAboutMe("left")}/>
          </ArrowLeft>
          <Animation>
            <CircleOne/>
            <CircleTwo/>
          </Animation>
          <ArrowRight visible={content}>
            <FaAngleRight size={40} color="rgba(255, 190, 0)" onClick={() => handleAboutMe("right")}/>
          </ArrowRight>
        </Box>

        <Box>
          <Welcome>
            <div>
              <h2>Hi there</h2>
              <p>I am Leonardo Gomes</p>
            </div>
            <h2>Software Enginner</h2>
          </Welcome>
        </Box>

      </Content>
    </Container>
  )
}