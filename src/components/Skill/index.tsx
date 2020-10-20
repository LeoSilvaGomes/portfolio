import React from 'react'

import { Container, Graph, Level } from './styles'

interface PropSkill {
  name: string,
  level: string
}

export default function Skill({name, level} : PropSkill) {
  return(
    <Container>
      <h2>{name}</h2>
      <Graph level={level}/>
      <Level>{level}</Level>
    </Container>
  )
}