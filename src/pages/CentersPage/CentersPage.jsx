import { useState, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const CentersPage = () => {
  const [centers, setCenters] = useState([])

  useEffect(() => {
    const fetchCenters = async () => {
      const response = await fetch('http://localhost:4000/api/centers')
      const json = await response.json();
      console.log(json); 
      setCenters(json.data); 
    };

    fetchCenters();
  }, []);

  return (
    <div className="centers-page-container">
      <header className="smallheader">Pobočky</header>
      <br></br>
      <nav className="links">
        {centers.map((center) => (
          <Link key={center.id} to={`/pobocky/${center.id}`}>
            {center.name} - {center.address} <br/>
          </Link>
        ))}
      </nav>
      <br/>
      <Outlet />
    </div>
  )
}



    /*
    import { render } from '@czechitas/render';
import '../global.css';

const params = new URLSearchParams(window.location.search)
const id = params.get('id')

const response = await fetch (`http://localhost:4000/api/movies/${id}`)
const json = await response.json()
const movies = json.data

document.querySelector('#root').innerHTML = render(
    <div className="container">
      <h1>{movies.name}</h1>
      <main>
        <p>Rok: {movies.year}</p>
        <p>Ikonicka hlaska: {movies.iconicmeme}</p>
        <img src={`http://localhost:4000${movies.img}`} />
      </main>
  
    </div>
  ); */