'use client';

import './Footer.css';
import Link from 'next/link';

interface LinkItem {
    name: string;
    link: string;
}

interface ListContact {
    number: string;
    email: string;
}

interface FooterProps {
    links: {
        [key: string]: LinkItem;
    };
    categories: string[];
    contact: ListContact;
}

const OutLinks = ({ list }: { list: { [key: string]: LinkItem } }) => {
    const items = Object.values(list);

    return (
        <div className="footer-links">
            {items.map((item, index) => (
                <Link key={index} href={item.link}>
                    {item.name}
                </Link>
            ))}
        </div>
    );
};

const Outabout = ({ list }: { list: ListContact }) => {
    return (
        <div className="footer-about">
            <p>{list.number}</p>
            <p>{list.email}</p>
        </div>
    );
};

export default function Footer({
    links,
    contact
}: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-column">
                    <h3>Меню сайту</h3>
                    <OutLinks list={links} />
                </div>

                <div className="footer-column">
                    <h3>Авторизація</h3>

                    <div className="footer-links">
                        <Link href="/login">Увійти як користувач</Link>
                        <Link href="/delivery-login">Увійти як кур'єр</Link>
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Оплата</h3>

                    <div className="payment-icons">
                        <img src="/Visa.png" alt="Visa" />
                        <img src="/logos_mastercard.png" alt="Mastercard" />
                        <img src="/simple-icons_applepay.png" alt="Apple Pay" />
                        <img src="/logos_google-pay.png" alt="Google Pay" />
                    </div>
                </div>

                <div className="footer-column">
                    <h3>Про нас</h3>
                    <Outabout list={contact} />
                </div>
            </div>
        </footer>
    );
}