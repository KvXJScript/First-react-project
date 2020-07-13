import React, {
  Component
} from 'react';
import '../styles/App.css';
import {
  BrowserRouter as Router
} from 'react-router-dom';
import Header from "../layouts/Header";
import Nav from "../layouts/Nav";
import Main from "../layouts/Main";
import Footer from "../layouts/Footer";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header>
            {<Header/>}
          </header>
          <main>
            <aside>
            {<Nav/>}
            </aside>
            <section className="page">
            {<Main/>}
            </section>
          </main>
          <footer>
            {<Footer/>}
          </footer>
       </div>
      </Router>
    );
  }
}

export default App;