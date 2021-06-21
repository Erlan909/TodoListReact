import React from 'react'

export default function Header() {
    return (
        <div>
            <h2>Todo</h2>
        </div>
    )
}
// {data? data.slice(0).reverse().map((el, index)=>{
//     return(
//         <div key={index} style={el.status == 'new' ? {backgroundColor:'red'}: el.status == 'process' ? {backgroundColor:'yellow'}:{backgroundColor:'green'}}>
//         <h2>Namee Task{el.name}</h2>
//         <Button onClick={()=>del(el.id)}> <DeleteIcon variant="outlined" color="primary" /></Button>
//         {
//             el.status !=='finish' && <Button onClick={()=>status(el.id ,el.status)} variant="contained" color="secondary">{el.status == 'new'? 'in process': el.status=='process'? 'finish': null}</Button>

//         }