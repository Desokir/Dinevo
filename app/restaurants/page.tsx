import { FC } from 'react';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Sort from '@/src/components/Sort/Sort';
import SliderFood from '@/src/components/SliderFood/SliderFood';
import FullRestaurants from '@/src/components/FullRestaurants/FullRestaurants';

import sort1 from '@/public/hero1.svg';
import sort2 from '@/public/hero2.svg';
import sort3 from '@/public/hero3.svg';
import sort4 from '@/public/hero4.svg';
import sort5 from '@/public/hero5.svg';
import sort6 from '@/public/hero6.svg';
import sort7 from '@/public/hero7.svg';
import sort8 from '@/public/hero8.svg';
import sort9 from '@/public/hero9.svg';
import card1 from '@/public/hero1.svg'; 

import './restaurantsPage.css';

const linksFooter = {
    'l1': { 'name': 'Головна', 'link': '/' },
    'l2': { 'name': 'Меню', 'link': '/menu' },
    'l3': { 'name': 'Доставка', 'link': '/delivery' },
    'l4': { 'name': 'Контакти', 'link': '/about' }
};

const categoriesFooter = ['Ресторани', 'Супермаркети', 'Аптеки', 'Квіти'];

const about = {
    number: '+380956848943',
    email: 'dinevo2026@gmail.ua'
};

const sliderSortData = {
    'n1': { 'name': 'Французька кухня', 'photo': sort1 },
    'n2': { 'name': 'Іспанська кухня', 'photo': sort2 },
    'n3': { 'name': 'Італійська кухня', 'photo': sort3 },
    'n4': { 'name': 'Американська кухня', 'photo': sort4 },
    'n5': { 'name': 'Грецька кухня', 'photo': sort5 },
    'n6': { 'name': 'Японська кухня', 'photo': sort4 },
    'n7': { 'name': 'Українська кухня', 'photo': sort5 },
    'n8': { 'name': 'Індійська кухня', 'photo': sort6 },
    'n9': { 'name': 'Грузинська кухня', 'photo': sort7 },
    
};

const restaurantsData = {
    'c1': { 'name': "McDonald's", 'address': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c2': { 'name': "KFC", 'address': 'вулиця Дерибасівська, 23', 'photo': card1 },
    'c3': { 'name': "Пузата Хата", 'address': 'вулиця Дерибасівська, 24', 'photo': card1 },
    'c4': { 'name': "Yapiko", 'address': 'вулиця Академіка Вільямса, 59', 'photo': card1 },
    'c5': { 'name': "Papa Givi", 'address': 'вулиця Незалежності, 15/1', 'photo': card1 },
    'c6': { 'name': "Alibaba", 'address': 'вулиця Дерибасівська, 30', 'photo': card1 },
    'c7': { 'name': "Буфет", 'address': 'вулиця Пантелеймонівська, 64', 'photo': card1 },
    'c8': { 'name': "Компот", 'address': 'вулиця Дерибасівська, 20', 'photo': card1 },
    'c9': { 'name': "Львівські Пляцки", 'address': 'вулиця Дерибасівська, 13', 'photo': card1 },
    'c10': { 'name': "Таврія В (Кулінарія)", 'address': 'вулиця Грецька, 3/4', 'photo': card1 },
    'c11': { 'name': "Хінкальня", 'address': 'вулиця Буніна, 30', 'photo': card1 },
    'c12': { 'name': "Борщ", 'address': 'вулиця Катерининська, 14', 'photo': card1 },
    'c13': { 'name': "Salad Bar", 'address': 'проспект Шевченка, 4д', 'photo': card1 },
    'c14': { 'name': "Chin Chin", 'address': 'вулиця Грецька, 26', 'photo': card1 },
    'c15': { 'name': "Тітка Клара", 'address': 'вулиця Преображенська, 34', 'photo': card1 },
    'c16': { 'name': "Сушія", 'address': 'вулиця Рішельєвська, 9а', 'photo': card1 },
    'c17': { 'name': "Чорноморка", 'address': 'вулиця Катерининська, 45', 'photo': card1 },
    'c18': { 'name': "Маманавага", 'address': 'Красний провулок, 1', 'photo': card1 },
    'c19': { 'name': "Пронто Піца", 'address': 'вулиця Балківська, 31', 'photo': card1 },
    'c20': { 'name': "Lviv Croissants", 'address': 'вулиця Катерининська, 21', 'photo': card1 },
    'c21': { 'name': "Пиріжкова", 'address': 'вулиця Базарна, 50', 'photo': card1 },
    'c22': { 'name': "Траторія", 'address': 'вулиця Маразліївська, 1а', 'photo': card1 },
    'c23': { 'name': "City Food Market", 'address': 'вулиця Рішельєвська, 9а', 'photo': card1 },
    'c24': { 'name': "Gorcafe", 'address': 'Приморський бульвар, 11', 'photo': card1 },
    'c25': { 'name': "Кава та Булки", 'address': 'вулиця Торгова, 26', 'photo': card1 },
    'c26': { 'name': "Авокадо", 'address': 'Грецька площа, 1', 'photo': card1 },
    'c27': { 'name': "REEF", 'address': 'Фонтанська дорога, 158', 'photo': card1 },
    'c28': { 'name': "Benedikt", 'address': 'вулиця Садова, 19', 'photo': card1 },
    'c29': { 'name': "Kazan", 'address': 'вулиця Канатна, 32', 'photo': card1 },
    'c30': { 'name': "Breadway", 'address': 'вулиця Канатна, 19', 'photo': card1 }
};

export default function RestaurantsPage() {
    return (
        <div className="page-wrapper">
            <Header
                logoSrc="/Logo11.png"
                navLinks={[
                    { label: "Головна", href: "/" },
                    { label: "Меню", href: "/app/menu/page.tsx" },
                    { label: "Доставка", href: "/delivery" },
                    { label: "Контакти", href: "/about" }
                ]}
                buttonText="Login"
                buttonIconSrc="/login.png"
            />
                <div className="title-container">
                <h1 className="page-title">Їжа</h1>
            </div>

            
            <SliderFood sliderInfo={sliderSortData} />
                
            
            <main className="main-content">
                <Sort />
                <h2 className="section-title">Всі заклади</h2>
                <FullRestaurants list={restaurantsData} />
            </main>

            <Footer links={linksFooter} categories={categoriesFooter} contact={about} />
        </div>
    );
}