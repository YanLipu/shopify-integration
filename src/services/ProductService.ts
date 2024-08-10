import { PrismaClient } from "@prisma/client";

export class ProductService {
  private db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }

  async listAll() {
    return await this.db.product.findMany();
  }
}