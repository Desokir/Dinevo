import React from 'react';
import Image from 'next/image';
import './SliderFood.css';

interface CategoryItem {
    name: string;
    photo: any;
}

interface Props { 
    sliderInfo: {
        [key: string]: CategoryItem;
    };
}

const FoodCard: React.FC<{ item: CategoryItem }> = ({ item }) => {
    return (
        <div className="food-card">
            <div className="food-card-icon-wrap">
                <Image 
                    src={item.photo} 
                    alt={item.name}
                    className="food-card-img"
                />
            </div>
            <span className="food-card-title">
                {item.name}
            </span>
        </div>
    );
};

function SliderFood({ sliderInfo }: Props) {
    const categoriesArray = Object.values(sliderInfo);

    return (
        <div className="slider-food-container">
            <div className="slider-food-track animate-infinite-scroll">
                {categoriesArray.map((item, index) => (
                    <FoodCard key={`orig-${index}`} item={item} />
                ))}
                {categoriesArray.map((item, index) => (
                    <FoodCard key={`clone-${index}`} item={item} />
                ))}
            </div>
        </div>
    );
}

export default SliderFood;