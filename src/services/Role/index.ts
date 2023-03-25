import { RoleTo } from "../../to/RoleTo";
import RoleService from "./service";

/**
 * @export
 * @returns {Promise < RoleTo >}
 */
export async function create(role: RoleTo): Promise<RoleTo> {
  return await RoleService.create(role);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await RoleService.findAll();
}

/**
 * @export
 * @returns {Promise < void >}
 */
export async function deleteRole(idDelete: number): Promise<void> {
  return await RoleService.deleteRole(idDelete);
}

/**
 * @export
 * @returns {Promise < void >}
 */
export async function updateRole(idUpdate: number,roleTo: RoleTo): Promise<void> {
  return await RoleService.updateRole(idUpdate, roleTo);
}
