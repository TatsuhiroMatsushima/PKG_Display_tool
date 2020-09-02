import React from 'react'

export default function Delete(props) {
    return (
        <div>
            <input
                type='button'
                value='DELETE'
                onClick={() => { props.numberInit() }}
            />
        </div>
    )
}