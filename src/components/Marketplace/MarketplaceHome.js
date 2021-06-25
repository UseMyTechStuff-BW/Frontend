
import styled from 'styled-components';
import React, {useState, useEffect } from 'react';
import axios from 'axios';

import MarketplaceCard from './MarketplaceCard';

const Page = styled.div``

const MarketplaceHome = (props) => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        axios.get(`https://usemytechstufflambda.herokuapp.com/api/equipment`)
        .then(response => {
            setItems(response.data)
            console.log(response.data)
        })
        .catch(error => {
            console.log(error);
        })
    }, []);

    return (
        <Page>
            <h1>Marketplace Items</h1>
            <br/>
            <br/>
            <br/>
            {items.map(item => {
                return (
                    <MarketplaceCard key={item.id} item={item}/>
                )
            })}
        </Page>
    )
}

export default MarketplaceHome;