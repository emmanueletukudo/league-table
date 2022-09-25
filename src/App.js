import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePage from "./page/TablePage";
import FixturesPage from "./page/FixturesPage";
import LeagueProiver from './contexts/leagueContext';
import './App.css';
function App() {
  return (
    <LeagueProiver>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TablePage />} />
          <Route path='/:team/fixtures' element={<FixturesPage />} />
        </Routes>
      </BrowserRouter>
    </LeagueProiver>
  );
}

export default App;
