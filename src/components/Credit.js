import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Credit extends Component {
    render() {
      return (
          <div>
            Balance: {this.props.accountBalance}
          </div>
      );
    }
  }
  
  export default Credit;