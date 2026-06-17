import { StaticImageData } from 'next/image';
import './OurHistori.css';

interface Items {
    icon: string;
    text: string;
}

interface ItemHistori {
    listHistori: Items[];
}

export default function OurHistori({}: ItemHistori) {
    return(
        <div>

        </div>
    )
}