import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactForm from './ContactForm';
import ViewAllForms from './ViewAllForms';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ContactForm} />
        <Route path="/view-all" component={ViewAllForms} />
      </Switch>
    </Router>
  );
};

export default App;