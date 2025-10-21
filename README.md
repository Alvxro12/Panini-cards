Panini Cards

API REST de gestión de selecciones y jugadores
Proyecto académico desarrollado con NestJS, Prisma y PostgreSQL.

Descripción general

El proyecto Panini Cards implementa una API REST que permite gestionar selecciones nacionales y sus jugadores, similar a un álbum de fútbol digital.
Está diseñado siguiendo una arquitectura modular, con una clara separación entre controladores, servicios y acceso a datos mediante Prisma ORM.

Tecnologías utilizadas

NestJS → Framework para construir aplicaciones backend escalables.

Prisma ORM → Mapeo objeto-relacional para manejar la base de datos PostgreSQL.

PostgreSQL → Sistema de gestión de base de datos relacional.

TypeScript → Lenguaje principal del desarrollo.

Modelos principales
Seleccion

Representa una selección nacional de fútbol.

Campo	Tipo	Descripción
id	Int	Identificador único
nombre	String	Nombre de la selección
continente	String	Continente al que pertenece
jugadores	Relación	Lista de jugadores asociados
Jugador

Representa un jugador que pertenece a una selección.

Campo	Tipo	Descripción
id	Int	Identificador único
nombre	String	Nombre del jugador
posicion	String	Posición en el campo
seleccionId	Int (FK)	ID de la selección a la que pertenece


Endpoints principales
Selecciones
Método	Ruta	              Descripción
GET	    /selecciones	      Obtiene todas las selecciones
GET	    /selecciones/:id	  Obtiene una selección por ID
POST	  /selecciones	      Crea una nueva selección
PUT	    /selecciones/:id	  Actualiza una selección existente
DELETE	/selecciones/:id	  Elimina una selección (solo si no tiene jugadores asociados)

Jugadores
Método	Ruta	            Descripción
GET	    /jugadores	      Obtiene todos los jugadores
GET	    /jugadores/:id	  Obtiene un jugador por ID
POST	  /jugadores	      Crea un nuevo jugador
PUT	    /jugadores/:id	  Actualiza la información de un jugador
DELETE	/jugadores/:id	  Elimina un jugador

La base de datos utilizada es PostgreSQL, administrada mediante Prisma ORM.
El esquema se encuentra definido en el archivo prisma/schema.prisma.

Instalación y ejecución
1.-Clonar el repositorio
git clone https://github.com/usuario/panini-cards.git
cd panini-cards

Instalar dependencias
npm install
@nestjs/cli
@prisma/client
class-transformer
class-validator

Configurar la base de datos

Crea un archivo .env en la raíz del proyecto con la conexión a tu base de datos:
DATABASE_URL="postgresql://usuario:password@localhost:5432/panini_cards

Ejecutar migraciones
npx prisma migrate dev

Levantar el servidor
npm run start:dev

Autor

Álvaro Jiménez
Estudiante de Ingeniería de Sistemas
Universidad de la costa.
