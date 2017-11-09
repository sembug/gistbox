import React, { Component } from 'react';
import Gist from './Gist';
import GistAddForm from './GistAddForm';
import axios from 'axios'

class GistBox extends Component {
    constructor() {
        super();

        this.state = {
            gists: []
        };

        this.addGist = this.addGist.bind(this);
    }
    addGist(username) {
        var url = `https://api.github.com/users/${username}/gists`;

        axios.get(url).then(response => {
            var gists = response.data;
            console.log(gists)
            this.setState({ gists: gists });
        })
    }
    render() {
          return (
            <div>
              <h1>GistBox</h1>
      
              <GistAddForm onAdd={this.addGist} />
              <hr />    
              {this.state.gists &&
              <ul className="list-group">
                {this.state.gists.map(function(gist, index) {
                return <Gist
                        key={gist.id}
                        gist={gist} />;
                }.bind())}
              </ul>
              }
            </div>
          );
    }
}

export default GistBox;
