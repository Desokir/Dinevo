'use client';
import './Footer.css';
import Link from "next/link";

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
        [key: string]: { name: string, link: string }
    };
    categories: string[];
    contact: ListContact;
}

const OutLinks = ({ list }: { list: { [key: string]: LinkItem } }) => {
    const items = Object.values(list || {});
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

const OutCategories = ({ list }: { list: string[] }) => {
    return (
        <div className="footer-categories">
            {list.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    );
};

const OutContacts = ({ list }: { list: ListContact }) => {
    return (
        <div className="footer-contacts">
            <p><span>Number: </span>{list.number}</p>
            <p><span>Email: </span>{list.email}</p>
        </div>
    );
};

export default function Footer({ links, categories, contact }: FooterProps) {
    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-logo">
                    <img src="/LogoOrange.png" alt="logo" />
                </div>

                <OutLinks list={links} />
                <OutCategories list={categories} />
                <OutContacts list={contact} />

            </div>
        </footer>
    );
}
