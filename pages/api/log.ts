import { assert } from 'console';
import type { NextApiRequest, NextApiResponse } from 'next'
import { ApiError } from 'next/dist/server/api-utils';
import getDatabase from '../../services/MongoDatabase';
import catchErrorsFrom, { requireParameters } from '../../utils/error';

export default catchErrorsFrom(async (
  req: NextApiRequest,
  res: NextApiResponse
) => {

  const {
    project,
    level,
    message,
    body
  } = req.body;

  const missing = requireParameters({
    project, level, message, body
  });
  if(missing) throw new ApiError(400, missing);

  const db = await getDatabase();
  const collection = db.collection("logentries");

  const doc = { 
    project,
    level,
    message,
    body
  };
  const result = await collection.insertOne(doc);

  res.status(200).json({ _id: result.insertedId, ...doc });
});
