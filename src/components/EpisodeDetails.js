import React from "react";

function EpisodeDetails ({episode, burgers}) {
  if (episode === null){
    return null;
  }
 
  const burger = burgers.find(burger => burger.episodeUrl === episode.url)
  // if (burger === null){
  //   return;
  // }


  return (
    <div>
      <h3>{episode.name} : Season {episode.season} - Episode {episode.episode}</h3>
      <p>Production Code: {episode.productionCode}</p>
      <p>First Aired: {episode.airDate}</p>
      <p>Total Viewers: {episode.totalViewers}</p>
      <p>Burger of the Day: {burger.name}</p>
    </div>
  )
};

export default EpisodeDetails;