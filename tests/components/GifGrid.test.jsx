import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components";
import {useFetchGifs}from '../../src/hooks/useFetchGifs';

//paso 1
jest.mock('../../src/hooks/useFetchGifs');

describe('pruebas en GifGrid', () => { 
    const category='One Punch'

    test('debe de mostarr el loading inicialmente', () => { 
        //paso 2
        useFetchGifs.mockReturnValue({
            images:[],
            isLoading:true
        })

        render(<GifGrid category={category}/>);
        expect(screen.getByText('Cargando....'));
        expect(screen.getByText(category));
        /* screen.debug(); */
     });

     test('Debe de mostrar items cuando se cargan las imagenes useFetchGifs', () => { 
        
        //paso 3
        const gifs=[
        {
            id:'ABC',
            title:'Saitama',
            url:'https://saitama.com'
        },
        {
            id:'ABCD',
            title:'Goku',
            url:'https://Goku.com'
        }
    ]
        useFetchGifs.mockReturnValue({
            images:gifs,
            isLoading:true
        });
        render(<GifGrid category={category}/>);
        expect(screen.getAllByRole('img').length).toBe(2);
        screen.debug();

      });


 });