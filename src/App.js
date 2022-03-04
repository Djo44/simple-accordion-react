import { useState } from "react";
import data from "./data";
import Accordion from "./components/Accordion";
import MyToggle from "./components/ToggleButton";

function App() {
  const [podaci, setPodaci] = useState(data);

  console.log();

  return (
    <section className=' dark:bg-gray-900 bg-slate-200 min-h-screen '>
      <div className='container max-w-4xl px-6 py-10 mx-auto '>
        <div className='w-full flex justify-end'>
          <h1 className='text-4xl font-semibold text-center text-gray-800 dark:text-white mx-auto uppercase'>Frequently asked questions</h1>

          <MyToggle className='' />
        </div>
        {podaci.map((item) => {
          return <Accordion key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

export default App;
