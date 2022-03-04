import { useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

function MyToggle() {
  const [enabled, setEnabled] = useState(false);

  const html = document.querySelector("html");

  return (
    <button
      onClick={() => {
        setEnabled(!enabled);
        html.classList.toggle("dark");
      }}
    >
      {enabled ? <MdDarkMode className='text-4xl fill-sky-600' /> : <MdLightMode className='text-4xl fill-yellow-400' />}
    </button>
  );
}

export default MyToggle;
