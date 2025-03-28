import { z } from 'zod'

export const registerSchema = z
  .object({
    email: z.string().email({ message: 'Correo electronico invalido' }),
    password: z
      .string()
      .min(8, { message: 'La contraseña debe tener al menos 8 caracteres' }),
    dni: z
      .string()
      .length(8, { message: 'El DNI debe tener 8 caracteres númericos' }),
    phoneNumber: z.string().length(9, {
      message: 'El número de teléfono debe tener 9 caracteres númericos',
    }),
  })
  .strict()
