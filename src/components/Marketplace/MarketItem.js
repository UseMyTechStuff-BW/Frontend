import styled from 'styled-components';
import React, {useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';
import { useHistory } from 'react-router-dom';

const Page = styled.div``

const MarketItem = (props) => {
    const [item, setItem] = useState([]);
    const { equipment_id } = useParams();
    const { push } = useHistory();

    let itemId = equipment_id;

    useEffect(()=> {
        axios
        .get(`https://usemytechstufflambda.herokuapp.com/api/equipment/${itemId}`)
        .then(res => {
            setItem(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [itemId]);

    const routeToCart = () => {
        localStorage.setItem('cart', item)
        console.log(localStorage.cart)
        push('/renter/cart')
    }

    const routeToMarket = () => {
        push('/marketplace')
    }

    return(
        <Page>
           <p>{item.name}</p>
           <p>{item.description}</p>
           <img src={item.imgURl} alt='' width='200px' height='200px'></img>
           <button onClick={routeToCart}>Rent</button>
           <button onClick={routeToMarket}>Back to Marketplace</button>
        </Page>
    )
}

export default MarketItem;