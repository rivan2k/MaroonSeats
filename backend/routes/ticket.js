import express, { Router } from "express"
import { getTicket, createTicket, updateTicket, deleteTicket } from "../controllers/ticket.controller.js";


const router = express.Router();

router.get("/", getTicket);

router.post("/", createTicket);

router.put("/:id", updateTicket);

router.delete("/:id", deleteTicket);

export default router;