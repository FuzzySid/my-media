import React from 'react';
import randomTextColor from './HOC/randomTextColor';

const Posts=()=>{
 
    return(
        <div className="container">
            <h1 className="center">
                Inside the Posts section
            </h1>
        </div>
    )
}

export default randomTextColor(Posts);