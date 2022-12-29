async function GetChampions(){
    const response = await fetch("http://ddragon.leagueoflegends.com/cdn/12.6.1/data/en_US/champion.json");
    const championList = await response.json();
    
    return championList.data;
}

export default GetChampions;