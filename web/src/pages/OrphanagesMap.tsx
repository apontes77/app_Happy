import React from 'react';
import { Link } from 'react-router-dom'
import { FiPlus } from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import mapMarketing from '../images/local-marker.svg';
import '../styles/pages/orphanages-map.css';


function OrphanagesMap() {
    return (
       <div id="page-map">
           <aside>
               <header>
                   <img src={mapMarketing} alt="Happy"/>


                   <h2>Escolha um orfanato no mapa</h2>
                   <p>Muitas crianças estão esperandio a sua visita :)</p>
               </header>

               <footer>
                   <strong>Aparecida de Goiânia</strong>
                   <span>Goiás</span>
               </footer>
           </aside>

            <Map
                center={[-16.7694061,-49.2942842]}
                zoom={15}
                style={{ width: '100%', height: '100%' }}
            >
                <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" />

                {/*<TileLayer
                 url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?acess_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />*/}
                
            </Map>

           <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF" />
           </Link>
       </div>
    )
}

export default OrphanagesMap;