let expenseSource = document.getElementById("inpsource");
let expenseAmount = document.getElementById("inpamount");

const expenseDisplay = document.getElementById("expense-display");
const incomeDisplay = document.getElementById("income-display");

let btnExpense = document.getElementById("add-expense");
let btnIncome = document.getElementById("add-income");

let tExpAmount = document.createElement("h4");
tExpAmount.id = "totalexp-amount";
document.querySelector(".exp-tamount").appendChild(tExpAmount);
let texpa;
let expArr = [];

let accountBalance = document.createElement("h4");
document.querySelector(".accbalance").appendChild(accountBalance);
let op = document.getElementById("acc-balance");

btnExpense.addEventListener("click", () => {
  if (expenseSource.value == "" || expenseAmount.value == "") {
    return;
  }

  document.querySelector(".expdisplay").style.display = "flex";

  let displaySE = document.createElement("div");
  displaySE.classList.add("expense-contents");

  let pSource = document.createElement("p");
  pSource.id = "display-source";

  let pAmount = document.createElement("p");
  pAmount.id = "display-amount";

  let finalP = document.createElement("p");
  finalP.id = "final";

  displaySE.appendChild(pSource);
  displaySE.appendChild(pAmount);
  displaySE.appendChild(finalP);

  expenseDisplay.appendChild(displaySE);
  pAmount.textContent = expenseAmount.value;
  pAmount.style.display = "none";

  finalP.textContent =
    expenseSource.value.trim()[0].toUpperCase() +
    expenseSource.value.trim().slice(1) +
    " : " +
    expenseAmount.value;

  expenseSource.value = "";
  expenseAmount.value = "";

  let expAmt = expArr.push(Number(pAmount.textContent));

  texpa = expArr.reduce((a, c) => a + c);

  tExpAmount.textContent = "Total Expense : " + texpa;
  accountBalance.textContent = "Account Balance : " + (tinca - texpa);

  document.querySelector(".end").style.display = "flex";
});

let tIncAmount = document.createElement("h4");
tIncAmount.id = "totalinc-amount";
document.querySelector(".inc-tamount").appendChild(tIncAmount);
let tinca;

let incArr = [];

btnIncome.addEventListener("click", () => {
  if (expenseSource.value == "" || expenseAmount.value == "") {
    return;
  }

  document.querySelector(".incdisplay").style.display = "flex";

  let displaySI = document.createElement("div");
  displaySI.classList.add("income-contents");

  let iSource = document.createElement("p");
  iSource.id = "income-source";

  let iAmount = document.createElement("p");
  iAmount.id = "income-amount";

  let resultI = document.createElement("p");
  resultI.id = "final";

  displaySI.appendChild(iSource);
  displaySI.appendChild(iAmount);
  displaySI.appendChild(resultI);

  incomeDisplay.appendChild(displaySI);

  iAmount.textContent = expenseAmount.value;
  iAmount.style.display = "none";

  resultI.textContent =
    expenseSource.value.trim()[0].toUpperCase() +
    expenseSource.value.trim().slice(1) +
    " : " +
    expenseAmount.value;

  expenseSource.value = "";
  expenseAmount.value = "";

  let incAmt = incArr.push(Number(iAmount.textContent));

  tinca = incArr.reduce((a, c) => a + c);

  tIncAmount.textContent = "Total Income : " + tinca;
  accountBalance.textContent = "Account Balance : " + (tinca - texpa);
});
