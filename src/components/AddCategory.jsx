import { useState } from 'react';

//usualmente se tiene el props , pero usualmente se desestrucutra 
/* lo que se necesita */

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('')
    //puede ser con event o desestructurarlo y solo ocupar el {target}
    const onInputChange = ({ target }) => {
        /* console.log(target.value); */
        setInputValue(target.value);
    }
    const onSubmit =(event)=>{
        // eveitar que se refresque la pagina.
        event.preventDefault();
        /* console.log(inputValue) */
        //evitar que hallan caracteres vacios
        if(inputValue.trim().length<=1)return;
      /*   setCategories((categories)=>[inputValue,...categories]); */
        onNewCategory(inputValue.trim());
        setInputValue('');
    }
    return (
        //aqui la funcion onSubit se puede minorizar puede ser asi 
        //onSubmit={(event)=>onSubmit(event)}
        <form onSubmit={ onSubmit }>
            <input
                //son propertis
                type="text"
                placeholder="Buscar Gif"
                value={inputValue}
                /* onChange={ (event)=>onInputChange(event) } */
                onChange={onInputChange}
            />
        </form>
    )
}
