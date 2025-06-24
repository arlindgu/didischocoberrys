export type products = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

export const products: products[] = [
    {
        id: "1",
        name: "Chocolate Berry",
        description: "A delightful mix of rich chocolate and fresh berries.",
        price: 5.99,
        image: "/images/chocolate-berry.jpg",
        category: "chocolate"
    },
    {
        id: "2",
        name: "Strawberry Delight",
        description: "Fresh strawberries dipped in creamy chocolate.",
        price: 4.99,
        image: "/images/strawberry-delight.jpg",
        category: "strawberry"
    },
]

export type chocolate = {
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
    category: string;
}

