describe("Array", () => {
  it("should support array", (): void => {
    const names: string[] = ["frans", "ferdinand", "kbarek"];
    const numbers: number[] = [1, 2, 3];

    console.info("info untuk var names: ", names);
    console.info("info untuk var numbers: ", numbers);
  });

  it("should support readonly array", (): void => {
    const hobbies: ReadonlyArray<string> = ["menulis", "nonton", "berenang"];
    // hobbies[0] = ["Traveling"];
    // hobbies[1] = ["Shoping"];

    console.info("info untuk var hobbies: ", hobbies[2]);
  });

  it("should support tupple", (): void => {
    const persons: readonly [string, string, number] = ["string", "string", 0];

    console.info("info untuk var persons: ", persons);
  });
});
