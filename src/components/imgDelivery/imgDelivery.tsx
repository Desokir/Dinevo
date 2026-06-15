import './imgDelivery.css';
import Image, { StaticImageData } from 'next/image';

interface ItemsProps {
    title: string;
    img: StaticImageData;
}

function HoroImg({ title, img }: ItemsProps) {
    return (
        <div className='HoroImgContainer'>
            <div className='HoroImgContent'>
                <h1 className='titleNameInPage'>{title}</h1>
                <div className='imgHeroWrapper'>
                    <Image 
                        src={img} 
                        alt={title} 
                        className='imgHero' 
                        priority 
                    />
                </div>
            </div>
        </div>
    );
}

export default HoroImg;