import { useState } from "react";
import { CategoryInput,GifGrid } from "./Components";

export const GifExpertApp = () => {
      const [categories, setCategories] = useState(["Spy x Family"]);

      const addCategories = (categoryName)=>{
        if( categories.includes(categoryName) ) return 
        setCategories([categoryName,...categories]);
      }

  return (
    <>
        <h1>Gift Expert App</h1>
        <CategoryInput onAddCategory = { addCategories }/>
        {
          categories.map(category =>(
            <GifGrid 
                key={category}
                category={category}/>
                )
              )
        }
            
    </>
  )
}
