import { FC, useState } from "react";
import scss from "./Login.module.scss";

const Login: FC = () => {
  const [selected, setSelected] = useState<"Почта" | "Телефон">("Почта");

  const labelText =
    selected === "Почта" ? "Введите почту" : "Введите номер телефона";

  return (
    <section className={scss.Login}>
      <div className={scss.bgOverlay}></div>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.loginBox}>
            <div className={scss.loginBlock}>
              <h1>Войти</h1>

              <div className={scss.radioInput}>
                <div
                  className={scss.selection}
                  style={{
                    backgroundColor: "rgb(203, 5, 5)",
                    transform:
                      selected === "Почта"
                        ? "translateX(0%)"
                        : "translateX(100%)",
                  }}
                />

                <label>
                  <input
                    type="radio"
                    name="method"
                    value="Почта"
                    checked={selected === "Почта"}
                    onChange={() => setSelected("Почта")}
                  />
                  <span>Почта</span>
                </label>

                <label>
                  <input
                    type="radio"
                    name="method"
                    value="Телефон"
                    checked={selected === "Телефон"}
                    onChange={() => setSelected("Телефон")}
                  />
                  <span>Телефон</span>
                </label>
              </div>

              <div className={scss.logInput}>
                <input
                  required
                  type={selected === "Почта" ? "email" : "tel"}
                  className={scss.input}
                />
                <span className={scss.bar}></span>
                <label className={scss.label}>
                  {[...labelText].map((char, index) => (
                    <span
                      key={index}
                      className={scss.labelChar}
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      {char === " " ? "\u00A0" : char}
                    </span>
                  ))}
                </label>
              </div>

              <div className={scss.logInput}>
                <input required type="password" className={scss.input} />
                <span className={scss.bar}></span>
                <label className={scss.label}>
                  {"Пароль".split("").map((char, index) => (
                    <span
                      key={index}
                      className={scss.labelChar}
                      style={{ "--index": index } as React.CSSProperties}
                    >
                      {char}
                    </span>
                  ))}
                </label>
              </div>

              <div className={scss.logBtn}>
                <button>Войти</button>
                <p>ИЛИ</p>
                <button className={scss.google}>
                  <img
                    src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000"
                    alt="google"
                  />
                  Google
                </button>
              </div>

              <a href="#">Забыли пароль?</a>

              <div className={scss.logInfo}>
                <p>Запомнить меня</p>
                <p>
                  Впервые на Netflix? <a href="#">Оформите подписку.</a>
                </p>
                <p>
                  Эта страница защищена Google reCAPTCHA, <br /> чтобы мы знали,
                  что вы не бот.
                </p>
                <a href="#">Подробнее</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
