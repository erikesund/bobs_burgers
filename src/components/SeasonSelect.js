import React from "react";

function SeasonSelect ({seasons, onSeasonSelected}) {
  const seasonOptions = seasons.map((season, index) => (
    <option key={season} value={season}>{season}</option>)
    )

    function onChange(e) {
      const season = e.target.value;
      onSeasonSelected(season);
    }

  return (
  <>
  Please select a season:  
  <select onChange={onChange}>{seasonOptions}</select>
  <hr></hr>
  </>
  )
}


export default SeasonSelect;