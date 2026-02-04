import { useState } from 'react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    isToday
} from 'date-fns';
import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from '../ui/icons';
import { useCalendar } from '../../context/CalendarContext';
import DayViewDialog from './DayViewDialog';

const MonthView = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const { tasks } = useCalendar();

    const monthStart = startOfMonth(currentDate);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const calendarDays = eachDayOfInterval({
        start: startDate,
        end: endDate,
    });

    const nextMonth = () => setCurrentDate(addMonths(currentDate, 1));
    const prevMonth = () => setCurrentDate(subMonths(currentDate, 1));
    const goToToday = () => setCurrentDate(new Date());

    const getTasksForDay = (date: Date) => {
        return tasks.filter((task) => isSameDay(new Date(task.date), date));
    };

    const handleDayClick = (date: Date) => {
        setSelectedDate(date);
        setIsDialogOpen(true);
    };

    return (
        <div className="flex flex-col h-full">
            {/* Header */}
            <header className="flex items-center justify-between p-6 border-b border-[#333]">
                <div className="flex items-center gap-4">
                    <h1 className="text-2xl font-bold font-mono tracking-tight">
                        {format(currentDate, 'MMMM yyyy')}
                    </h1>
                    <div className="flex items-center bg-[#1a1a1a] rounded-md border border-[#333]">
                        <button onClick={prevMonth} className="p-2 hover:bg-[#333] transition-colors rounded-l-md">
                            <ChevronLeftIcon className="w-4 h-4" />
                        </button>
                        <button onClick={goToToday} className="px-3 py-1 text-xs border-x border-[#333] hover:bg-[#333] transition-colors">
                            Today
                        </button>
                        <button onClick={nextMonth} className="p-2 hover:bg-[#333] transition-colors rounded-r-md">
                            <ChevronRightIcon className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </header>

            {/* Weekday Headers */}
            <div className="grid grid-cols-7 border-b border-[#333]">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
                    <div key={day} className="p-4 text-center text-xs font-mono text-text-secondary uppercase tracking-widest border-r border-[#333] last:border-r-0">
                        {day}
                    </div>
                ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 flex-1 auto-rows-fr bg-[#0a0a0a]">
                {calendarDays.map((day) => {
                    const dayTasks = getTasksForDay(day);
                    const isCurrentMonth = isSameMonth(day, monthStart);
                    const isCurrentDay = isToday(day);

                    return (
                        <div
                            key={day.toString()}
                            onClick={() => handleDayClick(day)}
                            className={`
                min-h-[120px] p-2 border-b border-r border-[#333] relative group transition-colors hover:bg-[#151515] cursor-pointer
                ${!isCurrentMonth ? 'bg-[#050505] text-[#333]' : ''}
              `}
                        >
                            <div className="flex justify-between items-start mb-2">
                                <span className={`
                    text-sm font-mono p-1 rounded-sm w-7 h-7 flex items-center justify-center
                    ${isCurrentDay ? 'bg-accent-orange text-white' : ''}
                 `}>
                                    {format(day, 'd')}
                                </span>

                                {/* Quick Add Button (Visible on Hover) */}
                                <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-[#333] rounded text-text-secondary transition-all">
                                    <PlusIcon className="w-3 h-3" />
                                </button>
                            </div>

                            <div className="space-y-1">
                                {dayTasks.map((task) => (
                                    <div
                                        key={task.id}
                                        className={`
                            px-2 py-1 text-xs truncate rounded border-l-2 mb-1
                            ${task.completed ? 'opacity-50 line-through' : ''}
                            ${task.type === 'deadline' ? 'border-red-500 bg-red-500/10 text-red-200' : ''}
                            ${task.type === 'event' ? 'border-blue-500 bg-blue-500/10 text-blue-200' : ''}
                            ${task.type === 'todo' ? 'border-green-500 bg-green-500/10 text-green-200' : ''}
                        `}
                                    >
                                        {task.title}
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>

            {selectedDate && (
                <DayViewDialog
                    date={selectedDate}
                    isOpen={isDialogOpen}
                    onClose={() => setIsDialogOpen(false)}
                />
            )}
        </div>
    );
};

export default MonthView;
