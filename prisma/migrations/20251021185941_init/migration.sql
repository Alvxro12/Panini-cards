-- CreateTable
CREATE TABLE "Seleccion" (
    "id" SERIAL NOT NULL,
    "pais" TEXT NOT NULL,
    "confederacion" TEXT NOT NULL,
    "campeonatos" INTEGER NOT NULL DEFAULT 0,
    "escudo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Seleccion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Jugador" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "edad" INTEGER NOT NULL,
    "posicion" TEXT,
    "dribling" INTEGER NOT NULL,
    "velocidad" INTEGER NOT NULL,
    "regate" INTEGER NOT NULL,
    "defensa" INTEGER,
    "tiro" INTEGER,
    "pase" INTEGER,
    "fisico" INTEGER,
    "urlImagen" TEXT NOT NULL,
    "seleccionId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Jugador_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Jugador" ADD CONSTRAINT "Jugador_seleccionId_fkey" FOREIGN KEY ("seleccionId") REFERENCES "Seleccion"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
