let distanciatortugas = [0,0,0,0,0,0]
let ganador = false
let turno = 0
let meta = 30

function carrera(){
    while(ganador == false){
        console.log("Turno " + turno)
        for(let i = 0;i < distanciatortugas.length;i++){
            distanciatortugas[i] += Math.floor(Math.random() * 4) 
            console.log("La tortuga " + i + " esta a " + distanciatortugas[i] + "metros")
            if (distanciatortugas[i] > meta){
                ganador = true
                console.log("TERMINO LA CARRERA")
                console.log("La tortuga en el indice " + i + " gano en " + turno + "turnos")
                break
            }
        }
        turno += 1
    }
}

carrera()