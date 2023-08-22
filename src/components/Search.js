export default function Search() {
    return <div className="search">
        <input className="text-field" type="text" placeholder="Search for any IP address or domain"></input>
        <button className="btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="14"><path fill="none" stroke="#FFF" stroke-width="3" d="M2 1l6 6-6 6"/></svg>
        </button>
    </div>
}