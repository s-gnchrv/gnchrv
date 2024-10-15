import React from "react";
import styles from "./SkillsBlock.module.scss";
import Title from "../../../components/Title";
import Subtitle from "../../../components/Subtitle";
import ListItem from "../../../components/ListItem";

const SkillsBlock: React.FC = () => {
  return (
    <div className={[styles.skills, "block", "container"].join(" ")}>
      <Title>Навыки</Title>
      <div className={styles.skills__content}>
        <div className={styles.skills_level}>
          <div className={styles.skills_level__category}>
            <Subtitle>Backend</Subtitle>
            <ul>
              {[...new Array(3)].map((_, index) => (
                <li key={index} className={styles.skills_level__skill}>
                  <p className={styles.skills_level__name}>Python</p>
                  <div className={styles.skills_level__level}>
                    <div className={styles.active}></div>
                    <div className={styles.active}></div>
                    <div className={styles.active}></div>
                    <div className={styles.active}></div>
                    <div></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          {[...new Array(3)].map((_, index) => (
            <div key={index} className={styles.skills_level__category}>
              <Subtitle>Backend</Subtitle>
              <ul>
                {[...new Array(2)].map((_, index) => (
                  <li key={index} className={styles.skills_level__skill}>
                    <p className={styles.skills_level__name}>Python</p>
                    <div className={styles.skills_level__level}>
                      <div className={styles.active}></div>
                      <div className={styles.active}></div>
                      <div className={styles.active}></div>
                      <div className={styles.active}></div>
                      <div></div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className={styles.skills__list_block}>
          <p>Я могу разработать:</p>
          <ul>
            <ListItem>Веб-сайт</ListItem>
            <ListItem>Телеграм бот</ListItem>
          </ul>
        </div>
        <div className={styles.skills__list_block}>
          <p>
            Помимо умения применять определенные технологии, я обладаю
            фундаментальными знаниями в области компьютерных наук:
          </p>
          <ul>
            <ListItem>Объектно-ориентированное программирование</ListItem>
            <ListItem>Архитектура вычислительных систем</ListItem>
            <ListItem>Базы данных</ListItem>
            <ListItem>Алгоритмы и структуры данных</ListItem>
          </ul>
        </div>
        <div className={styles.skills__list_block}>
          <p>К моим soft-skills можно отнести:</p>
          <ul>
            <ListItem>Умение работать в команде</ListItem>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SkillsBlock;
