import { useDroppable } from "@dnd-kit/core";
import { SortableContext, verticalListSortingStrategy } from "@dnd-kit/sortable";
import TaskCard from "./TaskCard";

function KanbanColumn({ label, status, tasks, isDarkMode, onDelete, onEdit }) {
  const { setNodeRef, isOver } = useDroppable({ id: status });

  return (
    <div
      className={` h-[75vh] w-full shadow-lg rounded-t-lg flex flex-col 
        ${isDarkMode ? "bg-gray-700 " : "bg-orange-50"}
        ${isOver ? " bg-orange-300/50 border-2" : ""}`}
    >
      <h1 className="bg-gray-800 shrink-0 p-2 text-white rounded-t-lg">{label}</h1>
      <div ref={setNodeRef} className="p-2 flex flex-col gap-2 flex-1 overflow-y-auto no-scrollbar">
        
        <SortableContext items={tasks.map((t) => t.id)} strategy={verticalListSortingStrategy}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              isDarkMode={isDarkMode}
              onDelete={onDelete}
              onEdit={onEdit}
            />
          ))}
        </SortableContext>
      </div>
    </div>
  );
}

export default KanbanColumn;