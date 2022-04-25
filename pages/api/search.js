import { apiBase, apiKey } from "../../lib/tbmd"

export default async function handler(req, res) {
    
    let q = req.query.q;
    
    
    try {
        const result = await fetch(`${apiBase}/search/movie?api_key=${apiKey}&language=pt-BR&query=${q}`)
        const json = await result.json();
        
    return res.status(200).json({ 
            list: json.results
        
     });
    } catch (error) {
       return res.status(200).json(error)
    }
  }

  
  