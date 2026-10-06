export type Availability='Available'|'Limited Availability'|'Out of Stock';
export interface Product{ id:string;name:string;slug:string;brand:string;category:string;description:string;price:number;originalPrice?:number;discountPercentage?:number;availability:Availability;sku:string;rating:number;reviewCount:number;images:string[];specifications:Record<string,string>;featured?:boolean;bestSeller?:boolean;newArrival?:boolean;connection?:string }
export interface CartItem{product:Product;quantity:number}
export interface Order{orderId:string;customer:{name:string;phone:string;email:string};address:string;city:string;area:string;items:CartItem[];subtotal:number;shipping:number;total:number;payment:'Cash on Delivery'}
