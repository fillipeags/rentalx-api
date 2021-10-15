import { ICreatesUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create(data: ICreatesUserDTO): Promise<void>;
}

export { IUsersRepository };
