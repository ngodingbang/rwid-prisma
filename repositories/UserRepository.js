import { NotFoundError } from "../errors/NotFoundError.js";
import { model } from "../models/index.js";

/**
 * @typedef {import("../models/index.js").Prisma.XOR<import("../models/index.js").Prisma.UserCreateInput, import("../models/index.js").Prisma.UserUncheckedCreateInput>} UserCreateArgsData
 */
export class UserRepository {
  static all() {
    return model.user.findMany();
  }

  /**
   * @param {string} username
   * @throws {NotFoundError}
   */
  static async getByUsername(username) {
    const user = await model.user.findFirst({ where: { username } });

    if (user === null) {
      throw new NotFoundError("User not found.");
    }

    return user;
  }

  /**
   * @param {UserCreateArgsData} data
   */
  static create(data) {
    return model.user.create({ data });
  }
}
