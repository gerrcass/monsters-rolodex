import React from 'react'
import styles from './select-image-set.module.css'

const SelectImageSet = ({imageSet,onImageSetChange,imageSetAvailable}) => {
    
    return (
        <div>
            {/* <label>
                Pick your favorite Image Set:
            </label> */}
            <select className={styles['select-css']} value={imageSet} onChange={onImageSetChange}>
                {/* <option value={valueSet[0]}>{valueSet[0].title}</option>
                <option value={valueSet[1]}>{valueSet[1].title}</option> */}
                {
                    imageSetAvailable.map((item,i) => (
                        <option key={i} value={item.image}>{item.label}</option>
                    ))
                }
{/*                 <option value="set3">Disembodied Heads</option>
                <option value="set4">Beautiful Kittens</option>
                <option value="set5">Humans Technicians</option>
                <option value="any">Any</option>
 */}            </select>
        </div>
    )
}

export default SelectImageSet