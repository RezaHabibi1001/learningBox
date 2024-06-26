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
exports.UpdateCategoryInput = exports.CreateCategoryInput = exports.Category = void 0;
const graphql_1 = require("@nestjs/graphql");
let Category = class Category {
};
exports.Category = Category;
__decorate([
    (0, graphql_1.Field)(() => graphql_1.ID),
    __metadata("design:type", String)
], Category.prototype, "id", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Category.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], Category.prototype, "content", void 0);
exports.Category = Category = __decorate([
    (0, graphql_1.ObjectType)()
], Category);
let CreateCategoryInput = class CreateCategoryInput {
};
exports.CreateCategoryInput = CreateCategoryInput;
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCategoryInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)(),
    __metadata("design:type", String)
], CreateCategoryInput.prototype, "content", void 0);
exports.CreateCategoryInput = CreateCategoryInput = __decorate([
    (0, graphql_1.InputType)()
], CreateCategoryInput);
let UpdateCategoryInput = class UpdateCategoryInput {
};
exports.UpdateCategoryInput = UpdateCategoryInput;
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCategoryInput.prototype, "title", void 0);
__decorate([
    (0, graphql_1.Field)({ nullable: true }),
    __metadata("design:type", String)
], UpdateCategoryInput.prototype, "content", void 0);
exports.UpdateCategoryInput = UpdateCategoryInput = __decorate([
    (0, graphql_1.InputType)()
], UpdateCategoryInput);
//# sourceMappingURL=categories.type.js.map