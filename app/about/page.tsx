import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";


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
            
            <main className="main-content">
                
            </main>

            <Footer links={linksFooter} categories={categoriesFooter} contact={about} />
        </div>
    );
}