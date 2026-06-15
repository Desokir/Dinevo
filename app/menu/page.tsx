"use client";

import { useEffect, useRef, useState } from "react";
import "@/app/menu/menu.css";


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
  cover:"/PapaGiviBaner.png",
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
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z5",
        name: "Пивна нарізка м'ясна",
        weight: "100г",
        price: 235,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z6",
        name: "Паштет печінковий по-грузинськи",
        weight: "180/30/60г",
        price: 145,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z7",
        name: "Оселедець на тостах",
        weight: "250г",
        price: 188,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z8",
        name: "Нарізка сала",
        weight: "100г",
        price: 135,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "z9",
        name: "Креветка варена",
        weight: "180г",
        price: 325,
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal2",
        name: "Салат з курячою печінкою та карамелізованою грушею",
        weight: "300г",
        price: 206,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal3",
        name: "Салат по-грузинськи",
        weight: "250г",
        price: 122,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal4",
        name: "Бустнеулі грілі",
        weight: "270г",
        price: 155,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal5",
        name: "Салат з кільцями кальмарів та перцем Капі",
        weight: "350г",
        price: 330,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal6",
        name: "Салат зі свіжими помідорами та бринзою",
        weight: "250г",
        price: 152,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal7",
        name: "Салат з курячим філе та овочами",
        weight: "250г",
        price: 155,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal8",
        name: "Олів'є з яловичиною та креветками",
        weight: "300г",
        price: 155,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal9",
        name: "Салат з буряком, фетою та чорносливом",
        weight: "300г",
        price: 155,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "sal10",
        name: "Салат Тбілісі",
        weight: "300г",
        price: 193,
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os2",
        name: "Оджахурі зі свининою",
        weight: "320г",
        price: 225,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os3",
        name: "Тбілісурі",
        weight: "350г",
        price: 250,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os4",
        name: "Курча табака",
        weight: "200/30/30г",
        price: 330,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os5",
        name: "Печериці на кеці",
        weight: "200г",
        price: 155,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os6",
        name: "Лобіо",
        weight: "250г",
        price: 125,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os7",
        name: "Долма",
        weight: "170/50г",
        price: 152,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os8",
        name: "Лосось зі шпинатом у вершковому соусі на кеці",
        weight: "350г",
        price: 447,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os9",
        name: "Оджахурі з бараниною",
        weight: "350г",
        price: 257,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "os10",
        name: "Чахохбілі",
        weight: "500г",
        price: 257,
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "p2",
        name: "Суп харчо",
        weight: "300г",
        price: 130,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "p3",
        name: "Борщ",
        weight: "300г",
        price: 123,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "p4",
        name: "Солянка",
        weight: "300г",
        price: 125,
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
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
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "g2",
        name: "Аджапсандалі з горіхами",
        weight: "250г",
        price: 121,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "g3",
        name: "Картопля печена",
        weight: "200г",
        price: 78,
        img: "/Rectangle 85 (1).png",
      },
      {
        id: "g4",
        name: "Сирники із сметаною та джемом",
        weight: "200/30/30г",
        price: 155,
        img: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=280&fit=crop",
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
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=280&fit=crop",
      },
      {
        id: "my2",
        name: "Люля кебаб",
        weight: "200/30/30г",
        price: "195 / 229",
        img: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=400&h=280&fit=crop",
      },
      {
        id: "my3",
        name: "Свинячі реберця з ягідно-винним соусом",
        weight: "200/30/30г",
        price: 383,
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=400&h=280&fit=crop",
      },
      {
        id: "my4",
        name: "Доджер дог",
        weight: "500г",
        price: 257,
        img: "https://images.unsplash.com/photo-1619740455993-9d8bc2e9b49d?w=400&h=280&fit=crop",
      },
      {
        id: "my5",
        name: "Каре ягняти",
        weight: "280г",
        price: 488,
        img: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=400&h=280&fit=crop",
      },
      {
        id: "my6",
        name: "Стейк зі свинини",
        weight: "480г",
        price: 132,
        img: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?w=400&h=280&fit=crop",
      },
      {
        id: "my7",
        name: "Сулугуні в лаваші",
        weight: "200/30/30г",
        price: 132,
        img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=280&fit=crop",
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
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=280&fit=crop",
      },
      {
        id: "d2",
        name: "Грузинська Шарлотта",
        weight: "150г",
        price: 134,
        img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=280&fit=crop",
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
        img: "https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&h=280&fit=crop",
      },
      {
        id: "v2",
        name: "Пеновані з сиром",
        weight: "350г",
        price: 201,
        img: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=400&h=280&fit=crop",
      },
      {
        id: "v3",
        name: "Хачапурі по-аджарськи",
        weight: "450г",
        price: 232,
        img: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&h=280&fit=crop",
      },
      {
        id: "v4",
        name: "Хачапурі по-імеретинськи",
        weight: "540г",
        price: 155,
        img: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=400&h=280&fit=crop",
      },
      {
        id: "v5",
        name: "Маринара піца",
        weight: "600г",
        price: 186,
        img: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=400&h=280&fit=crop",
      },
      {
        id: "v6",
        name: "Лобіані",
        weight: "200/30/30г",
        price: 152,
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=280&fit=crop",
      },
      {
        id: "v7",
        name: "Мексикурі піца",
        weight: "600г",
        price: 186,
        img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=400&h=280&fit=crop",
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
        img: "https://images.unsplash.com/photo-1589135233689-8d5e6b027c71?w=400&h=280&fit=crop",
      },
      {
        id: "so2",
        name: "Сацебелі",
        weight: "200/30/30г",
        price: 45,
        img: "https://images.unsplash.com/photo-1599921841143-819065a55cc5?w=400&h=280&fit=crop",
      },
      {
        id: "so3",
        name: "Ткемалі",
        weight: "200/30/30г",
        price: 54,
        img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=400&h=280&fit=crop",
      },
      {
        id: "so4",
        name: "Сирний",
        weight: "200/30/30г",
        price: 61,
        img: "https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&h=280&fit=crop",
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
        img: "https://images.unsplash.com/photo-1548839140-29a749e1cf4d?w=400&h=280&fit=crop",
      },
      {
        id: "n2",
        name: "Кока-кола",
        weight: "250мл",
        price: 155,
        img: "https://images.unsplash.com/photo-1629203851122-3726ecdf080e?w=400&h=280&fit=crop",
      },
      {
        id: "n3",
        name: "Сік в асортименті",
        weight: "250мл",
        price: 88,
        img: "https://images.unsplash.com/photo-1613478223719-2ab802602423?w=400&h=280&fit=crop",
      },
      {
        id: "n4",
        name: "Лимонад грузинський",
        weight: "500мл",
        price: 88,
        img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&h=280&fit=crop",
      },
      {
        id: "n5",
        name: "Компот",
        weight: "1л",
        price: 115,
        img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?w=400&h=280&fit=crop",
      },
    ],
  },
];

// ─── Sub-components ────────────────────────────────────────────────────────────

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

// ─── Page ─────────────────────────────────────────────────────────────────────

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
        {/* Hero */}
        <div className="hero">
          <img src={RESTAURANT.cover} alt={RESTAURANT.name} className="hero-cover" />
          <div className="hero-overlay">
            <div className="hero-logo-wrap">
              <img src={RESTAURANT.logo} alt="logo" className="hero-logo" />
            </div>
            <h1 className="hero-name">{RESTAURANT.name}</h1>
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