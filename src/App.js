import React from 'react';
import './App.css';
import Login from './components/Login';

class App extends React.Component {

constructor(props){
  super(props);
  this.state = {index: sessionStorage.getItem("index")}
  this.handleIndex = this.handleIndex.bind(this);
}

handleIndex(i){
    this.setState({index: i});
    sessionStorage.setItem("index",i);
}

render(){
   switch(this.state.index){
      case 0: 
        return(
          <Login
              index = {this.state.index}
            />
        );
        default:
          return(
           
            <Login index = {this.state.index}
            handleIndex = {this.handleIndex}
          />
          );


   }
  }
}

export default App;
