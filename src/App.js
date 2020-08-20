import React from 'react';
import { Route } from 'react-router-dom'
import Landing from './pages/landingpage'//import page
import Formpage from './pages/formpage'

import Navbar from './components/navbar'//import component

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div>
        {/* NavbarComp : merupakan component yg di import dari file navbar.js, karena navbar muncul disetiap page maka di import di App.js  
            Cara memberi data pada components react bisa melalui props jika component ya dibuat dengan functional component.
            Props dibuat didalam <tag> componentnya.
            Examp : <Component_yg_di_import namaProps=data>props.children</Component_yg_di_import>
            contoh code dibawah ini 
            ⬇
            ⬇        
        */}
        <Navbar />
        <Route path="/" component={Landing} exact/>
        <Route path="/form" component={Formpage} />
      </div>
    );
  }
}

export default App;