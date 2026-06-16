import Image, { StaticImageData } from 'next/image';
import './ResturantInOdessa.css';

// Описываем структуру одного ресторана
interface RestaurantItem {
    name: string;
    adres: string;
    img: StaticImageData; // Поддерживает импорт объекта картинки
}

// Описываем пропсы для самого компонента
interface ResturantInOdessaProps {
    lists: {
        [key: string]: RestaurantItem;
    };
}

export default function ResturantInOdessa({ lists }: ResturantInOdessaProps) {
    // Превращаем объект с ключами d1, d2, d3 в обычный массив, чтобы отрендерить через map
    const restaurantsArray = Object.values(lists);

    return (
        <section className="restaurantsSection">
            {/* Заголовок из макета */}
            <h2 className="gridTitle">Ресторани в м. Одеса</h2>

            {/* Сетка круглых карточек заведений */}
            <div className="restaurantsGrid">
                {restaurantsArray.map((restaurant, idx) => (
                    <div key={idx} className="restaurantCard">
                        {/* Круглая обертка для картинки */}
                        <div className="cardImageWrapper">
                            <Image 
                                src={restaurant.img} 
                                alt={restaurant.name} 
                                fill 
                                className="cardImage"
                                sizes="(max-width: 1200px) 100vw, 252px"
                            />
                        </div>
                        {/* Центрированная текстовая информация */}
                        <div className="cardInfo">
                            <h3 className="restaurantName">{restaurant.name}</h3>
                            <p className="restaurantAddress">{restaurant.adres}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}