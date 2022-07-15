import {getContrastYIQ} from '../helpers'
function Copied ({color}){
    return (
        <div className="copied" style={{'--bgColor' :`#${color}`, '--textColor': `${getContrastYIQ(color)}`}}>
            Copied #{color} to clipboard
        </div>
    )
}
export default Copied