
const pict = document.querySelectorAll(".scale");

document.addEventListener( 'click', (e) => {

    pict.forEach((Element) => 
    {
    if ((!(e.composedPath().includes(Element)))||(Element.style.transform != '')) Element.style.transform = '';
    else Element.style.transform = 'scale(3)';
    }
    );
})


// for (let i in pict) {

//     pict[i].onclick = () => {           
//     if (pict[i].style.transform === '') {
//         pict.forEach((Element) => Element.style.transform = '');
//         pict[i].style.transform = 'scale(3)';
//     }
//     else pict[i].style.transform = '';
// }
// }


