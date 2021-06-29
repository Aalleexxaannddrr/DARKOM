import React from 'react'
import { useHttp } from '../hooks/http.hook';
import './footer.css'

export const Footer = () => {

  const {request} = useHttp()

      const modal = document.getElementById("myModal");

      const openModal = () => {
        document.getElementById("myModal").style.display = "block";
  }
  
    const closeModal = () => {
      document.getElementById("myModal").style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target === modal) {
          document.getElementById("myModal").style.display = "none";
        }
      }

  const pressHandler = async () => {
    try {
      await request('/api/category/add', 'POST', { name: '1', description: '2', imgUrl: '3'})
    } catch (e) {}
      }
  
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-title">
          <p>Контактная</p>
          <p>информация</p>
        </div>
        <hr></hr>
        <div className="footer-info">
          <p>
            <span className="material-icons">
            smartphone
            </span>
            Телефон
          </p>
          <p>
            <span className="material-icons">
            alternate_email
            </span>
            E-mail
           </p>
        </div>
      </div>
      <div className="modalBtnContent">
        <button className="modalBtn" id="myBtn" onClick={() => openModal()}>Заявка на обратную связь</button>
      </div>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={() => closeModal()}>&times;</span>
          <div className="FormContainer">
          <form action="action_page.php">

            <label htmlFor="fname">Как к вам обращаться</label>
            <input type="text" placeholder="Ваше имя..." />

            <label htmlFor="lname">Ваш номер телефона</label>
            <input type="text" placeholder="+7(983)-241-38-85" />
            <label htmlFor="lname">Ваш E-mail</label>
            <input type="text" placeholder="example@example.example" />
            <label htmlFor="lname">Ваш регион</label>
            <input type="text" placeholder="Иркутская область" />

            <label htmlFor="country">Номенклатурная группа</label>
            <select id="country" name="country">
              <option value="australia">Гайковерты</option>
              <option value="canada">Тракторы</option>
              <option value="usa">Категория 3</option>
            </select>
              <label htmlFor="country">Ваш вопрос</label>
            <select id="country" name="country">
              <option value="buy">Заказать продукцию</option>
              <option value="question">Задать вопрос</option>
            </select>

            <label htmlFor="subject">Описание вопроса</label>
            <textarea id="subject" name="subject" placeholder="Здесь опишите подробнее в чем состоит ваш вопрос или уточните какой товар вы хотите заказать" style={{height: '200px'}}></textarea>

            <input type="submit" onClick={() => pressHandler()} value="Отправить заявку" />
            <input type="submit" className="Cancel" value="Отменить заявку" />
            

          </form>
        </div>
        </div>
    </div>
    </div>
  )
}