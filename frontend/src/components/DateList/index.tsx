import React from "react";
import styles from "./DateList.module.scss";

const DateList: React.FC = () => {
  return (
    <ul className={styles.dates}>
      <li>
        <p className={styles.dates__period}>2012 г.</p>
        <p className={styles.dates__title}>Первый веб-сайт</p>
        <div className={styles.dates__description}>
          <p>
            Создал свою первую веб-страницу на уже древней технологии XHTML 1.1.
          </p>
        </div>
      </li>
      <li>
        <p className={styles.dates__period}>2012 г. - 2018 г.</p>
        <p className={styles.dates__title}>Самообучение</p>
        <div className={styles.dates__description}>
          <p>
            Самостоятельно изучал технологии создания веб-сайтов и языки
            программирования по видеоурокам и видеокурсам в Интернете.
          </p>
        </div>
      </li>
      <li>
        <p className={styles.dates__period}>2018 г. - 2020 г.</p>
        <p className={styles.dates__title}>Лицей №10 - Пермь</p>
        <div className={styles.dates__description}>
          <p>
            Обучался в IT-классе. Принимал активное участие в олимпиадах по
            программированию.
          </p>
        </div>
      </li>
      <li>
        <p className={styles.dates__period}>2020 г. - 2025 г.</p>
        <p className={styles.dates__title}>
          НИУ “Высшая Школа Экономики” - Пермь
        </p>
        <div className={styles.dates__description}>
          <p>Направление: Программная инженерия.</p>
          <p>
            Получил глубокие знания в компьютерных науках, научился работать в
            команде и освоил множество новых технологий.
          </p>
        </div>
      </li>
    </ul>
  );
};

export default DateList;
