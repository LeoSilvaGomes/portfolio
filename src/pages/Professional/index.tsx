import React, { useState } from 'react'
import { Container, Arrow, Skills, Experiences, Projects, BoxSkills } from './styles'
import { FaAngleDown } from 'react-icons/fa'
import Skill from '../../components/Skill'

const skills = [
  {
    name: "Git",
    level: "Advanced"
  },
  {
    name: "HTML5",
    level: "Advanced"
  },
  {
    name: "CSS/SASS",
    level: "Advanced"
  },
  {
    name: "Javascript",
    level: "Intermediate"
  },
  {
    name: "Typescript",
    level: "Intermediate"
  },
  {
    name: "React",
    level: "Advanced"
  },
  {
    name: "Vue",
    level: "Basic"
  },
  {
    name: "Node",
    level: "Basic"
  },
  {
    name: "Figma",
    level: "Intermediate"
  },
  {
    name: "Python",
    level: "Intermediate"
  },
  {
    name: "Jest",
    level: "Intermediate"
  },
  {
    name: "Docker",
    level: "Intermediate"
  },
  {
    name: "Agile",
    level: "Advanced"
  },
  {
    name: "Sony Vegas",
    level: "Intermediate"
  },
  {
    name: "Gitlab CI",
    level: "Basic"
  },
  {
    name: "Github Actions",
    level: "Basic"
  },
  {
    name: "Photoshop",
    level: "Intermediate"
  },
  {
    name: "Illustrator",
    level: "Intermediate"
  },
  {
    name: "Adobe XD",
    level: "Basic"
  },
]

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
        <BoxSkills>
          {skills.slice(0, 6).map(skill => {
            return (
              <Skill name={skill.name} level={skill.level}/>
            )
          })}
        </BoxSkills>
        <BoxSkills>
          {skills.slice(6, 12).map(skill => {
            return (
              <Skill name={skill.name} level={skill.level}/>
            )
          })}
        </BoxSkills>
        <BoxSkills>
          {skills.slice(12, 17).map(skill => {
            return (
              <Skill name={skill.name} level={skill.level}/>
            )
          })}
        </BoxSkills>
        <BoxSkills withoutJustify >
          {skills.slice(17).map(skill => {
            return (
              <Skill name={skill.name} level={skill.level}/>
            )
          })}
        </BoxSkills>
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