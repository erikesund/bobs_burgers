import React from "react";
import Episode from "./Episode";

function EpisodeList ({episodes, onEpisodeClick}) {

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