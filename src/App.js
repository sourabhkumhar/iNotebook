import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NoteState from './context/notes/NoteState';
import Alert from './components/Alert';


function App() {

  return (
    <>
      <NoteState>


        <Router>
          <Navbar />

          <Alert msg="Congrats!" type="Success" />

          <div className="container">
            <Routes>
              <Route path="/home" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
            </Routes>
          </div>

        </Router>

      </NoteState>
    </>
  );
}

export default App;
