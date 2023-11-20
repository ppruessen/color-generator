import { useState } from "react";
import ColorList from "./ColorList";
import Form from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';

const App = () => {
  const [colors, setColors] = useState(new Values('#f15025').all(10));

  const addToList = (color) => {
    try {
      setColors(new Values(color).all(10));
    } catch (error) {
      toast.error(error.message);
    }
  }

  return <div>
      <Form addToList={addToList} />
      <ColorList list={colors} />
      <ToastContainer position="top-center" />
    </div>
};
export default App;
