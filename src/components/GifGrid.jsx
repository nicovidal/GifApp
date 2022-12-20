import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropTypes from 'prop-types';



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

GifGrid.protoTypes={
    category:PropTypes.string.isRequired,
}
