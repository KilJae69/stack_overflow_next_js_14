"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { CreateUserParams, DeleteUserParams, UpdateUserParams } from "./shared.types";
import { revalidatePath } from "next/cache";
import Question from "@/database/question.model";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;
    const user = await User.findOne({ clerkId: userId });
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
}

export async function createUser(userData: CreateUserParams) {
  try {
    connectToDatabase();

    const newUser = await User.create(userData);

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error("Error creating user");
  }
}
export async function updateUser(params: UpdateUserParams) {
  try {
    connectToDatabase();

    const { clerkId, updateData,path } = params;

    await User.findOneAndUpdate({ clerkId }, updateData, { new: true });

    revalidatePath(path);

  } catch (error) {
    console.log(error);
    throw new Error("Error updating user");
  }
}
export async function deleteUser(params: DeleteUserParams) {
  try {
    connectToDatabase();

   const { clerkId } = params;

   const user = await User.findOneAndDelete({ clerkId });

   if(!user) {
     throw new Error("User not found");
   }

   // Delete everything from that user
//    const userQuestionIds = await Question.find({author: user._id}).distinct("_id");

   await Question.deleteMany({ author: user._id });

   // TODO: Delete user answers,comments etc...

   const deletedUser = await User.findByIdAndDelete(user._id);

   return deletedUser;

  } catch (error) {
    console.log(error);
    throw new Error("Error deleting user");
  }
}
