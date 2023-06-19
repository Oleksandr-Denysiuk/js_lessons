// ===================== setTimeout =======================

// const logMessage = () => {
//   console.log("Лог при виклику callback функції через 3 секунди.");
// };
// logMessage();
// console.log("До виклику setTimeout");

// setTimeout(() => {
//   console.log("1 - В середині callback для setTimeout");
// }, 2000);

// setTimeout(
//   (x) => {
//     console.log(x);
//     console.log("2 - В середині callback для setTimeout");
//   },
//   5000,
//   111
// );
// console.log("Після виклику setTimeout");

// for (let index = 1; index < 10000; index++) {
//   console.log(index);
// }
// ===========================================================

// ======================  clearTimeout  =====================

// const logger = (x) => {
//   console.log(`Лог через ${x} ms, тому що не відмінили setTimeout!`);
// };

// const timerId = setTimeout(logger, 2000, 2000);

// console.log(timerId);

// const shouldCancerTimer = Math.random() > 0.3;
// console.log(shouldCancerTimer);

// if (shouldCancerTimer) {
//   clearTimeout(timerId);
// }

// ============================================================

// ========================= setInterval ======================

// const logger = (time) => console.log(`Лог кожні ${time} ms - ${Date.now()}.`);

// setInterval(logger, 2000, 2000);

// ============================================================

// ==================== notification ==========================

// const NOTTIFICATION_DELAY = 10000;
// let timeoutId = null;
// const refs = {
//   notification: document.querySelector(".js-alert"),
// };

// refs.notification.addEventListener("click", onNotificationClick);

// showNotification();

// function onNotificationClick() {
//   hideNotification();
//   console.log("click");

//   clearTimeout(timeoutId);
// }
// function showNotification() {
//   refs.notification.classList.add("is-visible");
//   console.log("show");

//   timeoutId = setTimeout(() => {
//     console.log("Закриваємо алерт автоматично, щоб не висів!");
//     hideNotification();
//   }, NOTTIFICATION_DELAY);
// }

// function hideNotification() {
//   refs.notification.classList.remove("is-visible");
// }

// ========================================================

// ==================== subscryption ======================
// const PROMPT_DELAY = 2000;
// const MAX_PROMPT_ATEMPT = 3;

// let promptCounter = 0;

// const intervalId = setInterval(() => {
//   const now = new Date();
//   const hours = now.getHours();
//   const minutes = now.getMinutes();
//   const seconds = now.getSeconds();
//   const day = now.getDate();
//   const month = now.getMonth() + 1;
//   const year = now.getFullYear();
//   promptCounter += 1;
//   console.log(
//     `Subscribe! - ${hours}:${minutes}:${seconds} - ${day}.${month}.${year}`
//   );
//   if (promptCounter === MAX_PROMPT_ATEMPT) {
//     console.log("Stop");
//     clearInterval(intervalId);
//     return;
//   }
// }, PROMPT_DELAY);

// import BSN from "bootstrap.native";

// const modal = new BSN.Modal("#subscription-modal ");
// console.log(modal);

// =================== Реклама ================

// const box = document.querySelector(".box");
// const timerTitle = document.querySelector(".js-timmer");
// const closeButtom = document.querySelector(".js-close");
// let counter = 11;

// setTimeout(() => {
//   box.style.display = "block";

//   const id = setInterval(() => {
//     counter -= 1;
//     timerTitle.textContent = counter;

//     if (!counter) {
//       box.style.display = "none";
//       clearInterval(id);
//       //   timerTitle.textContent = "X";
//       //   timerTitle.addEventListener("click", onClick);
//     }
//   }, 1000);
// }, 1000);

// closeButtom.addEventListener("click", onClick);
// function onClick() {
//   box.style.display = "none";
// }

// =============== Calendar ================

const daysOfWeek = [
  "Неділя",
  "Понеділок",
  "Вівторок",
  "Середа",
  "Четвер",
  "Пятниця",
  "Субота",
];

const monthList = [
  "Січень",
  "Лютий",
  "Березень",
  "Квітень",
  "Травень",
  "Червень",
  "Липень",
  "Серпень",
  "Вересень",
  "Жовтень",
  "Листопад",
  "Грудень",
];
// console.log("inside calendar");

