const horasElement=document.getElementById("horas")
const minutosElement=document.getElementById("minutos")
const segundosElement=document.getElementById("segundos")
function inicializar(){
    const date= new Date();
    const horas=date.getHours()
    const minutos=date.getMinutes()
    const segundos=date.getSeconds()
    horasElement.textContent= acertarHora(horas)
    minutosElement.textContent= acertarHora(minutos)
    segundosElement.textContent= acertarHora(segundos)
    
    function acertarHora(tempo){
        return tempo<10 ? '0'+tempo: tempo
    }
}

inicializar()
setInterval(()=>{
inicializar()
},1000)