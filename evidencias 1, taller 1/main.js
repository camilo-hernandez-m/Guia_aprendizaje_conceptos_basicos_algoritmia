addEventListener("DOMContentLoaded", (e) =>{
    let boton = document.querySelector(".btn")
    boton.addEventListener("click", (e)=>{
            let dol = 4800; 
            let re ;   
            let pe =parseInt(document.getElementById('pesos').value, 10);
             
            re = pe / dol ;
            document.getElementById('resul').innerHTML= re;

    })
        
})
