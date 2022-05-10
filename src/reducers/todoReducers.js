const initialData = {
    list : []
}

const todoReducers = (state = initialData, action) => {
    switch(action.type){
        case "ADD_TODO": 

        const {id , data} = action.payload;

        return{
            ...state,
            list:[
                ...state.list, 
                {
                    data:data,
                    id:id

                 }
             ]
        }
        default: return state;
    }
}

export default todoReducers;