import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
import "normalize.css/normalize.css";
import "./styles/styles.scss";

const ExpenseDashboardPage = () => (
  <div>
    This is from my dashboard component.
  </div>
);

const AddExpensePage = () => (
  <div>This is from my add expense component</div>
);
const EditExpensePage = () => (
  <div>This is from my edit expense components</div>
);
const HelpMe = () => (
  <div>Please help me!
  </div>
);
const NotFoundPage = () => (
  <div>THIS AN 404! - <Link to="/">Get Me Out of Here</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Coin Keeper</h1>
    <NavLink to="/" activeClassName="is-active" exact={true}>
      Home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active">
      Add Expense
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active">
      Edit Expense
    </NavLink>
    <NavLink to="/help" activeClassName="is-active">
      Get Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />
        <Route path="/edit" component={EditExpensePage} />
        <Route path="/help" component={HelpMe} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById("app"));
