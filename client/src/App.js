import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import "./App.css";
import { LandingPage } from "./Components/LandingPage";
import { Navbar } from "./Components/Navbar";
import {WeekPage} from "./Components/WeekPage"

function App() {
  /**
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    fetch("/greeting")
      .then((res) => res.json())
      .then((data) => console.log(data));

    fetch("/links")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
        <p>{!data ? "Loading..." : data}</p>

  */
  return (
    <div className="App">
        
    
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="Week" element={<WeekPage/>}/>
        </Routes>
      </div>
  );
}

export default App;
