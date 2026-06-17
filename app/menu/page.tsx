"use client";

import { useEffect, useRef, useState } from "react";
import "@/app/menu/menu.css";
import Link from "next/link";


interface MenuItem {
  id: string;
  name: string;
  weight?: string;
  price: number | string; 
  img: string;
}

interface Category {
  id: string;
  label: string;
  items: MenuItem[];
}

interface CartEntry {
  item: MenuItem;
  qty: number;
}


const RESTAURANT = {
  name: "Папа Гіві",
  isOpen: false,
  cover:"/Rectangle 83.png",
  logo: "/LogoPapaGivi.png",
};

const CATEGORIES: Category[] = [
  {
    id: "snidanky",
    label: "Сніданки",
    items: [
      {
        id: "sn1",
        name: "Сирники із сметаною та джемом",
        weight: "200/30/30г",
        price: 155,
        img: "/Syrnyky.png",
      },
      {
        id: "sn2",
        name: "Яєчня з овочами та беконом",
        weight: "250г",
        price: 165,
        img: "/1EggBekon.png",
      },
    ],
  },
  {
    id: "zakusky",
    label: "Закуски",
    items: [
      {
        id: "z1",
        name: "Рулети з баклажанів",
        weight: "200г",
        price: 200,
        img: "/2Rylet.png",
      },
      {
        id: "z2",
        name: "Овочева бахча",
        weight: "300г",
        price: 145,
        img: "/Rectangle 85.png",
      },
      {
        id: "z3",
        name: "Сирна Грузія",
        weight: "250/50г",
        price: 296,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z4",
        name: "Асорті солінь",
        weight: "250г",
        price: 185,
        img: "/Rectangle 85 (2).png",
      },
      {
        id: "z5",
        name: "Пивна нарізка м'ясна",
        weight: "100г",
        price: 235,
        img: "/Rectangle 85 (3).png",
      },
      {
        id: "z6",
        name: "Паштет печінковий по-грузинськи",
        weight: "180/30/60г",
        price: 145,
        img: "/Rectangle 85 (4).png",
      },
      {
        id: "z7",
        name: "Оселедець на тостах",
        weight: "250г",
        price: 188,
        img: "/Rectangle 85 (5).png",
      },
      {
        id: "z8",
        name: "Нарізка сала",
        weight: "100г",
        price: 135,
        img: "/Rectangle 85 (6).png",
      },
      {
        id: "z9",
        name: "Креветка варена",
        weight: "180г",
        price: 325,
        img: "/Rectangle 85 (7).png",
      },
    ],
  },
  {
    id: "salaty",
    label: "Салати",
    items: [
      {
        id: "sal1",
        name: "Грецький салат",
        weight: "250г",
        price: 155,
        img: "/Rectangle 85 (8).png",
      },
      {
        id: "sal2",
        name: "Салат з курячою печінкою та карамелізованою грушею",
        weight: "300г",
        price: 206,
        img: "/Rectangle 85 (9).png",
      },
      {
        id: "sal3",
        name: "Салат по-грузинськи",
        weight: "250г",
        price: 122,
        img: "/Rectangle 85 (10).png",
      },
      {
        id: "sal4",
        name: "Бустнеулі грілі",
        weight: "270г",
        price: 155,
        img: "/Rectangle 85 (11).png",
      },
      {
        id: "sal5",
        name: "Салат з кільцями кальмарів та перцем Капі",
        weight: "350г",
        price: 330,
        img: "/Rectangle 85 (12).png",
      },
      {
        id: "sal6",
        name: "Салат зі свіжими помідорами та бринзою",
        weight: "250г",
        price: 152,
        img: "/Rectangle 85 (13).png",
      },
      {
        id: "sal7",
        name: "Салат з курячим філе та овочами",
        weight: "250г",
        price: 155,
        img: "/Rectangle 85 (14).png",
      },
      {
        id: "sal8",
        name: "Олів'є з яловичиною та креветками",
        weight: "300г",
        price: 155,
        img: "/Rectangle 85 (15).png",
      },
      {
        id: "sal9",
        name: "Салат з буряком, фетою та чорносливом",
        weight: "300г",
        price: 155,
        img: "/Rectangle 85 (16).png",
      },
      {
        id: "sal10",
        name: "Салат Тбілісі",
        weight: "300г",
        price: 193,
        img: "/Rectangle 85 (17).png",
      },
    ],
  },
  {
    id: "osnovni",
    label: "Основні страви",
    items: [
      {
        id: "os1",
        name: "Чкмерулі",
        weight: "450г",
        price: 278,
        img: "/Rectangle 85 (18).png",
      },
      {
        id: "os2",
        name: "Оджахурі зі свининою",
        weight: "320г",
        price: 225,
        img: "/Rectangle 85 (19).png",
      },
      {
        id: "os3",
        name: "Тбілісурі",
        weight: "350г",
        price: 250,
        img: "/Rectangle 85 (20).png",
      },
      {
        id: "os4",
        name: "Курча табака",
        weight: "200/30/30г",
        price: 330,
        img: "/Rectangle 85 (21).png",
      },
      {
        id: "os5",
        name: "Печериці на кеці",
        weight: "200г",
        price: 155,
        img: "/Rectangle 85 (22).png",
      },
      {
        id: "os6",
        name: "Лобіо",
        weight: "250г",
        price: 125,
        img: "/Rectangle 85 (23).png",
      },
      {
        id: "os7",
        name: "Долма",
        weight: "170/50г",
        price: 152,
        img: "/Rectangle 85 (24).png",
      },
      {
        id: "os8",
        name: "Лосось зі шпинатом у вершковому соусі на кеці",
        weight: "350г",
        price: 447,
        img: "/Rectangle 85 (25).png",
      },
      {
        id: "os9",
        name: "Оджахурі з бараниною",
        weight: "350г",
        price: 257,
        img: "/Rectangle 85 (26).png",
      },
      {
        id: "os10",
        name: "Чахохбілі",
        weight: "500г",
        price: 257,
        img: "/Rectangle 85 (27).png",
      },
    ],
  },
  {
    id: "khinkali",
    label: "Хінкалі",
    items: [
      {
        id: "kh1",
        name: "Хінкалі (мінімальне замовлення 4 шт. одного виду)",
        weight: "1 шт",
        price: "60 / 72",
        img: "/Rectangle 85 (28).png",
      },
    ],
  },
  {
    id: "pershi",
    label: "Перші страви",
    items: [
      {
        id: "p1",
        name: "Бульйон курячий з локшиною",
        weight: "300г",
        price: 88,
        img: "/Rectangle 85 (29).png",
      },
      {
        id: "p2",
        name: "Суп харчо",
        weight: "300г",
        price: 130,
        img: "/Rectangle 85 (30).png",
      },
      {
        id: "p3",
        name: "Борщ",
        weight: "300г",
        price: 123,
        img: "/Rectangle 85 (31).png",
      },
      {
        id: "p4",
        name: "Солянка",
        weight: "300г",
        price: 125,
        img: "/Rectangle 85 (32).png",
      },
    ],
  },
  {
    id: "rybni",
    label: "Рибні страви",
    items: [
      {
        id: "r1",
        name: "Скумбрія на мангалі",
        weight: "1 шт",
        price: 300,
        img: "/Rectangle 85 (33).png",
      },
    ],
  },
  {
    id: "garnyry",
    label: "Гарніри",
    items: [
      {
        id: "g1",
        name: "Овочі печені на мангалі",
        weight: "300г",
        price: 82,
        img: "/Rectangle 85 (34).png",
      },
      {
        id: "g2",
        name: "Аджапсандалі з горіхами",
        weight: "250г",
        price: 121,
        img: "/Rectangle 85 (35).png",
      },
      {
        id: "g3",
        name: "Картопля печена",
        weight: "200г",
        price: 78,
        img: "/Rectangle 85 (36).png",
      },
      {
        id: "g4",
        name: "Сирники із сметаною та джемом",
        weight: "200/30/30г",
        price: 155,
        img: "/Rectangle 85 (37).png",
      },
    ],
  },
  {
    id: "myasni",
    label: "М'ясні страви",
    items: [
      {
        id: "my1",
        name: "Шашлик",
        weight: "200/30/30г",
        price: "221 / 369",
        img: "/Rectangle 85 (38).png",
      },
      {
        id: "my2",
        name: "Люля кебаб",
        weight: "200/30/30г",
        price: "195 / 229",
        img: "/Rectangle 85 (39).png",
      },
      {
        id: "my3",
        name: "Свинячі реберця з ягідно-винним соусом",
        weight: "200/30/30г",
        price: 383,
        img: "/Rectangle 85 (40).png",
      },
      {
        id: "my4",
        name: "Доджер дог",
        weight: "500г",
        price: 257,
        img: "/Rectangle 85 (41).png",
      },
      {
        id: "my5",
        name: "Каре ягняти",
        weight: "280г",
        price: 488,
        img: "/Rectangle 85 (42).png",
      },
      {
        id: "my6",
        name: "Стейк зі свинини",
        weight: "480г",
        price: 132,
        img: "/Rectangle 85 (43).png",
      },
      {
        id: "my7",
        name: "Сулугуні в лаваші",
        weight: "200/30/30г",
        price: 132,
        img: "/Rectangle 85 (44).png",
      },
    ],
  },
  {
    id: "deserty",
    label: "Десерти",
    items: [
      {
        id: "d1",
        name: "Шоколадний фонтан з морозивом",
        weight: "130/50г",
        price: 122,
        img: "/Rectangle 85 (45).png",
      },
      {
        id: "d2",
        name: "Грузинська Шарлотта",
        weight: "150г",
        price: 134,
        img: "/Rectangle 85 (46).png",
      },
    ],
  },
  {
    id: "vypichka",
    label: "Випічка",
    items: [
      {
        id: "v1",
        name: "Хліб від Папа Гіві",
        weight: "350г",
        price: 55,
        img: "/Rectangle 85 (47).png",
      },
      {
        id: "v2",
        name: "Пеновані з сиром",
        weight: "350г",
        price: 201,
        img: "/Rectangle 85 (48).png",
      },
      {
        id: "v3",
        name: "Хачапурі по-аджарськи",
        weight: "450г",
        price: 232,
        img: "/Rectangle 85 (49).png",
      },
      {
        id: "v4",
        name: "Хачапурі по-імеретинськи",
        weight: "540г",
        price: 155,
        img: "/Rectangle 85 (50).png",
      },
      {
        id: "v5",
        name: "Маринара піца",
        weight: "600г",
        price: 186,
        img: "/Rectangle 85 (51).png",
      },
      {
        id: "v6",
        name: "Лобіані",
        weight: "200/30/30г",
        price: 152,
        img: "/Rectangle 85 (52).png",
      },
      {
        id: "v7",
        name: "Мексикурі піца",
        weight: "600г",
        price: 186,
        img: "/Rectangle 85 (53).png",
      },
    ],
  },
  {
    id: "sousy",
    label: "Соуси",
    items: [
      {
        id: "so1",
        name: "Барбекю",
        weight: "200/30/30г",
        price: 45,
        img: "/Rectangle 85 (54).png",
      },
      {
        id: "so2",
        name: "Сацебелі",
        weight: "200/30/30г",
        price: 45,
        img: "/Rectangle 85 (55).png",
      },
      {
        id: "so3",
        name: "Ткемалі",
        weight: "200/30/30г",
        price: 54,
        img: "/Rectangle 85 (56).png",
      },
      {
        id: "so4",
        name: "Сирний",
        weight: "200/30/30г",
        price: 61,
        img: "/Rectangle 85 (57).png",
      },
    ],
  },
  {
    id: "napoi",
    label: "Напої б/а",
    items: [
      {
        id: "n1",
        name: "Моршинська",
        price: 55,
        img: "/Rectangle 85 (58).png",
      },
      {
        id: "n2",
        name: "Кока-кола",
        weight: "250мл",
        price: 155,
        img: "/Rectangle 85 (64).png",
      },
      {
        id: "n3",
        name: "Сік в асортименті",
        weight: "250мл",
        price: 88,
        img: "/Rectangle 85 (60).png",
      },
      {
        id: "n4",
        name: "Лимонад грузинський",
        weight: "500мл",
        price: 88,
        img: "/Rectangle 85 (62).png",
      },
      {
        id: "n5",
        name: "Компот",
        weight: "1л",
        price: 115,
        img: "/Rectangle 85 (63).png",
      },
    ],
  },
];

