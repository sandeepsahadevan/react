import React from 'react';

import SHOP_DATA from './shop.data.js';

class ShopPage extends React.Component{
    constructor(props){
        super(props);    

        this.state = {
            collections : SHOP_DATA
        };
    }
    
    return() {
        return (<div>Shop Page</div>);
    }
}

export default ShopPage;