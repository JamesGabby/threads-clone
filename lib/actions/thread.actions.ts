import Thread from "../models/thread.model"
import { connectToDB } from "../mongoose"

interface Params {
  text: string
  author: string
  communityId: string
  path: string
}

export async function createThread({ text, author, communityId, path }: Params) {
  try {
    connectToDB()

    const createThread = await Thread.create()
  } catch (error: any) {
    throw new Error(`Failed to create thread: ${error.message}`)
  }
}