import React, { Component } from 'react';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import axios from '../../axios-orders';
import Order from '../../components/Order/Order';

class Orders extends Component {
    state = {
        orders: [],
        loading: true
    }
    componentDidMount() {
        axios.get('/orders.json')
            .then(response => {
                const orders = [];

                for (let key in response.data) {
                    orders.push({
                        ...response.data[key],
                        id: key
                    });
                }

                this.setState({ orders, loading: false });
            })
            .catch(error => this.setState({ loading: false }))
    }

    render() {
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order key={order.id} ingredients={order.ingredients} price={+order.price} />
                ))}
            </div>
        );
    }
}

export default withErrorHandler(Orders, axios);