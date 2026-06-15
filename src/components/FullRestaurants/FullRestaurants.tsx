import React from 'react';
import Image, { StaticImageData } from 'next/image';
import './FullRestaurants.css';

interface RestaurantItem {
    name: string;
    address: string;
    photo: StaticImageData;
}

interface FullRestaurantsProps {
    list: {
        [key: string]: RestaurantItem;
    };
}

function FullRestaurants({ list }: FullRestaurantsProps) {
    const items = Object.values(list || {});

    return (
        <div className='chooseItem'>
            {items.map((item, index) => (   
                <div key={index} className='chooseCard'>
                    <div className='imgCard'>
                        <Image className='chooseImg' src={item.photo} alt={item.name} />
                    </div>
                    <div className='textCard'>
                        <p className='chooseName'>{item.name}</p>
                        <p className='ChooseAdres'>{item.address}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default FullRestaurants;