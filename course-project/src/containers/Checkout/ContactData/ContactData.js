import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

import css from './ContactData.module.css';

class ContactData extends Component {
    state = {
        orderForm: {
            name: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
            },
            street: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'Street'
                },
            },
            zipCode: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
            },
            country: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'Country'
                },
            },
            email: {
                tag: 'input',
                value: '',
                config: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
            },
            deliveryMethod: {
                tag: 'select',
                config: {
                    options: [
                        { value: 'fastest', label: 'Fastest' },
                        { value: 'cheapest', label: 'Cheapest' },
                    ]
                }
            }
        },
        loading: false
    };

    orderHandler = (event) => {
        this.setState({ loading: true });

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice
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
        const formElementsArray = [];
        for (let key in this.state.orderForm) {
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            })
        }

        let form = (
            <form>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        tag={formElement.config.tag}
                        value={formElement.config.value}
                        config={formElement.config.config} />
                ))}
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