setInterval(() => {
  const currentDate = new Date();
  const day = document.querySelector(".day");
  const date = document.querySelector(".date");
  const month = document.querySelector(".month");
  const year = document.querySelector(".year");
  const digitalClock = document.querySelector(".digital-clock");
  const secondsArrow = document.querySelector(".seconds-arrow");
  const minutesArrow = document.querySelector(".minutes-arrow");
  const hoursArrow = document.querySelector(".hours-arrow");

  const hours = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();

  const changeSeconds = (360 / 60) * seconds;
  const changeMinutes = (360 / 60) * minutes;
  const changeHours = (360 / 12) * hours + 30 * (minutes / 60);

  const correctTime = `Поточний час  ${hours
    .toString()
    .padStart(2, "0")} : ${minutes.toString().padStart(2, "0")} : ${seconds
    .toString()
    .padStart(2, "0")}`;

  day.textContent = daysOfWeek[currentDate.getDay()];
  date.textContent = currentDate.getDate();
  month.textContent = monthList[currentDate.getMonth()];
  year.textContent = currentDate.getFullYear();
  digitalClock.textContent = correctTime;
  secondsArrow.style.transform = `rotate(${changeSeconds}deg)`;
  minutesArrow.style.transform = `rotate(${changeMinutes}deg)`;
  hoursArrow.style.transform = `rotate(${changeHours}deg)`;
}, 1000);

// ==================== Game Casino =================
const start = document.querySelector(".js-start");
const container = document.querySelector(".js-container");

start.addEventListener("click", onStart);
// ===== variant 1====
// function onStart() {
//   const result = [];
//   console.log(container);
//   [...container.children].forEach((box) => (box.textContent = " "));
//   [...container.children].forEach((box, i) =>
//     createPromise(i)
//       .then((smile) => {
//         box.textContent = smile;
//         result.push("1");
//       })
//       .catch((smile) => {
//         box.textContent = smile;
//       })
//       .finally(() => {
//         setTimeout(() => {
//           if (i === container.children.length - 1) {
//             if (!result.length || result.length === 3) {
//               alert("WINER!!!");
//             } else {
//               alert("You lose!");
//             }
//           }
//         }, 500);
//       })
//   );
// }

// function createPromise(delay) {
//   return new Promise((res, rej) => {
//     setTimeout(() => {
//       const random = Math.random();
//       if (random > 0.5) {
//         res("🍎");
//       } else {
//         rej("🍋");
//       }
//     }, delay * 1000);
//   });
// }
// ======= variant 2
function onStart() {
  let counter = 0;
  [...container.children].forEach((box) => (box.textContent = " "));
  const promises = [...container.children].map((_, i) => createPromise(i));
  Promise.allSettled(promises).then((item) => {
    item.forEach((item, i) => {
      setTimeout(() => {
        if (item.status === "fulfilled") {
          counter += 1;
        }
        container.children[i].textContent = item.value || item.reason;
        if (container.children.length - 1 === i) {
          setTimeout(() => {
            if (counter === container.children.length || !counter) {
              alert("WINER!!!");
            } else {
              alert("You LOSE");
            }
          }, 500);
        }
      }, i * 1000);
    });
  });
}

function createPromise() {
  return new Promise((res, rej) => {
    const random = Math.random();
    if (random > 0.5) {
      res("🍏");
    } else {
      rej("🍓");
    }
  });
}

// ========================= Timer (секундомір) ================

const clockFace = document.querySelector(".js-clockface");
const startBtn = document.querySelector("button[data-action-start]");
const stopBtn = document.querySelector("button[data-action-stop]");

class Timer {
  constructor({ onTick }) {
    this.intervalId = null;
    this.isAktiv = false;
    this.onTick = onTick;

    this.init();
  }
  init() {
    const timerContent = this.getTimeComponents(0);
    this.onTick(timerContent);
  }
  start() {
    if (this.isAktiv) {
      return;
    }

    this.isAktiv = true;
    const startTime = Date.now();
    console.log(startTime);

    this.intervalId = setInterval(() => {
      const currentTime = Date.now();
      const timerData = currentTime - startTime;
      const timerContent = this.getTimeComponents(timerData);

      this.onTick(timerContent);
    }, 1000);
  }
  stop() {
    clearInterval(this.intervalId);
    this.isAktiv = false;
    const timerContent = this.getTimeComponents(0);
    this.onTick(timerContent);
  }

  getTimeComponents(time) {
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    );
    const minutes = this.pad(
      Math.floor((time % (1000 * 60 * 60)) / (1000 * 60))
    );
    const seconds = this.pad(Math.floor((time % (1000 * 60)) / 1000));
    return { hours, minutes, seconds };
  }

  pad(value) {
    return String(value).padStart(2, "0");
  }
}

const timer = new Timer({ onTick: setClockFace });

startBtn.addEventListener("click", () => {
  timer.start(timer);
});
stopBtn.addEventListener("click", () => {
  timer.stop(timer);
});

function setClockFace({ hours, minutes, seconds }) {
  clockFace.textContent = `${hours} : ${minutes} : ${seconds}`;
}

