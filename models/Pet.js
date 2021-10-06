const mongoose = require("mongoose");

const petSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    description: {
      type: String,
      required: [true, "A description is required"],
    },
    photoUrl: {
      //Pendiente con cloudinary
      type: Array,
      required: [false, "A description is required"],
    },
    age: {
      type: Number,
      required: true,
    },
    foundationId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Foundation",
      required: true,
    },
    adopted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
