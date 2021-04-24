import { useState } from 'react'

export default function Button(props) {
    const [counter, setCounter] = useState(1);

    /** Insere-se duas variáveis para recebimento
     * A primeira variável é a variável que será utilizada como referência no span
     * A segunda variável é a variável que altera ou "seta" o estado da primeira variável
     */

    function incrementCounter(){
        setCounter(counter + 1);
    }

    return (
        <>
            <span> {counter} </span>
            <button onClick={ incrementCounter } > { props.children } </button>
            <br/>   
        </>
    );
}