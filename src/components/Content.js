import { useContext } from "react";
import Search from "./Search";
import Brand from "./Brand";
import MainContext from "../MainContext";
import LazyLoad from 'react-lazyload';
import Download from "./Download";


function Content() {
    const { brands,selected } = useContext(MainContext)
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

export default Content