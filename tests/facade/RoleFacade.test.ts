process.env.NODE_ENV = "test";

import { expect } from "chai";
import { db } from "../../src/config/connection/database";
import Role from "../../src/models/Role.model";
import { ParametersError } from "../../src/config/error";
import RoleFacade from "../../src/facade/Role/facade";
import { RoleTo } from "../../src/to/RoleTo";

describe("RoleFacade Test", () => {
  before("Init", async () => {
    await db.sync({ force: true });
  });

  describe("Create", () => {
    it("should return one role", async () => {
      let roleTo: RoleTo = {
        name: "AdminTest",
      };
      const role: RoleTo = await RoleFacade.create(roleTo);
      expect(role.id).to.not.be.null;
      expect(role.name).equal("ElAdmin");
    });
  });

  describe("Create Error attributes required", () => {
    it("should return error -> attributes required", async () => {
      let roleTo: RoleTo = {};
      try {
        await RoleFacade.create(roleTo);
      } catch (error: any) {
        expect(error).instanceOf(ParametersError);
        expect(error.message).equal("Attribute Required: Name");
      }
    });
  });

  describe("FindAll", () => {
    it("should return roles", async () => {
      const roles: any[] = await RoleFacade.findAll();
      expect(1).equal(roles.length);
    });
  });

  describe("Update", () => {
    it("should return id updated", async () => {
      let roleTo: RoleTo = {
        name: "Jefe Segundo",
      };
      try {
        await RoleFacade.updateRole(2, roleTo);
        //expect(result).instanceOf(Promise<void>);
      } catch (error) {
        expect(error).equal(new ParametersError("No update"));
      }
    });
  });

  describe("Delete error", () => {
    it("should return error -> User not exist", async () => {
      try {
        await RoleFacade.deleteRole(69420);
      } catch (error) {
        expect(error).instanceOf(ParametersError);
      }
    });
  });
});
