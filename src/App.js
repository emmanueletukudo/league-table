import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import TablePage from "./page/TablePage";
import LeagueProiver from './contexts/leagueContext';
import './App.css';
function App() {
  return (
    <LeagueProiver>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<TablePage />} />
        </Routes>
      </BrowserRouter>
    </LeagueProiver>
  );
}

export default App;
