import mongoose, { Schema } from "mongoose";

const playListSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Playlist = mongoose.model("Playlist", playListSchema);
