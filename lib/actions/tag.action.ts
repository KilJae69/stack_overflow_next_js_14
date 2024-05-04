"use server";

import User from "@/database/user.model";
import { connectToDatabase } from "../mongoose";
import { GetAllTagsParams, GetTopInteractedTagsParams } from "./shared.types";
import Tag from "@/database/tag.model";

export async function getTopInteractedTags(params: GetTopInteractedTagsParams) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = User.findById(userId);

    if (!user) throw new Error("User not found");

    // Find interactions for the user and group by tags...

    // Interaction....

    return [
     {_id:"1", name:"tag1"},
     {_id:"2", name:"tag2"},
     {_id:"3", name:"tag3"},
    ];
  } catch (error) {
    console.log(error);
    throw new Error("Error getting all users");
  }
}

export async function getAllTags(params:GetAllTagsParams){

  try {
    connectToDatabase();

    // const { page, pageSize, filter, searchQuery } = params;

    const tags = await Tag.find();

    return tags;

  } catch (error) {
    console.log(error);
    throw new Error("Error getting all tags");
  }

}
