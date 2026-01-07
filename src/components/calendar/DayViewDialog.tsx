import { useState } from 'react';
import { format } from 'date-fns';
import { X, CheckCircle, Circle, Trash2, Plus } from 'lucide-react';
import { useCalendar, type TaskType } from '../../context/CalendarContext';

interface DayViewDialogProps {
    date: Date;
    isOpen: boolean;
    onClose: () => void;
}

const DayViewDialog = ({ date, isOpen, onClose }: DayViewDialogProps) => {
    const { tasks, addTask, deleteTask, toggleTaskCompletion } = useCalendar();
    const [newTaskTitle, setNewTaskTitle] = useState('');
    const [newTaskType, setNewTaskType] = useState<TaskType>('todo');

    if (!isOpen) return null;

    const dayTasks = tasks.filter((t) => t.date === format(date, 'yyyy-MM-dd'));

    const handleAddTask = (e: React.FormEvent) => {
        e.preventDefault();
        if (!newTaskTitle.trim()) return;

        addTask({
            title: newTaskTitle,
            date: format(date, 'yyyy-MM-dd'),
            completed: false,
            type: newTaskType,
        });
        setNewTaskTitle('');
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="w-full max-w-md bg-[#0a0a0a] border border-[#333] shadow-2xl rounded-lg overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="p-4 border-b border-[#333] flex justify-between items-center bg-[#111]">
                    <h2 className="text-lg font-mono font-bold text-white">
                        {format(date, 'EEEE, MMMM do')}
                    </h2>
                    <button onClick={onClose} className="text-text-secondary hover:text-white transition-colors">
                        <X className="w-5 h-5" />
                    </button>
                </div>

                {/* Task List */}
                <div className="p-4 max-h-[60vh] overflow-y-auto space-y-2">
                    {dayTasks.length === 0 && (
                        <div className="text-center py-8 text-text-secondary text-sm font-mono opacity-50">
                            No tasks for this day.
                        </div>
                    )}

                    {dayTasks.map(task => (
                        <div key={task.id} className="group flex items-center gap-3 p-3 rounded bg-[#151515] border border-transparent hover:border-[#333] transition-colors">
                            <button
                                onClick={() => toggleTaskCompletion(task.id)}
                                className={`transition-colors ${task.completed ? 'text-accent-orange' : 'text-text-secondary hover:text-white'}`}
                            >
                                {task.completed ? <CheckCircle className="w-5 h-5" /> : <Circle className="w-5 h-5" />}
                            </button>

                            <span className={`flex-1 text-sm ${task.completed ? 'opacity-50 line-through' : ''}`}>
                                {task.title}
                            </span>

                            <div className={`
                         text-[10px] uppercase font-bold px-1.5 py-0.5 rounded
                         ${task.type === 'deadline' ? 'bg-red-500/20 text-red-500' : ''}
                         ${task.type === 'event' ? 'bg-blue-500/20 text-blue-500' : ''}
                         ${task.type === 'todo' ? 'bg-green-500/20 text-green-500' : ''}
                    `}>
                                {task.type}
                            </div>

                            <button
                                onClick={() => deleteTask(task.id)}
                                className="opacity-0 group-hover:opacity-100 text-text-secondary hover:text-red-500 transition-all ml-2"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    ))}
                </div>

                {/* Add Task Form */}
                <form onSubmit={handleAddTask} className="p-4 border-t border-[#333] bg-[#111]">
                    <div className="flex gap-2 mb-2">
                        <input
                            type="text"
                            value={newTaskTitle}
                            onChange={(e) => setNewTaskTitle(e.target.value)}
                            placeholder="Add a new task..."
                            className="flex-1 bg-[#1a1a1a] border border-[#333] rounded px-3 py-2 text-sm text-white focus:outline-none focus:border-accent-orange transition-colors"
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex gap-1">
                            {(['todo', 'deadline', 'event'] as TaskType[]).map(type => (
                                <button
                                    key={type}
                                    type="button"
                                    onClick={() => setNewTaskType(type)}
                                    className={`
                                textxs px-2 py-1 rounded capitalize font-mono text-[10px] border transition-colors
                                ${newTaskType === type
                                            ? 'bg-accent-orange text-white border-accent-orange'
                                            : 'bg-[#1a1a1a] text-text-secondary border-[#333] hover:border-gray-500'
                                        }
                            `}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                        <button
                            type="submit"
                            disabled={!newTaskTitle.trim()}
                            className="flex items-center gap-1 bg-white text-black px-3 py-1.5 rounded text-xs font-bold font-mono tracking-wide hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                        >
                            <Plus className="w-3 h-3" />
                            ADD
                        </button>
                    </div>
                </form>

            </div>
        </div>
    );
};

export default DayViewDialog;
