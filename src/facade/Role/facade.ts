import { Utils } from "../../commons/constants/utils/Utils";
import { RoleService } from "../../services";
import { RoleTo } from "../../to/RoleTo";
import { UserTo } from "../../to/UserTo";
import { IRoleFacade } from "./interface";
import { ParametersError } from "../../config/error/index";

/**
 * @export
 * @implements {IRoleModelService}
 */
const RoleFacade: IRoleFacade = {
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */
  async create(role: RoleTo): Promise<RoleTo> {
    Utils.required({ name: role.name });
    let RoleResponse: RoleTo = await RoleService.create(role);
    return RoleResponse;
  },
  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */
  async findAll(): Promise<any[]> {
    let rolesResponse = await RoleService.findAll();
    return rolesResponse;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof RoleFacade
   */
  async deleteRole(idDelete: number): Promise<void> {
    let rolesResponse = await RoleService.deleteRole(idDelete);
    return rolesResponse;
  },

  async updateRole(idUpdate: number, roleTo: RoleTo): Promise<void> {
    try {
      await RoleService.updateRole(idUpdate, roleTo);
    } catch (error) {
      throw new ParametersError("No update");
    }
  },
};

export default RoleFacade;
