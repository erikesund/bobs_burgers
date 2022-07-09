import React from "react";

function EpisodeDetails ({episode, burgers}) {
  if (episode === null){
    return null;
  }
  // const burgerQuote = burgers.filter(burger => burger.episodeUrl === episode.url)
  //   {return burger}

  
  return (
    <div>
      <h3>{episode.name} : Season {episode.season} - Episode {episode.episode}</h3>
      <p>Production Code: {episode.productionCode}</p>
      <p>First Aired: {episode.airDate}</p>
      <p>Total Viewers: {episode.totalViewers}</p>
    </div>
  )
};

export default EpisodeDetails;