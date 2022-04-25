
import react, { useState } from 'react'

    function App(){

      const [ valor, setValor ] = useState(0);
      const [ user, steUser ] = useState({
        id: 1,
        name: 'João Victor',
        photo: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/User_Circle.png'

      });

      //let valor = 0;

      function funcAumentar(){
        setValor(valor + 1);
        
      }
      function funcDiminuir(){
        setValor(valor - 1);
        
      }

  
        return (
          

            <>
                <div>Quantidade de Produtos no carrinho: <b>{ valor }</b></div>
                <button onClick={funcAumentar}>Adicionar + 1 no carrinho</button>
                <button onClick={funcDiminuir}>Remover - 1 do carrinho</button>
                <hr />

                Nome de usuário: <b>{ user.name }</b><br />
                <img src={ user.photo } />
            </>



        );
}

export default App;

