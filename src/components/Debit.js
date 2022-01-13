import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Debit extends Component {
    render() {
      return (
          <div>
            Balance: {this.props.accountBalance}
          </div>
      );
    }
  }
  
  export default Debit;