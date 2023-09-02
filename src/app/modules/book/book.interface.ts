export type IBook = {
  title: string
  author: string
  genre: string
  price: number
  publicationDate: string
  categoryId: string
}

export type IBookFilterRequest = {
  search?: string | undefined
  filterData?: {
    minPrice?: number
    maxPrice?: number
    category?: string
  }
}
