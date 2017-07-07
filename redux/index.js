
import { createStore } from './redux';
import $ from 'jquery';

$('document.body').append(`
  <p id="counter"></p>
  <button id="increaseBtn">+</button>
  <button id="decreaseBtn">-</button>
`);


//state是状态树，可以是任意的结构
//action是一个纯对象{type:'increase'}

let reduce  = (state = {number: 0},action)=>{

};
createStore();