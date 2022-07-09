import React from "react";
import Episode from "./Episode";

function EpisodeList ({episodes, season, onEpisodeClick}) {

  const epBySeason = episodes.filter(episode => episode.season === season);
  console.log(epBySeason);

  const episodeNodes = episodes.map((episode) => {
    return <Episode episode={episode} onClick={onEpisodeClick} key={episode.productionCode}/>
  })

  return (
    <div>
    {episodeNodes}
    </div>
  )
}

export default EpisodeList;