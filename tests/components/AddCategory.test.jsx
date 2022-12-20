import { fireEvent, render,screen } from "@testing-library/react";
import { AddCategory } from "../../src/components/AddCategory";

describe('Pruebas en <AddCategory/>', () => { 
    test('debe cambiar el valor de la caja de texto', () => { 
        render(<AddCategory onNewCategory={()=>{}}/>);
        //para disparar un evento
        const input=screen.getByRole('textbox');

        fireEvent.input(input,{target:{value:'Saitama'}});
        
        expect(input.value).toBe('Saitama');
        screen.debug(); 
     });

     test('debe de llamar onNewCategory si el input eien un valor', () => { 

        const inputValue ='Saitama';
        const onNewCategory=jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input,{target:{value:inputValue}});
        //hacer submit a un form
        fireEvent.submit(form);

        expect(input.value).toBe('')

        expect(onNewCategory).toHaveBeenCalled();
        expect(onNewCategory).toHaveBeenCalledTimes(1)
        expect(onNewCategory).toHaveBeenCalledWith(inputValue);
      });

      test('No debe de llamar el onNewCategory si el input esta vacio', () => { 
        //sujeto de prueba
        const onNewCategory=jest.fn();
        render(<AddCategory onNewCategory={onNewCategory}/>);
        const form = screen.getByRole('form');
        fireEvent.submit(form);
        //no se llamo la funcion
        expect(onNewCategory).toHaveBeenCalledTimes(0);
        expect(onNewCategory).not.toHaveBeenCalled();



       });
       
       
 });