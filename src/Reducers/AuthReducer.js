

const auth = (state = [], action ) => {

    if(state.length == 0){
        return {
            email: 'teste',
            password: 'teste'
        }
    }

    return state
}

export default auth