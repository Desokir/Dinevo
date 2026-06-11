    import Benefit from "@/src/components/Benefit/Benefit";
    import Footer from "@/src/components/Footer/Footer";
    import Header from "@/src/components/Header/Header";
    import JoinUs from "@/src/components/JoinUs/JoinUs";
    import join1 from '@/public/join1.png'
    import join2 from '@/public/join2.png'
    import join3 from '@/public/join3.png'
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
        number: '+380956848943',
        email: 'dinevo2026@gmail.ua'
    }

    const Join = {
        'p1': {
            'title': 'Стати кур\'єром',
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
    }

    export default function Home() {
        return (
            <main className="flex min-h-screen flex-col items-center justify-between ">
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

                <div>
                    <Benefit></Benefit>
                    <JoinUs title='Приєднуйтеся до нас' desk={Join} />
                </div>
                <Footer links={linksFooter} categories={categoriFooter} contact={contacts}  />
            </main>
        );
    }
