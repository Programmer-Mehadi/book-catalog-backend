import { z, ZodObject, ZodArray, ZodString, ZodNumber } from 'zod'

const create: ZodObject<{
  body: ZodObject<{
    orderedBooks: ZodArray<
      ZodObject<{
        bookId: ZodString
        quantity: ZodNumber
      }>
    >
  }>
}> = z.object({
  body: z.object({
    orderedBooks: z.array(
      z.object({
        bookId: z.string({
          required_error: 'Book id is required',
        }),
        quantity: z.number({
          required_error: 'Quantity is required',
        }),
      })
    ),
  }),
})

export const OrderValidation = {
  create,
}
