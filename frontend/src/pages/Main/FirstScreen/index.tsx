import React from "react";
import styles from "./FirstScreen.module.scss";
import PrimaryButton from "../../../components/PrimaryButton";
import ImageLayout from "../../../components/ImageLayout";
import Contact from "../../../components/Contact";

const FirstScreen: React.FC = () => {
  return (
    <div className={[styles.fs, "container"].join(" ")}>
      <ImageLayout>
        <p className={styles.fs__title}>
          Привет! Меня зовут <span>Сергей Гончаров</span>!
        </p>
        <p className={styles.fs__description}>
          Я Full Stack веб-разработчик из Перми. Могу довести любую вашу идею до
          готового продукта, доступного в Интернете.
        </p>
        <div className={styles.fs__skills}>
          <ul>
            <li>Python</li>
            <li>FastAPI</li>
            <li>Django</li>
            <li>C-Sharp</li>
            <li>ASP.NET</li>
            <li>Deploy</li>
            <li>TypeScript</li>
            <li>ReactJS</li>
            <li>Telegram-Bot</li>
          </ul>
        </div>
        <div className={styles.fs__contacts}>
          <ul>
            <li>
              <Contact>
                <svg
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 9L12 12.5L17 9"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2 17V7C2 5.89543 2.89543 5 4 5H20C21.1046 5 22 5.89543 22 7V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                </svg>
                <a href="mailto:s@gnchrv.ru">s@gnchrv.ru</a>
              </Contact>
            </li>
            <li>
              <Contact>
                <svg
                  fill="none"
                  height="24"
                  stroke-width="1.5"
                  viewBox="0 0 24 24"
                  width="24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="https://t.me/s_gnchrv" target="_black">
                  @s_gnchrv
                </a>
              </Contact>
            </li>
            <li>
              <Contact>
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
                <a href="">s-gnchrv</a>
              </Contact>
            </li>
          </ul>
        </div>
        <div className={styles.fs__button}>
          <PrimaryButton href="https://t.me/s_gnchrv" target="_blank">
            <svg
              fill="none"
              height="24"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 5L2 12.5L9 13.5M21 5L18.5 20L9 13.5M21 5L9 13.5M9 13.5V19L12.2488 15.7229"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Написать в Telegram
          </PrimaryButton>
        </div>
      </ImageLayout>
    </div>
  );
};

export default FirstScreen;
