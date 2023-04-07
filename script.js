import { cE, qS } from "./utilities.js";
import myJson from "./mock.json" assert { type: "json" };

//Esercizio avanzato (percentuale delle todos completate e non completate)

const graphicCreator = () => {
  myJson.todos.forEach((todo) => main.append(createTodo(todo)));

  myJson.todos.map((todo) => {
    if (todo.completed === true) {
      comp++;
      compMedia = (comp * 30) / 100;
      completed.style.height = `${compMedia * 50}px`;
      compPercentage = (comp * 333.33).toFixed() / 100;
      compCheck.textContent = `${compPercentage}%`;
    }
    if (todo.completed === false) {
      uncomp++;
      uncomMedia = (uncomp * 30) / 100;
      uncompleted.style.height = `${uncomMedia * 50}px`;
      uncomPercentage = (uncomp * 333.33).toFixed() / 100;
      uncompCheck.textContent = `${uncomPercentage}%`;
    }
  });

  if (compPercentage > uncomPercentage) {
    reminder.textContent = "You're going well! Keep this flow.";
    reminder.style.color = "#00d900";
    footer.appendChild(reminder);
  } else if (compPercentage < uncomPercentage) {
    reminder.textContent = "You must improve! don't give up!";
    reminder.style.color = "red";
    footer.appendChild(reminder);
  } else if (compPercentage === uncomPercentage) {
    reminder.textContent = "Well, not bad. But you can do more.";
    reminder.style.color = "yellow";
    footer.appendChild(reminder);
  }
};

const createTodo = (obj) => {
  const todoEl = cE("div");
  const textCont = cE("div");
  const textEl = cE("p");
  const checkCont = cE("div");
  const isChecked = cE("input");
  const checkEl = cE("h4");

  todoEl.className = "todo";
  textCont.className = "text";
  checkCont.className = "check";
  isChecked.className = "isChecked";

  isChecked.type = "checkbox";

  if (obj.completed === true) {
    isChecked.checked = true;
    checkEl.style.color = "green";
    checkCont.style.border = "2px solid green";
    todoEl.style.border = "2px solid green";
  } else {
    checkEl.style.color = "red";
    checkCont.style.border = "2px solid red";
    todoEl.style.border = "2px solid red";
  }

  textEl.textContent = `"${obj.todo}"`;
  checkEl.textContent = obj.completed === true ? "completed" : "uncompleted";

  isChecked.addEventListener("change", () => {
    if (isChecked.checked === true) {
      checkEl.textContent = "completed";
      checkEl.style.color = "green";
      checkCont.style.border = "2px solid green";
      todoEl.style.border = "2px solid green";
      comp++;
      uncomp--;
      compMedia = (comp * 30) / 100;
      completed.style.height = `${compMedia * 50}px`;
      uncompleted.style.height = `${uncomMedia - 150}px`;
      compPercentage = (comp * 333.33).toFixed() / 100;
      compCheck.textContent = `${compPercentage}%`;
      uncomMedia = (uncomp * 30) / 100;
      uncompleted.style.height = `${uncomMedia * 50}px`;
      completed.style.height = `${compMedia - 150}px`;
      uncomPercentage = (uncomp * 333.33).toFixed() / 100;
      if (uncomPercentage === 0) {
        uncompCheck.style.display = "none";
      } else {
        uncompCheck.textContent = `${uncomPercentage}%`;
      }
      if (compPercentage > uncomPercentage) {
        reminder.textContent = "You're going well! Keep this flow.";
        reminder.style.color = "#00d900";
      } else if (compPercentage < uncomPercentage) {
        reminder.textContent = "You must improve! don't give up!";
        reminder.style.color = "red";
      } else if (compPercentage === uncomPercentage) {
        reminder.textContent = "Well, not bad. But you can do more.";
        reminder.style.color = "yellow";
      }
    } else if (isChecked.checked === false) {
      checkEl.textContent = "uncompleted";
      checkEl.style.color = "red";
      checkCont.style.border = "2px solid red";
      todoEl.style.border = "2px solid red";
      comp--;
      uncomp++;
      uncomMedia = (uncomp * 30) / 100;
      uncompleted.style.height = `${uncomMedia * 50}px`;
      completed.style.height = `${compMedia - 150}px`;
      uncomPercentage = (uncomp * 333.33).toFixed() / 100;
      uncompCheck.textContent = `${uncomPercentage}%`;
      compMedia = (comp * 30) / 100;
      completed.style.height = `${compMedia * 50}px`;
      uncompleted.style.height = `${uncomMedia - 150}px`;
      compPercentage = (comp * 333.33).toFixed() / 100;
      if (compPercentage === 0) {
        compCheck.style.display = "none";
      } else {
        compCheck.textContent = `${compPercentage}%`;
      }
      if (compPercentage > uncomPercentage) {
        reminder.textContent = "You're going well! Keep this flow.";
        reminder.style.color = "#00d900";
      } else if (compPercentage < uncomPercentage) {
        reminder.textContent = "You must improve! don't give up!";
        reminder.style.color = "red";
      } else if (compPercentage === uncomPercentage) {
        reminder.textContent = "Well, not bad. But you can do more.";
        reminder.style.color = "yellow";
      }
    }
  });

  textCont.appendChild(textEl);
  checkCont.append(isChecked, checkEl);
  todoEl.append(textCont, checkCont);
  return todoEl;
};

const main = qS("main");
const reminder = cE("p");
const footer = qS("footer");
const completed = qS(".completed");
const uncompleted = qS(".uncompleted");
const compCheck = qS("#comPercentage");
const uncompCheck = qS("#unPercentage");
let comp = 0;
let compMedia = 0;
let compPercentage = 0;
let uncomMedia = 0;
let uncomPercentage = 0;
let uncomp = 0;

reminder.style.cursor = "default";
completed.style.transition = "0.8s";
uncompleted.style.transition = "0.8s";

graphicCreator();
