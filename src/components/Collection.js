import {useParams} from 'react-router-dom'
import Search from './Search'
import Download from './Download'
import LazyLoad from 'react-lazyload'
import Brand from './Brand'
import { useContext, useEffect, useState } from 'react'
import MainContext from '../MainContext'

function Collection(){
    const {slug} = useParams()
    const {setSelected,selected,brands} = useContext(MainContext)

    
    
    return (
        <div className="content">
            <header className="header">
                <Search />
                {selected.length !== 0 && <Download/> }
            </header>
            <section className="brands">
                <LazyLoad key={brands.slug} once={true} overflow={true} placeholder="Yukleniyor...">
                    {brands.map(brand => (
                        <Brand brand={brand} />
                    ))}
                </LazyLoad>
            </section>
        </div>
    )
}

export default Collection