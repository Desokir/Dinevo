"use client";

import { useMemo, useState } from "react";
import "./menu.css";
import Syrnyky from "@/public/syrnyky.png";

type FoodItem = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type CartItem = FoodItem & { qty: number };

type Category = {
  id: string;
  title: string;
  items: FoodItem[];
};

const categories: Category[] = [
  {
    id: "breakfast",
    title: "Сніданки",
    items: [
      {
        id: 1,
        name: "Сирники із сметаною та джемом",
        price: 155,
        image: Syrnyky.src,
      },
      {
        id: 2,
        name: "Яєчня з овочами та беконом",
        price: 165,
        image: Syrnyky.src,
      },
      {
        id: 3,
        name: "Сирники класичні",
        price: 140,
        image: Syrnyky.src,
      },
      {
        id: 4,
        name: "Сирники з шоколадом",
        price: 170,
        image: Syrnyky.src,
      },
    ],
  },

  {
    id: "snacks",
    title: "Закуски",
    items: [
      { id: 5, name: "Сирники запечені", price: 200, image: Syrnyky.src },
      { id: 6, name: "Сирники з медом", price: 145, image: Syrnyky.src },
      { id: 7, name: "Сирники з ягодами", price: 180, image: Syrnyky.src },
      { id: 8, name: "Сирники міні", price: 120, image: Syrnyky.src },
    ],
  },

  {
    id: "salads",
    title: "Салати",
    items: [
      { id: 9, name: "Сирники салат версія", price: 155, image: Syrnyky.src },
      { id: 10, name: "Сирники з овочами", price: 165, image: Syrnyky.src },
      { id: 11, name: "Сирники гриль", price: 175, image: Syrnyky.src },
      { id: 12, name: "Сирники дієтичні", price: 135, image: Syrnyky.src },
    ],
  },

  {
    id: "main",
    title: "Основні страви",
    items: [
      { id: 13, name: "Сирники XXL", price: 220, image: Syrnyky.src },
      { id: 14, name: "Сирники з соусом", price: 210, image: Syrnyky.src },
      { id: 15, name: "Сирники фірмові", price: 250, image: Syrnyky.src },
      { id: 16, name: "Сирники преміум", price: 300, image: Syrnyky.src },
    ],
  },
];

export default function MenuPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  const add = (item: FoodItem) => {
    setCart((prev) => {
      const ex = prev.find((p) => p.id === item.id);

      if (ex) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...item, qty: 1 }];
    });
  };

  const minus = (id: number) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const total = useMemo(
    () => cart.reduce((s, i) => s + i.price * i.qty, 0),
    [cart]
  );

  const count = useMemo(
    () => cart.reduce((s, i) => s + i.qty, 0),
    [cart]
  );

  return (
    <div className="menuPage">

      <aside className="sidebar">
        <h3>Меню</h3>
        {categories.map((c) => (
          <a key={c.id} href={`#${c.id}`} className="link">
            {c.title}
          </a>
        ))}
      </aside>

      <main className="content">
        {categories.map((cat) => (
          <section key={cat.id} id={cat.id}>
            <h2>{cat.title}</h2>

            <div className="grid">
              {cat.items.map((item) => {
                const inCart = cart.find((c) => c.id === item.id);

                return (
                  <div className="card" key={item.id}>
                    <img src={item.image} alt={item.name} />

                    <div className="body">
                      <h4>{item.name}</h4>
                      <p>{item.price} грн</p>

                      {!inCart ? (
                        <button onClick={() => add(item)}>
                          + Додати
                        </button>
                      ) : (
                        <div className="counter">
                          <button onClick={() => minus(item.id)}>-</button>
                          <span>{inCart.qty}</span>
                          <button onClick={() => add(item)}>+</button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </main>

      <aside className="cart">
        <h3>Ваше замовлення</h3>
        <p>{count} товарів</p>

        {cart.length === 0 ? (
          <p>Тимчасово не працює</p>
        ) : (
          <>
            {cart.map((i) => (
              <div key={i.id} className="row">
                <span>
                  {i.name} x{i.qty}
                </span>
                <span>{i.price * i.qty} грн</span>
              </div>
            ))}

            <b>Всього: {total} грн</b>
          </>
        )}
      </aside>

    </div>
  );
}