import Benefit from "@/src/components/Benefit/Benefit";
import Header from "@/src/components/Header/Header";
import Link from "next/link";

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
    </main>
  );
}