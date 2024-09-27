import { sayGreating, sayHello } from "../src/hello";

describe("sayHello", function (): void {
  it("should return Hello, Frans", function (): void {
    expect(sayHello("Frans")).toBe("Hello, Frans");
  });
});

describe("Greating", function (): void {
  it("should return Selamat pagi, Frans", function (): void {
    expect(sayGreating("Frans", "pagi")).toBe("Selamat pagi, Frans");
  });
});
