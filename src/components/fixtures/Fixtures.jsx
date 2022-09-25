import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLeague } from '../../contexts/leagueContext';
import Fixture from './Fixture';


const Fixtures = () => {
  const {getFixtures, fixtures} = useLeague();
  const {team} = useParams();

  useEffect(() => {
    if (team !== undefined) {
      getFixtures(team.replace("-", " "));
    }
  }, [team])


  return (
    <div data-testid="fixtures">
      <a href="/" className='m-4 team-name' data-testid="league-table-link"> ~ League Table</a>
      { fixtures && fixtures.map((fixture, key) => (
          <Fixture {...fixture}  key={key}/>
      ))}
    </div>
  )
}

export default Fixtures
