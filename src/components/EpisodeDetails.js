import React from "react";
import "../EpisodeDetails.css";
import BurgerOfTheDay from "./BurgerOfTheDay";

function EpisodeDetails ({episode, burgers}) {
  if (episode === null){
    return null;
  }
  
  const findBurgerOTD = () => {     
    let foundBurger = burgers.find(burger => burger.episodeUrl === episode.url)
    if(foundBurger == null){
      return null
    } 
    else {
      return foundBurger
    }
  }

  let foundBurger = findBurgerOTD()  
  
  return (
    <div id="episode-details-box">
      <h3>{episode.name} : Season {episode.season} - Episode {episode.episode}</h3>
      <p>Production Code: {episode.productionCode}</p>
      <p>First Aired: {episode.airDate}</p>
      <p>Total Viewers: {episode.totalViewers}</p>
      <BurgerOfTheDay foundBurger={foundBurger}/>
    </div>
  )
};

export default EpisodeDetails;