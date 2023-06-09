import { IRoleService } from "./interface";
import Role from "../../models/Role.model";
import * as Kafka from "../../config/stream/kafka";
import { RoleTo } from "../../to/RoleTo";
import { ParametersError } from "../../config/error";
import { create } from "lodash";
import Roles from "../../models/Role.model";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleService: IRoleService = {
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async create(role: RoleTo): Promise<RoleTo> {
    let roleModel = await Roles.create(role);
    return roleModel;
  },
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async findAll(): Promise<any[]> {
    let roleResponse = await Roles.findAll();
    return roleResponse;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */

  async deleteRole(idDelete: number): Promise<void> {
    try {
      let result = Roles.destroy({
        where: {
          id: idDelete,
        },
      });
    } catch (error) {
      throw new ParametersError("No delete");
    }
  },
  async updateRole(idUpdate: number, roleTo: RoleTo): Promise<void> {
    try {
      let result = await Roles.update(roleTo, { where: { id: idUpdate } });
    } catch (error) {
      throw new ParametersError("No update");
    }
  },
};

export default RoleService;
