import { Request, Response } from "express";

import { ShowUserProfileUseCase } from "./ShowUserProfileUseCase";

class ShowUserProfileController {
  constructor(private showUserProfileUseCase: ShowUserProfileUseCase) {}

  handle(request: Request, response: Response): Response {
    const { user_id } = request.params;

    if(!user_id)
      return response.status(404).send();

    try{
      const userProfile = this.showUserProfileUseCase.execute({user_id});

      return response.status(200).json(userProfile);
      
    }catch(err){
      return response.status(404).json({error: err});
    }
  }
}

export { ShowUserProfileController };
