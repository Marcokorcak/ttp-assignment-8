import React, {Component} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Credit from './components/Credit';
import Debit from './components/Debit';
import axios from 'axios';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/Login';



class App extends Component {

  constructor() {
    super();

    this.state = {
      accountBalance: 1000000,
      debit: [],
      credit: [],
      currentUser: {
        userName: 'Marco_k',
        memberSince: '05/20/04',
      }
    };
  }


  componentDidMount = () => {

    axios.get()
        .then(response => {
            const debit = response.data;

            const debitAmount = debit.map(debitData => debit.amount);

            let totalDebit = 0;

            for(let i = 0; i < debitAmount.length; i++)
                totalDebit += debitAmount[i];

            this.setState({
                debit: debit,
                accountBalance: this.state.accountBalance - totalDebit
            });
        })
        .catch(err => console.log(err));

    axios.get()
        .then(response => {
            const credit = response.data;

            const creditAmount = credit.map(creditData => credit.amount);

            let totalCredit = 0;

            for(let i = 0; i < credit.length; i++)
                totalCredit += credit[i]

            this.setState({
                credit: credit,
                accountBalance: this.state.accountBalance + totalCredit
            });
        })
        .catch(err => console.log(err));
}

todayDate = () => {

    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2, '0');
    let mm = String(todayDate.getMonth() + 1).padStart(2, '0'); 
    let yyyy = todayDate.getFullYear();

    todayDate = mm + '/' + dd + '/' + yyyy;

    return todayDate;
}

updateDebit = (amnt, desc) => {

    let todayDate = this.todayDate();

    const newDebit = {
        amount: amnt,
        description: desc,
        id: this.state.debit.length,
        date: todayDate
    };

    this.setState({
        accountBalance: this.state.accountBalance - amnt,
        debit: [newDebit].concat(this.state.debit)
    });
}

updateCredit = (amnt, desc) => {

    let todayDate = this.todayDate();

    const newCredit = {
        amount: amnt,
        description: desc,
        id: this.state.credit.length,
        date: todayDate
    };

    this.setState({

        credit: [newCredit].concat(this.state.credit),
        accountBalance: Number(this.state.accountBalance) + Number(amnt)
    });
}
  

  render() {

    const HomeComponent = () => (<Home accountBalance={this.state.accountBalance}/>);
    const UserProfileComponent = () => (
        <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince}/>);
   const LogInComponent = () => (<LogIn user={this.state.currentUser} LogIn={this.LogIn} {...this.props}/>);
   const DebitComponent = () => (
    <Debit addDebit={this.updateDebit} debitData={this.state.debit}
    balance={this.state.accountBalance}/>
);
   const CreditComponent = () => (
    <Credit addCredit={this.updateCredit} creditData={this.state.credit}
    balance={this.state.accountBalance}/>
);


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