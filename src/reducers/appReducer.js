const initState={
    comments: [
        {id:'1', email:'jimmy@james.com', body:'Some super cool stuff I just discovered'},
        {id:'2', email:'sadhash@kaafiSad.com', body:'amazon is the biggest rainforest in the world, right?'},
        {id:'3', email:'gogli@goggles.com', body:'Cant stop wondering where the stars go in the morning'},
        {id:'4', email:'fuzzysid@fuzzy.com', body:'boring stuff'}
    ]
}


const appReducer=(state=initState,action)=>{
    if(action.type==='DELETE_COMMENT'){
        let newComments=state.comments.filter(comment=>{
            return action.id!=comment.id
        })
        return{
            ...state,
            comments: newComments
        }
    }
    return state;
}

export default appReducer;