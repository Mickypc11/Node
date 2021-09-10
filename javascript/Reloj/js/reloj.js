const mostarReloj= ()=>{
    let fecha = new Date();
    let hr = fecha.getHours();
    let min =fecha.getMinutes();
    let seg = fecha.getSeconds();

    document.getElementById('hora').innerHTML=`${hr}:${min}:${seg}`;
    const meses =['Ene','FEB','MAR','ABR','MAY','JUN','JUL','AGO','SEP','OCT','NOV','DIC'];
    const dias = ['Dom','Lun','Mar','Mier','Jue','Vie','Sab'];
    let diaSemana = dias[fecha.getDay()];
    let dia = fecha.getDate();
    let mes = meses[fecha.getMonth()];
    let fechaTexto= `${diaSemana},${dia}:${mes}`;
    document.getElementById('fecha').innerHTML=fechaTexto;

    document.getElementById('contenedor').classList.toggle('animar');
}
const formatoHora =(hora)=>{
    
    if(hora<10)
        hora= '0'+hora;
    return hora;
}

setInterval(mostarReloj,1000);