type orderedBook = {
  bookId: string
  quantity: number
}

export type IOrder = {
  orderedBooks: orderedBook[]
}
