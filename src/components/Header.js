import Search from "./Search"

export default function Header({ipAddress, setIpAddress, searchLocation}) {
    return <header>
        <p className="title">IP Address Tracker</p>
        <Search ipAddress={ipAddress} setIpAddress={setIpAddress} searchLocation={searchLocation}/>
    </header>
}