const comboCarrera = document.getElementById("selectCarrera")
const comboCursos = document.getElementById("selectCursos")
 
function cargarSelectCarrera() {
    
    for (let el = 0; el < carrera.length; el++)
        comboCarrera.innerHTML += `<option value="${el}">${carrera[el]}</option>`
}

function cargarSelectCursos() {
    
    for (let el = 0; el < cursos.length; el++)
        comboCursos.innerHTML += `<option value="${el}">${cursos[el]}</option>`
}

debugger
cargarSelectCarrera()
cargarSelectCursos()