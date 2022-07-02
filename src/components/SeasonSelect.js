import React from "react";

function SeasonSelect ({episodes}) {
  const uniqueSeasonNumbers = [];
  var seasonOptions = episodes.filter(episode => {
    const isDuplicate = uniqueSeasonNumbers.includes(episode.season);
      if (!isDuplicate) {
        uniqueSeasonNumbers.push(episode.season);
      }
    });

  return (
  <>
  Please select a season:  
  {/* <select>{uniqueSeasonNumbers}</select> */}
  {uniqueSeasonNumbers}
  <select>{seasonOptions}</select>
  <hr></hr>
  </>
  )
}


export default SeasonSelect;