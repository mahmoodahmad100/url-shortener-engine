import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: '',
      link_obj: {}
    };

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.stripHtmlEntities = this.stripHtmlEntities.bind(this);
  }

  stripHtmlEntities(str) {
    return String(str)
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  onChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  onSubmit(event) {
    event.preventDefault();
    const url = '/api/v1/urls';
    const { link } = this.state;

    if (link.length == 0)
      return;

    const body = {
      link
    };

    const token = document.querySelector('meta[name="csrf-token"]').content;
    fetch(url, {
      method: 'POST',
      headers: {
        'X-CSRF-Token': token,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('Network response was not ok.');
      })
      .then(response => this.setState({ link_obj: response }))
      .catch(error => console.log(error.message));
  }

  render() {
    let shortcut_link = '';

    if (Object.keys(this.state.link_obj).length > 0) {
      let shortcut = this.state.link_obj.shortcut
      shortcut_link = 
      <div>
        <hr/>
        <span>
          the URL is:
          <Link to={`/${shortcut}`} target="_blank">
            {window.location.origin}/{shortcut}
          </Link>
        </span>
      </div>
    } 

    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-sm-12 col-lg-6 offset-lg-3">
            <h1 className="font-weight-normal mb-2">
              Enter a long URL
            </h1>
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <input
                  name="link"
                  type="url"
                  className="form-control"
                  required
                  placeholder="valid URL should start with https:// or http:// like: https://example.com"
                  onChange={this.onChange}
                />
              </div>
              <button type="submit" className="btn btn-primary mb-2">
                Create!
              </button>
            </form>
            {shortcut_link}
          </div>
        </div>
      </div>
    );
  }

}

export default Home;