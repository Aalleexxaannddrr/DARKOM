import React from 'react'
import './main.css'
import {Slider} from "../components/slider";



export const MainPage = () => {

  const openTab = async (tabName) => {
      var i, x;
      x = document.getElementsByClassName("containerTab");
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';
      }
      document.getElementById(tabName).style.display = 'block';
    }
  
  return (
    <div className="slide-container">
        <div>
            <Slider/>
        </div>
     <div className="about">
        <b>О компании</b>
        <p></p>
        <b>ООО «Дарком» создано в 2016 году. Мы занимаемся обеспечением промышленных предприятий оборудованием и
        инструментом, которые необходимы им в процессе производства продукции или ремонта и обслуживания основных
        средств. Работаем с крупными производителями гидравлического оборудования и инструмента по всему миру, а
        также другого оборудования, востребованного в В2В секторе. Качество продукции наших поставщиков проверено десятилетиями
        работы, подтверждено соответствующими сертификатами и нашим опытом работы</b>
        <p></p>
        <b>Всегда рады предложить Вам выгодные условия сотрудничества! Ждем Ваших запросов!</b>
      </div>
      <div className="row">
        <div className="column1" onClick={() => openTab('b1')}>Категория 1</div>
        <div className="column1" onClick={() => {openTab('b2')}}>Категория 2</div>
        <div className="column1" onClick={() => {openTab('b3')}}>Категория 3</div>
        <div className="column1" onClick={() => {openTab('b4')}}>Категория 4</div>
        <div className="column1" onClick={() => {openTab('b5')}}>Категория 5</div>
        <div className="column1" onClick={() => {openTab('b6')}}>Категория 6</div>
        <div className="column1" onClick={() => {openTab('b7')}}>Категория 7</div>
        <div className="column1" onClick={() => {openTab('b8')}}>Категория 8</div>
        <div className="column1" onClick={() => {openTab('b9')}}>Категория 9</div>
      </div>
      <div id="b1" className="containerTab">
        <span onClick={ () => { document.getElementById("b1").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 1</h2>
        <p>Lorem ipsum..</p>
      </div>
     
      <div id="b2" className="containerTab">
        <span onClick={() => { document.getElementById("b2").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 2</h2>
        <p>Lorem ipsum..</p>
      </div>
    
      <div id="b3" className="containerTab">
        <span onClick={() => { document.getElementById("b3").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 3</h2>
        <p>Lorem ipsum..</p>
      </div>
      <div id="b4" className="containerTab">
        <span onClick={() => { document.getElementById("b4").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 4</h2>
        <p>Lorem ipsum..</p>
      </div>
      <div id="b5" className="containerTab">
        <span onClick={() => { document.getElementById("b5").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 5</h2>
        <p>Lorem ipsum..</p>
      </div>
      <div id="b6" className="containerTab">
        <span onClick={() => { document.getElementById("b6").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 6</h2>
        <p>Lorem ipsum..</p>
      </div>
      <div id="b7" className="containerTab">
        <span onClick={() => { document.getElementById("b7").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 7</h2>
        <p>Lorem ipsum..</p>
      </div>
      <div id="b8" className="containerTab">
        <span onClick={() => { document.getElementById("b8").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 8</h2>
        <p>Lorem ipsum..</p>
      </div>  
      <div id="b9" className="containerTab">
        <span onClick={() => { document.getElementById("b9").style.display = 'none' }} className="closebtn">x</span>
        <h2>Box 9</h2>
        <p>Lorem ipsum..</p>
      </div>
      </div>
  )
}