import { iDimensions } from "./dimensions"
import { iMeta } from "./meta"
import { iReview } from "./review"

export interface iProduct {
  id: number
  title: string
  description: string
  category: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  tags: string[]
  brand: string
  sku: string
  weight: number
  dimensions: iDimensions
  warrantyInformation: string
  shippingInformation: string
  availabilityStatus: string
  reviews: iReview[]
  returnPolicy: string
  minimumOrderQuantity: number
  meta: iMeta
  thumbnail: string
  images: string[]
}
