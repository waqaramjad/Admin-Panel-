import ActionTypes from '../constant/constant';

const INITIAL_STATE = {
    userName: 'waqar' , 
    currentUserData : {} , 
    POSTS : []

  
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

      
        case ActionTypes.CURRENTUSERDATA:
        console.log(action.payload)
            return ({
                ...state,
                currentUserData: action.payload
            })
       
     
        case ActionTypes.getDataByAdmin:
        // case 'getAddsDataBySt':
        console.log(action.payload)
            return ({
                ...state,
                getDataByAdmin: action.payload
            })
        case ActionTypes.DeleteHandler:
        // case 'getAddsDataBySt':
        console.log(action.payload)
            return ({
                ...state,
                DeleteHandler: action.payload
            })
        case ActionTypes.POSTS:
        // case 'getAddsDataBySt':
        console.log(action.payload)
            return ({
                ...state,
                POSTS: action.payload
            })
        
                
            default:
            return state;
    }

}