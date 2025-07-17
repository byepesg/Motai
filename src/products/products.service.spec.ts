import { Test, TestingModule } from '@nestjs/testing';
import { ProductsService } from './products.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { Repository } from 'typeorm';

describe('ProductsService', () => {
  let service: ProductsService;
  let repo: Repository<Product>;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ProductsService,
        {
          provide: getRepositoryToken(Product),
          useClass: Repository,
        },
      ],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
    repo = module.get<Repository<Product>>(getRepositoryToken(Product));
  });

  it('should create a product', async () => {
    const product = { id: 1, name: 'Test', description: 'Desc', price: 100 };
    jest.spyOn(repo, 'create').mockReturnValue(product as any);
    jest.spyOn(repo, 'save').mockResolvedValue(product as any);

    expect(await service.create({ name: 'Test', description: 'Desc', price: 100 })).toEqual(product);
  });
});
