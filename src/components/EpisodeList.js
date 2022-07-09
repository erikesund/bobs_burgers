import React from "react";
import Episode from "./Episode";

function EpisodeList ({episodes, season, onEpisodeClick}) {
  const episodeNodes = episodes.map((episode) => {
    if (episode.season == season) {
    return <Episode episode={episode} onClick={onEpisodeClick} key={episode.productionCode}/>
  }
  })

  return (
    <div>
    {episodeNodes}
    </div>
  )}


export default EpisodeList;