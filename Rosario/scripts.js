const toggleMenuElement = document.getElementById('toggle-menu'),
      mainMenuElement = document.getElementById('main-menu'),
      mainMenuLink1 = document.getElementById('main-menu__link-1'),
      mainMenuLink2 = document.getElementById('main-menu__link-2'),
      mainMenuLink3 = document.getElementById('main-menu__link-3'),
      mainMenuLink4 = document.getElementById('main-menu__link-4'),
      btn = document.getElementById("btn-iniciar");
      



btn.addEventListener("click", ()=>{
const nombre = prompt("¡Hola! ¿Cómo te llamas?"),
      dia = prompt("¿Qué día es hoy?");  
      
    if (dia === "Lunes" || dia === "Sábado") {
        alert("¡Hola " + nombre + "! Hoy es " + dia + " y se rezan los Misterios Gozosos");
    } 
    else if (dia === "Jueves") {
        alert("¡Hola " + nombre + "! Hoy es " + dia + " y se rezan los Misterios Luminosos");
    } 
    else if (dia === "Martes" || dia === "Viernes") {
        alert("¡Hola " + nombre + "! Hoy es " + dia + " y se rezan los Misterios Dolorosos");
    } 
    else if (dia === "Miercoles" || dia === "Domingo") {
        alert("¡Hola " + nombre + "! Hoy es " + dia + " y se rezan los Misterios Gloriosos");
    } 
    else {
        alert("¡Ese no es un día de la semana! Vuelve a intentar escribir un día válido");
    }
});

toggleMenuElement.addEventListener('click', ()=>{
    mainMenuElement.classList.toggle('main-menu--show');
    btn.classList.add('active')
});

mainMenuLink1.addEventListener('click', ()=>{
    mainMenuElement.classList.remove('main-menu--show');
    btn.classList.remove('active')
    btn.classList.add('active')
});

mainMenuLink2.addEventListener('click', ()=>{
    mainMenuElement.classList.remove('main-menu--show'); 
    btn.classList.remove('active')
    btn.classList.add('active')
});

mainMenuLink3.addEventListener('click', ()=>{
    mainMenuElement.classList.remove('main-menu--show');
    btn.classList.remove('active')
    btn.classList.add('active')
});

mainMenuLink4.addEventListener('click', ()=>{
    mainMenuElement.classList.remove('main-menu--show');
    btn.classList.remove('active')
    btn.classList.add('active')
});
