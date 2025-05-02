import React, { useState } from "react";

const Help = () => {
  // Состояния для ответов на вопросы
  const [activeQuestion, setActiveQuestion] = useState(null);

  // Функция для переключения активного вопроса
  const toggleAnswer = (index) => {
    if (activeQuestion === index) {
      setActiveQuestion(null); // Если вопрос уже открыт, скрываем его
    } else {
      setActiveQuestion(index); // Иначе показываем ответ на этот вопрос
    }
  };

  return (
    <div className="help-page">
      <h1>Нужна помощь?</h1>
      <p>Здесь ты найдешь ответы на частые вопросы и способы связи с нами.</p>

      <div className="help-section">
        <h2>Часто задаваемые вопросы</h2>
        <ul>
          <li>
            <button className="question" onClick={() => toggleAnswer(0)}>
              Как оформить заказ?
            </button>
            {activeQuestion === 0 && (
              <p className="answer">
                Для оформления заказа, выберите товар и нажмите "Добавить в корзину". После этого перейдите в корзину и завершите покупку.
              </p>
            )}
          </li>
          <li>
            <button className="question" onClick={() => toggleAnswer(1)}>
              Как отследить посылку?
            </button>
            {activeQuestion === 1 && (
              <p className="answer">
                Для отслеживания посылки, войдите в личный кабинет и перейдите в раздел "Мои заказы", где будет ссылка для отслеживания.
              </p>
            )}
          </li>
          <li>
            <button className="question" onClick={() => toggleAnswer(2)}>
              Можно ли вернуть товар?
            </button>
            {activeQuestion === 2 && (
              <p className="answer">
                Да, вы можете вернуть товар в течение 14 дней с момента получения при условии, что товар не был в употреблении и сохранены все ярлыки.
              </p>
            )}
          </li>
        </ul>
      </div>

      <div className="help-section">
        <h2>Связаться с нами</h2>
        <p>Email: support@example.com</p>
        <p>Телефон: +7 777 777 77 77</p>
      </div>
    </div>
  );
};

export default Help;
