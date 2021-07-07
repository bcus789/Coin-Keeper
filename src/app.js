import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>
  This is from my dashboard component. Hello. Goodbye
  </div>
)

const AddExpensePage = () => (
  <div>This is from my add expense component</div>
);
const EditExpensePage = () => (
  <div>This is from my edit expense components</div>
);
const HelpMe = () => (
  <div>Please help me!</div>
);
const NotFoundPage = () => (
  <div>THIS AN 404! - <a href="/">Go Home</a></div>
);


const routes = (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true} />
      <Route path="/create" component={AddExpensePage} />
      <Route path="/edit" component={EditExpensePage} />
      <Route path="/help" component={HelpMe} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
