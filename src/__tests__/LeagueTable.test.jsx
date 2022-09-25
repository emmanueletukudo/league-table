import React from "react";
import { render} from "@testing-library/react";
import LeagueProiver from "../contexts/leagueContext";
import TablePage from "../pages/TablePage";

test("should render table", () => {
  const {getByTestId, getAllByTestId} = render(<LeagueProiver><TablePage/></LeagueProiver>);
  const leagueTable = getByTestId("league-table");
  const tableBody = getAllByTestId("league-table-body");
  expect(tableBody.length).toBeGreaterThan(0);
  expect(leagueTable).toBeInTheDocument();
})


test("should render team info", () => {
  const {getAllByTestId} = render(<LeagueProiver><TablePage/></LeagueProiver>);
    const teamInfo  =  getAllByTestId("team-info")
    const fixturesLink = getAllByTestId("league-fixtures-link");
    expect(fixturesLink[0].textContent).toBe("Leicester City");
    expect(fixturesLink[0]).toHaveAttribute("href");
    expect(teamInfo.length).toBeGreaterThan(0);
    expect(teamInfo.length).toBe(7);
})

