import { Fragment } from "react";
import './css/Switch.css'

export default function SwitchButton({...props}){
    return(
<Fragment>
    <label className="Switch">
    <input type="checkbox" {...props} />
    <span className="Slider"/>
    </label>
</Fragment>

    )
}