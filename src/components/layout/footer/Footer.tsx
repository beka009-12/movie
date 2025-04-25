import { FC } from "react";
import scss from "./Footer.module.scss";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaBluesky } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";

const Footer: FC = () => {
  return (
    <section className={scss.Footer}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.footerBox}>
            <div className={scss.logo}>
              <img
                src="https://start.ru/static/images/header/logo_white_V2.svg"
                alt="Footer logo"
              />
            </div>
            <div className={scss.footerText}>
              <h3>Компания</h3>
              <ul>
                <li>
                  <a href="#">О нас</a>
                </li>
                <li>
                  <a href="#">Вакансии</a>
                </li>
                <li>
                  <a href="#">Наша культура</a>
                </li>
                <li>
                  <a href="#">Благотворительность</a>
                </li>
                <li>
                  <a href="#">Партнеры</a>
                </li>
                <li>
                  <a href="#">Новости</a>
                </li>
                <li>
                  <a href="#">Plex Gear</a>
                </li>
                <li>
                  <a href="#">Блог Plex</a>
                </li>
                <li>
                  <a href="#">Advertise with Us</a>
                </li>
              </ul>
            </div>
            <div className={scss.footerText}>
              <h3>Start Pass</h3>
              <ul>
                <li>
                  <a href="#">Подключить Премиум</a>
                </li>
                <li>
                  <a href="#">Start</a>
                </li>
                <li>
                  <a href="#">Start Labs</a>
                </li>
                <li>
                  <a href="#">Специальные предложения</a>
                </li>
              </ul>
            </div>
            <div className={scss.footerText}>
              <h3>Загрузки</h3>
              <ul>
                <li>
                  <a href="#">Медиасервер Start</a>
                </li>
                <li>
                  <a href="#">Плекс</a>
                </li>
                <li>
                  <a href="#">Плексамп</a>
                </li>
                <li>
                  <a href="#">Фотографии Start</a>
                </li>
                <li>
                  <a href="#">Плекс Дэш</a>
                </li>
                <li>
                  <a href="#">Где смотреть</a>
                </li>
              </ul>
            </div>
            <div className={scss.footerText}>
              <h3>Поддерживать</h3>
              <ul>
                <li>
                  <a href="#">Поиск помощи</a>
                </li>
                <li>
                  <a href="#">Библиотека поддержки</a>
                </li>
                <li>
                  <a href="#">Форумы сообщества</a>
                </li>
                <li>
                  <a href="#">Правила сообщества</a>
                </li>
                <li>
                  <a href="#">Вопросы по выставлению счетов</a>
                </li>
                <li>
                  <a href="#">Статус</a>
                </li>
                <li>
                  <a href="#">Награда за обнаружение ошибок</a>
                </li>
                <li>
                  <a href="#">CordCutter</a>
                </li>
                <li>
                  <a href="#">Свяжитесь с нами</a>
                </li>
              </ul>
            </div>
            <div className={scss.footerText}>
              <h3>Смотреть бесплатно</h3>
              <ul>
                <li>
                  <a href="#">Откройте для себя Start</a>
                </li>
                <li>
                  <a href="#">Поиск ТВ-каналов</a>
                </li>
                <li>
                  <a href="#">Что смотреть</a>
                </li>
                <li>
                  <a href="#">Что смотреть на Netflix</a>
                </li>
                <li>
                  <a href="#">Что смотреть на Hulu</a>
                </li>
                <li>
                  <a href="#">Фильмы А24</a>
                </li>
                <li>
                  <a href="#">Фильмы ко Дню Святого Валентина</a>
                </li>
                <li>
                  <a href="#">Рождественские фильмы</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={scss.footerBlock}>
          <div className={scss.footerLinks}>
            <p>Авторские права © 2025 Start</p>
            <a href="#"></a>
            <a href="#">Конфиденциальность и юридическая информация</a>
            <a href="#">Доступность</a>
            <a href="#">Управление файлами </a>
          </div>
          <div className={scss.footerApp}>
            <FaInstagram />
            <FaTiktok />
            <FaFacebookF />
            <FaBluesky />
            <FaYoutube />
            <FaLinkedinIn />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
