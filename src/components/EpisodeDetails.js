import React from "react";

function EpisodeDetails ({episode}) {
  if (episode === null){
    return null;
  }
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