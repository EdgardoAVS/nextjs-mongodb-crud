import { Schema, model, models } from "mongoose";

const taskSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "El titulo es requerido"],
      unique: true,
      trim: true, //Quitar espacios al inicio y al final
    },
    description: {
      type: String,
      required: [true, "La descripción es requerida"],
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

export default models.task || model('Task', taskSchema)