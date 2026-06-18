import { FC } from 'react';
import Header from '@/src/components/Header/Header';
import Footer from '@/src/components/Footer/Footer';
import Sort from '@/src/components/Sort/Sort';
import SliderFood from '@/src/components/SliderFood/SliderFood';
import FullRestaurants from '@/src/components/FullRestaurants/FullRestaurants';
import Link from 'next/link';
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
    'l4': { 'name': 'Про нас', 'link': '/about' }
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
    'c1': { 'name': "McDonald's", 'address': 'вулиця Дерибасівська, 23', 'photo': "/Rectangle 35.png" },
    'c2': { 'name': "KFC", 'address': 'вулиця Дерибасівська, 23', 'photo': "/Rectangle 35 (1).png" },
    'c3': { 'name': "Пузата Хата", 'address': 'вулиця Дерибасівська, 24', 'photo': "/Rectangle 47.png" },
    'c4': { 'name': "Yapiko", 'address': 'вулиця Академіка Вільямса, 59', 'photo': "/Rectangle 62.png" },
    'c5': { 'name': "Papa Givi", 'address': 'вулиця Незалежності, 15/1', 'photo': "/Rectangle 53.png" },
    'c6': { 'name': "Alibaba", 'address': 'вулиця Дерибасівська, 30', 'photo': "/Rectangle 49.png" },
    'c7': { 'name': "Буфет", 'address': 'вулиця Пантелеймонівська, 64', 'photo': "/Rectangle 49 (1).png" },
    'c8': { 'name': "Компот", 'address': 'вулиця Дерибасівська, 20', 'photo': "/Rectangle 49 (2).png" },
    'c9': { 'name': "Львівські Пляцки", 'address': 'вулиця Дерибасівська, 13', 'photo': "/Rectangle 49 (3).png" },
    'c10': { 'name': "Таврія В (Кулінарія)", 'address': 'вулиця Грецька, 3/4', 'photo': "/Rectangle 49 (4).png" },
    'c11': { 'name': "Хінкальня", 'address': 'вулиця Буніна, 30', 'photo': "/Image 3.png" },
    'c12': { 'name': "Борщ", 'address': 'вулиця Катерининська, 14', 'photo': "/Rectangle 49 (7).png" },
    'c13': { 'name': "Salad Bar", 'address': 'проспект Шевченка, 4д', 'photo': "/Rectangle 49 (9).png" },
    'c14': { 'name': "Chin Chin", 'address': 'вулиця Грецька, 26', 'photo': "/Image 4.png" },
    'c15': { 'name': "Тітка Клара", 'address': 'вулиця Преображенська, 34', 'photo': "/Rectangle 49 (8).png" },
    'c16': { 'name': "Сушія", 'address': 'вулиця Рішельєвська, 9а', 'photo': "/Rectangle 49 (10).png" },
    'c17': { 'name': "Чорноморка", 'address': 'вулиця Катерининська, 45', 'photo': "/Rectangle 49 (11).png" },
    'c18': { 'name': "Маманавага", 'address': 'Красний провулок, 1', 'photo': "/Rectangle 49 (12).png" },
    'c19': { 'name': "Пронто Піца", 'address': 'вулиця Балківська, 31', 'photo':"/Rectangle 49 (13).png" },
    'c20': { 'name': "Lviv Croissants", 'address': 'вулиця Катерининська, 21', 'photo': "/Rectangle 49 (14).png" },
    'c21': { 'name': "Пиріжкова", 'address': 'вулиця Базарна, 50', 'photo': "/Rectangle 53 (2).png" },
    'c22': { 'name': "Траторія", 'address': 'вулиця Маразліївська, 1а', 'photo': "/Rectangle 49 (15).png" },
    'c23': { 'name': "City Food Market", 'address': 'вулиця Рішельєвська, 9а', 'photo': "/Rectangle 49 (16).png" },
    'c24': { 'name': "Gorcafe", 'address': 'Приморський бульвар, 11', 'photo': "/Rectangle 49 (17).png" },
    'c25': { 'name': "Кава та Булки", 'address': 'вулиця Торгова, 26', 'photo': "/Rectangle 49 (18).png" },
    'c26': { 'name': "Авокадо", 'address': 'Грецька площа, 1', 'photo': "/Rectangle 47 (1).png" },
   
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
                    { label: "Про нас", href: "/about" }
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
                <Link href="/menu"><FullRestaurants list={restaurantsData} /></Link>
            </main>

            <Footer links={linksFooter} categories={categoriesFooter} contact={about} />
        </div>
    );
}