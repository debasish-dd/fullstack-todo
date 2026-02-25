import React, { useEffect, useState } from "react";
import { Switch } from "@/components/ui/switch";
import KanbanBoard from "./KanbanBoard";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";

import { toast } from "sonner";

function TodoLanding() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Task 1",
      description: "This is task 1",
      status: "todo",
    },
  ]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [status, setStatus] = useState("todo");

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const title = e.target[0].value.trim();
    if (!title) {
      toast.error("Title cannot be empty", { position: "top-center" });
      return;
    }
    const desc = e.target[1].value.trim();
    const status = e.target[2].value;

    const newTask = {
      id: tasks.length + 1,
      title,
      description: desc,
      status,
    };
    setTasks([...tasks, newTask]);
    setOpen(false);
    setTitle("");
    setDesc("");
    setStatus("todo");
    console.log(tasks);

    toast.success("Task added successfully", { position: "top-center" });
  };

  const [editOpen, setEditOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDesc, setEditDesc] = useState("");
  const [editStatus, setEditStatus] = useState("todo");

  const handleEditOpen = (task) => {
    setEditingTask(task);
    setEditTitle(task.title);
    setEditDesc(task.description);
    setEditStatus(task.status);
    setEditOpen(true);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if (!editTitle.trim()) {
      toast.error("Title cannot be empty", { position: "top-center" });
      return;
    }
    setTasks((prev) =>
      prev.map((t) =>
        t.id === editingTask.id
          ? {
              ...t,
              title: editTitle,
              description: editDesc,
              status: editStatus,
            }
          : t,
      ),
    );
    setEditOpen(false);
    toast.success("Task updated", { position: "top-center" });
  };

  return (
    <div
      className={` min-h-screen p-2 ${isDarkMode ? "bg-neutral-800" : "bg-neutral-100"}`}
    >
      <div className="h-fit p-2 flex justify-between items-center m-2">
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

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <button
            className={`w-fit p-3 mx-3 cursor-pointer rounded-md ${isDarkMode ? "bg-purple-600 hover:bg-purple-800 text-white" : "bg-gray-500 hover:bg-gray-700 text-white"}`}
          >
            Add Task
          </button>
        </DialogTrigger>

        <DialogContent
          onPointerDownOutside={(e) => e.preventDefault()}
          className={`${isDarkMode ? "bg-gray-700" : "bg-white text-black"}`}
        >
          <DialogHeader>
            <DialogTitle
              className={`text-2xl font-bold ${isDarkMode ? " text-white" : "text-black"}`}
            >
              Add New Todo
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler}>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border p-2 m-2 w-full rounded"
              placeholder="Enter todo..."
            />
            <textarea
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              className={`border m-2 p-2 w-full rounded ${isDarkMode ? "bg-gray-600 text-white" : "bg-white text-black"}`}
              placeholder="Enter description..."
            ></textarea>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={`border m-2 p-2 w-full rounded ${isDarkMode ? "bg-gray-600 text-white" : "bg-white text-black"}`}
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <button
              type="submit"
              className={`w-fit p-3 m-3 cursor-pointer rounded-md ${isDarkMode ? "bg-green-600 hover:bg-green-800 text-white" : "bg-green-500 hover:bg-green-700 text-white"}`}
            >
              Add
            </button>
          </form>

          <DialogFooter asChild>
            <DialogClose>
              <button
                className={`w-fit p-3 mx-3 cursor-pointer rounded-md ${isDarkMode ? "bg-red-600 hover:bg-red-800 text-white" : "bg-red-500 hover:bg-red-700 text-white"}`}
              >
                Cancel
              </button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog open={editOpen} onOpenChange={setEditOpen}>
        <DialogContent
          onPointerDownOutside={(e) => e.preventDefault()}
          className={`${isDarkMode ? "bg-gray-700" : "bg-white text-black"}`}
        >
          <DialogHeader>
            <DialogTitle
              className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-black"}`}
            >
              Edit Task
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={handleEditSubmit}>
            <input
              value={editTitle}
              onChange={(e) => setEditTitle(e.target.value)}
              className="border p-2 m-2 w-full rounded"
              placeholder="Enter title..."
            />
            <textarea
              value={editDesc}
              onChange={(e) => setEditDesc(e.target.value)}
              className={`border m-2 p-2 w-full rounded ${isDarkMode ? "bg-gray-600 text-white" : "bg-white text-black"}`}
              placeholder="Enter description..."
            />
            <select
              value={editStatus}
              onChange={(e) => setEditStatus(e.target.value)}
              className={`border m-2 p-2 w-full rounded ${isDarkMode ? "bg-gray-600 text-white" : "bg-white text-black"}`}
            >
              <option value="todo">Todo</option>
              <option value="in-progress">In Progress</option>
              <option value="done">Done</option>
            </select>
            <div className="flex gap-2">
              <button
                type="submit"
                className={`p-3 m-2 rounded-md cursor-pointer ${isDarkMode ? "bg-green-600 hover:bg-green-800 text-white" : "bg-green-500 hover:bg-green-700 text-white"}`}
              >
                Save
              </button>
              <DialogClose asChild>
                <button
                  type="button"
                  className={`p-3 m-2 rounded-md cursor-pointer ${isDarkMode ? "bg-red-600 hover:bg-red-800 text-white" : "bg-red-500 hover:bg-red-700 text-white"}`}
                >
                  Cancel
                </button>
              </DialogClose>
            </div>
          </form>
        </DialogContent>
      </Dialog>
      <KanbanBoard
        tasks={tasks}
        setTasks={setTasks}
        isDarkMode={isDarkMode}
        onEdit={handleEditOpen}
      />
    </div>
  );
}

export default TodoLanding;
