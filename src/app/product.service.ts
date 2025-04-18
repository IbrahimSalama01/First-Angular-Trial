import { Injectable } from '@angular/core';
import { IProduct, ICategory } from '../utils/interfaces';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

products: IProduct[] = [
  {
    id: 21,
    name: "Wireless Mouse",
    price: 25.99,
    onSale: true,
    salePrice: 19.99,
    category: "Electronics",
    image: "https://picsum.photos/598/300"
  },
  {
    id: 22,
    name: "Bluetooth Headphones",
    price: 59.99,
    onSale: false,
    salePrice: 59.99, // regular price, no sale
    category: "Electronics",
    image: "https://picsum.photos/597/300"
  },
  {
    id: 23,
    name: "Yoga Mat",
    price: 19.99,
    onSale: true,
    salePrice: 14.99,
    category: "Fitness",
    image: "https://picsum.photos/605/300"
  },
  {
    id: 24,
    name: "Stainless Steel Water Bottle",
    price: 14.49,
    onSale: false,
    salePrice: 14.49, // regular price, no sale
    category: "Home & Kitchen",
    image: "https://picsum.photos/600/300"
  },
  {
    id: 25,
    name: "Desk Lamp",
    price: 32.75,
    onSale: false,
    salePrice: 32.75, // regular price, no sale
    category: "Office",
    image: "https://picsum.photos/601/300"
  },
  {
    id: 26,
    name: "Gaming Keyboard",
    price: 89.99,
    onSale: true,
    salePrice: 79.99,
    category: "Electronics",
    image: "https://picsum.photos/599/300"
  },
  {
    id: 27,
    name: "Running Shoes",
    price: 74.50,
    onSale: false,
    salePrice: 74.50, // regular price, no sale
    category: "Footwear",
    image: "https://picsum.photos/600/299"
  },
  {
    id: 28,
    name: "Smartwatch",
    price: 129.99,
    onSale: false,
    salePrice: 129.99, // regular price, no sale
    category: "Wearables",
    image: "https://picsum.photos/600/301"
  },
  {
    id: 29,
    name: "Electric Kettle",
    price: 29.99,
    onSale: true,
    salePrice: 24.99,
    category: "Home Appliances",
    image: "https://picsum.photos/602/300"
  },
  {
    id: 30,
    name: "Portable Charger",
    price: 22.95,
    onSale: true,
    salePrice: 19.95,
    category: "Accessories",
    image: "https://picsum.photos/603/300"
  },
  {
    id: 1,
    name: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    price: 109.95,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    onSale: false,
    salePrice: 109.95
  },
  {
    id: 2,
    name: "Mens Casual Premium Slim Fit T-Shirts",
    price: 22.3,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    onSale: false,
    salePrice: 22.3
  },
  {
    id: 3,
    name: "Mens Cotton Jacket",
    price: 55.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
    onSale: false,
    salePrice: 55.99
  },
  {
    id: 4,
    name: "Mens Casual Slim Fit",
    price: 15.99,
    category: "men's clothing",
    image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
    onSale: false,
    salePrice: 15.99
  },
  {
    id: 5,
    name: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_.jpg",
    onSale: false,
    salePrice: 695
  },
  {
    id: 6,
    name: "Solid Gold Petite Micropave",
    price: 168,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg",
    onSale: false,
    salePrice: 168
  },
  {
    id: 7,
    name: "White Gold Plated Princess",
    price: 9.99,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg",
    onSale: false,
    salePrice: 9.99
  },
  {
    id: 8,
    name: "Pierced Owl Rose Gold Plated Stainless Steel Double",
    price: 10.99,
    category: "jewelery",
    image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg",
    onSale: false,
    salePrice: 10.99
  },
  {
    id: 9,
    name: "WD 2TB Elements Portable External Hard Drive - USB 3.0",
    price: 64,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
    onSale: false,
    salePrice: 64
  },
  {
    id: 10,
    name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
    price: 109,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
    onSale: false,
    salePrice: 109
  },
  {
    id: 11,
    name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
    price: 109,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
    onSale: false,
    salePrice: 109
  },
  {
    id: 12,
    name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
    price: 114,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
    onSale: false,
    salePrice: 114
  },
  {
    id: 13,
    name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
    price: 599,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
    onSale: false,
    salePrice: 599
  },
  {
    id: 14,
    name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
    price: 999.99,
    category: "Electronics",
    image: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
    onSale: false,
    salePrice: 999.99
  },
  {
    id: 15,
    name: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
    price: 56.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg",
    onSale: false,
    salePrice: 56.99
  },
  {
    id: 16,
    name: "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
    price: 29.95,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg",
    onSale: false,
    salePrice: 29.95
  },
  {
    id: 17,
    name: "Rain Jacket Women Windbreaker Striped Climbing Raincoats",
    price: 39.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg",
    onSale: false,
    salePrice: 39.99
  },
  {
    id: 18,
    name: "MBJ Women's Solid Short Sleeve Boat Neck V",
    price: 9.85,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg",
    onSale: false,
    salePrice: 9.85
  },
  {
    id: 19,
    name: "Opna Women's Short Sleeve Moisture",
    price: 7.95,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg",
    onSale: false,
    salePrice: 7.95
  },
  {
    id: 20,
    name: "DANVOUY Womens T Shirt Casual Cotton Short",
    price: 12.99,
    category: "women's clothing",
    image: "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg",
    onSale: false,
    salePrice: 12.99
  }
];

  categories: ICategory[] = [
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

  constructor() { }
}
