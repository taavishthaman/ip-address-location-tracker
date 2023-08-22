import { useEffect, useState } from 'react';
import Header from './components/Header.js';
import Info from './components/Info.js';
import Map from './components/Map.js';
import { MapContainer } from 'react-leaflet';

const API_KEY = 'at_dlntddhkh62jrYqVjncilpR2E7j7d';

function App() {
  const [ipAddress, setIpAddress] = useState('');
  const [location, setLocation] = useState('');
  const [isp, setIsp] = useState('');
  const [lat, setLat] = useState('')
  const [lng, setLng] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchMyGeoData() {
      try {
        setIsLoading(true);
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`;
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error('Some error occured!');
        }
        const data = await res.json();
        setIpAddress(data.ip);
        setLocation(data.location);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);
        setIsLoading(false);
      } catch (e) {
        setError(e.message);
        setIsLoading(false);
      } finally {
        setError('');
        setIsLoading(false);
      }
    }
      setError('');
      fetchMyGeoData();
  }, [])
  
  async function searchLocation() {
    try {
        const url = `https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}&ipAddress=${ipAddress}`;
        const res = await fetch(url);
        if(!res.ok) {
          throw new Error('Some error occured!');
        }
        const data = await res.json();
        setIpAddress(data.ip);
        setLocation(data.location);
        setIsp(data.isp);
        setLat(data.location.lat);
        setLng(data.location.lng);
    } catch (e) {
          setError(e.message);
    } finally {
        setError('');
    }
  }

  return (
    <>
      <Header ipAddress={ipAddress} setIpAddress={setIpAddress} searchLocation={searchLocation}/>
      <Info location={location} isp={isp} ipAddress={ipAddress} isLoading={isLoading}/>
      {lat && lng && <MapContainer center={[lat, lng]} zoom={13} zoomControl={false} scrollWheelZoom={true} className='map-container'>
        <Map lat={lat} lng={lng}/>
      </MapContainer >}
    </>
  );
}

export default App;
