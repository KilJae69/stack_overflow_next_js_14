import { Schema, model, models, Document } from "mongoose";

export interface IAnswer extends Document {
    author: Schema.Types.ObjectId;
    question: Schema.Types.ObjectId[];  
  content: string;
  upvotes: Schema.Types.ObjectId[]; // Array of user ids
  downvotes: Schema.Types.ObjectId[]; // Array of user ids
  createdAt: Date;
}

const AnswerSchema = new Schema<IAnswer>({
    author: { type: Schema.Types.ObjectId, ref: "User", required: true},
    question: [{ type: Schema.Types.ObjectId, ref: "Question", required: true}],
  content: { type: String, required: true },
  upvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  downvotes: [{ type: Schema.Types.ObjectId, ref: "User" }],
  createdAt: { type: Date, default: Date.now },
});

const Answer = models.Answer || model<IAnswer>("Answer", AnswerSchema);

export default Answer;