import React from 'react'
import { useEffect } from 'react';
import { Table } from 'react-bootstrap'
import { useLeague,  } from '../../contexts/leagueContext'
import Team from './Team';


function LeagueTable() {
  const {leagueTable, getTable} =  useLeague();

  useEffect(() => {
    getTable();
  }, []);


  const goalDiffCheck = (a, b) => {
    if (a !== b) {
      return b - a;
    } else {
      return 0
    }
  }

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th colSpan={2}>Position</th>
          <th>Club</th>
          <th>Played</th>
          <th>Won</th>
          <th>Drawn</th>
          <th>Lost</th>
          <th>GD</th>
          <th>Points</th>
        </tr>
      </thead>
      <tbody>
     {leagueTable && leagueTable.map((team, key) => (
      <Team {...team}
      key={team.name} team={team.name}
      position={key +1}
      gd={goalDiffCheck(team.goalsScored, team.goalsConceded)}
      />
     ))}
      </tbody>
    </Table>
  )
}

export default LeagueTable
