import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';




export const GifGrid = ({ category }) => {

    const { images,isLoading}=useFetchGifs(category);

    return (
        <div>
            <h3>{category}</h3>
            {
                isLoading &&(<h1>Cargando....</h1>)
            }

            <div className="card-grid ">
                {   

                    images.map((image)=>(
                        <GifItem key={image.id}
                        {...image}/>
                    ))
                }
                   
            </div>
        </div>
    )
}
