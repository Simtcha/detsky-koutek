  import { useParams } from 'react-router-dom';
  import { useState, useEffect } from 'react';
  
  export const CenterDetail = () => {
    const { centerId } = useParams()
    const [center, setCenter] = useState(null)
  
    useEffect(() => {
      const fetchCenterDetail = async () => {
        const response = await fetch(`http://localhost:4000/api/centers/${centerId}`)
        const json = await response.json()
        setCenter(json.data); 
      }
  
      fetchCenterDetail()
    }, [centerId])
    
    return (
      <div>
       
        {!center ? (
          <div></div>
        ) : (
          <>
            <h2>{center.name}</h2>
            <p>{center.address}</p>
            <p>{center.info}</p>
            <p>Kapacita: {center.capacity} dětí</p>
            <h3>Otevírací hodiny:</h3>
            <ul>
              <li>{center.open?.mon ? `Pondělí: ${center.open.mon}` : 'Pondělí: Zavřeno'}</li>
              <li>{center.open?.tue ? `Úterý: ${center.open.tue}` : 'Úterý: Zavřeno'}</li>
              <li>{center.open?.wed ? `Středa: ${center.open.wed}` : 'Středa: Zavřeno'}</li>
              <li>{center.open?.thu ? `Čtvrtek: ${center.open.thu}` : 'Čtvrtek: Zavřeno'}</li>
              <li>{center.open?.fri ? `Pátek: ${center.open.fri}` : 'Pátek: Zavřeno'}</li>
              <li>{center.open?.sat ? `Sobota: ${center.open.sat}` : 'Sobota: Zavřeno'}</li>
              <li>{center.open?.sun ? `Neděle: ${center.open.sun}` : 'Neděle: Zavřeno'}</li>
            </ul>
          </>
        )}
      </div>
    );
  };



  /*import { useParams } from "react-router-dom";
export const CenterDetail = () => {
const { centerId } = useParams();
const centerInfo = centers.find(i => i.id === Number(centerId))
return (
    <div>
      <h2>Pobočka číslo</h2>
      {centerInfo.name}
    </div>
  )
} */
