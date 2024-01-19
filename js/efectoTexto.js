document.addEventListener("DOMContentLoaded", () => 
{
    //Selecciona todos los div que son hijos directos de .container-fluid
    let divs = document.querySelectorAll(".contenedor-team > div");

    divs.forEach(function(div)
    {
        let texto = div.querySelector(".texto-oculto");

        div.addEventListener("mouseover", () =>
        {
            texto.style.visibility = "visible";
        });

        div.addEventListener("mouseout", () => 
        {
            texto.style.visibility = "hidden";
        });
    });
});


/*Validar código para que por medio de javascript apareza el nombre según el texto*/

// document.addEventListener("DOMContentLoaded", () =>
// {
//     //Selecciona todos los div que son hijos directos de .contenedor-team
//     let divs = document.querySelectorAll(".contenedor-team > div");

//     divs.forEach(function(div)
//     {
//         div.addEventListener("mouseover", () =>
//         {
//             let textoContenedor = div.querySelector('.texto-oculto');
//             if(div.id === "integrante-uno")
//             {
//                 //Primer texto descripción Rudy
//                 // let texto1 = document.createElement('p');
//                 // texto1.textContent = "Desarrolladora"
//                 // textoContenedor.appendChild(texto1);

//                 // let texto2 = document.createElement('p');
//                 // texto1.textContent = "full"
//                 // textoContenedor.appendChild(texto1);
                
//             }
//             else if(div.id === "integrante-dos")
//             {
//                 //Primer texto descripción Juliana
//                 let texto1 = document.createElement('p');
//                 texto1.textContent = "Desarrolladora"
//                 textoContenedor.appendChild(texto1);
//             }

//             textoContenedor.style.visibility = "visible";
//         });

//         div.addEventListener("mouseout", () => 
//         {
//             let textoContenedor = div.querySelector('.texto-oculto');
//             textoContenedor.style.visibility = "hidden";
//         });
//     });
// });
