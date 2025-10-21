"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateSeleccionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_card_seleccion_dto_1 = require("./create-card-seleccion.dto");
class UpdateSeleccionDto extends (0, mapped_types_1.PartialType)(create_card_seleccion_dto_1.CreateSeleccionDto) {
}
exports.UpdateSeleccionDto = UpdateSeleccionDto;
//# sourceMappingURL=update-card-seleccion.dto.js.map