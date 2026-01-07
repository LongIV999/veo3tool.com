import React, { createContext, useContext, useEffect, useState } from 'react';

export type TaskType = 'todo' | 'deadline' | 'event';

export interface Task {
    id: string;
    title: string;
    date: string; // ISO date string YYYY-MM-DD
    completed: boolean;
    type: TaskType;
    description?: string;
}

export interface Note {
    id: string;
    title: string;
    content: string;
    date: string; // ISO date string or timestamp
    tags?: string[];
}

interface CalendarContextType {
    tasks: Task[];
    notes: Note[];
    addTask: (task: Omit<Task, 'id'>) => void;
    updateTask: (id: string, updates: Partial<Task>) => void;
    deleteTask: (id: string) => void;
    toggleTaskCompletion: (id: string) => void;
    addNote: (note: Omit<Note, 'id' | 'date'>) => void;
    updateNote: (id: string, updates: Partial<Note>) => void;
    deleteNote: (id: string) => void;
}

const CalendarContext = createContext<CalendarContextType | undefined>(undefined);

export const CalendarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [tasks, setTasks] = useState<Task[]>(() => {
        const saved = localStorage.getItem('longbest_calendar_tasks');
        return saved ? JSON.parse(saved) : [];
    });

    const [notes, setNotes] = useState<Note[]>(() => {
        const saved = localStorage.getItem('longbest_calendar_notes');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('longbest_calendar_tasks', JSON.stringify(tasks));
    }, [tasks]);

    useEffect(() => {
        localStorage.setItem('longbest_calendar_notes', JSON.stringify(notes));
    }, [notes]);

    const addTask = (task: Omit<Task, 'id'>) => {
        const newTask: Task = {
            ...task,
            id: crypto.randomUUID(),
        };
        setTasks((prev) => [...prev, newTask]);
    };

    const updateTask = (id: string, updates: Partial<Task>) => {
        setTasks((prev) => prev.map((t) => (t.id === id ? { ...t, ...updates } : t)));
    };

    const deleteTask = (id: string) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    };

    const toggleTaskCompletion = (id: string) => {
        setTasks((prev) =>
            prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
        );
    };

    const addNote = (note: Omit<Note, 'id' | 'date'>) => {
        const newNote: Note = {
            ...note,
            id: crypto.randomUUID(),
            date: new Date().toISOString(),
        };
        setNotes((prev) => [...prev, newNote]);
    };

    const updateNote = (id: string, updates: Partial<Note>) => {
        setNotes((prev) => prev.map((n) => (n.id === id ? { ...n, ...updates } : n)));
    };

    const deleteNote = (id: string) => {
        setNotes((prev) => prev.filter((n) => n.id !== id));
    };

    return (
        <CalendarContext.Provider
            value={{
                tasks,
                notes,
                addTask,
                updateTask,
                deleteTask,
                toggleTaskCompletion,
                addNote,
                updateNote,
                deleteNote,
            }}
        >
            {children}
        </CalendarContext.Provider>
    );
};

export const useCalendar = () => {
    const context = useContext(CalendarContext);
    if (context === undefined) {
        throw new Error('useCalendar must be used within a CalendarProvider');
    }
    return context;
};
