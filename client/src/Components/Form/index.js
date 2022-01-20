import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [week, setWeek] = useState("1");

  async function handleSubmit(e) {
    e.preventDefault();
    console.log("submit button log");
    console.log(name, link, week);
    // postData(name, link, week);
    await fetch("/api/links", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: name, link: link, week: week }),
    });
    setName("");
    setLink("");
    alert("Resource created successfully!");
  }

  function handleChange(e) {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "link") {
      setLink(e.target.value);
    } else if (e.target.name === "week") {
      setWeek(e.target.value);
    }
  }

  return (
    <>
      <Link to="/">
        <button className="button home-button">Home</button>
      </Link>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Resource Descriptor:</label>
        <input
          name="name"
          type="text"
          onChange={handleChange}
          value={name}
          placeholder="eg. NPM documentation"
          required={true}
        ></input>
        <label htmlFor="link">Resource URL:</label>
        <input
          name="link"
          type="url"
          onChange={handleChange}
          value={link}
          placeholder="eg. https://docs.npmjs.com"
        ></input>
        <label htmlFor="week">Select Week:</label>
        <select name="week" onChange={handleChange} value={week}>
          <option value="1">Week 1</option>
          <option value="2">Week 2</option>
          <option value="3">Week 3</option>
          <option value="4">Week 4</option>
          <option value="5">Week 5</option>
          <option value="6">Week 6</option>
          <option value="7">Week 7</option>
          <option value="8">Week 8</option>
          <option value="9">Week 9</option>
          <option value="10">Week 10</option>
          <option value="11">Week 11</option>
          <option value="12">Week 12</option>
          <option value="13">Week 13</option>
          <option value="14">Week 14</option>
          <option value="15">Week 15</option>
          <option value="16">Week 16</option>
        </select>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};

export default Form;
