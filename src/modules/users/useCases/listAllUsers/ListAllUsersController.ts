import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

interface IRequest{
  user_id: string;
}

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.headers;

    if(!user_id)
      return response.status(400).send();

    try{
      const userList = this.listAllUsersUseCase.execute({ user_id } as IRequest);

      return response.status(200).json(userList).send();

    }catch(error){
      return response.status(400).json({error});
    }
    
  }
}

export { ListAllUsersController };
