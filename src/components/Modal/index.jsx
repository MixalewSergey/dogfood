import { useState, useContext } from "react";
import "./style.css";
import Ctx from "../../context";

const Modal = ({ active, setActive, setUser }) => {
  const [auth, setAuth] = useState("true");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [testPwd, setTestPwd] = useState("");

  const {api} = useContext(Ctx);

  const testAccess = {
    color: pwd == testPwd ? "forestgreen" : "crimson"
  }

  const switchAuth = (e) => {
    e.preventDefault();
    setAuth(!auth);
    clearForm();
  }
  const clearForm = () => {
    setName("");
    setEmail("");
    setPwd("");
    setTestPwd("");

  }
  const sendForm = async (e) => {
    e.preventDefault();
    let body = {
      email: email,
      password: pwd
    }
    if (!auth) {
      body.name = name;
      body.group = "group-12";
    }
    // let log = "https://api.react-learning.ru/signin"; // вход
    // let reg = "https://api.react-learning.ru/signup"; // регистрация 
    //Регистрация !== вход (после добавления пользователя 
    // в базу данных нужно будет войти в аккаунт)
    // let res = await fetch(auth ? log : reg, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify(body)
    // })
    let data = await (auth ? api.auth(body) : api.reg(body))
    if (!data.err) {
      //при регистрации с сервера приходит объект 
      // о пользователе {name,email,_id,group}
      /**при входе с сервера приходят два параметра:
       * 1) токен (без него м не можем работать с сервером дальше)
       * 2) тоже что и пре регистрации
       * {data{}, token:""}
       */
      if (!auth) {
        delete body.name;
        delete body.group;
        // let resLog = await fetch(log, {
        //   method: "POST",
        //   headers: {
        //     "Content-Type": "application/json"
        //   },
        //   body: JSON.stringify(body)
        // })
        let dataLog = await api.auth(body)
        if (!dataLog.err) {
          localStorage.setItem("rockUser", dataLog.data.name);
          localStorage.setItem("rockToken", dataLog.token);
          localStorage.setItem("rockId", dataLog.data._id);
          clearForm();
         setUser(dataLog.data.name);
          setActive(false);
        }
      } else {
        if (!data.err) {
          localStorage.setItem("rockUser", data.data.name);
          localStorage.setItem("rockToken", data.token);
          localStorage.setItem("rockId", data.data._id);
          clearForm();
         setUser(data.data.name);
          setActive(false);
        }
      }
    }

  }


  return <div
    className="my-modal-wrapper"
    style={{ display: active ? "flex" : "none" }}>
    <div className="my-modal">
      <button onClick={() => setActive(false)} className="close-btn-modal">Закрыть окно</button>
      <h3>Авторизация</h3>
      <form onSubmit={sendForm}>
        {!auth && <label>
          Имя пользователя
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>}
        <label>
          Электронный адрес
          <input
           placeholder=""
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Пароль
          <input
            placeholder=""
            type="password"
            value={pwd}
            onChange={(e) => setPwd(e.target.value)}
          />
        </label>
        {!auth && <label>
          Повторить пароль
          <input
            type="password"
            value={testPwd}
            onChange={(e) => setTestPwd(e.target.value)}
            style={testAccess}
          //style = {{border: 1 px solid,backgraundcolor:"green"...}}
          />
        </label>}
        <div className="my-modal-ctr">
          <button className="my-modal-btn"
            //Если кнопка формы регистрации то проверяем :
            // соотетствие паролей  но они не должны быть пустыми
            disabled={!auth && (!pwd || pwd !== testPwd)}>
            {auth ? "Войти" : "Создать аккаунт"}
          </button>
          <a
            href=""
            className="my-modal-link"
            onClick={switchAuth}
          >{auth ? "Регистрация" : "Войти"}</a>
        </div>
      </form>
    </div>
  </div>
}

export default Modal;