import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Stats from './components/Stats';
// eslint-disable-next-line
import New_question from './components/New_question';
import Save from './components/Save';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar w-full bg-slate-100">
          <ul className="navlist flex justify-between items-center p-2">
            <li className="nav__item">
              <Link to="/" className="text-slate-900" >
                <span className="material-icons">home</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/stats" className="text-slate-900">
                <span className="material-icons">leaderboard</span>
                </Link>
            </li>
            <li className="nav__item">
              <Link to="/newpost" className="text-slate-900">
                <span className="material-icons">add_circle</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/save" className="text-slate-900">
                <span class="material-icons">turned_in</span>
              </Link>
            </li>
            <li className="nav__item">
              <Link to="/profile" className="text-slate-900">
                <span className="material-icons">person</span>
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/stats' element={<Stats />} />
          <Route path='/newpost' element={<New_question />} />
          <Route path='/save' element={<Save />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
