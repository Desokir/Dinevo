import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import HoroImg from "@/src/components/imgDelivery/imgDelivery";
import PhotoHero from '@/public/delivery.svg'
import DeliveryMap from "@/src/components/MapDelivery/MapDelivery";

const linksFooter = {
    'l1': { 'name': 'Головна', 'link': '/' },
    'l2': { 'name': 'Меню', 'link': '/menu' },
    'l3': { 'name': 'Доставка', 'link': '/delivery' },
    'l4': { 'name': 'Контакти', 'link': '/contacts' }
};

const categoriesFooter = ['Ресторани', 'Супермаркети', 'Аптеки', 'Квіти'];

const contacts = {
    number: '+380956848943',
    email: 'dinevo2026@gmail.ua'
};

export default function RestaurantsPage() {
    return (
        <div className="page-wrapper">
            <Header
                logoSrc="/Logo11.png"
                navLinks={[
                    { label: "Головна", href: "/" },
                    { label: "Меню", href: "/menu" },
                    { label: "Доставка", href: "/delivery" },
                    { label: "Контакти", href: "/contacts" }
                ]}
                buttonText="Login"
                buttonIconSrc="/login.png"
            />
            <HoroImg title='Замовляй Dinevo - і смаку на повну швидкість!' img={ PhotoHero } />
            <main className="main-content">
                <DeliveryMap />
            </main>

            <Footer links={linksFooter} categories={categoriesFooter} contact={contacts} />
        </div>
    );
}