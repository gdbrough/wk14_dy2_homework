import React from 'react';
import HitList from '../components/HitList';
import Hit from '../components/Hit';

class HitBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hitTunes: []
    };
  }

  componentDidMount(){
    fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
      .then(response => response.json())
      .then(json => this.setState({hitTunes: json.feed.entry}));
  }

  render(){
    return (
      <React.Fragment>
        <h2>Top Tunes</h2>
        <HitList hitTunes={this.state.hitTunes} />
      </React.Fragment>
    );
  }
}

export default HitBox;
