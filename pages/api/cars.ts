// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

const mock = [
  { id: 1, name: 'Focus' },
  { id: 2, name: 'Maxima' },
  { id: 3, name: 'XV' },
  { id: 4, name: 'WRX' },
  { id: 5, name: 'BMW 3S' },
];

type Data = {
  total: number;
  cars: any[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  switch (req.method) {
    case 'POST':
      mock.push(req.body);
      break;

    case 'PUT':
      {
        const index = mock.findIndex((item: any) => item.id === req.body.id);
        mock.splice(index, 1, req.body);
      }
      break;

    case 'DELETE':
      {
        const index = mock.findIndex((item: any) => item.id === req.body.id);
        mock.splice(index, 1);
      }
      break;

    default:
      break;
  }

  res.status(200).json({ total: mock.length, cars: mock });
}
