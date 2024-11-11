import './ErrorPage.css';
import ColorSchemesExample from '../../components/navbar';

export const ErrorPage = () => {
    return (
<div className="error-page-container">
    <ColorSchemesExample />
  <div className="error-content">
    <header className="error-header">ERROR 404</header>
    <div>Tady není bohužel nic k vidění, teda kromě koťátka :) </div>
    <div className="kotatko"></div>
   </div>
</div>
     )

}