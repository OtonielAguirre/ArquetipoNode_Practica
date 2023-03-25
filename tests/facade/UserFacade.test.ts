process.env.NODE_ENV = "test";

import { expect } from "chai";
import UserFacade from "../../src/facade/User/facade";
import { db } from "../../src/config/connection/database";
import User from "../../src/models/User.model";
import * as Kafka from "../../src/config/stream/kafka";
import { UserTo } from "../../src/to/UserTo";
import { ParametersError } from "../../src/config/error";

describe("UserFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
    User.create({
      id: 1,
      name: "test",
      email: "test@mail.com",
      createdAt: "2023-03-23",
      updatedAt: "2023-03-23",
    });
  });

  describe("FindAll", () => {
    it("should return one user", async () => {
      const User: any[] = await UserFacade.findAll();
      expect(1).equal(User.length);
    });
  });

  describe("Create", () => {
    it("should return one user", async () => {
      let userTo: UserTo = {
        name: "Rene",
        email: "otonielaguirre10@gmail.com",
      };
      const user: UserTo = await UserFacade.create(userTo);
      expect(user.email).equal("otonielaguirre10@gmail.com");
    });
  });

  describe("Create Error", () => {
    it("should return one user", async () => {
      let userTo: UserTo = {
        name: "Rene",
        email: "otonielaguirre10@gmail.com",
      };
      try {
        await UserFacade.create(userTo);
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Create Error atributes required", () => {
    it("should return error -> attributes required", async () => {
      let userTo: UserTo = {
        name: "Gsus",
      };
      try {
        await UserFacade.create(userTo);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("Required Argument: Email");
      }
    });
  });

  describe("Delete error", () => {
    it("should return error -> User not exist", async () => {
      try {
        await UserFacade.publishDeleteUser(42069);
        //Expect como el de update
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });

  describe("Update", () => {
    it("should return id updated", async () => {
      let userTo: UserTo = {
        name: "Damian",
      };
      try {
        await UserFacade.updateUser(2, userTo);
        //expect(result).instanceOf(Promise<void>);
      } catch (error) {
        expect(error).equal(new ParametersError("No se pudo actualizar"));
      }
    });
  });
});
