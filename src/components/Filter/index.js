export const Filter = ({setName, setStatus, setSpecies, setType, setGender}) => {
    return (
        <div className="filter">
            <p>Sort by: </p>
            <input placeholder="Name" onChange={(e)=>setName(e.target.value)} type="text" />
            <select onChange={(e)=>setStatus(e.target.value)} name="" id="">
                <option default hidden value="">Status</option>
                <option value="">All</option>
                <option value="alive">Alive</option>
                <option value="dead">Dead</option>
                <option value="unknown">Unknown</option>
            </select>
            <input placeholder="Species" onChange={(e)=>setSpecies(e.target.value)} type="text" />
            <input placeholder="Type" onChange={(e)=>setType(e.target.value)} type="text" />
            <select onChange={(e)=>setGender(e.target.value)} name="" id="">
                <option default hidden value="">Gender</option>
                <option value="">All</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
                <option value="genderLess">Gender less</option>
                <option value="unknown">Unknown</option>
            </select>
        </div>
    );
}