import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
        <div>
            <Link to="/userProfile">User Profile</Link>
          <h1>Bank of React</h1>
          <img src="https://png.pngtree.com/png-vector/20190225/ourmid/pngtree-concept-banking-logo-png-image_712967.jpg" alt="bank"/>
          <AccountBalance accountBalance={this.props.accountBalance}/>
          <Link to='/Login'>Login</Link>
        </div>
    );
  }
}

export default Home;