import { UserRepository } from "../repositories/UserRepository.js";

export class UserController {
  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async index(req, res, next) {
    const users = await UserRepository.all();

    return res.json({ users });
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async store(req, res, next) {
    const { username, email, name } = req.body.user;

    const user = await UserRepository.create({ username, email, name });

    return res.status(201).json({ user });
  }

  /**
   * @param {import("express").Request} req
   * @param {import("express").Response} res
   * @param {import("express").NextFunction} next
   */
  // eslint-disable-next-line no-unused-vars
  static async show(req, res, next) {
    const { username } = req.params;

    const user = await UserRepository.getByUsername(username);

    return res.json({ user });
  }
}
