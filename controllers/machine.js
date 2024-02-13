const Machine = require("../models/tbl_machine");

module.exports.getMachines = async (req, res) => {
  try {
    const machines = await Machine.find({
      deleted: { $ne: true },
    }).sort("-createdAt");

    return res.status(200).send({
      success: true,
      machines,
    });
  } catch (err) {
    return res.status(400).send({ error: "Cannot get machines." });
  }
};

module.exports.createMachine = async (req, res) => {
  try {
    const { user, name, machine_name } = req.body;

    if (!user || !name || !machine_name) {
      return res.status(400).send({ error: "Missing required fields." });
    }

    const machine = await Machine.create({
      ...req.body,
    });

    return res.status(200).send({
      success: true,
      message: "Machine successfully created",
      machine,
    });
  } catch (error) {
    return res.status(400).send({ error: "Cannot create machine." });
  }
};
