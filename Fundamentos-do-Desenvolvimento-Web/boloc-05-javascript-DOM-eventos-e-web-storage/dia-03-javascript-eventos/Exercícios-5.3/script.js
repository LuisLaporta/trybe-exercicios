function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

// 1.O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas da tag <ul> com ID "days". Note que os dias 29 e 30 de novembro estão no array pois representam respectivamente Segunda-feira e Terça-feira.

function creatDays() {
  let ulDays = document.querySelector('#days');

  for (let index = 0; index < dezDaysList.length; index += 1) {
    let daysCalender = dezDaysList[index];
    let listDays = document.createElement('li');

    if (daysCalender === 25) {
      listDays.className = 'day holiday friday';
      listDays.innerHTML = daysCalender;
      ulDays.appendChild(listDays);
    } else if (daysCalender === 24 || daysCalender === 31) {
      listDays.className = 'day holiday';
      listDays.innerHTML = daysCalender;
      ulDays.appendChild(listDays);
    } else if (daysCalender === 4 || daysCalender === 11 || daysCalender === 18) {
      listDays.className = 'day friday';
      listDays.innerHTML = daysCalender;
      ulDays.appendChild(listDays);
    } else {
      listDays.className = 'day';
      listDays.innerHTML = daysCalender;
      ulDays.appendChild(listDays);
    }
  }
}
creatDays();


// 2.Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um botão com o nome "Feriados".
function createButtonHoliday() {
  let buttonContainer = document.querySelector('.buttons-container');
  let button = document.createElement('button');

  button.innerHTML = 'Feriados';
  button.id = 'btn-holiday';
  buttonContainer.appendChild(button);
};

createButtonHoliday();


// 3.Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a cor de fundo dos dias que possuem a classe "holiday".
function switchBackColorHolidays() {
  let holidays = document.getElementsByClassName('holiday');
  let buttonHoliday = document.querySelector('#btn-holiday');

  buttonHoliday.addEventListener('click', function() {
    for (let index = 0; index < holidays.length; index += 1) {
      if (holidays[index].style.backgroundColor === 'white') {
        holidays[index].style.backgroundColor = 'rgb(238,238,238)';
      } else {
        holidays[index].style.backgroundColor = 'white';
      }
    }
  })
};

switchBackColorHolidays();


// 4.Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente um botão com o nome "Sexta-feira".
function createButtonFriday() {
  let buttonContainer = document.querySelector('.buttons-container');
  let buttonFriday = document.createElement('button');

  buttonFriday.innerHTML = 'Sexta-feira';
  buttonFriday.id = 'btn-friday';
  buttonContainer.appendChild(buttonFriday);
};

createButtonFriday();


// 5.Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto exibido nos dias que são Sexta-feira.
function switchTextFriday(fridaysDays) {
  let fridays = document.getElementsByClassName('friday');
  let buttonFriday = document.querySelector('#btn-friday');
  let daysFriday = fridaysDays;

  buttonFriday.addEventListener('click', function() {
    for (let index = 0; index < fridays.length; index += 1) {
      if (fridays[index].innerHTML === 'SEXTOU BB!!!') {
        fridays[index].innerHTML = daysFriday[index];
      } else {
        fridays[index].innerHTML = 'SEXTOU BB!!!';
      }
    }
  })
};

switchTextFriday([4,11,18,25]);


// 6.Implemente duas funções que criem um efeito de "zoom". Ao passar o ponteiro do mouse em um dia do mês no calendário, o texto desse dia deve aumentar e, quando o ponteiro do mouse sair do dia, o texto deve retornar ao tamanho original.
function zoomOn() {
  let daysCalender = document.querySelector('#days');

  daysCalender.addEventListener('mouseover', function(event) {
    event.target.style.fontSize = '32px';
    event.target.style.fontWeight = '400';
  })
};

zoomOn();

function zoomOf() {
  let daysCalender = document.querySelector('#days');

  daysCalender.addEventListener('mouseout', function(event) {
    event.target.style.fontSize = '20px';
    event.target.style.fontWeight = '200';
  })
};

zoomOf();


// 7.Implemente uma função que adiciona uma tarefa personalizada ao calendário. A função deve receber como parâmetro a string com o nome da tarefa (ex: "cozinhar") e criar dinamicamente um elemento com a tag <span> contendo a tarefa.
function addTasks(task) {
  let span = document.createElement('span');
  let divTasks = document.querySelector('.my-tasks');

  span.innerHTML = task;
  divTasks.appendChild(span);
};

addTasks('Estudar');


// 8.Implemente uma função que adiciona uma legenda com cor para a tarefa criada no exercício anterior. Esta função deverá receber como parâmetro uma string ("cor") e criar dinamicamente um elemento de tag <div> com a classe task.
function addLegendForTask(color) {
  let newDiv = document.createElement('div');
  let divTasks = document.querySelector('.my-tasks');

  newDiv.className = 'task';
  newDiv.style.backgroundColor = color;
  divTasks.appendChild(newDiv);
};

addLegendForTask('purple');


// 9.Implemente uma função que adiciona um evento que ao clicar no elemento com a tag <div> referente a cor da sua tarefa, atribua a este elemento a classe task selected, ou seja, quando sua tarefa possuir a classe task selected ela estará selecionada.
function addEventSelection() {
  let colorTask = document.querySelector('.task');

  colorTask.addEventListener('click', function() {
    if (colorTask.className === 'task') {
      colorTask.className = 'task selected';
    } else {
      colorTask.className = 'task';
    }
  })
};

addEventSelection();


// 10.Implemente uma função que adiciona um evento que ao clicar em um dia do mês no calendário, atribua a este dia a cor da legenda da sua tarefa selecionada.
function setDayColor() {
  let selectedTask = document.getElementsByClassName('task selected');
  let days = document.querySelector('#days');
  let taskDiv = document.querySelector('.task');
  let taskColor = taskDiv.style.backgroundColor;
  
  days.addEventListener('click', function(event){
    let eventTargetColor = event.target.style.color;
    if (selectedTask.length > 0 && eventTargetColor !== taskColor) {
      let color = selectedTask[0].style.backgroundColor;
      event.target.style.color = color;
    } else if (eventTargetColor === taskColor && selectedTask.length !== 0) {
      event.target.style.color = 'rgb(119,119,119)';
    }
  });
};

setDayColor();