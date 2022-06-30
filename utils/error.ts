import { NextApiRequest, NextApiResponse } from "next";
import { ApiError } from "next/dist/server/api-utils";

export function requireParameters(parameters: {[name: string]: any}): string {
  const missing = Object.entries(parameters).filter(e => e[1] == undefined).map(e => e[0]);

  if(missing.length > 0) return `Missing parameters: ${missing.join(', ')}`

  return "";
}

export default function catchErrorsFrom(handler: (req: NextApiRequest, res: NextApiResponse) => Promise<any>) {
  return (req: NextApiRequest, res: NextApiResponse) => {
    return handler(req, res)
      .catch((error: unknown) => {
        if(error instanceof ApiError) return res.status(error.statusCode).send(error.message);
        else return res.status(500).send("Something went wrong");
      });
  }
}
