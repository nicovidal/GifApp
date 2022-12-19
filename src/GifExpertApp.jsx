import { useState } from 'react';
import { AddCategory ,GifGrid} from './components';


//functional component
export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Shiba']);

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        //se puede llamar de cualquiera de las 2 formas
        setCategories([newCategory, ...categories])
        /* setCategories(cat=>[...cat,'Valorant']) */


    }
    return (
        <div>
             <h1>GifExpertApp</h1>
            <AddCategory
                onNewCategory={(value) => onAddCategory(value)}
            />
            {
                categories.map((category) =>
                    <GifGrid key={category} category={category} />
                )
            }


        </div>
    );
};