import Image, { StaticImageData } from 'next/image';
import './Reviews.css';

interface ReviewItem {
    name: string;
    photo: StaticImageData; 
    text: string;
}

interface ReviewsProps {
    title: string;
    lists: {
        [key: string]: ReviewItem;
    };
}

export default function Reviews({ title, lists }: ReviewsProps) {
    const reviewsArray = lists ? Object.values(lists) : [];

    return (
        <section className="reviewsSection">
            <h2 className="reviewsTitle">{title}</h2>

            <div className="reviewsGrid">
                {reviewsArray.map((review, idx) => (
                    <div key={idx} className="reviewCard">
                        
                        <div className="cardTopHeader">
                            <div className="authorInfo">
                                <div className="avatarWrapper">
                                    <Image 
                                        src={review.photo} 
                                        alt={review.name} 
                                        fill 
                                        className="authorAvatar"
                                        sizes="32px"
                                    />
                                </div>
                                <span className="authorName">{review.name}</span>
                            </div>

                            <div className="starsRating">
                                {[...Array(5)].map((_, starIdx) => (
                                    <svg 
                                        key={starIdx} 
                                        width="18" 
                                        height="17" 
                                        viewBox="0 0 18 17" 
                                        fill="none" 
                                        className="starIcon"
                                    >
                                        <path 
                                            d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.29 16.2812L9 12.4377L3.71002 16.2812L5.73056 10.0623L0.440492 6.21885H6.97938L9 0Z" 
                                            stroke="#FF5E32" 
                                            strokeWidth="1.5"
                                        />
                                    </svg>
                                ))}
                            </div>
                        </div>

                        {/* Текст отзыва */}
                        <p className="reviewText">{review.text}</p>
                        
                    </div>
                ))}
            </div>
        </section>
    );
}