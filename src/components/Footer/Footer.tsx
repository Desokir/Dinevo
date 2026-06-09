import './Footer.css';
import Link from 'next/link';

interface LinkItem {
    name: string;
    link: string
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
    contact: ListContact
}

const OutLinks = ({ list }: { list: { [key: string]: LinkItem } }) => {
    const items = Object.values(list || {})
    return (
        <div>
            {items.map((item, index) => (
                <Link key={index} href={item.link}>{item.name}</Link>
            ))}
        </div>
    )
}

const OutCategories = ({ list }: { list: string[] }) => {
    return(
        <div>
            {list.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    )
};

const OutContacts = ({list}: {list: ListContact}) => { 
    const items = Object.entries(list || {});
    return(
        <div>
            {items.map(([key, values], index) => (
                <p key={index}>
                    <span>{key}: </span>
                    <span>{values}</span>
                </p>
            ))}
        </div>
    )
}
// Анрей сделай стили ля футереда, а то я не знаю как сделать
function Footer({ links, categories, contact }: FooterProps) {
    return (
        <footer>
            <OutLinks list={links} />
            <OutCategories list={categories} />
            <OutContacts list={contact}/>
        </footer>
    );
}

export default Footer;
