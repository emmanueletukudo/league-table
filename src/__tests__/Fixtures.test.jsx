import React from "react";
import { render, screen, waitFor} from "@testing-library/react";
import LeagueProiver from "../contexts/leagueContext";
import FixturesPage from "../pages/FixturesPage";
import userEvent from "@testing-library/user-event";
import App from '../App';

test("Should render league table-link", ()=> {
  const {getByTestId}  = render(<LeagueProiver><FixturesPage/></LeagueProiver>);
  const leagueLink = getByTestId("league-table-link");
  expect(leagueLink.textContent).toBe(" ~ League Table");
  expect(leagueLink).toHaveAttribute("href");
})

test("should render mach fixtures", async () => {
    render(<App/>);
    const {getAllByTestId} = render(<LeagueProiver><FixturesPage/></LeagueProiver>);
    const fixtures = getAllByTestId("fixtures");
    const fixturesLink = getAllByTestId("league-fixtures-link");
    userEvent.click(fixturesLink[0]);
    await waitFor( () => {
      expect(screen.getByText(/League Fixtures/i)).toBeInTheDocument()
    })
    expect(fixtures.length).toBeGreaterThan(0);
})



