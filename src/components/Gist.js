import React, { Component } from 'react';

class Gist extends Component {
  render() {
        return (
            <li className="list-group-item">
                <a href={this.props.gist.html_url}> {this.props.gist.description || 'No description'} </a>
            </li>
        );
    }
};
export default Gist;