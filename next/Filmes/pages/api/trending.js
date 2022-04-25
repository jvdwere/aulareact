import { apiBase, apiKey } from "../../lib/tbmd"

export default async function handler(req, res) {
    try {
        const result = await fetch(`${apiBase}/trending/movie/week?api_key=${apiKey}&language=pt-BR`)
    const json = await result.json();
    return res.status(200).json({ 

        list: json.results
     });
    } catch (error) {
       return res.status(200).json(error)
    }
  }
  