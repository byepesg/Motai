"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const products_service_1 = require("./products.service");
const typeorm_1 = require("@nestjs/typeorm");
const product_entity_1 = require("./product.entity");
const typeorm_2 = require("typeorm");
describe('ProductsService', () => {
    let service;
    let repo;
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                products_service_1.ProductsService,
                {
                    provide: (0, typeorm_1.getRepositoryToken)(product_entity_1.Product),
                    useClass: typeorm_2.Repository,
                },
            ],
        }).compile();
        service = module.get(products_service_1.ProductsService);
        repo = module.get((0, typeorm_1.getRepositoryToken)(product_entity_1.Product));
    });
    it('should create a product', async () => {
        const product = { id: 1, name: 'Test', description: 'Desc', price: 100 };
        jest.spyOn(repo, 'create').mockReturnValue(product);
        jest.spyOn(repo, 'save').mockResolvedValue(product);
        expect(await service.create({ name: 'Test', description: 'Desc', price: 100 })).toEqual(product);
    });
});
//# sourceMappingURL=products.service.spec.js.map