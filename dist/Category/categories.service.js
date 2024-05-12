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
exports.CategoriesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let CategoriesService = class CategoriesService {
    constructor(categoriesModel) {
        this.categoriesModel = categoriesModel;
    }
    async createCategory(payload) {
        const createdCategory = new this.categoriesModel(payload);
        const result = await createdCategory.save();
        return result;
    }
    async getCategories() {
        const categories = await this.categoriesModel.find();
        return categories;
    }
    async getCategory(id) {
        const category = await this.categoriesModel.findById(id);
        return category;
    }
    async updateCategory(id, payload) {
        const updatedCategory = await this.categoriesModel.findByIdAndUpdate(id, payload, {
            new: true,
        });
        if (!updatedCategory) {
            throw new common_1.NotFoundException('Category not found');
        }
        return updatedCategory;
    }
    async deleteCategory(id) {
        const deletedCategory = await this.categoriesModel.findByIdAndDelete(id);
        return deletedCategory;
    }
};
exports.CategoriesService = CategoriesService;
exports.CategoriesService = CategoriesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)('Categories')),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CategoriesService);
//# sourceMappingURL=categories.service.js.map