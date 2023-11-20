import SingleColor from "./SingleColor"
import { nanoid } from "nanoid"

const ColorList = ({list}) => {

  return (
    <div className="colors">
        {list.map((color, index) => <SingleColor key={nanoid()} color={color} index={index}/>)}
    </div>
  )
}
export default ColorList