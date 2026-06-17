import Benefit from "@/src/components/Benefit/Benefit";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import JoinUs from "@/src/components/JoinUs/JoinUs";
import ChooseNow from "@/src/components/Choose/Choose";
import join1 from '@/public/Deliver.png';
import join2 from '@/public/Indus.png';
import join3 from '@/public/koreec.png';
import card1 from '@/public/card1.png';
import card2 from '@/public/Rectangle 53 (3).png';
import card3 from '@/public/Rectangle 35 (4).png';
import card4 from '@/public/Rectangle 47.png';
import card5 from '@/public/Rectangle 62.png';
import card6 from '@/public/Rectangle 49 (19).png';
import card7 from '@/public/Rectangle 49 (20).png';
import card8 from '@/public/Rectangle 49 (21).png';
import card9 from '@/public/Rectangle 49 (22).png';


import hero1 from '@/public/hero1.svg';
import hero2 from '@/public/hero2.svg';
import hero3 from '@/public/hero3.svg';
import hero4 from '@/public/hero4.svg';
import hero5 from '@/public/hero5.svg';
import hero6 from '@/public/hero6.svg';
import hero7 from '@/public/hero7.svg';
import hero8 from '@/public/hero8.svg';
import hero9 from '@/public/hero9.svg';
import HeroImg from "@/src/components/HeroImg/HeroImg";

const linksFooter = {
    'l1': { 'name': 'Головна', 'link': '/' },
    'l2': { 'name': 'Меню', 'link': '/menu' },
    'l3': { 'name': 'Доставка', 'link': '/delivery' },
    'l4': { 'name': 'Контакти', 'link': '/about' }
};

const categoriFooter = ['Ресторани', 'Супермаркети', 'Аптеки', 'Квіти'];

const about = {
    number: '+380956848943',
    email: 'dinevo2026@gmail.ua'
};

const Join = {
    'p1': {
        'title': "Стати кур'єром",
        'desk': 'Вас цікавить конкурентоспроможна оплата, гнучкий графік і повна самостійність? Доставляйте з Glovo!',
        'img': join1
    },
    'p2': {
        'title': 'Стати партнером',
        'desk': 'Прискорюйте зростання бізнесу разом із Glovo! Наші технології та база користувачів — ідеальний рецепт для збільшення продажів і відкриття нових можливостей!',
        'img': join2
    },
    'p3': {
        'title': 'Вакансії',
        'desk': 'Готові до нового, захоплюючого етапу на своєму шляху? Нашій команді потрібні саме такі, як ви — амбітні, прості та приємні в спілкуванні!',
        'img': join3
    }
};

const choose = {
    'c1': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c2': { 'name': "Papa Givi", 'adres': 'вулиця Незалежності, 15/1', 'photo': card2 },
    'c3': { 'name': "KFC", 'adres': 'вулиця Дерибасівська, 23', 'photo': card3 },
    'c4': { 'name': "Пузата хата", 'adres': 'вулиця Дерибасівська, 24', 'photo': card4 },
    'c5': { 'name': "Yapiko", 'adres': 'вулиця Академіка Вільямса, 59-К', 'photo': card5  },
    'c6': { 'name': "Alibaba", 'adres': 'вулиця Дерибасівська, 30', 'photo': card6  },
    'c7': { 'name': "Кларабара", 'adres': 'вулиця Преображенська, 28', 'photo': card7  },
    'c8': { 'name': "Сало", 'adres': ' вул. Італійська, 50', 'photo': card8 },
 'c9': { 'name': "Рандеву", 'adres': 'вулиця Успенська, 93', 'photo': card9 }
};

const HeroName = {
    'n1': {
        'name': 'Італійська кухня',
        'photo': hero1
    },
    'n2': {
        'name': 'Американська кухня',
        'photo': hero2
    },
    'n3': {
        'name': 'Грецька куйня',
        'photo': hero3
    },
    'n4': {
        'name': 'Японська кухня',
        'photo': hero4
    },
    'n5': {
        'name': 'Українська кухня',
        'photo': hero5
    },
    'n6': {
        'name': 'Індійська кухня',
        'photo': hero6
    },
    'n7': {
        'name': 'Грузинська кухня',
        'photo': hero7
    },
    'n8': {
        'name': 'Французька кухня',
        'photo': hero8
    },
    'n9': {
        'name': 'Іспанська кухня',
        'photo': hero9
    }
}



export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between">
           
            <Header
                logoSrc="/Logo11.png"
                navLinks={[
                    { label: "Головна", href: "/" },
                    { label: "Меню", href: "/menu" },
                    { label: "Доставка", href: "/delivery" },
                    { label: "Контакти", href: "/about" }
                ]}
                buttonText="Login"
                buttonIconSrc="/login.png"
            />

            <HeroImg title='Доставка в Одесу та область!' heroList={HeroName} />
            <div className="flex flex-col gap-16 w-full max-w-[1203px] mx-auto px-5">
                <ChooseNow title='Choose Now' chooseList={choose} />
                <Benefit />
                <JoinUs title='Приєднуйтеся до нас' desk={Join} />
            </div>

            <Footer links={linksFooter} categories={categoriFooter} contact={about} />
        </main>
    );
}