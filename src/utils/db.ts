import { IProduct, ICategory } from "./interfaces";


export const products: IProduct[] = [
  {
    id: 1,
    name: "Wireless Mouse",
    price: 25.99,
    onSale: true,
    salePrice: 19.99,
    category: "Electronics",
    image: "https://picsum.photos/598/300"
  },
  {
    id: 2,
    name: "Bluetooth Headphones",
    price: 59.99,
    onSale: false,
    salePrice: 59.99, // regular price, no sale
    category: "Electronics",
    image: "https://picsum.photos/597/300"
  },
  {
    id: 3,
    name: "Yoga Mat",
    price: 19.99,
    onSale: true,
    salePrice: 14.99,
    category: "Fitness",
    image: "https://picsum.photos/605/300"
  },
  {
    id: 4,
    name: "Stainless Steel Water Bottle",
    price: 14.49,
    onSale: false,
    salePrice: 14.49, // regular price, no sale
    category: "Home & Kitchen",
    image: "https://picsum.photos/600/300"
  },
  {
    id: 5,
    name: "Desk Lamp",
    price: 32.75,
    onSale: false,
    salePrice: 32.75, // regular price, no sale
    category: "Office",
    image: "https://picsum.photos/601/300"
  },
  {
    id: 6,
    name: "Gaming Keyboard",
    price: 89.99,
    onSale: true,
    salePrice: 79.99,
    category: "Electronics",
    image: "https://picsum.photos/599/300"
  },
  {
    id: 7,
    name: "Running Shoes",
    price: 74.50,
    onSale: false,
    salePrice: 74.50, // regular price, no sale
    category: "Footwear",
    image: "https://picsum.photos/600/299"
  },
  {
    id: 8,
    name: "Smartwatch",
    price: 129.99,
    onSale: false,
    salePrice: 129.99, // regular price, no sale
    category: "Wearables",
    image: "https://picsum.photos/600/301"
  },
  {
    id: 9,
    name: "Electric Kettle",
    price: 29.99,
    onSale: true,
    salePrice: 24.99,
    category: "Home Appliances",
    image: "https://picsum.photos/602/300"
  },
  {
    id: 10,
    name: "Portable Charger",
    price: 22.95,
    onSale: true,
    salePrice: 19.95,
    category: "Accessories",
    image: "https://picsum.photos/603/300"
  }
];


export const categories: ICategory[] = [
  {
    id: 1,
    name: "Home & Kitchen",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image: "https://images.unsplash.com/photo-1508780709619-79562169bc64"
  },
  {
    id: 5,
    name: "Beauty & Personal Care",
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9"
  },

  {
    id: 7,
    name: "Books",
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794"
  },
  {
    id: 8,
    name: "Automotive",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70"
  },
];
