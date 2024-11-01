import { useState, useEffect } from 'react';
function ChampsApi () {
    const [campeones, setCampeones] = useState([]); // Almacenará en un array la información devuelta por la API.
    const [showChampions, setShowChampions] = useState(false);  // Controlará si se muestra o no la info devuelta por la API.
    const btnInfo = document.querySelector('.info-btn');  // Se apunta al botón con clase 'info-btn'.

    useEffect(() => {   // Conexión con la API
        const fetchData = async () => {
            try {
                const response = await fetch('https://66fddf1a6993693089566ad0.mockapi.io/api/CK/players');
                const jsonData = await response.json();
                setCampeones(jsonData);
                } catch (error) {
                setError('No se pudo cargar la información.');
                } 
            };
        fetchData();
        }, []);

    const handleClickGallery = () => {
        setShowChampions(true);
        showChampions ? setShowChampions(false) : setShowChampions(true);
        !showChampions ? btnInfo.textContent = 'OCULTAR INFO' : btnInfo.textContent = 'VER INFO'; 
    }

  return (
    <div>
      <h5 id="getInfo">Si deseas conocer información de los campeones...</h5>
      <button className='info-btn' onClick={handleClickGallery}>VER INFO</button>
      {showChampions && (
        <div>
          {campeones.map((campeon) => (   // Mapeo del array que contiene la info devuelta por API
            <div className='champions-Info' key={campeon.id}>
              {` ${campeon.numChampion}: ${campeon.firstName} ${campeon.lastName}. ${campeon.description}. Campeón durante: ${campeon.worldChampion}.`}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default ChampsApi;
