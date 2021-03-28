import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import CoreLayoutWrapper from "../layout/wrapper/core";
import GoListPanel from "./GoListPanel";

const App = () => {
  console.warn = () => {};

  return (
    <BrowserRouter basename={`/`}>
      <Switch>
        {/* Routing to Main Admin App */}
        <CoreLayoutWrapper>
          <TransitionGroup>
            <Route exact path={`${process.env.PUBLIC_URL}/`}>
              <div style={{ textAlign: "center", padding: "500px" }}>
                <h5>Welcome to GoList</h5>
                <p>
                  Visit our admin app at{" "}
                  <a href="https://app.goli.st">app.goli.st</a>
                </p>
              </div>
            </Route>

            <Route path={`${process.env.PUBLIC_URL}/:listName`}>
              {({ match }) => (
                <CSSTransition
                  in={match != null}
                  timeout={100}
                  classNames="fade"
                  unmountOnExit
                >
                  <div>
                    {match ? (
                      <GoListPanel listName={match.params.listName} />
                    ) : null}
                  </div>
                </CSSTransition>
              )}
            </Route>
          </TransitionGroup>
        </CoreLayoutWrapper>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
