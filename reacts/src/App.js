import logo from './logo.svg';
import React, {Component} from 'react';
import TOC from "./components/TOC";
import Subject from './components/Subject';
import Content from './components/Content';
import './App.css';

class App extends Component{
  render(){
    return(
      <div className="App">
        <Subject title="WEB" sub="world wide web!"></Subject>
        <Subject title="React" sub="for UI"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is HyperText Markup"></Content>
      </div>
    );
  }
}

export default App;