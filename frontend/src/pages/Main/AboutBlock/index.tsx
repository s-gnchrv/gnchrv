import React from "react";

import styles from "./AboutBlock.module.scss";

import Subtitle from "../../../components/Subtitle";
import DateList from "../../../components/DateList";
import Title from "../../../components/Title";

const AboutBlock: React.FC = () => {
  return (
    <div className={[styles.about, "block", "container"].join(" ")}>
      <Title>Обо мне</Title>
      <div className={styles.about__content}>
        <div className={styles.about__info}>
          <div className={styles.about__story}>
            <p>
              Свой первый сайт я создал, когда мне было 10 лет. Это была простая
              веб-страница на XHTML 1.1. Тогда я впервые заинтересовался тем,
              как работает Интернет, и нашел видеоуроки по созданию веб-сайтов.
            </p>
            <p>
              С тех пор я много совершенствовал свои знания, изучил PHP и
              JavaScript, мои сайты стали динамические, что еще больше
              подстегнуло мой интерес к веб-разработке.
            </p>
            <p>
              После того, как я сдал ОГЭ в 9 классе по информатике и английскому
              языку, я поступил в престижный пермский лицей в IT-класс. Во время
              обучения в нем я принимал активное участие в большом количестве
              олимпиад по программированию и нередко занимал призовые места.
            </p>
            <p>
              По окончании школы у меня не стояло выбора, на какую специальность
              я хочу поступать в ВУЗ. Я однозначно знал, что хочу связать с
              программированием, и поэтому поступил в один из лучших вузов
              России - НИУ ВШЭ - по направлению “Программная инженерия”.
            </p>
            <p>
              В ВУЗе я освоил множество новых технологий и получил глубокие
              знания в компьютерных науках. Пристрастился к языку
              программирования Python, параллельно изучил TypeScript и ReactJS.
            </p>
          </div>
          <div className={styles.about__publications}>
            <Subtitle>Научные публикации</Subtitle>
            <ul>
              <li>
                <a href="">
                  Нейросетевая система прогнозирования зарплаты
                  python-разработчика
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.about__dates}>
          <DateList />
        </div>
      </div>
    </div>
  );
};

export default AboutBlock;
