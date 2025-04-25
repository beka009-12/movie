import { FC } from "react";
import scss from "./Header.module.scss";
import { Link, useNavigate } from "react-router-dom";
import { links } from "../../../constant/Link";

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <section className={scss.Header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.menu}>
            <div className={scss.logo}>
              <img
                onClick={() => navigate("/")}
                src="https://start.ru/static/images/header/logo_white_V2.svg"
                alt="logo"
              />
            </div>

            <form className={scss.form}>
              <input
                className={scss.input}
                placeholder="Найти фильмы и сериалы"
                required
                type="text"
              />
            </form>
          </div>
          <nav>
            {links.map((item, index) => (
              <Link key={index} className={scss.link} to={item.link}>
                <p>{item.title}</p>
              </Link>
            ))}
          </nav>
          <div className={scss.btn}>
            <button className={scss.logIn}onClick={()=> navigate("/Login")}>Войти</button>
            <button className={scss.signUp}onClick={()=> navigate("/Register")}>Зарегистрируйтесь бесплатно</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
