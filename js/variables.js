
const carrera = ['', 'Desarrollo Frontend React', 'Desarrollo Full Stack', 'Desarrollo Backend']
//                0              1                          2                     3
const cursos = ['', 'Desarrollo Web', 'JavaScript', 'React Js', 'Programación Backend']
//                0         1              2            3                   4         


function buscarYeliminar() {
    const borroElemento = prompt("Ingrese el país que desea quitar:")
    const indice = cursos.indexOf(borroElemento)
        if (indice > -1) {
            cursos.splice(indice, 1)
        }
        else {
            console.warn("No se encontró el elemento:", borroElemento)
            return
        }
        console.table(cursos)
}

function agregarCurso() {
    const nuevoCurso = prompt("Ingrese el país que desea agregar:")
    const resultado = cursos.includes(nuevoCurso)
    if (resultado) {
        console.warn("El país ingresado", nuevoCurso, "ya existe en el array.")
        return
    }
    else {
        cursos.push(nuevoCurso)
        console.table(cursos)
        console.info("ℹ️ ", nuevoCurso, "se agregó exitosamente.")
    }
}

function hacerAlgoXcadaElemento() {
    
    carrera.forEach((carrera)=> {
        console.log(carrera)
    })
}


const prods = [{producto: "Bananas", importe: 230},
               {producto: "Peras", importe: 299}, 
               {producto: "Manzanas", importe: 550}]

function sumarProds () {
    debugger
    const resultado = prods.reduce((acumulador, elem)=> acumulador += elem.importe, 0)
    console.log(resultado)
}
