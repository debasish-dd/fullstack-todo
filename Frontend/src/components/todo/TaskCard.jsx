import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Pencil, Trash2 } from "lucide-react";

function TaskCard({ task, isDarkMode, onDelete, onEdit }) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: task.id, data: { task, status: task.status } });

  const style = {
    transform: CSS.Transform.toString(transform), // use Transform not Translate for sortable
    transition,
    opacity: isDragging ? 0.4 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={`p-3 rounded-md shadow text-left
        ${isDarkMode ? "bg-gray-600 text-white" : "bg-white text-black"}`}
    >
      {/* Drag handle */}
      <div {...listeners} {...attributes} className="cursor-grab active:cursor-grabbing">
        <h2 className="font-bold">{task.title}</h2>
        <p className="text-sm text-gray-400">{task.description}</p>
      </div>

      <div className="flex gap-2 mt-2 justify-end">
        <button onClick={() => onEdit(task)} className="text-blue-400 hover:text-blue-600 cursor-pointer">
          <Pencil size={16} />
        </button>
        <button onClick={() => onDelete(task.id)} className="text-red-400 hover:text-red-600 cursor-pointer">
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
}

export default TaskCard;