
 export const CATEGORIAS = {
    componentes: {
        id: "Componentes",
        name:"Componentes"
    }, 
    perifericos: {
        id: "Perifericos",
        name: "Perifericos"
    }
}
const categorias2 = [
    "componente","perifericos"
]

export const productos = [
    {
        id: '1',
        titulo: 'ryzen5600x',
        descripcion: 'Procesador de gama media',
        imagen: 'https://i.imgur.com/IsiY53k.jpg',
        categoria: "componentes", 
        precio: 123

    },
    {
        id:'2',
        titulo: 'ryzen9',
        descripcion: 'Procesador de gama alta',
        imagen:'https://i.imgur.com/ccA2jFp.jpg',
        categoria: "componentes",
        precio: 321
    },
    {
        id:'3',
        titulo: '3070ti',
        descripcion: 'Procesador de gama media',
        imagen:'https://i.imgur.com/5N0tRDM.jpg',
        categoria: "perifericos",
        precio: 421
    },
    {
        id:'4',
        titulo:'i710700',
        descripcion: 'Procesador de gama alta',
        imagen:'https://i.imgur.com/U3CPXJC.jpg',
        categoria: "perifericos",
        precio: 322
    }
]