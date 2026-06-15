import { FC } from 'react';
import Link from 'next/link';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Sort from '@/src/components/Sort/Sort';

const linksFooter = {
    'l1': { 'name': 'Головна', 'link': '/' },
    'l2': { 'name': 'Меню', 'link': '/menu' },
    'l3': { 'name': 'Доставка', 'link': '/delivery' },
    'l4': { 'name': 'Контакти', 'link': '/contacts' }
};

const categoriFooter = ['Ресторани', 'Супермаркети', 'Аптеки', 'Квіти'];

const contacts = {
    number: '+380956848943',
    email: 'dinevo2026@gmail.ua'
};

function Restaurant() {
    return (
        <div>
            <Header
                logoSrc="/Logo11.png"
                navLinks={[
                    { label: "Головна", href: "/" },
                    { label: "Меню", href: "/app/menu/page.tsx" },
                    { label: "Доставка", href: "/delivery" },
                    { label: "Контакти", href: "/contacts" }
                ]}
                buttonText="Login"
                buttonIconSrc="/login.png"
            />
            <div>
                <p>Їжа</p>
                <Sort />
            </div>
            <Footer links={linksFooter} categories={categoriFooter} contact={contacts} />
        </div>
    )
}

export default Restaurant;