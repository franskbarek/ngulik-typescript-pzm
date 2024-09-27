import { Customer, CustomerType } from "../src/type-enum";

describe("Type Enum", () => {
  it("should support enum", () => {
    const customer: Customer = {
      id: "1",
      name: "Frans",
      type: CustomerType.PLATINUM,
      description: null
    };

    console.info(customer);
  });
});
