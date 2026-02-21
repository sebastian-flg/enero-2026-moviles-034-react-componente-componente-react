import { StyleSheet, View, ImageBackground, Button, ScrollView } from 'react-native';
import Alumno from './Alumno';

export default function App()
{

  const saludo = () => {
    console.log("Hola mundo");
  };

  const Alumnos = [
  { nombre: "Javier Cantú Silva", matricula: "2123449", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Sebastian Flores Gonzalez", matricula: "2104564", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Ana López", matricula: "2123001", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Carlos Martínez", matricula: "2123002", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "María Gómez", matricula: "2123003", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Luis Hernández", matricula: "2123004", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Fernanda Torres", matricula: "2123005", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Ricardo Sánchez", matricula: "2123006", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Gabriela Ruiz", matricula: "2123007", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Diego Ramírez", matricula: "2123008", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Paula Castro", matricula: "2123009", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Andrés Morales", matricula: "2123010", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Sofía Paredes", matricula: "2123011", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Jorge Díaz", matricula: "2123012", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Valeria Ortega", matricula: "2123013", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Héctor Mendoza", matricula: "2123014", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Camila Vargas", matricula: "2123015", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Fernando Aguilar", matricula: "2123016", foto: require('./ck.png'), posicion: 'der' },
  { nombre: "Lucía Rojas", matricula: "2123017", foto: require('./ck.png'), posicion: 'izq' },
  { nombre: "Martín Salazar", matricula: "2123018", foto: require('./ck.png'), posicion: 'der' }
];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {Alumnos.map((alumno, index) => (
        <Alumno
          key={index}
          nombre={alumno.nombre}
          matricula={alumno.matricula}
          foto={alumno.foto}
          posicion={alumno.posicion}
          style={{ backgroundColor: '#25b373' }}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  background :
  {
    flex : 1,
    width: '40%',
    height: '100%',
  },

  container: 
  {
    flex: 1,
    backgroundColor: '#F502F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boton: {
    backgroundColor: '#740707',
  },
});
