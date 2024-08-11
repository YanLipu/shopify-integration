import { prisma } from '../mocks/context';
import { ProductService } from '../../src/services/ProductService';

describe('ProductService', () => {
  let productService: ProductService;

  beforeAll(() => {
    productService = new ProductService(prisma);
  });
  beforeEach(()=>{
    jest.clearAllMocks();
  })

  describe('listAll', () => {
    it('should return all products', async () => {
  
       const mockProducts = [{ id: 1, name: 'Product 1' }, { id: 2, name: 'Product 2' }];
      prisma.product.findMany.mockResolvedValue(mockProducts);

      const result = await productService.listAll();

      expect(result).toEqual(mockProducts);
    });
  });
});