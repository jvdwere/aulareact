import {useState} from 'react';


function App() {
  const [title, setTitle] = useState('Hello World');  // constate, desestruturada com uma [ARREY], passando o title e o setTitle(variaveis q serão recebidas) e vamos receber do useState
                                                      // o useState e uma função q retorna dois valores primarios                                
                                                      // title é a variavel em si q armazena o valor do estado
                                                      // setTitle é a funcão q vai "alterar" o valor dessa variavel
                                                      // o React faz um algoritimi de reconciliação, q visa ter mais performance,q ao invez de alterar o valor de title, ele cria uma var nova e subistitue por ela
                                                      // por isso q conseguimos "alterar" title msm ele sendo uma contante 
  const [showContent, setShowContent] = useState(false);

  
  function handleTitle(){                                                    
    setTitle('Estado modificado');

  }

  function handleContent(){
    setShowContent(!showContent);

  }
 
  return (                                                                   
    <div>                              
      <h1>{ title }</h1>
      {showContent && <ExclusiveContent showContent={showContent}  />}
      <button onClick={handleContent}>{showContent ? 'Clique aqui para esconder o conteúdo' : 'Clique aqui para exibir o conteúdo' }</button>]
      &nbsp;
      <button onClick={handleTitle}>Alterar o Título</button>
    </div>
  );
}

function ExclusiveContent(props) {
  return (
    <div>
      {props.showContent && <h2>Obrigado</h2>}
    </div>
  )

}

/*
function App() {
  let title = 'Hello World';
                              forma comum de se exibir uma informação, de forma dinamica.
  return (                    vatiaveis normalmente desaparecem quando a função sai da tela.            
    <div>                     porem variaveis de estado são conservadar pelo react     
      <h1>{ title }</h1>           
    </div>                                                         
  );
}
*/
  

export default App;
