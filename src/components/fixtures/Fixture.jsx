import React from 'react'
import { Card } from 'react-bootstrap'
import { format, compareAsc } from 'date-fns'
function Fixture({date, score}) {


  const renderFisxtures = (fixture) => {
    const [teamA, teamB] = Object.keys(fixture);
    return(
      <>
      <span className='h5'>{teamA}</span>
          <span className='h4 m-4'> {fixture[teamA] ?  fixture[teamA] : "x"}  : {fixture[teamB] ? fixture[teamB] : "x" } </span>
        <span className='h5'>{teamB}</span>
      </>
    )
  }

  return (
    <Card className='m-4'>
      <Card.Header className='h5 primary'>
        {format(new Date(date), "dd/MM ', ' HH:mm") }
      </Card.Header>
      <Card.Body>
        {score && renderFisxtures(score)}
      </Card.Body>
    </Card>
  )
}

export default Fixture
