import { User } from "../../model/User";
import { IUsersRepository, ICreateUserDTO } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
  private users: User[];

  private static INSTANCE: UsersRepository;

  private constructor() {
    this.users = [];
  }

  public static getInstance(): UsersRepository {
    if (!UsersRepository.INSTANCE) {
      UsersRepository.INSTANCE = new UsersRepository();
    }

    return UsersRepository.INSTANCE;
  }

  findByEmail(email: string): User | undefined {
    return this.users.find(user=> user.email === email);
  }

  create({ name, email }: ICreateUserDTO): User {    
    const user = new User();

    Object.assign(user, {
      name,
      email
    });

    this.users.push(user);

    return user;
  }

  findById(id: string): User | undefined {
    return this.users.find(user=> user.id === id);
  }

  turnAdmin(receivedUser: User): User {
    Object.assign(receivedUser, {
      updated_at: new Date(),
      admin: true,
    });

    return receivedUser;
  }

  list(): User[] {
    return this.users;
  }
}

export { UsersRepository };
