import React from "react";
import Episode from "./Episode";

function EpisodeList ({episodes, season, onEpisodeClick}) {
  const epBySeason = episodes.filter(episode => episode.season === season)
  // return <Episode episode={episode} onClick={onEpisodeClick} key={episode.productionCode}/>
  

  const episodeNodes = episodes.map((episode) => {
    return <Episode episode={episode} onClick={onEpisodeClick} key={episode.productionCode}/>
  })

  return (
    <div>
    {/* {epBySeason} */}
    {episodeNodes}
    </div>
  )}


export default EpisodeList;