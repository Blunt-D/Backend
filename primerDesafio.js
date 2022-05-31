class Usuario {
    constructor(firstName, lastName){
        this.nombre = firstName
        this.apellido = lastName
        this.libros = [{
          titulo: `El corazón de las tinieblas`,
          autor: `Joseph Conrad`
        }] 
        this.mascotas = [{nombre: `Agatha`}]
    }
    getFullName() {
        console.log(`Mi nombre completo es ${this.nombre} ${this.apellido}`)
    }
    addMascota(petName) {
        return this.mascotas.push({"nombre": petName})
    }
    countMascotas() {
        console.log(`El usuario tiene ${this.mascotas.length} mascota(s).`)
    }
    addBook(title, writer) {
    return this.libros.push(
    { "titulo": title,
      "autor": writer
    })
    }
    getBooksNames() {
            if (this.libros.length) {
              console.log(`Los libros en la lista del usuario son:`, this.libros.map((key) => key.titulo ))
            } else {
              return 'No hay libros en la lista del usuario';
            }
            } 
          }

const usuarioPrueba = new Usuario(
    `Felipe`,
    `Villarrubia`)

console.log(usuarioPrueba);

usuarioPrueba.getFullName()

usuarioPrueba.addMascota('Julieta')

console.log(usuarioPrueba.mascotas);

usuarioPrueba.countMascotas()

usuarioPrueba.addBook('2666', 'Roberto Bolaño')

console.log(usuarioPrueba.libros);

usuarioPrueba.getBooksNames()