import Image, { StaticImageData } from 'next/image';
import './OurHistori.css';

interface Items {
    icon: StaticImageData | string;
    text: string;
}

interface ItemHistori {
    listHistori: Items[];
}

export default function OurHistori({ listHistori }: ItemHistori) {
    const items = Object.values(listHistori || [])
    return (
        <div className="history-container">
            {items.map((item, index) => (
                <div key={index} className="history-card">
                    <div dangerouslySetInnerHTML={{ __html: item.icon }} className="history-icon-wrapper" />
                    <p className="history-text">{item.text}</p>
                </div>
            ))}
        </div>
    )
}