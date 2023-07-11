export const ADD=(item)=>{
    return{
        type:"ADD_CART",
        payload:item
    }
}

// Delate

export const DLT =(id)=>{
    return{
        type:"DLT_Cart",
        payload:id
    }

}

export const RMV=(item)=>{
    return{
        type:"DEL_ONE",
        payload:item
    }
}