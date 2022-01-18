import React, {Component} from 'react';
import AccountBalance from './AccountBalance';
import {Link} from 'react-router-dom';

class Credit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0.00,
            description: '',
        };
    }

 
    render() {
        return (
            <div className="credits">
                <title>
                    Credits
                </title>

                <Link to="/"> Home </Link>
                <h4> <AccountBalance accountBalance={this.props.balance} /> </h4>
                <h1> Credits </h1>

                <form>
                    Amount: <input type="number" name="amount" onChange={this.onChange}/> <br/>
                    Description: <input type="text" name="description" onChange={this.onChange}/> <br/>
                </form>

                <button onClick={() => this.props.addCredit(this.state.amount, this.state.description)}>
                    Add
                </button>

                {this.props.dataCredit.map(dataCredit =>
                    <div key={dataCredit.id}>
                        <CreditView description={dataCredit.description}
                        amount={dataCredit.amount} date={dataCredit.date} />
                    </div>
                )}
            </div>
        );
    }

};

onChange = (event) => {

    this.setState({
        [event.target.name]: event.target.value
    });
}


class CreditView extends Component {

    render() {
        return(
            <div>
                <h3> {this.props.description} </h3>
                <p> Purchase Amount: ${this.props.amount} </p>
                <p> Date of Purchase: {this.props.date} </p>
            </div>
        );
    }
}

export default Credit;