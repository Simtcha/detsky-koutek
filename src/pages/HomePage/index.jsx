import './style.css';
import {Link, Outlet} from 'react-router-dom';
import ColorSchemesExample from '../../components/navbar';

export const HomePage = () => {
  return (
    <div className="container">
      <header>
        <div className="logo" />
        <h1>Dětský Koutek</h1>
      </header>
      <main>
      <ColorSchemesExample />
        
        <Outlet></Outlet>
      </main>
      <footer>
        <p>Dětské koutky pro všechny</p>
      </footer>
    </div>
  );
};

