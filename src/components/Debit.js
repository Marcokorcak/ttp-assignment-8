import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import AccountBalance from './AccountBalance';

class Debit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            amount: 0.0,
            description: ''
        };
    }



    render() {
        return (
            <div className="debits">
                <title>
                    Debits
                </title>
                <Link to="/"> Home </Link>
                <h4> <AccountBalance accountBalance={this.props.balance} /> </h4>
                <h1> Debits </h1>

                <form>
                    Amount
                    <input type="number" name="amount" onChange={this.onChange}/> <br/>
                    Description
                    <input type="text" name="description" onChange={this.onChange}/> <br/>
                </form>

                <button onClick={() => this.props.addDebit(this.state.amount, this.state.description)}>
                    Add
                 </button>

                {this.props.dataDebit.map(dataDebit =>
                    <div key={dataDebit.id}>
                        <DebitView description={dataDebit.description} amount={dataDebit.amount}
                        date={dataDebit.date} />
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

class DebitView extends Component {

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

export default Debit;