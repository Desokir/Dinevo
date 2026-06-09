import Benefit from "@/src/components/Benefit/Benefit";
import Footer from "@/src/components/Footer/Footer";
import Header from "@/src/components/Header/Header";
import Link from "next/link";

const linksFooter = {
    'l1': {
        'name': 'Головна',
        'link': '/'
    },
    'l2': {
        'name': 'Меню',
        'link': '/menu'
    },
    'l3': {
        'name': 'Доставка',
        'link': '/delivery'
    },
    'l4': {
        'name': 'Контакти',
        'link': '/contacts'
    }
}
const categoriFooter = ['Ресторани', 'Супермаркети', 'Аптеки', 'Квіти']
const contacts = {
    'Number': '+380956848943',
    'Email': 'dinevo2026@gmail.ua'
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
       <Header
      logoSrc="/LogoOrange.png"
      navLinks={[
        { label: "Головна", href: "/" },  
        { label: "Меню", href: "/menu" },
        { label: "Доставка", href: "/delivery" },
        { label: "Контакти", href: "/contacts" }
      ]}
       buttonText="зареєструватися"
    />
      
      <div> 
      <Benefit></Benefit>
      </div>
      <Footer links={linksFooter} categories={categoriFooter} contact={contacts} />
    </main>
  );    
}
