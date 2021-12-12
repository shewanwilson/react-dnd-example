import React from 'react'
import { useDrag } from "react-dnd";


function Picture({url, id}) {
    const [{isDragging}, drag] = useDrag(() => ({
        type: "image",
        item: {id: id},
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        })
    }))

    console.log(isDragging);
    console.log(drag);

    return <img

             ref={drag}
             src={url}
             width="150px"
             height="150px"
             style={{border: isDragging ? "5px solid pink" : "0px"}}
             
             />;

}

export default Picture
