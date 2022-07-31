import React from "react";
import "../Episode.css"

const Episode = ({episode, onClick}) => {
  function handleEpisodeSelect() {
    onClick(episode);
  }
return (
<p className="episode">
<span onClick={handleEpisodeSelect}>{episode.name} : Season {episode.season} - Episode {episode.episode}</span>
</p>
)
}
export default Episode;