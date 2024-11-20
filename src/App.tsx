// App.tsx
import React from "react";
import Button from "./components/Button";
import { FaTimes } from "react-icons/fa";

const App = () => {
  return (
    <div className="flex flex-col items-center gap-4 p-10">
      <h1 className="text-xl font-bold">Button Component Demo</h1>

      <Button label="Error" backgroundColor="blue" size="medium" icon={<FaTimes />} iconPosition="right" tooltip="This button indicates an error" tooltipPosition="top" />
    </div>
  );
};

export default App;
