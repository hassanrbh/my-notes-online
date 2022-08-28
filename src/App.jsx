import Navbar from './components/Navbar';
import Home from './pages/Home';
import Create from './pages/Create';
import NoteDetails from './pages/NoteDetails';
import NotFound from './pages/NotFound';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route
              path="/"
              element={<Home />}
            />
            <Route
              path="/create"
              element={<Create />}
            />
            <Route
              path="/notes/:id"
              element={<NoteDetails />}
            />
            <Route
              path="/notfound"
              element={<NotFound />}
            />
            <Route
              path="*"
              element={<NotFound />}
            ></Route>
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
