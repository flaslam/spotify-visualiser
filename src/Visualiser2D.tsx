import React from "react";

interface Visualiser2DProps {
  artists: any[];
  tracks: any[];
}

const Visualiser2D: React.FC<Visualiser2DProps> = (props) => {
  return (
    <div>
      <div className="statistics">
        <>
          <div className="mainStats">
            <div>
              <h1>Your top songs</h1>
              {props.tracks.map((track, index) => {
                return (
                  <div key={index}>
                    {index + 1}. {track.name} by {track.artists[0].name}
                  </div>
                );
              })}
            </div>
            <div>
              <h1>Your top artists</h1>
              {props.artists.map((item, index) => {
                return (
                  <div key={index}>
                    {index + 1}. {item.name}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="imagesContainer">
            {props.artists.map((item, index) => {
              return (
                <div key={index} className="imageContainer">
                  <img src={item.images[0].url} alt={item.name} />
                </div>
              );
            })}
          </div>
        </>
      </div>
    </div>
  );
};

export default Visualiser2D;
