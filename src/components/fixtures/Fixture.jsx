import React from 'react'
import { format } from 'date-fns'
function Fixture({date, score}) {


  const renderFisxtures = (fixture) => {
    const [teamA, teamB] = Object.keys(fixture);
    return(
      <div>
      <span className='h5' data-testid="teamA-name">{teamA}</span>
          <span className='h4 m-4' data-testid="team-scores"> {fixture[teamA] ?  fixture[teamA] : "x"}  : {fixture[teamB] ? fixture[teamB] : "x" } </span>
        <span className='h5' data-testid="teamB-name">{teamB}</span>
      </div>
    )
  }

  return (
    <div className='m-4 card'>
      <div className='h5 primary card-header' data-testid="match-date">
        {format(new Date(date), "dd/MM ', ' HH:mm") }
      </div>
      <div className='card-body'>
        {score && renderFisxtures(score)}
      </div>
    </div>
  )
}

export default Fixture
