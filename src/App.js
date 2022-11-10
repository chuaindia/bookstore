import React from 'react';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/NavigationBar';
import Books from './components/Books';
import Categories from './components/Categories';

class App extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Books />} />
          <Route path="/Categories" element={<Categories />} />
        </Routes>
      </Router>
    );
  }
}
export default App;
