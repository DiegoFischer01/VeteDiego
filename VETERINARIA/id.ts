// Funcion global para generar ID aleatorios y que no se repitan.

const IDsExistentes: number[] = [];

export function generarID(): number {
    let id: number;
    do {
        id = Math.floor(Math.random() * 10000);
    } while (IDsExistentes.includes(id));

    IDsExistentes.push(id);
    return id;
}






// interface GeneradorID {
//     generarID(): number;
//     IDsExistentes: number[];
// }





// class GeneradorIDImpl implements GeneradorID {
//     IDsExistentes: number[] = [];

//     generarID(): number {
//         let id: number;
//         do {
//             id = Math.floor(Math.random() * 10000);
//         } while (this.IDsExistentes.includes(id));

//         this.IDsExistentes.push(id);
//         return id;
//     }
// }

// const generadorID = new GeneradorIDImpl();
// export default generadorID;
