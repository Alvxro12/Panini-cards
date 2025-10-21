"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadoresService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../../prisma/prisma.service");
let JugadoresService = class JugadoresService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    findAll() {
        return this.prisma.jugador.findMany({
            include: { seleccion: true },
        });
    }
    findBySeleccion(seleccionId) {
        return this.prisma.jugador.findMany({
            where: { seleccionId },
            include: { seleccion: true },
        });
    }
    findOne(id) {
        return this.prisma.jugador.findUnique({
            where: { id },
            include: { seleccion: true },
        });
    }
    create(data) {
        return this.prisma.jugador.create({ data });
    }
    update(id, data) {
        return this.prisma.jugador.update({
            where: { id },
            data,
        });
    }
    delete(id) {
        return this.prisma.jugador.delete({ where: { id } });
    }
};
exports.JugadoresService = JugadoresService;
exports.JugadoresService = JugadoresService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], JugadoresService);
//# sourceMappingURL=jugadores.service.js.map