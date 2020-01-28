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
                validation: {
                    required: true
                }
            },
            street: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'Street'
                },
                validation: {
                    required: true
                },
                valid: false
            },
            zipCode: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'ZIP Code'
                },
                validation: {
                    required: true,
                    minLength: 5,
                    maxLength: 5
                },
                valid: false
            },
            country: {
                tag: 'input',
                value: '',
                config: {
                    type: 'text',
                    placeholder: 'Country'
                },
                validation: {
                    required: true
                },
                valid: false
            },
            email: {
                tag: 'input',
                value: '',
                config: {
                    type: 'email',
                    placeholder: 'Your E-Mail'
                },
                validation: {
                    required: true
                },
                valid: false
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
        event.preventDefault();
        this.setState({ loading: true });

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData
        };

        axios
            .post('/orders.json', order)
            .then(response => {
                this.setState({ loading: false});
                this.props.history.push('/');
            })
            .catch(error => this.setState({ loading: false }));
    }

    checkValidity(value, rules) {
        let isValid = true;

        if (rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        if (rules.minLength) {
            isValid = value.length >= rules.minLength && isValid;
        }

        if (rules.maxLength) {
            isValid = value.length <= rules.minLength && isValid;
        }

        return isValid;
    }

    inputChangedHandler =  (event, inputIdentifier) => {
        const updatedOrderForm = {
            ...this.state.orderForm
        };
        const updatedFormElement = {
            ...updatedOrderForm[inputIdentifier]
        };
        updatedFormElement.value = event.target.value;
        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation);
        updatedOrderForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement);
        this.setState({ orderForm: updatedOrderForm });
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
            <form onSubmit={this.orderHandler}>
                {formElementsArray.map(formElement => (
                    <Input
                        key={formElement.id}
                        tag={formElement.config.tag}
                        value={formElement.config.value}
                        config={formElement.config.config}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button type="Success">Order</Button>
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