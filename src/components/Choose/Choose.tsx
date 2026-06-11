import type { FC } from 'react';
import Image, { StaticImageData } from 'next/image';
import './Choose.css';
import Link from 'next/link';

interface ChooseItem {
    name: string;
    adres: string;
    photo: StaticImageData;
}

interface ChooseProps {
    title: string;
    chooseList: {
        [key: string]: ChooseItem;
    };
}

const OutChoose = ({ list }: { list: { [key: string]: ChooseItem } }) => {
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
                        <p className='ChooseAdres'>{item.adres}</p>
                    </div>
                </div>
            ))}
        </div>
    )
}

const ChooseNow: FC<ChooseProps> = ({ title, chooseList }) => (
    <div className="Choose">
        <p className='titleName'>{title}</p>
        <OutChoose list={chooseList} />
        <Link href='' className='showAll'>Show all</Link>
    </div>
);

export default ChooseNow;
