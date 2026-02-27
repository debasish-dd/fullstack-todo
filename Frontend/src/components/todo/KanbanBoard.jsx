import { DndContext, DragOverlay, pointerWithin } from "@dnd-kit/core";
import { arrayMove } from "@dnd-kit/sortable";
import { useState } from "react";
import KanbanColumn from "./KanbanColumn";
import TaskCard from "./TaskCard";
import { toast } from "sonner";



const COLUMNS = [
  { label: "Todo", status: "todo" },
  { label: "In Progress", status: "in-progress" },
  { label: "Done", status: "done" },
];

function KanbanBoard({ tasks, setTasks, isDarkMode, onEdit }) {
  const [activeTask, setActiveTask] = useState(null);

  const handleDragStart = (event) => {
    const task = tasks.find((t) => t.id === event.active.id);
    setActiveTask(task);
  };

  const handleDragOver = (event) => {
    const { active, over } = event;
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeTask = tasks.find((t) => t.id === activeId);
    const overTask = tasks.find((t) => t.id === overId);

    const overColumnId = overTask ? overTask.status : overId;

    if (activeTask.status !== overColumnId) {
      setTasks((prev) =>
        prev.map((t) =>
          t.id === activeId ? { ...t, status: overColumnId } : t,
        ),
      );
    }
  };

  const handleDragEnd = (event) => {
    const { active, over } = event;
    setActiveTask(null);
    if (!over) return;

    const activeId = active.id;
    const overId = over.id;
    if (activeId === overId) return;

    const activeTask = tasks.find((t) => t.id === activeId);
    const overTask = tasks.find((t) => t.id === overId);

    if (overTask && activeTask.status === overTask.status) {
      setTasks((prev) => {
        const columnTasks = prev.filter((t) => t.status === activeTask.status);
        const otherTasks = prev.filter((t) => t.status !== activeTask.status);

        const oldIndex = columnTasks.findIndex((t) => t.id === activeId);
        const newIndex = columnTasks.findIndex((t) => t.id === overId);

        return [...otherTasks, ...arrayMove(columnTasks, oldIndex, newIndex)];
      });
    }
  };

  const handleDelete = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
    toast.success("Task deleted", { position: "top-center" });
  };

  return (
    <DndContext
      collisionDetection={pointerWithin}
      onDragStart={handleDragStart}
      onDragOver={handleDragOver}
      onDragEnd={handleDragEnd}
    >
      <div className="flex justify-between p-3 gap-3">
        {COLUMNS.map((col) => (
          <KanbanColumn
            key={col.status}
            label={col.label}
            status={col.status}
            tasks={tasks.filter((t) => t.status === col.status)}
            isDarkMode={isDarkMode}
            onDelete={handleDelete}
            onEdit={onEdit}
          />
        ))}
      </div>

      <DragOverlay>
        {activeTask && <TaskCard task={activeTask} isDarkMode={isDarkMode} />}
      </DragOverlay>
    </DndContext>
  );
}

export default KanbanBoard;
