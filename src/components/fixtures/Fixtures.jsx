import React from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useLeague } from '../../contexts/leagueContext';
import Fixture from './Fixture';


const Fixtures = () => {
  const {getFixtures, fixtures} = useLeague();
  const {team} = useParams();

  useEffect(() => {
    getFixtures(team.replace("-", " "));
  }, [])


  return (
    <div>
      { fixtures && fixtures.map((fixture, key) => (
          <Fixture {...fixture}  key={key}/>
      ))}

    </div>
  )
}

export default Fixtures
