import React from "react";

function EpisodeDetails ({episode, burgers}) {
  if (episode === null){
    return null;
  }
  
  const findBurgerOTD = () => {     
    let foundBurger = burgers.find(burger => burger.episodeUrl === episode.url)
    if(foundBurger == null){
      return null//"There were no Burger of the Day's in this episode :("
    } 
    else {
      return foundBurger
    }
  }

  let foundBurger = findBurgerOTD()  
  
  return (
    <div>
      <h3>{episode.name} : Season {episode.season} - Episode {episode.episode}</h3>
      <p>Production Code: {episode.productionCode}</p>
      <p>First Aired: {episode.airDate}</p>
      <p>Total Viewers: {episode.totalViewers}</p>
      <p>Burger of the Day: { 
        foundBurger != null?  foundBurger.name : "hi erik, burger was null"
      }</p>
      {foundBurger != null? <p>Price: {foundBurger.price}</p>: null}
    </div>
  )
};

export default EpisodeDetails;