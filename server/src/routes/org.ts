import express from "express";
import User from "../models/User";
import Org from "../models/Org";
import mongoose from "mongoose";
import { userMiddleware } from "./user";
const orgRouter = express.Router();

// Given an orgId from the request query, return the organization object that matches the id
orgRouter.get("/", async (req: any, res: express.Response) => {
  const { orgId } = req.query;

  if (!orgId) return res.status(400).json({ error: "orgId not provided" });

  const org = await Org.findById(new mongoose.Types.ObjectId(orgId.toString()))
    .exec()
    .catch((err) => {
      return res.status(500).json({ err });
    });

  return res.status(200).json({ org });
});

// Given an orgId from the request query, return all the user objects within that organization
orgRouter.get("/list-users", async (req: any, res: express.Response) => {
  const { orgId } = req.query;

  if (!orgId) return res.status(400).json({ error: "orgId not provided" });

  const users = await User.find({
    org: orgId.toString(),
  })
    .exec()
    .catch((err) => {
      return res.status(500).json({ error: err });
    });

  return res.status(200).json({ users });
});

orgRouter.put("/:orgId/name", userMiddleware, async (req, res) => {
  const { orgId } = req.params;
  const userOrgId = res.locals.user.org.toString();
  const { name } = req.body;

  if (!name) {
    return res.status(400).send({ error: "Name not provided" });
  }

  if (userOrgId !== orgId) {
    return res.status(403).send({ error: "User does not have permission" });
  }

  try {
    await Org.findByIdAndUpdate(orgId, { name });
    return res.end();
  } catch (error) {
    return res.status(500).send({ error });
  }
});

orgRouter.get("/repos", userMiddleware, async (_, res) => {
  const orgId = res.locals.user.org.toString();

  try {
    const org = await Org.findById(orgId);
    if (org?.integrations?.github?.installations == null) {
      return res.send({ repos: [] });
    }

    const allRepos: string[] = [];
    org.integrations.github.installations.map((installation: any) => {
      installation.repositories.forEach((repo: { name: string }) => {
        allRepos.push(repo.name);
      });
    });

    return res.send({ repos: allRepos });
  } catch (error) {
    return res.status(500).send({ error });
  }
});

export default orgRouter;
