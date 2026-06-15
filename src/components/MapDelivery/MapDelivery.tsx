"use client";

import './MapDelivery.css';

const citiesList = [
    { id: 'kyiv', name: 'Київ' },
    { id: 'dnipro', name: 'Дніпро' },
    { id: 'odesa', name: 'Одеса' },
    { id: 'kharkiv', name: 'Харків' },
    { id: 'ivano-frankivsk', name: 'Івано-Франківськ' },
    { id: 'vinnytsia', name: 'Вінниця' },
    { id: 'lviv', name: 'Львів' },
    { id: 'chernihiv', name: 'Чернігів' }
];

export default function DeliveryMap() {
    return (
        <section className="deliverySection">
            <h2 className="deliveryTitle">Доставка по всій Одесі!</h2>
            
            {/* Твоя рабочая карта Google Maps */}
            <div className="mapContainer">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d150795.6610995434!2d30.612866037482224!3d46.45750929249514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sua!4v1781518816835!5m2!1sru!2sua"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

            {/* Сетка кнопок из макета */}
            <div className="citiesGrid">
                {citiesList.map((city) => (
                    <button
                        key={city.id}
                        className={`cityButton ${city.id === 'odesa' ? 'active' : ''}`}
                        disabled={city.id !== 'odesa'}
                    >
                        {city.name}
                    </button>
                ))}
            </div>
        </section>
    );
}