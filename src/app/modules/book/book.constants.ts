export const bookFilterableFields: string[] = [
  'search',
  'minPrice',
  'maxPrice',
  'category',
]

export const bookSearchableFields: string[] = ['title', 'author', 'genre']

export const bookRelationalFields: string[] = [
  'minPrice',
  'maxPrice',
  'category',
]
export const bookRelationalFieldsMapper: { [key: string]: string } = {
  minPrice: 'price',
  maxPrice: 'price',
  category: 'categoryId',
}
