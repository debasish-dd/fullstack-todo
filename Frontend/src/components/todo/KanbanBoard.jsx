import React from 'react'

function KanbanBoard({ tasks, setTasks, isDarkMode }) {

  const columns = [
    { label: "Todo", status: "todo" },
    { label: "In Progress", status: "in-progress" },
    { label: "Done", status: "done" },
  ];

   return (
    <div className="flex justify-between p-3 text-center gap-3">
      {columns.map((col) => (
        <div key={col.status} className={` h-[75vh] rounded-lg w-full shadow-lg ${isDarkMode ? "bg-gray-600 " : "bg-gray-200"}`}>
          <h1 className="bg-gray-800 p-2 text-white rounded-t-lg ">{col.label}</h1>
          <div className="p-2 flex flex-col gap-2">
            {tasks
              .filter((t) => t.status === col.status)
              .map((task) => (
                <div key={task.id} className={`p-3 rounded-md shadow-lg cursor-pointer text-left ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-black"}`}>
                  <h2 className="font-bold">{task.title}</h2>
                  <p className="text-sm text-gray-400">{task.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard