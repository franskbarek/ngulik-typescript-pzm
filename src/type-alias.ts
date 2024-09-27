export type ID = string | number

export type Category = {
    id: ID,
    name: string
}

export type Product = {
    id: ID,
    name: string,
    price: number,
    category: Category
}

const category: Category = {
    id: '1',
    name: "Men"

}

const product: Product = {
    id: "001",
    name: "Shirtxx",
    price: 10,
    category: category
}

console.info("untuk var object product: ", product)

console.info("untuk var object category: ", category)