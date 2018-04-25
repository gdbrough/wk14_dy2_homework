import React, {Component} from "react";
import Hit from "./Hit";
import "../App.css";

class HitList extends Component{
  render(){
    if(!this.props.hitTunes.length) return null;
    const hitList = this.props.hitTunes.map((hit, index) => {
      return(
        <Hit key={index} position={index + 1} name={hit.title.label}
          title={hit["im:name"].label} cover={hit["im:image"][2].label}>
        </Hit>
      );
    });
    return (
      <React.Fragment>
        {hitList}
      </React.Fragment>
    )
  }
}

export default HitList;
