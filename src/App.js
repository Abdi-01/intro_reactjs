import React from 'react';
import { Route } from 'react-router-dom'
import Landing from './pages/landingpage'
import Formpage from './pages/formpage'
import Navbar from './components/navbar'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        <Navbar />
        <Route path="/" component={Landing} exact/>
        <Route path="/form" component={Formpage} />
      </div>
    );
  }
}

export default App;