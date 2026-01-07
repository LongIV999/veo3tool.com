
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CalendarPage from './pages/CalendarPage';
import { CalendarProvider } from './context/CalendarContext';

function App() {
  return (
    <CalendarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/calendar" element={<CalendarPage />} />
        </Routes>
      </Router>
    </CalendarProvider>
  );
}

export default App;
