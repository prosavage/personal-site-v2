// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const generalInfoRes = await Axios.get("https://api.github.com/repos/ProSavage/personal-site-v2")
  const commitsRes = await Axios.get("https://api.github.com/repos/ProSavage/personal-site-v2/commits")
  const data = generalInfoRes.data;
  const name = data.name;
  const desc = data.description;
  const lang = data.language;
  const commits = commitsRes.data.length;
  

  res.status(200).json({ name: 'John Doe' });
};