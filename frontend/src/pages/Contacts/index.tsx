import React from "react";

import styles from "./Contacts.module.scss";

import ImageLayout from "../../components/ImageLayout";
import Subtitle from "../../components/Subtitle";
import PrimaryButton from "../../components/PrimaryButton";
import Contact from "../../components/Contact";

const Contacts: React.FC = () => {
  return (
    <div className={[styles.contacts, "container"].join(" ")}>
      <ImageLayout>
        <h1 className={styles.contacts__name}>Гончаров Сергей Андреевич</h1>
        <h2 className={styles.contacts__occupation}>Веб-разработчик</h2>
        <Subtitle>Контакты</Subtitle>
        <div className={styles.contacts__contacts}>
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
                <a href="">Email: s@gnchrv.ru</a>
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
                    d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z"
                    stroke="currentColor"
                    stroke-width="1.5"
                  />
                  <path
                    d="M17.5 6.51L17.51 6.49889"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <a href="">Instagram: s_gnchrv</a>
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
                <a href="">Telegram: s_gnchrv</a>
              </Contact>
            </li>
            <li>
              <Contact>
                <svg
                  className="icon-fill"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title />
                  <g
                    data-name="vk vkontakte media social"
                    id="vk_vkontakte_media_social"
                  >
                    <path d="M28.89,22a30.07,30.07,0,0,0-4.13-5.15.2.2,0,0,1,0-.25,40.66,40.66,0,0,0,3.55-5.81,1.9,1.9,0,0,0-.08-1.86A1.81,1.81,0,0,0,26.65,8h-3a2,2,0,0,0-1.79,1.19,35,35,0,0,1-3.12,5.51V9.8A1.79,1.79,0,0,0,16.94,8H12.56a1.4,1.4,0,0,0-1.12,2.21l.4.56a1.84,1.84,0,0,1,.33,1.05v3.84A26.11,26.11,0,0,1,9.05,9.35,2,2,0,0,0,7.16,8H4.71a1.73,1.73,0,0,0-1.66,2.14c1.35,5.73,4.18,10.48,7.77,13a1,1,0,0,0,1.39-.23,1,1,0,0,0-.23-1.4C8.84,19.31,6.34,15.12,5.07,10l2.1,0a26.12,26.12,0,0,0,4.1,7.75,1.6,1.6,0,0,0,1.8.52,1.64,1.64,0,0,0,1.1-1.57V11.82A3.78,3.78,0,0,0,13.71,10h3v5.43A1.77,1.77,0,0,0,18,17.15a1.74,1.74,0,0,0,2-.69A36.87,36.87,0,0,0,23.62,10h2.8a39.81,39.81,0,0,1-3.29,5.37,2.17,2.17,0,0,0,.2,2.83A32.08,32.08,0,0,1,27.25,23H23.9a14,14,0,0,0-4.07-4.31,1.64,1.64,0,0,0-1.73-.13,1.69,1.69,0,0,0-.92,1.52v2.38a.53.53,0,0,1-.5.55h-.86a1,1,0,0,0,0,2h.86a2.52,2.52,0,0,0,2.5-2.55V20.69a11.78,11.78,0,0,1,3,3.32,2,2,0,0,0,1.69,1h3.38a1.92,1.92,0,0,0,1.69-1A2,2,0,0,0,28.89,22Z" />
                  </g>
                </svg>
                <a href="">Вконтакте: s_gnchrv</a>
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
                <a href="">GitHub: s-gnchrv</a>
              </Contact>
            </li>
          </ul>
        </div>
        <p className={styles.contacts__description}>
          Вы можете связаться со мной любым удобным для вас способом!
        </p>
        <PrimaryButton href="">Узнать обо мне</PrimaryButton>
      </ImageLayout>
    </div>
  );
};

export default Contacts;
