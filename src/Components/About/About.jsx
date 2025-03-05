import React, { useState } from "react";
import "./About.css";

const About = () => {
  const [content, setContent] = useState({
    heading3: "ABOUT UNIVERSITY",
    heading2: "Nurturing Tomorrow's Leaders Today",
    paragraph: "Click on a box to see more details."
  });

  const contentData = {
    ex1: {
      heading3: "EXAMPLE 1 - INTRO",
      heading2: "Introduction to Example 1",
      paragraph:
        "This is detailed information about Example 1. It explains the fundamental aspects of this topic."
    },
    ex2: {
      heading3: "EXAMPLE 2 - OVERVIEW",
      heading2: "Understanding Example 2",
      paragraph:
        "Example 2 focuses on key concepts and provides an in-depth explanation of various elements."
    },
    ex3: {
      heading3: "EXAMPLE 3 - ADVANCED",
      heading2: "Deep Dive into Example 3",
      paragraph:
        "Explore the advanced features and implementations of Example 3 in this section."
    },
    ex4: {
      heading3: "EXAMPLE 4 - SUMMARY",
      heading2: "Final Thoughts on Example 4",
      paragraph:
        "A complete summary and conclusion regarding Example 4, summarizing the main takeaways."
    }
  };

  return (
    <div className="about">
      <div className="about-left">
        <div className="ex" onClick={() => setContent(contentData.ex1)}>
          <h1>Example1</h1>
        </div>
        <div className="ex" onClick={() => setContent(contentData.ex2)}>
          <h1>Example2</h1>
        </div>
        <div className="ex" onClick={() => setContent(contentData.ex3)}>
          <h1>Example3</h1>
        </div>
        <div className="ex" onClick={() => setContent(contentData.ex4)}>
          <h1>Example4</h1>
        </div>
      </div>
      <div className="about-right">
        <h3>{content.heading3}</h3>
        <h2>{content.heading2}</h2>
        <p>{content.paragraph}</p>
      </div>
    </div>
  );
};

export default About;
