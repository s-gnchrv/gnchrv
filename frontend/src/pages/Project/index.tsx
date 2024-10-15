import React from "react";

import styles from "./Project.module.scss";

import ArrowButton from "../../components/ArrowButton";
import ListItem from "../../components/ListItem";
import Subtitle from "../../components/Subtitle";
import Title from "../../components/Title";
import TechnologyList from "../../components/TechnologyList";

const Project: React.FC = () => {
  return (
    <div className={[styles.project, "container"].join(" ")}>
      <ArrowButton to="/projects" left>
        К списку проектов
      </ArrowButton>
      <div className={styles.project__info}>
        <div className={styles.project__image}>
          <img src="/project.png" alt="" />
        </div>
        <div className={styles.project__description}>
          <h1 className={styles.project__title}>
            Веб-сайт для ресторана быстрого питания
          </h1>
          <ul className={styles.project__main}>
            <ListItem>Тип проекта: Веб-сайт</ListItem>
            <ListItem>Дата: Май 2023 г.</ListItem>
            <ListItem>Дата: Май 2023 г.</ListItem>
            <ListItem>Дата: Май 2023 г.</ListItem>
          </ul>
          <div className={styles.project__text}>
            <p>
              Сайт для онлайн-заказов еды из ресторана быстрого питания с
              панелью управления и генерацией отчетов в формате DOCX.
            </p>
            <p>
              С помощью админ панели можно изменять ассортимент товаров,
              просматривать заказы и управлять их состоянием. Существует
              разграничение прав доступа по ролям.
            </p>
          </div>
          <div className={styles.project__links}>
            <ArrowButton to="" small>
              <svg
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Код проекта
            </ArrowButton>
            <ArrowButton to="" small>
              <svg
                fill="none"
                height="24"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 11.9976C14 9.5059 11.683 7 8.85714 7C8.52241 7 7.41904 7.00001 7.14286 7.00001C4.30254 7.00001 2 9.23752 2 11.9976C2 14.376 3.70973 16.3664 6 16.8714C6.36756 16.9525 6.75006 16.9952 7.14286 16.9952"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M10 11.9976C10 14.4893 12.317 16.9952 15.1429 16.9952C15.4776 16.9952 16.581 16.9952 16.8571 16.9952C19.6975 16.9952 22 14.7577 22 11.9976C22 9.6192 20.2903 7.62884 18 7.12383C17.6324 7.04278 17.2499 6.99999 16.8571 6.99999"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Демонстрация
            </ArrowButton>
          </div>
          <div className={styles.project__features}>
            <Subtitle underlined>Возможности</Subtitle>
            <ul>
              <ListItem>Фильтрация товаров по категориям</ListItem>
              <ListItem>Оформление заказа</ListItem>
              <ListItem>Изменение ассортимента товаров</ListItem>
              <ListItem>Просмотр заказов и изменение их статуса</ListItem>
              <ListItem>Формирование отчетов в формате DOCX</ListItem>
            </ul>
          </div>
        </div>
        <div className={styles.project__technologies}>
          <TechnologyList technologies={["C#", "ASP.NET", "PostgreSQL"]} />
        </div>
      </div>
      <div className={[styles.details, "block"].join(" ")}>
        <Title>Подробности</Title>
        <div className={styles.details__content}>
          <div className={styles.details__item}>
            <img src="/project_mainpage.png" alt="" />
            <div className={styles.details__text}>
              <Subtitle underlined>Главная страница</Subtitle>
              <p>
                На главной странице представлен ассортимент ресторана. Есть
                фильтрация по категориям, можно добавить товар в корзину.
              </p>
            </div>
          </div>
          <div className={styles.details__item}>
            <img src="/project_info.png" alt="" />
            <div className={styles.details__text}>
              <Subtitle underlined>Информация о заказе</Subtitle>
              <p>
                На странице информации о заказе можно просмотреть все данные о
                клиенте, список заказанных продуктов, а также можно изменить
                статус заказа.
              </p>
            </div>
          </div>
          <div className={styles.details__item}>
            <img src="/project_report.png" alt="" />
            <div className={styles.details__text}>
              <Subtitle underlined>Отчет</Subtitle>
              <p>Пример отчета, которые может сформировать система.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
