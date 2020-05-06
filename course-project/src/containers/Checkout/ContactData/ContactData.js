import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from '../../../axios-orders';
import Button from '../../../components/UI/Button/Button';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../../store/actions/order';
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
                },
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
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
                valid: false,
                touched: false
            },
            deliveryMethod: {
                tag: 'select',
                config: {
                    options: [
                        { value: 'fastest', label: 'Fastest' },
                        { value: 'cheapest', label: 'Cheapest' },
                    ]
                },
                value: 'fastest',
                validation: {},
                valid: true
            }
        },
        formIsValid: false
    };

    orderHandler = (event) => {
        event.preventDefault();

        const formData = {};
        for (let formElementIdentifier in this.state.orderForm) {
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }

        const order = {
            ingredients: this.props.ingredients,
            price: this.props.totalPrice,
            orderData: formData,
            userId: this.props.userId
        };

        this.props.onOrderBurger(order, this.props.token);
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
        updatedFormElement.touched = true;
        updatedOrderForm[inputIdentifier] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedOrderForm) {
            formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
        }

        this.setState({ orderForm: updatedOrderForm, formIsValid });
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
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangedHandler(event, formElement.id)} />
                ))}
                <Button type="Success" disabled={!this.state.formIsValid}>Order</Button>
            </form>
        );

        if (this.props.loading) {
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

const mapStateToProps = state => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        loading: state.order.loading,
        token: state.auth.token,
        userId: state.auth.userId
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onOrderBurger: (order, token) => dispatch(actions.purchaseBurger(order, token))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withErrorHandler(ContactData, axios)));