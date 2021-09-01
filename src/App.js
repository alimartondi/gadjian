// import Navbar from "./components/navbar";
// import Main from "./components/main";
// import { useState } from "react";
import Sidebar from "./components/sidebar";
import Project from "./pages/project";
import Dashboard from "./pages/dashboard";
import { Route, Switch } from "react-router-dom";

function App() {
  // const [sideBarShown, setSideBarShown] = useState(false);
  return (
    <div className="App md:flex px-3 h-screen bg-indigo-900">
      <Sidebar />
      <div className="w-full overflow-y-auto rounded-xl bg-gray-50 px-6">
        {/* <Navbar /> */}
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/project" component={Project} />
        </Switch>
        {/* <Project /> */}
      </div>
    </div>
  );
}

export default App;

// toggleSideBar={() => setSideBarShown(!sideBarShown)}
// active={sideBarShown}
// toggleSideBar={() => setSideBarShown(!sideBarShown)}
