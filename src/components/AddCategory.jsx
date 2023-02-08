import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    // observar que sólo se obtiene el target con la desestrucuturación (el input enviaba el event)
    // el onChange del input podría ser onChange={ (event) => onInputChange(event) } pero como que el event sól se utiliza para enviarlo se puede dejar como onChange={ onInputChange }
    const onInputChange = ({target}) => {
        setInputValue( target.value );
    }

    const onSubmit = ( event ) => {
        event.preventDefault();
        const newValue = inputValue.trim()
        if(newValue.length <= 1 ) return;

        //setCategories( categories => [ inputValue, ...categories ]);
        onNewCategory( newValue );
        setInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ inputValue }
                onChange={ onInputChange }
            />
        </form>
    
  )
}


