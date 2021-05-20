import React from "react";

import {
  StyledImage,
  StyledRow,
  StyledContainer,
  Section,
} from "../styled-components/Photos-css";

function Photos(props) {
  if (props.photos) {
    return (
      <Section>
        <StyledContainer>
          <StyledRow className="row">
            {props.photos.map((photo, index) => {
              return (
                <div className="col-4" key={index}>
                  <a href={photo.src.original} target="_blank" rel="noreferrer">
                    <StyledImage
                      src={photo.src.landscape}
                      alt={props.alt}
                      className="img-fluid"
                    ></StyledImage>
                  </a>
                </div>
              );
            })}
          </StyledRow>
        </StyledContainer>
      </Section>
    );
  } else {
    return null;
  }
}

export default Photos;
