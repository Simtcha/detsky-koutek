import './style.css';
import {Link, Outlet} from 'react-router-dom';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Dětský Koutek</h1>
      </header>
      <main>
      
        <nav>
          <Link to="/About">About</Link>
          <span>|</span>
          <Link to="/Contact">Kontakt</Link>
          <span>|</span>
          <Link to="/pobocky">Pobočky</Link>
        </nav>
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Dětské koutky pro všechny</p>
      </footer>
    </div>
  );
};

