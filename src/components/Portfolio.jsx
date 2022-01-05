import React from 'react'
import {Card} from "./Card";

export const Portfolio = ({projects}) => {
  console.log(projects)
  return (
    <div className="app-portfolio">
      {projects?.map((project) => <Card key={project.id} {...project}/>)}
    </div>
  )
}