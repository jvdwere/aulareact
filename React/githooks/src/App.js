import React, { useState, useEffect } from 'react';


export default function App() {
  const [repositories, setRepositories] = useState([]);

  useEffect( ()=>{
    async function carregarRepositorios(){
    const response = await fetch('https://api.github.com/users/nicholasess/repos')
    const data = await response.json();

    setRepositories(data);
  }
  carregarRepositorios()
  }, []);
  
  useEffect (() => {
    const filtered =repositories.filter(repo => repo. fevorite);

    document.title = `Você tem ${filtered.length} favoritos`;
  }, [repositories]);

  function handleFavorite( id ){
    const newRepositories = repositories.map(repo => {
      return repo.id === id ? { ...repo, favorite: !repo.favorite } : repo
    });

    setRepositories(newRepositories);
   
  }



 return (
   <>
   <ul>
     { repositories.map(repo => (
        <li key={repo.id}>
          {repo.name}
          &nbsp;
          {repo.favorite && <span> ( Favorito ) </span>}
          
          <button onClick={() => handleFavorite(repo.id)}>Favoritar</button>
          
          </li>
        ))}
   </ul>
   </>
 );
}
