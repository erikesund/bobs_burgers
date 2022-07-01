import React from "react";

const Episode = ({episode}) => {

return (
<p>
<span>{episode.name}: Season {episode.season} - Episode {episode.episode}</span>
</p>
)
}
export default Episode;