import {Cards} from "../../components/Cards/index";
export const Home=()=>{
    return(
        <div className="home">
            <header className="header">
                <h1>Rick and Morty API</h1>
                <p>Look for your favorite characters from the Rick and Morty series and see their most important characteristics</p> 
                <div>
                    <a href="https://twitter.com/jmunoz_dev"><img src="./twitter-brands.svg" alt="" /></a>      
                    <a href="https://github.com/Johan52752"><img src="./github-brands.svg" alt="" /></a>      
                    <a href="https://www.linkedin.com/in/jmunoz-dev/"><img src="./linkedin-brands.svg" alt="" /></a>
                    <span>Johan Muñoz</span>
                </div>
            </header>
            <Cards/>
        </div>

    ) ;
}