const Ticket = require("../models/tbl_tickets");

module.exports.createTicket = async (req, res) => {
  try {
    const { subject, body } = req.body;

    if (!subject || !body) {
      return res.status(400).send({ error: "Missing required fields." });
    }

    const ticket = await Ticket.create({
      ...req.body,
      userid: req.user._id,
    });

    return res.status(200).send({
      success: true,
      message: "Ticket successfully created",
      ticket,
    });
  } catch (error) {
    return res.status(400).send({ error: "Cannot create ticket." });
  }
};
