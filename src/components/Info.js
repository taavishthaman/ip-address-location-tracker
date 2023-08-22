export default function Info({ipAddress, location, isp, isLoading}) {
    return <div className="info-grid">
        {
            !isLoading && <><div className="info-block">
                <div className="info-inner-block">
                    <p className="info-title">Ip address</p>
                    <p className="info-value">{ipAddress}</p>
                </div>
            </div><div className="info-block">
                    <div className="info-inner-block">
                        <p className="info-title">Location</p>
                        <p className="info-value">{location.city}, {location.country} {location.postalCode}</p>
                    </div>
                </div><div className="info-block">
                    <div className="info-inner-block">
                        <p className="info-title">Timezone</p>
                        <p className="info-value">UTC {location.timezone}</p>
                    </div>
                </div><div className="info-block">
                    <div className="info-inner-block">
                        <p className="info-title">ISP</p>
                        <p className="info-value">{isp}</p>
                    </div>
                </div></>
        }
    </div>
}