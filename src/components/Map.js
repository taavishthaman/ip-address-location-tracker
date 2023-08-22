import { TileLayer, useMap, Popup, Marker } from 'react-leaflet';
import {Icon} from 'leaflet'
import iconLocation from '../images/icon-location.svg';
import { useEffect } from 'react';

export default function Map({location, lat, lng}) {
    // let position = [location.lat, location.lng];
    const map = useMap();

    useEffect(() => {
        map.panTo([lat, lng]);
    }, [lat, lng, map])

    const blackMarker = new Icon({
        iconUrl: iconLocation,
        iconSize : [46, 56]
    });

    return <>
        <>
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[lat, lng]} icon={blackMarker}>
                <Popup>
                    Lat: {lat} <br /> Lng: {lng}
                </Popup>
            </Marker>
        </>
    </>
}