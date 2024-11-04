const IDsExistentes: number[] = [];

export function generarID(): number {
    let id: number;
    do {
        id = Math.floor(Math.random() * 10000);
    } while (IDsExistentes.includes(id));

    IDsExistentes.push(id);
    return id;
}
