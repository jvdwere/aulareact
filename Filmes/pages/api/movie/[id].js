import { apiBase, apiKey } from "../../../lib/tbmd"

export default async function handler(req, res) {
    
    let q = req.query.q;
    
    
    try {
        const result = await fetch(`${apiBase}/movie/${req.query.id}?api_key=${apiKey}&language=pt-BR`)
        const json = await result.json();
       
        
    return res.status(200).json({ 
            info: json
        
     });
    } 
    catch (error) {
       return res.status(200).json(error)
    }
  }

  
  