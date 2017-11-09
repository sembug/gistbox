import React, { Component } from 'react';

class GistAddForm extends Component {
    constructor() {
        super();

        this.state = {
            username: ''
        };

        this.onChange = this.onChange.bind(this);
        this.addGist = this.addGist.bind(this);
    }
    onChange(e) {
        this.setState({ username: e.target.value });
    }

    addGist(e) {
        e.preventDefault();

        this.props.onAdd(this.state.username);
        this.setState({ username: '' });
    }   
    render() {
        return (
            <div>
              <form className="form-class" onSubmit={this.addGist}>
                <input value={this.state.username} onChange={this.onChange} placeholder="Type a GitHub username..." />
                <button>Fetch Latest Gist</button>
              </form>
            </div>
        );
    }
}

export default GistAddForm;
