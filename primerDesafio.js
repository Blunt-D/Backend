class Usuario {
    constructor(firstName, lastName){
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
        try {
            if (this.libros.length) {
              return console.log(`Los libros en la lista del usuario son:`, this.libros.map((key) => key.titulo ))
            } else {
              return 'No hay libros en la lista del usuario';
            }
          } catch (e) {
            return [];
          }    } 
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




