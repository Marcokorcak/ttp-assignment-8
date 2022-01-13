import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';
import Credit from './components/Credit';
import Debit from './components/Debit';



class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 14568.27,
      debit: [],
      credit: [],
      currentUser: {
        userName: 'Marco_k',
        memberSince: '05/22/98',
      }
    };
  }



  LogIn = (Info) => {
    const newUser = {...this.state.currentUser}
    newUser.userName = Info.userName
    this.setState({currentUser: newUser})
  }

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
   const LogInComponent = () => (<LogIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>);
   const DebitComponent = () => (<LogIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>);
   const CreditComponent = () => (<LogIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>);


    return (
        <Router>

          <div>
          <Routes>
            <Route exact path="/userProfile" element={<UserProfileComponent/>}/>
            <Route exact path="/login" element={<LogInComponent/>}/>
            <Route exact path="/" element={<HomeComponent/>}/>
            <Route exact path="/Debit" element={<DebitComponent/>}/>
            <Route exact path="/Credit" element={<CreditComponent/>}/>
            </Routes>
          </div>

        </Router>
    );
  }

}

export default App;