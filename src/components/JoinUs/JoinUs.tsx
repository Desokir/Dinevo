import type { FC } from 'react';
import './JoinUs.css';
import Image,{ StaticImageData } from 'next/image';
import Link from "next/link";

interface JoinItems {
    title: string;
    desk: string;
    img: StaticImageData;
}

interface JoinUsProps {
    title: string;
    desk: {
        [key: string]: JoinItems
    }
}

const OutJoin = ({list}: {list:{ [key: string]: JoinItems }}) => {
    const items = Object.values(list || {});
    return(
        <div className='outJoin'>
            {items.map((item, index) => (
                <div key={index} className='boxJoin'>
                    <Image src={item.img} alt={item.title} />
                    <p className='titleOut'>{item.title}</p>
                    <p className='deskOut'>{item.desk}</p>
                    <Link href='/signIn' className='signOut'>Зареєструватися</Link>
                </div>
            ))}
        </div>
    )
}

const JoinUs: FC<JoinUsProps> = ({ title, desk }) => (
    <div className="JoinUs">
        <div className='titleJoin'>
            <p>{title}</p>
        </div>
        <OutJoin list={desk} />
    </div>
);

export default JoinUs;