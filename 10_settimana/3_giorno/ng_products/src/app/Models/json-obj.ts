import { iProduct } from './product';
export interface iJsonObj {
  products: iProduct[]
  total: number
  skip: number
  limit: number
}
