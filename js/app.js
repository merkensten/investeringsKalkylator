'use strict'

/**
 * The starting point of the application.
 *
 * @author Mattis Erkensten <m.erkensten@icloud.com>
 * @version 1.0
 */

const startInputEl = document.querySelector('#kapital');
const avkastningInputEl = document.querySelector('#avkastning');
const antalYearsInputEl = document.querySelector('#years');
const calculateBtn = document.querySelector('#btn');
const displayResultEl = document.querySelector('#display-result');

/**
 * 
 */
const calculateProfitFunc = () => {
  const startkapital = parseInt(startInputEl.value);
  const avkastning = parseInt(avkastningInputEl.value);
  const antalYears = parseInt(antalYearsInputEl.value);

  const result = startkapital * (1 + avkastning / 100) ** antalYears;
  displayResultEl.textContent = result;
};

calculateBtn.addEventListener('click', calculateProfitFunc);
