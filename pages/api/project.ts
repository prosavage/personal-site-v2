// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Axios from "axios";
import { NextApiRequest, NextApiResponse } from "next"
import langColors from "./../../lib/lang-colors.json"

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const axios = Axios.create({
    headers: {
      Accept: "application/vnd.github.mercy-preview+json"
    },
    auth: {
      username: 'ProSavage',
      password: ''
    }
  })
  const projectName = req.body.name;
  const user = req.body.user;
  const generalInfoRes = await axios.get(`https://api.github.com/repos/${user}/${projectName}`)
  const commitsRes = await axios.get(`https://api.github.com/repos/${user}/${projectName}/commits`)
  const languagesRes = await axios.get(`https://api.github.com/repos/${user}/${projectName}/languages`)
  const data = generalInfoRes.data;
  const name = data.name;
  const desc = data.description;
  const lang = Object.keys(languagesRes.data).map(lang => {
    return {
      color: langColors[lang].color,
      name: lang
    }
  })
  const commits = commitsRes.data.length;
  const forks = data.forks;
  const issues = data.open_issues;
  const topics = data.topics;



  res.status(200).json({ project: name, desc, lang, commits, topics, forks, issues });
};