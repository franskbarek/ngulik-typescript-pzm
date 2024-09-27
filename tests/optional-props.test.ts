import { Category, Product } from "../src/optional-props";

describe("Type Alias", () => {
  it("should support type alias", () => {
    const category: Category = {
      id: 1,
      name: "Men",
      description: 'desc category'
    };

    const product: Product = {
      id: 2,
      name: "Tshirtxx0",
      price: 10,
      category: category,
      description: 'desc product'
    };

    
    console.info("untuk var object category: ", category);
    console.info("untuk var object produc: ", product);
  });
});
