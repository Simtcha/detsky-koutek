import './ErrorPage.css';
import {Link} from 'react-router-dom';

export const ErrorPage = () => {
    return (
    <div>
<header>ERROR 404</header>
<div>Tady není nic k vidění </div>
<div>Radši se vrať </div>
<Link to="/">Domů</Link>
    </div>
     )

}