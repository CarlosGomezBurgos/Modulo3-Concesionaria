let autos = [
    {
   marca: 'Ford',//string
   modelo: 'Focus',//string
   precio: 150000,//number
   km: 200,//number
   color: 'Azul',//string
   cuotas: 12,//number
   anio:2019,//number
   patente: 'APL123',//string
   vendido: false//boolean
   },
   {
   marca: 'Toyota',//string
   modelo: 'Corolla',//number
   precio: 100000,//number
   km: 0,//number
   color: 'Blanco',//string
   cuotas: 14,//number
   anio:2019,//number
   patente: 'JJK120',//string
   vendido: false//boolean
   },
   {
    marca: 'Ford',//string
    modelo: 'Fiesta',//number
    precio: 100000,//number
    km: 0,//number
    color: 'Blanco',//string
    cuotas: 14,//number
    anio:2019,//number
    patente: 'JJK119',//string
    vendido: true//boolean
    },
    {
    marca: 'Audi',//string
    modelo: 'XLS',//number
    precio: 100000,//number
    km: 0,//number
    color: 'Blanco',//string
    cuotas: 14,//number
    anio:2019,//number
    patente: 'JJK117',//string
    vendido: false//boolean
    },
    {
    marca: 'VW',//string
    modelo: 'Trend',//number
    precio: 100000,//number
    km: 0,//number
    color: 'Blanco',//string
    cuotas: 14,//number
    anio:2019,//number
    patente: 'JJK116',//string
    vendido: true//boolean
    }
]

module.exports = autos;
console.log(autos)
// crear archivo json para el array de autos
// metodo requerirAutos que parsee el json de autos y exportarlo.
//ver metodo para escribir el json cuando un auto es vendido.