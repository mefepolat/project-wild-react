import Champions from "./Champions";

import { useState, useEffect } from "react";
import axios from "axios";



function Home(){
    const [state, setState] = useState(""); 
    const [champions, setChampions] = useState("");
    useEffect(() => {
        setState('Loading champions...');
        axios.get("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json")
        .then((response) => {
            console.log(response);
            setChampions(response.data);
            setState('Success!');
        })
        .catch((error) => {
            setState('Error!');
            console.log(error);
        })
    }, [])
    
    
    return ( 
        <div className="home">
            <Champions champions={champions.data} />
        </div>
     );
}
 
export default Home;