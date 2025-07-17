import { ProductsService } from './products.service';
export declare class ProductsController {
    private service;
    constructor(service: ProductsService);
    create(body: {
        name: string;
        description: string;
        price: number;
    }): Promise<import("./product.entity").Product>;
    findAll(): Promise<import("./product.entity").Product[]>;
    findOne(id: string): Promise<import("./product.entity").Product>;
    update(id: string, body: Partial<{
        name: string;
        description: string;
        price: number;
    }>): Promise<import("./product.entity").Product>;
    delete(id: string): Promise<import("typeorm").DeleteResult>;
}
