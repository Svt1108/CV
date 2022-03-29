
const pict = document.querySelectorAll(".scale");

document.addEventListener( 'click', (e) => {

    pict.forEach((Element) => 
    {
    if ((!(e.composedPath().includes(Element)))||(Element.style.transform != '')) Element.style.transform = '';

    else {

    if (Element.style.height === '8em')  {Element.style.transform = 'scale(3)'; Element.style.position = 'absolute'; Element.style.left = '0'; 
    Element.style.right = '0'; Element.style.margin = 'auto';}  

    else {Element.style.transform = 'scale(3)';Element.style.position = ''; Element.style.left = ''; 
    Element.style.right = ''; Element.style.margin = '0.2em';}

    }

    }
    );
})


// document.addEventListener( 'click', (e) => {

//     pict.forEach((Element) => 
//     {
//     if ((!(e.composedPath().includes(Element)))||(Element.style.transform != '')) Element.style.transform = '';
//     else {Element.style.transform = 'scale(3)'; Element.style.position = 'absolute'; Element.style.left = '0'; 
//     Element.style.right = '0'; Element.style.margin = 'auto';}
//     }
//     );
// })

// for (let i in pict) {

//     pict[i].onclick = () => {           
//     if (pict[i].style.transform === '') {
//         pict.forEach((Element) => Element.style.transform = '');
//         pict[i].style.transform = 'scale(3)';
//     }
//     else pict[i].style.transform = '';
// }
// }


