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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JugadoresController = void 0;
const common_1 = require("@nestjs/common");
const jugadores_service_1 = require("./jugadores.service");
const create_card_jugador_dto_1 = require("../dto/create-card-jugador.dto");
const update_card_jugador_dto_1 = require("../dto/update-card-jugador.dto");
let JugadoresController = class JugadoresController {
    jugadoresService;
    constructor(jugadoresService) {
        this.jugadoresService = jugadoresService;
    }
    findAll() {
        return this.jugadoresService.findAll();
    }
    findBySeleccion(seleccionId) {
        return this.jugadoresService.findBySeleccion(+seleccionId);
    }
    findOne(id) {
        return this.jugadoresService.findOne(+id);
    }
    create(dto) {
        return this.jugadoresService.create(dto);
    }
    update(id, dto) {
        return this.jugadoresService.update(+id, dto);
    }
    remove(id) {
        return this.jugadoresService.delete(+id);
    }
};
exports.JugadoresController = JugadoresController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('seleccion/:seleccionId'),
    __param(0, (0, common_1.Param)('seleccionId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "findBySeleccion", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_jugador_dto_1.CreateJugadorDto]),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_card_jugador_dto_1.UpdateJugadorDto]),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], JugadoresController.prototype, "remove", null);
exports.JugadoresController = JugadoresController = __decorate([
    (0, common_1.Controller)('jugadores'),
    __metadata("design:paramtypes", [jugadores_service_1.JugadoresService])
], JugadoresController);
//# sourceMappingURL=jugadores.controller.js.map