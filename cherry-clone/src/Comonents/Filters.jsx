import React from 'react'
import "../App.css"
export const Filters = ({filter,currentFilterBy,updateFilter}) => {
  return (
    <div className="container restaurants">
    <h1>50 restaurants</h1>
    <div className="restaurant-options">
        {Object.entries(filter).map(([key,value])=>(
            <div key={key}
            // onClick={updateFilter(key)}
          onClick={()=>updateFilter(key)}
             className={`restaurant-option  ${currentFilterBy==key ? "bottomline":""}`}
             >
            {value}
          
        </div>
        ))}
    </div>
</div>
  )
}
