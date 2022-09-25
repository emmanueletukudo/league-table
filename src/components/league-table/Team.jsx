import React from 'react'
import { Link } from 'react-router-dom'
const Team = ({position, team, games, wins, draws, loss, gd, points }) => {
  return (
    <tr>
          <td>{position}</td>
          <td colSpan={2}><Link to={`/${team.replace(" ", "-")}/fixtures`} className="team-name">{team}</Link></td>
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
