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
exports.SeleccionesController = void 0;
const common_1 = require("@nestjs/common");
const selecciones_service_1 = require("./selecciones.service");
const create_card_seleccion_dto_1 = require("../dto/create-card-seleccion.dto");
const update_card_seleccion_dto_1 = require("../dto/update-card-seleccion.dto");
let SeleccionesController = class SeleccionesController {
    seleccionesService;
    constructor(seleccionesService) {
        this.seleccionesService = seleccionesService;
    }
    findAll() {
        return this.seleccionesService.findAll();
    }
    findOne(id) {
        return this.seleccionesService.findOne(+id);
    }
    create(dto) {
        return this.seleccionesService.create(dto);
    }
    update(id, dto) {
        return this.seleccionesService.update(+id, dto);
    }
    remove(id) {
        return this.seleccionesService.delete(Number(id));
    }
};
exports.SeleccionesController = SeleccionesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SeleccionesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeleccionesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_card_seleccion_dto_1.CreateSeleccionDto]),
    __metadata("design:returntype", void 0)
], SeleccionesController.prototype, "create", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_card_seleccion_dto_1.UpdateSeleccionDto]),
    __metadata("design:returntype", void 0)
], SeleccionesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeleccionesController.prototype, "remove", null);
exports.SeleccionesController = SeleccionesController = __decorate([
    (0, common_1.Controller)('selecciones'),
    __metadata("design:paramtypes", [selecciones_service_1.SeleccionesService])
], SeleccionesController);
//# sourceMappingURL=selecciones.controller.js.map