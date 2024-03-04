const colorBox = document.querySelectorAll('.colorBox');
const body = document.querySelector("body");

// colorBox.forEach((box)=>{
//     box.addEventListener('load', (e)=>{
//         box.style.backgroundColor = e.target.id;
//     })
// })


colorBox.forEach((box)=>{
    box.addEventListener('click', (e)=>{
        body.style.backgroundColor = e.target.id;
    })
})
