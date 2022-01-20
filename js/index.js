const toggleMenu = () =>{
    const menu = document.getElementById("navList");
    const hamburger = document.getElementById("hamburger");
    if (menu.style.display == "none"){
        console.log("block")
        menu.style.display = "block";
        hamburger.innerHTML = 'X'
    } 
    else{
        menu.style.display = 'none';
        console.log("none")
        hamburger.innerHTML = '&#9776;';
    }

}











// const toggleMenu = () => {
//     const menu = document.getElementById("menu_1");
//     const hamburger = document.getElementById("hamburger");
//     if(menu.style.display == "none"){
//         menu.style.display = "block";
//         hamburger.innerHTML = "X"
//     } else {
//         menu.style.display = "none"
//         hamburger.innerHTML = "&#9776";
//     }
// }