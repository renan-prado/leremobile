

const auth = (state = [], action ) => {

    if(state.length == 0){
        return {
            email: 'teste',
            password: 'teste'
        }
    }

    if(action.type == 'editEmail'){
        return {
            ...state,
            email: action.payload.email
        }
    }

    return state
}

export default auth