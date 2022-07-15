import { useContext, useState } from "react";
import {getContrastYIQ} from '../helpers'
import MainContext from "../MainContext";
import ClipboardButton from "react-clipboard.js";


function Brand({brand}) {
    const {selected,setSelected,setCopied} = useContext(MainContext)
    const toggleSelected = () => {
        if(selected.includes(brand.slug)){
            setSelected(selected.filter(slug    => slug !== brand.slug))
        }else {
            setSelected([...selected,brand.slug])
        }
    }
    const setColor = (color) => {
        setCopied(color)
    }
    return(
        <div className={`brand ${selected.includes(brand.slug) ? 'selected' : ''}`}>
            <h5 onClick={toggleSelected}>{brand.title}</h5>
            <div className="brand-colors">
                {brand.colors.map(color => (
                    <ClipboardButton data-clipboard-text={color} onSuccess={() => setColor(color)} component="span" style={{'--bgColor':`#${color}`,'--textColor': `${getContrastYIQ(color)}`}}>{color}</ClipboardButton>
                ))}
            </div>
        </div>
    )
}

export default Brand