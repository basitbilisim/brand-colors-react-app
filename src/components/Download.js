import { useContext, useEffect, useState } from "react"
import MainContext from "../MainContext"
import { GrLink, GrDownload, GrClose } from "react-icons/gr";
function Download() {
    const { selected, brands, setSelected } = useContext(MainContext)
    const [downloadUrl, setDownloadUrl] = useState()
    const [cssMethod, setCssMethod] = useState('css')
    useEffect(() => {
        if (selected.length > 0) {
            let output = ''
            switch (cssMethod) {
                case 'css':
                    selected.map(slug => {
                        let brand = brands.find(brand => brand.slug == slug)
                        brand.colors.map((color, key) => {
                            output += `--${slug}-${key}: #${color}\n`
                        })
                    })
                    break;
                case 'scss':
                    selected.map(slug => {
                        let brand = brands.find(brand => brand.slug == slug)
                        brand.colors.map((color, key) => {
                            output += `\$${slug}-${key}: #${color}\n`
                        })
                    })
                    break;
            }

            const blob = new Blob([output])
            const url = URL.createObjectURL(blob)
            setDownloadUrl(url)
            return () => {
                URL.revokeObjectURL(url)
                setDownloadUrl('')

            }
        }
    }, [selected, cssMethod])
    const getLink = () => {
        prompt('here\'s the URL to share', `http://localhost:3000/collection/${selected.join(',')}`)
    }
    return (
        <div className="download">
            <div className="actions">
                <select onChange={(e) => setCssMethod(e.target.value)}>
                    <option value="css">CSS</option>
                    <option value="scss">SCSS</option>
                </select>
                <a download={`brands.${cssMethod}`} href={downloadUrl}><GrDownload /></a>

                <button onClick={getLink}><GrLink /></button>
            </div>
            <div className="selected" onClick={() => setSelected([])}>
                <GrClose />
                {selected.length} brands collected
            </div>
        </div>
    )
}

export default Download