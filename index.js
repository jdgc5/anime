import anime from './node_modules/animejs/lib/anime.es.js';
import { Draw } from './module/draw.js';

let datos ={
    "diapositiva":[
        {
            "titulo":"hola",
            "subtitulo":"buenos dias",
            "contenido":"adios"
        },
        {
            "titulo":"hola2",
            "subtitulo":"buenos dias2",
            "contenido":"adios2"
        }
    ]
}

let draw = new Draw(datos,"slider");





//var elements = document.querySelectorAll('div');


// let contador=-1;

// document.getElementById("right").onclick=(()=>{
//     contador+=1;
   
//     anime({
//     targets:elements[contador],
//     translateX:2000
    
// })
// if(contador>elements.length-1){
//     contador=elements.length-1;
// }
    
// })

// document.getElementById("left").onclick=(()=>{
    
//     anime({
//     targets:elements[contador],
//     translateX:-1
    
// })
// if(contador<0){
//     contador=0;
// }

//     contador-=1;
// })



// // for (let item of  elements){
// //     item.onclick=(()=>{
// // anime({
// //         targets: [item],
// //         translateX: 270
// //       });
// //     })
    
    
// // }
