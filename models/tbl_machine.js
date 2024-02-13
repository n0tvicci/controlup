const mongoose = require("mongoose");

const machineSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    machine_name: {
      type: String,
      required: true,
    },
    deleted: Boolean,
  },
  {
    timestamps: true,
  }
);

const Machine = mongoose.model("tbl_machine", machineSchema);
module.exports = Machine;
