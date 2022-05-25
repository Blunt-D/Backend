class Usuario {
    constructor(firstName, lastName, libros, pets){
        this.nombre = firstName
        this.apellido = lastName
        this.libros = [] 
        this.mascotas = []
    }
    getFullName() {
        return console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`);
    }
    addMascota(petName) {
        return this.mascotas.push(petName)
    }
    countMascotas() {
        return console.log(`El usuario tiene ${this.mascotas.length} mascota(s).`)
    }
    addBook(title, writer) {
    return this.libros.push(
    { "titulo": title,
      "autor": writer
    })
    }
    getBooksNames() {
    return console.log(`Los libros en la lista son:`, this.libros.map((key) => key.titulo))
    } 
    }

const usuarioPrueba = new Usuario(
    `Felipe`,
    `Villarrubia`)

    console.log(usuarioPrueba);

    usuarioPrueba.getFullName()
    
    usuarioPrueba.addMascota("Julieta")
    
    console.log(usuarioPrueba);
    
    usuarioPrueba.countMascotas()
    
    usuarioPrueba.addBook(`2666`, `Roberto Bolaño`)
    
    console.log(usuarioPrueba);

usuarioPrueba.getBooksNames()




