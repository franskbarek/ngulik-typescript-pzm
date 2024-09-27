type User = {
  name: string;
  gender: string;
};

describe("Data type", function (): void {
  it("should must variable declare", function (): void {
    let name: string = "Frans Ferdinand Kbarek"
    let balance: number = 10
    let isVip: boolean = false;

    name = "Frakadev"
    balance = 10000
    isVip = true


    console.info(name)
    console.info(balance)
    console.info(isVip)

  });
});
