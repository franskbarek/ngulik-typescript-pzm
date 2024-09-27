import { Category, Product } from "../src/type-alias";

describe("Type Alias", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: 1,
      name: "Men",
    };

    const product: Product = {
      id: 2,
      name: "Tshirtxx0",
      price: 10,
      category: category,
    };

    
    console.info("untuk var object category: ", category);
    console.info("untuk var object produc: ", product);
  });
});
