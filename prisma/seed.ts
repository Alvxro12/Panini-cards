import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
    const seleccion = await prisma.seleccion.create({
    data: {
        pais: 'Argentina',
        confederacion: 'CONMEBOL',
        campeonatos: 3,
        escudo: 'https://cdn.worldvectorlogo.com/logos/argentina-national-football-team-logo.svg',
        jugadores: {
        create: [
            {
            nombre: 'Lionel Messi',
            edad: 36,
            posicion: 'Delantero',
            dribling: 95,
            velocidad: 88,
            regate: 96,
            defensa: 35,
            tiro: 93,
            pase: 91,
            fisico: 65,
            urlImagen: 'https://tn.com.ar/resizer/v2/feliz-messi-con-los-siete-balones-de-oro-foto-france-football-A4GF4EKAWNFCLP3PNIBNVUKOJI.jpg?auth=13512cef8d634df2a82d44524cc9b4adfc819d70b01521749e5b7437dbe05e35&width=1440',

            },
            {
            nombre: 'Emiliano Martínez',
            edad: 33,
            posicion: 'Portero',
            dribling: 24,
            velocidad: 56,
            regate: 85,
            defensa: 35,
            tiro: 93,
            pase: 82,
            fisico: 85,
            urlImagen: 'https://ratings-images-prod.pulse.ea.com/FC26/components/items/202811_es.webp',
            },
        ],
    },
    },
},
);

await prisma.seleccion.create({
    data: {
        pais: 'Colombia',
        confederacion: 'CONMEBOL',
        campeonatos: 1,
        escudo: 'https://upload.wikimedia.org/wikipedia/commons/f/f0/Escudo_de_la_Federaci%C3%B3n_Colombiana_de_F%C3%BAtbol.png',
        jugadores: {
            create: [
                {nombre: 'James Rodríguez',
                edad: 33,
                posicion: 'Mediocampista', 
                dribling: 85, 
                velocidad: 75, 
                regate: 82,
                defensa: 60,
                tiro: 84, 
                pase: 88, 
                fisico: 70, 
                urlImagen: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/L6CAI6NEDNCYFJ5CSBQAYPCUQU.JPG' },
                {nombre: 'Luis Díaz', 
                edad: 28, 
                posicion: 'Extremo', 
                dribling: 90, 
                velocidad: 92, 
                regate: 89, 
                defensa: 80,
                tiro: 83, 
                pase: 78, 
                fisico: 74, 
                urlImagen: 'https://www.365scores.com/es/news/wp-content/uploads/2024/06/GettyImages-2159735494-1-scaled.jpg' 
                }],
},},}
)
}


main()
.then(() => {
    console.log('Seed completada:');
})
    .catch((e) => { console.error(e)
    process.exit(1)
})
    .finally(async () => {await prisma.$disconnect()});
