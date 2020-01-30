import React from 'react';
import MenuItem  from '../menu-item/menu-item.component'
import './directory.styles.scss'

class Directory extends React.Component{
    constructor(){
        super();
        this.state = {
            sections : [
                {
                  title: 'hats',
                  imageUrl: 'images/black-and-white-business-fashion-hats-396777.jpg',
                  id: 1,
                  linkUrl: 'shop/hats'
                },
                {
                  title: 'jackets',
                  imageUrl: 'images/assorted-clothes-996329.jpg',
                  id: 2,
                  linkUrl: 'shop/jackets'
                },
                {
                  title: 'sneakers',
                  imageUrl: 'images/two-unpaired-black-and-gray-adidas-sply-350-v2-1032110.jpg',
                  id: 3,
                  linkUrl: 'shop/sneakers'
                },
                {
                  title: 'womens',
                  imageUrl: 'images/woman-wearing-sun-hat-and-white-dress-holding-pink-1382734.jpg',
                  size: 'large',
                  id: 4,
                  linkUrl: 'shop/womens'
                },
                {
                  title: 'mens',
                  imageUrl: 'images/man-in-white-dress-shirt-holding-suit-jacket-1043474.jpg',
                  size: 'large',
                  id: 5,
                  linkUrl: 'shop/mens'
                }
              ]              
        };
    }

    render(){
        return(
            <div className='directory-menu'>
            {this.state.sections.map(({ id, ...otherSectionProps}) => (
                <MenuItem key={id} {...otherSectionProps}/>
            ))}
            </div>    
        );
    }
}

export default Directory;