// ==================== Promise (Repeta)================
// const promise = new Promise((resolve, reject) => {
//   const canFullFilled = Math.random() > 0.5;

//   setTimeout(() => {
//     if (canFullFilled) {
//       resolve("Проміс виконався успішно!");
//     }

//     reject("Проміс виконався з помилкою...");
//   }, 2000);
// });
// ========
// promise.then(
//   (result) => {
//     console.log(`😀 ${result}`);
//   },

//   (error) => {
//     console.log(`😡 ${error}`);
//   }
// );

// promise.then(onResult, onError);

// =======
// promise
//   .then(onResult)
//   .then((x) => {
//     console.log(x);
//     return 10;
//   })
//   .then((y) => {
//     console.log(y);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log(" Я виконаюсь в любому випадку!");
//   });

// function onResult(value) {
//   console.log(`😀 ${value}`);
// }
// function onError(error) {
//   console.log(`😡 ${error}`);
// }

// console.log(promise);

// =================== промісифікація===================
// const makeOrder = (dish) => {
//   const delay = 1000;

//   return new Promise((resolve, reject) => {
//     const order = Math.random() > 0.5;

//     setTimeout(() => {
//       if (order) {
//         resolve("Ваше замовлення готове!");
//       }
//       reject("Закінчились продукти!");
//     }, delay);
//   });
// };

// makeOrder("пиріжок").then(onSuccees).catch(onReject);

// function onSuccees(value) {
//   console.log(value);
// }

// function onReject(error) {
//   console.log(error);
// }

// ========== Promise.resolve

// const makeNewOrder = (dish) => {
//   return Promise.resolve("Ваше замовлення готове!");
// };

// makeNewOrder("булочка").then(onOrderSuccees);

// function onOrderSuccees(value) {
//   console.log(value);
// }
// =========
// ============ Pokemon (приклад промісифікації на покемонах)

// const fetchPokemonById = (id) => {
//   return fetch(`https://pokeapi.co/api/v2/pokemon/${id}`).then((r) => r.json());
// };

// fetchPokemonById(1).then(onFetchSucces).catch(onFetchError);

// fetchPokemonById(2).then(onFetchSucces).catch(onFetchError);

// fetchPokemonById(3).then(onFetchSucces).catch(onFetchError);

// function onFetchSucces(pokemon) {
//   console.log("onFetchSucces=>");
//   console.log(pokemon);
// }

// function onFetchError(error) {
//   console.log("onFetchError=>");
//   console.log(error);
// }
// =========== Ще трохи промісів

// const makePromise = () => {
//   return new Promise((resolve, reject) => {
//     const random = Math.random();
//     const passed = random > 0.5;
//     console.log(random);
//     setTimeout(() => {
//       if (passed) {
//         resolve("😎 Its resolve!");
//       }
//       reject("👿 Bad, its reject...");
//     }, 1000);
//   });
// };

// makePromise()
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));

// =================== Гра Іподром ===============

const horses = [
  "Secretariat",
  "Eclipse",
  "West Australian",
  "Flying Fox",
  "Seabuiscuit",
];

let raceCounter = 0;
const refs = {
  startButton: document.querySelector(".js-rase-start"),
  winnerField: document.querySelector(".js-winner"),
  progressField: document.querySelector(".js-progress"),
  tableBody: document.querySelector(".js-table"),
};

refs.startButton.addEventListener("click", onStart);

function onStart() {
  raceCounter += 1;

  const promises = horses.map(run);

  updateWinnerField("");
  updateProgresField("Забіг почався, ставки не приймаються!");
  determineWinner(promises);
  waitForAll(promises);
}

function determineWinner(horsesP) {
  Promise.race(horsesP).then(({ horse, time }) => {
    updateWinnerField(`Заїзд виграв кінь ${horse}, з результатом часу ${time}`);
    updateResultTable({ horse, time, raceCounter });
  });
}

function waitForAll(horsesP) {
  return Promise.all(horsesP).then(() => {
    updateProgresField("Забіг закінчився, ставки приймаються!");
  });
}

function updateWinnerField(message) {
  refs.winnerField.textContent = message;
}

function updateProgresField(message) {
  refs.progressField.textContent = message;
}

function updateResultTable({ horse, time, raceCounter }) {
  const tr = `<tr> <td>${raceCounter}</td> <td>${horse}</td> <td>${time}</td> </tr>`;
  refs.tableBody.insertAdjacentHTML("beforeend", tr);
}

function run(horse) {
  return new Promise((resolve) => {
    const time = getRandomTime(2000, 3500);

    setTimeout(() => {
      resolve({ horse, time });
    }, time);
  });
}

function getRandomTime(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
