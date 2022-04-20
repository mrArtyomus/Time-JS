// let items = {
//     item1: "Выучить JavaScript",
//     item2: "Выучить Python",
//     item3: "Выучить CSS",
//     item4: "Выучить C++",
//     item5: "Выучить Java",
// }

// let ul = document.querySelector('ul');
// let textarea = document.querySelector('textarea');
// let button = document.querySelector('button');

// button.addEventListener('click', function () {
//     addItem('item' + Math.ceil(Math.random() * 1000),
//         textarea.value);
//     textarea.value = "";
// });
// for (let key in items) {
//     addItem(key, items[key]);
// }

// function addItem(key, text) {
//     let li = document.createElement('li');
//     li.innerText = text;
//     li.id = key;
//     ul.appendChild(li);

//     let button = document.createElement('button');
//     button.innerText = 'x';
//     button.addEventListener('click', function () {
//         ul.removeChild(li);
//     });
//     li.appendChild(button);
// }

title.innerHtML = "Time JS";

function time() {
    var d = new Date();
    document.getElementById('tx').innerHTML = d.toLocaleTimeString();
}
setInterval(time, 1000);