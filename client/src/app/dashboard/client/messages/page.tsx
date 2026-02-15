'use client';

import Card from '@/components/ui/Card';
import { UserCircleIcon } from '@heroicons/react/24/solid';

export default function MessagesPage() {
  const conversations: any[] = []; // Empty mock data

  return (
    <div className="h-[calc(100vh-8rem)] flex flex-col">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Messages</h1>

      <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
        {/* Sidebar */}
        <Card padding="none" className="md:col-span-1 overflow-hidden flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-slate-800">
                <input 
                    type="text" 
                    placeholder="Search messages..." 
                    className="w-full px-3 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500 text-sm"
                />
            </div>
            <div className="flex-grow overflow-y-auto">
                {conversations.length === 0 && (
                  <div className="p-4 text-center text-sm text-gray-500">No messages yet</div>
                )}
                {conversations.map((chat) => (
                    <div 
                        key={chat.id} 
                        className={`p-4 hover:bg-gray-50 dark:hover:bg-slate-800/50 cursor-pointer border-b border-gray-100 dark:border-slate-800/50 transition-colors ${chat.unread > 0 ? 'bg-primary-50 dark:bg-primary-900/10' : ''}`}
                    >
                        <div className="flex items-center gap-3">
                            <UserCircleIcon className="w-10 h-10 text-gray-300" />
                            <div className="flex-1 min-w-0">
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-semibold text-sm truncate">{chat.user}</h3>
                                    <span className="text-xs text-gray-400">{chat.time}</span>
                                </div>
                                <p className={`text-sm truncate ${chat.unread > 0 ? 'text-gray-900 dark:text-white font-medium' : 'text-gray-500'}`}>
                                    {chat.message}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

        {/* Chat Window */}
        <Card padding="none" className="md:col-span-2 flex flex-col h-full">
            <div className="p-4 border-b border-gray-200 dark:border-slate-800 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    {/* Placeholder header */}
                    <h3 className="font-bold text-gray-400">Select Conversation</h3>
                </div>
            </div>
            
            <div className="flex-grow p-4 bg-gray-50 dark:bg-slate-900/50 overflow-y-auto">
                {/* Messages placeholder */}
                <div className="flex items-center justify-center h-full text-gray-400">
                    No conversation selected
                </div>
            </div>

            <div className="p-4 border-t border-gray-200 dark:border-slate-800">
                <div className="flex gap-2">
                    <input 
                        type="text" 
                        placeholder="Type a message..." 
                        className="flex-grow px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 border-none focus:ring-2 focus:ring-primary-500"
                    />
                    <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 font-medium">
                        Send
                    </button>
                </div>
            </div>
        </Card>
      </div>
    </div>
  );
}
