/* eslint-disable prettier/prettier */
import { Response, Request } from "express";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  constructor(private createUserUseCase: CreateUserUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, email } = request.body;

    try{
      const newUser = this.createUserUseCase.execute({email, name});

      return response.status(201).json(newUser);
    }catch(err){
      return response.status(400).json(err);
    }
  }
}

export { CreateUserController };
