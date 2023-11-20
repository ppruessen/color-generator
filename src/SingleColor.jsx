import { toast } from "react-toastify";

const SingleColor = ({color, index}) => {
    const { hex, weight} = color;

    const saveToClipboard = async() => {
        if(navigator.clipboard) {
            try {
                await navigator.clipboard.writeText(`#${hex}`);
                toast.success(`#${hex} copied to clipboard`);
            } catch (error) {
                toast.error(error.message);
            }
        } else {
            toast.error("Clipboard not available");
        }
    }

  return (
    <article onClick={saveToClipboard} className={index > 10 ? 'color color-light' : ' color'} style={{background: `#${hex}`}}>
        <p className="percent-value">{weight} %</p>
        <p className="color-value">#{hex}</p>
    </article>
  )
}
export default SingleColor