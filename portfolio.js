let my_name = document.getElementById("name");
// let new_name = prompt("What is you name ")
let count = 0;
let realSeconds = 0
// setInterval(() => {
//    if (count == 10){
//     console.log("1 Minute");
//    }else{
//      console.log(count = count +1)
//    }
//     // console.log("real Count", realSeconds += 3)
// }, 1000)

const title = document.getElementById('head');
const fonts = ['Arial', 'Times New Roman', 'Georgia', 'Velvetica', 'Tahoma', 'Comic', 'Courier', 'Impact'];
let i = 0;
setInterval(() => {
    title.style.fontFamily = fonts[i];
    i = (i + 1) % fonts.length;
}, 1000);
 