import { UserTo } from "../../to/UserTo";
import UserService from "./service";

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function findAll(): Promise<any[]> {
  return await UserService.findAll();
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function validateExistEmail(email?: string): Promise<void> {
  return await UserService.validateExistEmail(email);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function create(user: UserTo): Promise<UserTo> {
  return await UserService.create(user);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function deleteUser(idDelete: number): Promise<void> {
  return await UserService.deleteUser(idDelete);
}

/**
 * @export
 * @returns {Promise < any[] >}
 */
export async function updateUser(idUpdate: number,userTo: UserTo): Promise<void> {
  return await UserService.updateUser(idUpdate, userTo);
}
