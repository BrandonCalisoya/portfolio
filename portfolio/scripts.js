function funca(){
    let tru
    return tru? true: false;
}

console.log(funca())

const d = document;


const contact = d.getElementById("contact")
contact.addEventListener("click", ()=>{
    console.log("se crea una linea que señala el contacto")
})

const about = document.getElementById("about");
console.log(about.getBoundingClientRect().y)