import { Request, Response } from "express";
import { CreateComplimenteService } from "../services/CreateComplimentsService";

class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { tag_id, user_receiver, user_sender, message } = request.body;

    const createComplimentService = new CreateComplimenteService();

    const compliment = await createComplimentService.execute({
      tag_id,
      user_sender,
      user_receiver,
      message,
    });

    return response.status(201).json(compliment);
  }
}

export { CreateComplimentController };
