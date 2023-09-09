import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient()

export async function connectDB() {
  try {
    await prisma.$connect()
  } catch (error) {
    return Error("Database connection failed")
  }
}
export async function disconnectDB() {
  try {
    await prisma.$disconnect()
  } catch (error) {
    return Error("Database disconnection failed")
  }
} 
