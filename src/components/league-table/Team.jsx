import React from 'react'

const Team = ({position, team, games, wins, draws, loss, gd, points }) => {
  return (
    <tr data-testid="team-info" >
          <td>{position}</td>
          <td colSpan={2}><a href={`/${team.replace(" ", "-")}/fixtures`} className="team-name" data-testid="league-fixtures-link">{team}</a></td>
          <td>{games}</td>
          <td>{wins}</td>
          <td>{draws}</td>
          <td>{loss}</td>
          <td>{gd}</td>
          <td>{points}</td>
        </tr>
  )
}

export default Team
