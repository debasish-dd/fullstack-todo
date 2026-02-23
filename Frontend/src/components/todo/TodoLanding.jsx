import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";

function TodoLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div
      className={` min-h-screen p-2 ${isDarkMode ? "bg-neutral-800" : "bg-neutral-100"}`}
    >
      <div className="h-fit flex justify-between items-center m-2">
        <div className="bg-amber-700 w-10 h-10 md:w-13 md:h-13 rounded-full  ">
          {/* profile picture  */}
        </div>

        <Switch
          checked={isDarkMode}
          onCheckedChange={toggleDarkMode}
          size="lg"
          className=" h-8 w-14 
                data-[state=checked]:bg-purple-600 
                data-[state=unchecked]:bg-gray-500
                [&>span]:h-7 [&>span]:w-7 hover:cursor-pointer"
        />
      </div>

    {/* board layout  */}
    {/* <div className="border border-amber-100 min-h-2/3 w-full">

    </div> */}

    
    </div>
  );
}

export default TodoLanding;
