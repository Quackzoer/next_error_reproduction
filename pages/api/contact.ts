import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.method)
    if (req.method !== 'POST') {
        res.status(405).send({ message: 'Only POST requests allowed' })
        return
    }
    console.log(req.body)
    if(!req.body || !req.body.email){
        res.status(400).send({message: 'Body must not be null'})
        return
    }

    res.status(200).send({ message: 'Data received' });
}