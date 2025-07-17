"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const request = require("supertest");
const app_module_1 = require("../app.module");
describe('ProductsController (e2e)', () => {
    let app;
    beforeAll(async () => {
        const moduleFixture = await testing_1.Test.createTestingModule({
            imports: [app_module_1.AppModule],
        }).compile();
        app = moduleFixture.createNestApplication();
        await app.init();
    });
    it('/products (GET) 401 unauthorized', () => {
        return request(app.getHttpServer())
            .get('/products')
            .expect(401);
    });
    afterAll(async () => {
        await app.close();
    });
});
//# sourceMappingURL=products.e2e-spec.js.map