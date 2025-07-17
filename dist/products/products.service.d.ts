import { Repository } from 'typeorm';
import { Product } from './product.entity';
export declare class ProductsService {
    private repo;
    constructor(repo: Repository<Product>);
    create(data: Partial<Product>): Promise<Product>;
    findAll(): Promise<Product[]>;
    findOne(id: number): Promise<Product>;
    update(id: number, data: Partial<Product>): Promise<Product>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
