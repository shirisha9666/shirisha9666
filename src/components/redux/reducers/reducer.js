const INT_STATE = {
    carts: []
}

export const cartreducer = (state = INT_STATE, action) => {
    switch (action.type) {
        case "ADD_CART":
            const ItemIndex = state.carts.findIndex((item) => item.id === action.payload.id)
            if (ItemIndex >= 0) {
                state.carts[ItemIndex].qnty += 1
            }
            else {
                const temp = { ...action.payload, qnty: 1 }
                return {
                    ...state,
                    carts: [...state.carts, temp]
                }
            }

        case "DLT_Cart":
            const dlt = state.carts.filter((el) => el.id !== action.payload)
            return {
                ...state,
                carts: dlt
            }
        case "DEL_ONE":
            const ItemIndex_dec = state.carts.findIndex((iteam) => iteam.id === action.payload.id)
            if (state.carts[ItemIndex_dec].qnty >= 1) {
                const dltitem = state.carts[ItemIndex_dec].qnty -= 1

                console.log([...state.carts, dltitem])
                return {
                    ...state,
                    carts: [...state.carts]
                }
                
            }
            else if(state.carts[ItemIndex_dec].qnty ===1){
                 const data= state.carts.filter((el)=>el.id !== action.payload)   
                 
                 return{
                    ...state,
                    carts:data
                 }
            }



        default:

            return state


    }
}

