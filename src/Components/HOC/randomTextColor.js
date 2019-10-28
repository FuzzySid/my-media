import React from 'react';

const randomTextColor=(WrappedComponent)=>{
    var colorsArr=['red','blue','yellow','green','grey'];
    var randomInd=Math.max(0,Math.round(Math.random()*colorsArr.length-1))
    var random= colorsArr[randomInd]
    var Class=random+'-text';
    console.log(randomInd);
    console.log(Class);
    return(props)=>{
        return(
        <div className={Class}>
            <WrappedComponent {...props} />
        </div>
        )
        }
}

export default randomTextColor;