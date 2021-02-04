import { Request, Response } from "express";

type ResponseBody = {
  success: boolean;
  message: string;
  data: {};
};

class Controller {
  private response: Response;
  private request: Request;

  constructor(req: Request, res: Response) {
    this.response = res;
    this.request = req;
  }

  success(data: {}, message: string = "success", statusCode: number = 200) {
    const obj: ResponseBody = { success: true, message, data };
    this.response.status(statusCode).json(obj);
  }

  error(data: {}, message: string = "success", statusCode: number = 500) {
    const obj: ResponseBody = { success: false, message, data };
    this.response.status(statusCode).json(obj);
  }
}

export default Controller;
