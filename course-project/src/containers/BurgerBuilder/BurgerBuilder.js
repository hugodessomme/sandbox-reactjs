import React, { Component } from 'react';
import axios from '../../axios-orders';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls';
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';
import Spinner from '../../components/UI/Spinner/Spinner';

const INGREDIENT_PRICES = {
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        totalPrice: 4,
        purchasable: false,
        purchasing: false,
        loading: false,
        error: false
    }

    componentDidMount() {
        axios
            .get('/ingredients.json')
            .then(response => {
                this.setState({ ingredients: response.data });
            })
            .catch(error => {
                this.setState({ error: true });
            });
    }

    updatePurchaseState = ingredients => {
        const sum = Object.keys(ingredients).map(ing => {
            return ingredients[ing];
        }).reduce((prev, current) => {
            return prev + current;
        }, 0);

        this.setState({ purchasable: sum > 0 });
    }

    addIngredientHandler = type => {
        // Update ingredients
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        // Update total price
        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;

        this.setState({
            ingredients: updatedIngredients,
            totalPrice: newPrice
        });
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler = type => {
         // Update ingredients
         const oldCount = this.state.ingredients[type];
         
         if (oldCount <= 0) {
             return;
         }

         const updatedCount = oldCount - 1;
         const updatedIngredients = {
             ...this.state.ingredients
         };
         updatedIngredients[type] = updatedCount;
 
         // Update total price
         const priceDeduction = INGREDIENT_PRICES[type];
         const oldPrice = this.state.totalPrice;
         const newPrice = oldPrice - priceDeduction;
 
         this.setState({
             ingredients: updatedIngredients,
             totalPrice: newPrice
         });
         this.updatePurchaseState(updatedIngredients);
    }

    purchaseHandler = () => {
        this.setState({ purchasing: true });
    }

    purchaseCancelHandler = () => {
        this.setState({ purchasing: false });
    }
    
    purchaseContinueHandler = () => {
        // alert('You continue!');
        this.setState({ loading: true });

        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
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
            .then(response => this.setState({ loading: false, purchasing: false }))
            .catch(error => this.setState({ loading: false, purchasing: false }));
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        // 1. Before fetching data, orderSummary is not defined 
        // 1. Before fetching data, burger displays a spinner
        let orderSummary = null;
        let burger = this.state.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

        // 2. When ingredients are fetched, we define orderSummary
        // 2. When ingredients are fetched, we define burger
        if (this.state.ingredients) {
            orderSummary = (
                <OrderSummary 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} 
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler} />
            );
            
            burger = (
                <Auxiliary>
                    <Burger ingredients={this.state.ingredients} />
                    <BuildControls 
                        ingredientAdded={this.addIngredientHandler} 
                        ingredientRemoved={this.removeIngredientHandler} 
                        disabled={disabledInfo} 
                        price={this.state.totalPrice} 
                        purchasable={this.state.purchasable} 
                        ordered={this.purchaseHandler} />
                </Auxiliary>
            );
        }

        // 3. When an order is processing, orderSummary displays a spinner 
        if (this.state.loading) {
            orderSummary = <Spinner />
        }

        return (
            <Auxiliary>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    {orderSummary}
                </Modal>
                {burger}
            </Auxiliary>
        );
    }
}

export default withErrorHandler(BurgerBuilder, axios);