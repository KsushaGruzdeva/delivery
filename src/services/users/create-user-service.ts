// import { PostgresSource } from "../../db/source";
// import { User } from "../../models/user";

export class CreateUserService {
  public async execute(): Promise<{id: number}> {
    // const userRepository = PostgresSource.getRepository(User);

    return {id: 1};
    // Code...
  }
}
