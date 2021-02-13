import React from 'react'
import { useParams } from 'react-router-dom'


function EditShipping() {

    const { tracking } = useParams()


    return (
        <div>
            <b>id : {tracking}</b>
        </div>
    )
}

export default EditShipping
