import React from "react";

export default function Detail ({params}) {
    console.log(params);
    return (
        <div>
            Id del gif: {params.id}
        </div>
    )
}