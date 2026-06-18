import React from 'react';
import './HealthInfo.css'; // Импортируем наш CSS

const contentData = {
  companyDescription: `Ми робимо все, щоб Ви залишилися задоволені якістю наших страв і сервісом, а тому уважно стежимо за відгуками на сайті та в соціальних мережах. Також, у нас цілодобово працює "Гаряча лінія" 0-800-201-911, для того, щоб Ви могли дати зворотний зв'язок про Dinevo в будь-який момент.`,
  recommendationsTitle: "Піклуючись про ваше здоров'я, Dinevo не рекомендує:",
  recommendationsList: [
    "вживати важку їжу на голодний шлунок;",
    "вживати копченості, жирні сорти м'яса і риби, гірчицю, перець і інші гострі приправи дітям дошкільного віку;",
    "переїдати (нехай залишається легке відчуття голоду);",
    "вживати суші і роли без васабі і імбиру;",
    "вживати сиру рибу майбутнім мамам;",
    "вживати велику кількість борошняних виробів."
  ]
};

const HealthInfo = () => {
  const { companyDescription, recommendationsTitle, recommendationsList } = contentData;

  // Форматирование телефона в тексте
  const renderFormattedDescription = (text) => {
    const phoneRegex = /(0-800-\d{3}-\d{3})/;
    const parts = text.split(phoneRegex);
    
    return parts.map((part, index) => 
      phoneRegex.test(part) ? (
        <span key={index} className="phone-highlight">{part}</span>
      ) : part
    );
  };

  return (
    <div className="health-info-wrapper mb-32">
      <div className="health-card">
        
        {/* Левая колонка */}
        <div className="card-left">
          <p>{renderFormattedDescription(companyDescription)}</p>
        </div>

        {/* Линия раздела */}
        <div className="card-divider"></div>

        {/* Правая колонка */}
        <div className="card-right">
          <p className="recommendations-title">{recommendationsTitle}</p>
          <ul className="recommendations-list">
            {recommendationsList.map((item, index) => (
              <li key={index}>
                <span className="list-dash">—</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </div>
  );
};

export default HealthInfo;