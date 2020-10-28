import React, { useState } from 'react'
import { Container, Arrow, Skills, Experiences, Projects } from './styles'
import { FaAngleDown } from 'react-icons/fa'

export default function Profissional() {
  const [ page, setPage ] = useState("skills") 

  function handleMainContent() {
    document.querySelector("#sliderMain")?.scrollBy(0, 300)
  }

  function handleProfessionalContent(event: string) {
    setPage(event)
  }

  return(
    <Container>
      <Arrow>
        <FaAngleDown size={40} color="#fff" onClick={handleMainContent}/>
      </Arrow>

      <Skills onClick={() => handleProfessionalContent("skills")} visible={page === "skills" ? true : false}>
        <h1>Skills</h1>
      </Skills>
      
      <Experiences onClick={() =>  handleProfessionalContent("experiences")} visible={page === "experiences" ? true : false}>
        <h1>Experiences</h1>
      </Experiences>
      
      <Projects onClick={() =>  handleProfessionalContent("projects")} visible={page === "projects" ? true : false}>
        <h1>Projects</h1>
      </Projects>
    </Container>
  )
}