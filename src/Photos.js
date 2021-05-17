import React from "react";

function Photos(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="Photos">
        {props.photos.map((photo, index) => {
          return <img src={photo.src.landscape} alt={props.alt} key={index} />;
        })}
      </section>
    );
  } else {
    return null;
  }
}

export default Photos;