function MenuCard({
  item,
  onAdd,
}: {
  item: MenuItem;
  onAdd: (item: MenuItem) => void;
}) {
  return (
    <div className="card">
      <div className="card-img-wrap">
        <img src={item.img} alt={item.name} className="card-img" loading="lazy" />
      </div>
      <div className="card-body">
        <p className="card-name">{item.name}</p>
        {item.weight && <span className="card-weight">{item.weight}</span>}
        <div className="card-footer">
          <span className="card-price">{item.price} грн</span>
          <button
            className="card-btn"
            onClick={() => onAdd(item)}
            aria-label={`Додати ${item.name}`}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuSection({
  cat,
  onAdd,
}: {
  cat: Category;
  onAdd: (item: MenuItem) => void;
}) {
  return (
    <section id={cat.id} className="menu-section">
      <h2 className="section-title">{cat.label}</h2>
      <div className="cards-grid">
        {cat.items.map((item) => (
          <MenuCard key={item.id} item={item} onAdd={onAdd} />
        ))}
      </div>
    </section>
  );


}

function CategorySidebar({
  activeId,
}: {
  activeId: string;
}) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="cat-sidebar">
      <p className="cat-sidebar-title">Меню</p>
      <ul className="cat-list">
        {CATEGORIES.map((c) => (
          <li key={c.id}>
            <button
              className={`cat-item${activeId === c.id ? " cat-item--active" : ""}`}
              onClick={() => scrollTo(c.id)}
            >
              {c.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function OrderSidebar({ cart }: { cart: CartEntry[] }) {
  const total = cart.reduce((sum, e) => {
    const price = typeof e.item.price === "number" ? e.item.price : 0;
    return sum + price * e.qty;
  }, 0);

  return (
    <aside className="order-sidebar">
      <h3 className="order-title">Ваше замовлення</h3>

      {!RESTAURANT.isOpen ? (
        <div className="order-closed">
          <span className="order-closed-icon"><img src="/HomeKorzina.png" alt="" /></span>
          <p className="order-closed-text">Тимчасово не працює</p>
        </div>
      ) : cart.length === 0 ? (
        <div className="order-closed">
          <span className="order-closed-icon">🛒</span>
          <p className="order-closed-text">Кошик порожній</p>
        </div>
      ) : (
        <>
          <ul className="order-list">
            {cart.map(({ item, qty }) => (
              <li key={item.id} className="order-row">
                <span className="order-row-name">{item.name}</span>
                <span className="order-row-qty">×{qty}</span>
                <span className="order-row-price">
                  {typeof item.price === "number" ? item.price * qty : "—"} грн
                </span>
              </li>
            ))}
          </ul>
          <div className="order-total">
            <span>Разом</span>
            <span>{total} грн</span>
          </div>
          <button className="order-btn">Оформити замовлення</button>
        </>
      )}
    </aside>
  );
}


export default function MenuPage() {
  const [activeId, setActiveId] = useState(CATEGORIES[0].id);
  const [cart, setCart] = useState<CartEntry[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        const hit = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActiveId(hit.target.id);
      },
      { rootMargin: "-15% 0px -75% 0px", threshold: 0 }
    );
    CATEGORIES.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observerRef.current?.observe(el);
    });
    return () => observerRef.current?.disconnect();
  }, []);

  const handleAdd = (item: MenuItem) => {
    setCart((prev) => {
      const found = prev.find((e) => e.item.id === item.id);
      if (found) return prev.map((e) => e.item.id === item.id ? { ...e, qty: e.qty + 1 } : e);
      return [...prev, { item, qty: 1 }];
    });
  };

  return (
    <div className="page-wrap">
      <CategorySidebar activeId={activeId} />

      <main className="page-main">
      
<Link href="/" className="floating-logo">
  <img src="/Logo11.png" alt="logo" />
</Link>
        <div className="hero">
          
          <img src={RESTAURANT.cover} alt={RESTAURANT.name} className="hero-cover" />
          <div className="hero-overlay">
            <div className="hero-logo-wrap">
              <img src={RESTAURANT.logo} alt="logo" className="hero-logo" />
            </div>
            <h1 className="hero-name">{RESTAURANT.name}</h1>
          </div>
        </div>
<div className="mobile-menu">
  <h2 className="mobile-menu-title">Меню</h2>

  <div className="mobile-categories">
    {CATEGORIES.map((cat) => (
      <button
        key={cat.id}
        className={`mobile-cat ${
          activeId === cat.id ? "mobile-cat--active" : ""
        }`}
        onClick={() =>
          document
            .getElementById(cat.id)
            ?.scrollIntoView({ behavior: "smooth" })
        }
      >
        {cat.label}
      </button>
    ))}
  </div>
</div>
        {CATEGORIES.map((cat) => (
          <MenuSection key={cat.id} cat={cat} onAdd={handleAdd} />
        ))}
      </main>

      <OrderSidebar cart={cart} />
    </div>
  );
}