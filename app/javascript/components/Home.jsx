import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1>Enter a long URL</h1>
        <form action="#">
            <input className="form-control" placeholder="https://example.com"/>
            <button className="btn btn-primary mt-3">Create!</button>
        </form>
        <hr/>
        <span>
          the URL is: <a href="https://example.com" target="_blank">https://example.com</a>
        </span>
      </div>
    </div>
  </div>
);