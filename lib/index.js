"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = void 0;
const autocomplete_provider_1 = __importDefault(require("./autocomplete-provider"));
function getProvider() {
    return new autocomplete_provider_1.default();
}
exports.getProvider = getProvider;
//# sourceMappingURL=index.js.map