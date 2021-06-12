import "./App.css";
import Navbar from "./contents/navbar";
import Main from "./contents/main";
import { useState } from "react";

function App() {
  const [sideBarShown, setSideBarShown] = useState(false);
  return (
    <div className="App">
      <Navbar toggleSideBar={() => setSideBarShown(!sideBarShown)} />
      <Main
        active={sideBarShown}
        toggleSideBar={() => setSideBarShown(!sideBarShown)}
      />
    </div>
  );
}

export default App;
