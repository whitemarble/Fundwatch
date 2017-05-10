const initialState = {
    text:"123"
}

const MyButtonReducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case 'C':
        return {
            text: action.payload
        };
        default:
        return state;
    }
    
}

export default MyButtonReducer