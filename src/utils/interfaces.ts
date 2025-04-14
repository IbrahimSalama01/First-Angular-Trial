export interface IProduct {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  onSale:boolean
  salePrice:number
}

export interface ICategory {
  id: number;
  name: string;
  image: string;
}
