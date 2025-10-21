"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateJugadorDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_card_jugador_dto_1 = require("./create-card-jugador.dto");
class UpdateJugadorDto extends (0, mapped_types_1.PartialType)(create_card_jugador_dto_1.CreateJugadorDto) {
}
exports.UpdateJugadorDto = UpdateJugadorDto;
//# sourceMappingURL=update-card-jugador.dto.js.map