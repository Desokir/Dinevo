import Benefit from "@/src/components/Benefit/Benefit";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import JoinUs from "@/src/components/JoinUs/JoinUs";
import ChooseNow from "@/src/components/Choose/Choose";
import join1 from '@/public/Deliver.png';
import join2 from '@/public/Indus.png';
import join3 from '@/public/koreec.png';
import card1 from '@/public/card1.png';
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
    'c2': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c3': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c4': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c5': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c6': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c7': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c8': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c9': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c10': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c11': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c12': { 'name': "McDonald's", 'adres': 'вулиця Дерибасівська, 23', 'photo': card1 },
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
            {/* Настройки Хедера взяты из входящей ветки с кнопкой Login */}
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