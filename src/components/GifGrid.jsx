import { useEffect,useState} from 'react';
import {getGifs}from '../helpers/getGifs'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';




export const GifGrid = ({ category }) => {

    const { images,isLoading}=useFetchGifs(category);


  /*   const [images, setImages] = useState([]);

    const getImages=async()=>{
        const newImages=await getGifs(category);
        setImages(newImages);
    }
    useEffect(()=>{
        getImages();
    },[ ]) *///dependencias
    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading &&(<h1>Cargando....</h1>)
            }

            <div className="card-grid ">
                {   
                    //se puede destructurar y no poner el image title={image.title}
                        //url={image.url}
                    images.map((image)=>(
                        <GifItem key={image.id}
                        {...image}/>
                    ))
                }
                   
            </div>
        </div>
    )
}
