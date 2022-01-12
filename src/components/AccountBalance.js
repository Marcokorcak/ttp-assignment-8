import React, {Component} from 'react';
import './AccountBalance.css'

class AccountBalance extends Component {
  render() {
    return (
        <div>
          Balance: {this.props.accountBalance}
        </div>
    );
  }
}

export default AccountBalance;