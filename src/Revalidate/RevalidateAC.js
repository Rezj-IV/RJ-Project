"use server";
import { revalidatePath } from 'next/cache'
import React from 'react'

export const RevalidateAC =  async({tagToRevalidate ,pathToRevalidate }) => {
 return  await revalidatePath(pathToRevalidate)
  
}

 