import { UserTo } from "../../to/UserTo";

/**
 * @export
 * @interface IUserFacade
 */
export interface IUserFacade {
  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  findAll(): Promise<any[]>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  create(user: UserTo): Promise<UserTo>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  updateUser(idUpdate: number, userTo: UserTo): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  publishDeleteUser(id: number): Promise<void>;

  /**
   * @returns {Promise<any[]>}
   * @memberof IUserFacade
   */
  consumerDeleteuUser(idDelete: number): Promise<void>;
}
