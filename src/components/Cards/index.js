import { useState } from "react";
import { useGetData } from "../../hooks/useData/index.js";
import { Filter } from "../Filter/index.js";

export const Cards = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [species, setSpecies] = useState("");
  const [type, setType] = useState("");
  const [gender, setGender] = useState("");
  const { data, loading } = useGetData(
    `character/?name=${name}&status=${status}&species=${species}&type=${type}&gender=${gender}`
  );
  return (
    <section className="cards">
      <h2>Filter characters</h2>
      <Filter
        setName={setName}
        setStatus={setStatus}
        setSpecies={setSpecies}
        setType={setType}
        setGender={setGender}
      />
        <div className="cards-container">
          {
              loading?(
                <img className="loading" src="https://c.tenor.com/5o2p0tH5LFQAAAAi/hug.gif" alt="" />
              ):(
            data? data.map((item) => {
                return (
                  <div key={item.id} className="cards-render">
                    <img className="img-card" src={item.image} alt="" />
                    <h3>{item.name}</h3>
                    <div className="cards-options">
                      <p className={"status " + item.status}>{item.status}</p>
                      <p className={item.species}>
                        {" "}
                        <span>Specie: </span>
                        {item.species}
                      </p>
                      <p className={item.type}>
                        <span>Type: </span>
                        {item.type ? item.type : "None"}
                      </p>
                      <p className={"gender " + item.gender}>{item.gender}</p>
                    </div>
                    <a href="/">
                      {" "}
                      <span>Origin: </span>
                      {item.origin.name}
                    </a>
                  </div>
                );
              })
            : null
              )
            }
        </div>
      
    </section>
  );
};
