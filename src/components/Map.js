import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import {Icon} from 'leaflet'
import iconLocation from '../images/icon-location.svg';

export default function Map() {
    const position = [51.505, -0.09];
    
    const blackMarker = new Icon({
        iconUrl: iconLocation,
        iconSize : [46, 56]
    });
    return <>
        <MapContainer center={position} zoom={13} scrollWheelZoom={false} className='map-container'>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position} icon={blackMarker}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </>
}