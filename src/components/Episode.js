import React from "react";

const Episode = ({episode, onClick}) => {
  function handleEpisodeSelect() {
    onClick(episode);
  }
return (
<p>
<span onClick={handleEpisodeSelect}>{episode.name} : Season {episode.season} - Episode {episode.episode}</span>
</p>
)
}
export default Episode;