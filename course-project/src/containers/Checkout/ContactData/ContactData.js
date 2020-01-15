import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';

import css from './ContactData.module.css';

class ContactData extends Component {
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
        },
        loading: false
    };

    orderHandler = (event) => {
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            customer: {
                name: 'Hugo Dessomme',
                address: {
                    street: 'Test Street',
                    zipCode: '43000',
                    country: 'France'
                },
                email: 'test@test.com'
            },
            deliveryMethod: 'fastest'
        };

        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }));
    }

    render() {
        let form = (
            <form>
                <input type="text" className={css.Input} name="name" placeholder="Your Name" />
                <input type="text" className={css.Input} name="email" placeholder="Your Mail" />
                <input type="text" className={css.Input} name="street" placeholder="Street" />
                <input type="text" className={css.Input} name="postalCode" placeholder="Postal Code" />
                <Button type="Success" clicked={this.orderHandler}>Order</Button>
            </form>
        );

        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className={css.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        )
    }
}

export default withRouter(ContactData);