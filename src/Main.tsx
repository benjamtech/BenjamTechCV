import React from "react";
import { StoreOne } from "./StoreSystem";
import personImage from "./person.jpg";
import "./Main.css";

interface PropShape {
  data: StoreOne | null;
}

export default (props: PropShape) => {
  if (props.data === null) return null;

  // One of the nice features with React is to input data directly into HTML
  // One simply have to insert the JS data into {brackets} like this.
  return (
    <div className="mainPage">
      <div className="centeredBox">
        <div className="contentBox row firstBox">
            <div className="column textBox">
              <h1>{props.data.name}</h1>
              <p>Born the {props.data.born}</p>
              <a target="_blank" rel="noopener noreferrer" href={props.data.addressLink}>Address: {props.data.address}</a>
            </div>

            <img src={personImage} alt="person" />
          </div>

        <div className="contentBox column">
          <h2>Education</h2>
          <p>{props.data.education}</p>
        </div>

        <div className="contentBox column">
          <h2>Work</h2>
          <p>{props.data.workexperience}</p>
        </div>

        <div className="contentBox column">
          <h2>Other</h2>
          <p>{props.data.otherinfo}</p>
        </div>
      </div>
    </div>
  );
};
