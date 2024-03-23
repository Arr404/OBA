export function nilaiToHuruf(nilai:number) : string {
    switch (true) {
        case ( nilai >= 81 ) :
            return "A"
        case ( nilai >= 76 ) :
            return "A-"
        case ( nilai >= 72 ) :
            return "B+"
        case ( nilai >= 68 ) :
            return "B"
        case ( nilai >= 64 ) :
            return "B-"
        case ( nilai >= 60 ) :
            return "C+"
        case ( nilai >= 56 ) :
            return "C"
        case ( nilai >= 41 ) :
            return "D"
        case ( nilai >= 0 ) :
            return "E"
    }
    return ""
}
