import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HoroImg from "@/src/components/imgDelivery/imgDelivery";
import PhotoHero from '@/public/delivery.svg'
import DeliveryMap from "@/src/components/MapDelivery/MapDelivery";
import ResturantInOdessa from "@/src/components/ResturantInOdessa/ResturantInOdessa";
import photo1 from '@/public/deliveryPhoto.svg'
import leon from '@/public/leon.svg'
import Reviews from "@/src/components/Reviews/Reviews";

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

const ImgAndNameDelivery = {
    'd1': {
        'name': 'Scandi Restaraut',
        'adres': 'Дерибасьвська 21, Одеса',
        'img': photo1
    },
    'd2': {
        'name': 'Scandi Restaraut',
        'adres': 'Дерибасьвська 21, Одеса',
        'img': photo1
    },
    'd3': {
        'name': 'Scandi Restaraut',
        'adres': 'Дерибасьвська 21, Одеса',
        'img': photo1
    },
    'd4': {
        'name': 'Scandi Restaraut',
        'adres': 'Дерибасьвська 21, Одеса',
        'img': photo1
    }
}

const InfoOts = {
    'o1': {
        'name': 'Леонід Карачун',
        'photo': leon,
        'text': 'This is a test review of the restaraunt in Odesa, Everything was great, i love it'
    },
    'o2': {
        'name': 'Леонід Карачун',
        'photo': leon,
        'text': 'This is a test review of the restaraunt in Odesa, Everything was great, i love it'
    },
    'o3': {
        'name': 'Леонід Карачун',
        'photo': leon,
        'text': 'This is a test review of the restaraunt in Odesa, Everything was great, i love it'
    }
}

export default function RestaurantsPage() {
    return (
        <div className="page-wrapper">
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
            <HoroImg title='Замовляй Dinevo - і смаку на повну швидкість!' img={ PhotoHero } />
            <main className="main-content">
                <DeliveryMap />
                <ResturantInOdessa lists={ImgAndNameDelivery}/>
                <Reviews title='Відгуки до ресторану Scandi' lists={InfoOts} />
            </main>

            <Footer links={linksFooter} categories={categoriesFooter} contact={about} />
        </div>
    );
}