import React, { Component } from 'react';
import './App.css';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      users: []
    }
  }
  componentDidMount() {
    fetch('http://localhost:3000/users')
      .then(response => response.json())
      .then(res => {
        if (res && res.data) {
          //console.log(res.data)
          this.setState({ users: [...this.state.users, ...res.data] })
        }
      });
  }

  // renderUsersData() {
  //   if (this.state.users.length <= 0) {
  //     return <div>Loading..</div>

  //   }
  //   else {
  //     return this.state.users.map((val, key) => {
  //       return <div key={key}>
  //         <h3>Name:{val.name} Age: {val.age} Education: {val.education}</h3></div>
  //     })
  //   }
  // }

  render() {
    if (this.state.users.length <= 0) {
      return <div style={{textAlign:'center'}}>Loading..</div>

    }
    return (
      <div className="App">
	   <header style={{ backgroundColor: "#283747",borderBottom: "1px solid #E7E7E7",textAlign: "center",padding: "18px",position: "fixed",left: "0",top: "0",
    height: "30px",width: "100%", color:'#fff'}}><h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;LIST OF USERS</h3></header>
       // <h3>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;List of users</h3>
        {/* {this.renderUsersData()}  */}
        <ul>
        {
          this.state.users.map(function(user){
            return <li key={user.id}>
            <div style={{borderBottom: '0.5px solid black',backgroundColor: "#D7DBDD"}}>
            <ul><h4>Name:{user.name}</h4></ul>
            <ul><h4>Age:{user.age}</h4></ul>
            <ul><h4>Education:{user.education}</h4></ul>
            </div>
            </li>
          
          })
        }
        </ul>
		 <footer style={{ backgroundColor: "#283747",borderTop: "1px solid #E7E7E7",textAlign: "center",padding: "17px",position: "fixed",left: "0",bottom: "0",
    right:"0",height: "3px",width: "100%", color:'#fff'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Copyright &copy; Shridevi Patil </footer>
      </div>

    );
  }
}

export default App;
