import React, { createContext, useContext, useEffect, useState } from "react";
import { data } from "../data";

const LeagUeContext = createContext();

export function useLeague() {
  return useContext(LeagUeContext);
}

const LeagueProiver = ({ children }) => {
  const [leagueTable, setLeagueTable] = useState([]);
  const [fixtures, setFixtures] = useState([]);

  const getTable = () => {
    const store = {};

    if (data) {
      for (let i = 0; i < data.length; i++) {
        const current = data[i];

        const [firstClub, secondClub] = Object.keys(current.score);
        if (current.score[firstClub] === null || current.score[secondClub] === null) {
          continue;
        }

        if (!store[firstClub]) {
          store[firstClub] = { name: firstClub, wins: 0, loss: 0, draws: 0, points: 0, games: 0, goalsScored: 0, goalsConceded: 0 };
        }
        if (!store[secondClub]) {
          store[secondClub] = { name: secondClub, wins: 0, loss: 0, draws: 0, points: 0, games: 0, goalsConceded: 0, goalsScored: 0 };
        }

        if (current.score[firstClub] > current.score[secondClub]) {
          // first club win
          store[firstClub] = {
            ...store[firstClub],
            games: store[firstClub].games + 1,
            goalsScored: store[firstClub].goalsScored + current.score[firstClub],
            goalsConceded: store[firstClub].goalsConceded + current.score[secondClub],
            wins: store[firstClub].wins + 1,
            points: store[firstClub].points + 3,
          }

          store[secondClub] = {
            ...store[secondClub],
            games: store[secondClub].games + 1,
            goalsScored: store[secondClub].goalsScored + current.score[secondClub],
            goalsConceded: store[secondClub].goalsConceded + current.score[firstClub],
            loss: store[secondClub].loss + 1,
          }
        } else if (current.score[secondClub] > current.score[firstClub]) {
          // second club win
          store[secondClub] = {
            ...store[secondClub],
            games: store[secondClub].games + 1,
            goalsScored: store[secondClub].goalsScored + current.score[secondClub],
            goalsConceded: store[secondClub].goalsConceded + current.score[firstClub],
            wins: store[secondClub].wins + 1,
            points: store[secondClub].points + 3,
          }

          store[firstClub] = {
            ...store[firstClub],
            games: store[firstClub].games + 1,
            goalsScored: store[firstClub].goalsScored + current.score[firstClub],
            goalsConceded: store[firstClub].goalsConceded + current.score[secondClub],
            loss: store[firstClub].loss + 1,
          }

        } else if (current.score[secondClub] === current.score[firstClub]) {
          store[firstClub] = {
            ...store[firstClub],
            games: store[firstClub].games + 1,
            goalsScored: store[firstClub].goalsScored + current.score[firstClub],
            goalsConceded: store[firstClub].goalsConceded + current.score[secondClub],
            draws: store[firstClub].draws + 1,
            points: store[firstClub].points + 1,
          }

          store[secondClub] = {
            ...store[secondClub],
            games: store[secondClub].games + 1,
            goalsScored: store[secondClub].goalsScored + current.score[secondClub],
            goalsConceded: store[secondClub].goalsConceded + current.score[firstClub],
            draws: store[secondClub].draws + 1,
            points: store[secondClub].points + 1,
          }
        }
      }

      setLeagueTable(Object.values(store).sort((teamA, teamB) => teamB.points - teamA.points))

    }
    return store;
  }

  const getFixtures = (team) => {
    const fixtures = [];
    if (data) {
      for (let f = 0; f < data.length; f++) {
        const element = data[f];
        if (Object.keys(element.score).includes(team)) {
          fixtures.push(element);
        }
      }
    }

    setFixtures(fixtures)
    return fixtures
  }

  const value = {
    getTable,
    leagueTable,
    getFixtures,
    fixtures
  }
  return <LeagUeContext.Provider value={value}>
    {children}
  </LeagUeContext.Provider>
}


export default LeagueProiver;
