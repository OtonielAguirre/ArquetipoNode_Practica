import { Utils } from "../../commons/constants/utils/Utils";
import { UserService } from "../../services";
import { UserTo } from "../../to/UserTo";
import { IUserFacade } from "./interface";
import { ParametersError } from "../../config/error/index";
import * as Kafka from "../../config/stream/kafka";

/**
 * @export
 * @implements {IUserModelService}
 */
const UserFacade: IUserFacade = {
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async findAll(): Promise<any[]> {
    let User = await UserService.findAll();
    return User;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async create(user: UserTo): Promise<UserTo> {
    Utils.required({ email: user.email });
    await UserService.validateExistEmail(user.email);
    let userResponse: UserTo = await UserService.create(user);
    return userResponse;
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async publishDeleteUser(idToDelete: number): Promise<void> {
    try {
      // await UserService.delete_user(idToDelete);
      await Kafka.send("user-service-topic", `${idToDelete}`);
    } catch (error) {
      throw new ParametersError("No delete");
    }
  },
  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async consumerDeleteuUser(idDelete: number): Promise<void> {
    try {
      await UserService.deleteUser(idDelete);
      //Kafka.send("user-service-topic", idToDelete);
    } catch (error) {
      throw new ParametersError("No delete");
    }
  },

  /**
   * @returns {Promise < any[] >}
   * @memberof UserFacade
   */
  async updateUser(idUpdate: number, userTo: UserTo): Promise<void> {
    try {
      await UserService.updateUser(idUpdate, userTo);
    } catch (error) {
      throw new ParametersError("No update");
    }
  },
};

export default UserFacade;
