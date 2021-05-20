import React from "react";
import Synonyms from "./Synonyms";
import Examples from "./Examples";

import { Title, Paragraph, Section } from "../styled-components/Meaning-css";

function Meaning(props) {
  return (
    <Section className="Meaning">
      <Title className="uppercase">{props.meaning.partOfSpeech}</Title>
      {props.meaning.definitions.map((definition, index) => {
        let formattedIndex = ++index;
        return (
          <div key={index}>
            <Paragraph className="definition">
              {formattedIndex}. {definition.definition}
            </Paragraph>
            <Examples examples={definition.example} />
            <Synonyms synonyms={definition.synonyms} />
          </div>
        );
      })}
    </Section>
  );
}

export default Meaning;
