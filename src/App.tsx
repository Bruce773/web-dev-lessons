import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "react-router-scroll-top";
import { Homepage } from "./Homepage";

const App: React.FC = () => {
  return (
    <div style={{ textAlign: "center", margin: "auto" }}>
      <Router>
        {/* <Navbar /> */}
        <ScrollToTop>
          <Switch>
            <Route exact path="/" render={() => <Homepage />} />
            {/* <Route path="/resources" render={() => <Resources />} />
          <Route path="/live-comments" render={() => <LiveComments />} /> */}
          </Switch>
        </ScrollToTop>
      </Router>
    </div>
  );
};

export default App;
