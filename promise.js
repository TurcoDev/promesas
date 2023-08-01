// Creamos una promesa en estado pendiente
const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('este es el valor que eventualmente devolverá la promesa');
  }, 3000);
});

console.log(miPromesa);

// Promesa que se ejecuta inmediatamente (estado resuelto)
const otraPromesa = Promise.resolve("este es el valor que eventualmente devolverá la promesa")

console.log(otraPromesa);

// Promesa que se resuelve completamente o falla segun el valor de "a"
const miPromesa2 = new Promise((resolve, reject) => {
  let a = true;
  setTimeout(() => {
    // if(a){
    //   return resolve('se encontró a')
    // } else{
    //   return reject('lo siento, no se encontró a')  
    // }
      
    return (a) ? resolve('se encontró a'): reject('lo siento, no se encontró a');
  }, 3000);
});

// console.log(miPromesa2);
miPromesa2
.then(value => console.log(value))
.catch(error => console.log(error));


