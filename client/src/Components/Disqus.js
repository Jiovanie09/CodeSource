import React, { Component } from "react"
import Disqus from "disqus-react"
import '../App.css';


export default class extends Component {

    
  render() {
    const disqusShortname = "codesource-1"
    const disqusConfig = {
      url: "http://localhost:3000/blog/",
      identifier: "/nodejs-beginner",
      title: "Title of Your Article",
      language: "en"


    }

    return (
      <div className="article-container">
      <h4>Comments</h4>
        <Disqus.DiscussionEmbed
          shortname={disqusShortname}
          config={disqusConfig}
        />
      </div>
    )
  }
}