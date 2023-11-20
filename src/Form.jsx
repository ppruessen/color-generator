import { useState } from "react"

const Form = ({addToList}) => {
    const [color, setColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        addToList(color);

    }

    const handleChange = (e) => {
        setColor(e.target.value);
    }

  return (
    <section className="container">
        <h4>color generator</h4>
        <form className="color-form" onSubmit={handleSubmit}>
            <input type="color" id="color" name="color" onChange={handleChange} value={color}/>
            <input type="text" id="color-text" name="color-text" onChange={handleChange} value={color} placeholder="#f15025"/>
            <button type="submit" className="btn"style={{ background: color}} >Submit</button>
        </form>
    </section>
  )
}
export default Form