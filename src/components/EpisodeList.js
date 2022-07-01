import React from "react";
import Episode from "./Episode";

function EpisodeList ({episodes}) {
  const episodeNodes = episodes.map((episode) => {
    return <Episode episode={episode} key={episode.productionCode}/>
  })

  return (
    <div>
    {episodeNodes}
    </div>
  )
}

export default EpisodeList;