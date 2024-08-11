import { PrismaClient } from "@prisma/client";

export class ProductService {
  private db: PrismaClient

  constructor(db: PrismaClient) {
    this.db = db
  }

  listAll() {
    return this.db.product.findMany();
  }
}