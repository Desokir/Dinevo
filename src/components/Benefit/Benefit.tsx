import type { FC } from 'react';
import './Benefit.css';

export default function Benefit() {
  return (
    <div className="benefits">
      <h1 className="benefitsTitle">Доставимо все що завгодно</h1>

      <div className="benefitsRow">
        <div className="benefitItem">
          <img src="Benefits1.svg" alt="" />
          <h2>Найкращі ресторани вашого міста</h2>
          <p>У нашому додатку — величезний вибір ресторанів. Замовте свою улюблену їжу або дізнайтеся, про нові ресторани поруч із вами!</p>
        </div>

        <div className="benefitItem">
          <img src="Benefits2.svg" alt="" />
          <h2>Швидка доставка</h2>
          <p>З блискавичною швидкістю! Надішліть посилку або замовте доставку в межах міста і отримайте бажане за лічені хвилини</p>
        </div>

        <div className="benefitItem">
          <img src="Benefits3.svg" alt="" />
          <h2>Доставка продуктів і не тільки</h2>
          <p>У нас ви знайдете все необхідне! Супермаркети, невеликі магазини, аптеки та кіоски з квітами — якщо потрібний товар продається у вашому місті, замовте й отримайте бажане.</p>
        </div>
      </div>
      <button className='buttonSearch'>Шукати заклади поруч зі мною</button>
    </div>
  );
}
