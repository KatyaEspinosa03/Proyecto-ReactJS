
import React from 'react'

const ItemListContainer = ({message}) => {
    return (
    <section className='container'>
        <div className='row'>
            <div className="col-md-12 text-center mensaje">
                {message}
            </div>
        </div>
    </section>
    )
}

export default ItemListContainer