import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertWaitlistSchema } from "@shared/schema";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/waitlist", async (req, res) => {
    try {
      const data = insertWaitlistSchema.parse(req.body);
      const entry = await storage.createWaitlistEntry(data);
      res.status(201).json(entry);
    } catch (error) {
      res.status(400).json({ message: "Invalid input data" });
    }
  });

  app.get("/api/waitlist", async (_req, res) => {
    const entries = await storage.getWaitlistEntries();
    res.json(entries);
  });

  return createServer(app);
}
