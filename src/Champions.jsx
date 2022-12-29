const Champions = (props) => {
    
    const champs = props.champions;
    console.log(champs);
   
    return ( 
        <div className="champion" key="1"> 
            {Object.values(champs).map((champ) => (
                <div className="champions" key={champ.id}>{champ.name}</div>
                ))}
            
        </div>
     );
}
 
export default Champions;



