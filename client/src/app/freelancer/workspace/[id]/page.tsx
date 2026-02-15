'use client';

import { useState, use, useRef } from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';
import { 
  ChatBubbleLeftRightIcon, 
  PaperClipIcon, 
  CheckCircleIcon, 
  ClockIcon, 
  CurrencyDollarIcon, 
  ArrowUpTrayIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline';

import { MOCK_PROJECTS } from '@/lib/mockData';

export default function WorkspacePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const projectId = parseInt(id);
  const project = MOCK_PROJECTS.find(p => p.id === projectId) || MOCK_PROJECTS[0]; 

  const [activeTab, setActiveTab] = useState('Overview');
  const [file, setFile] = useState<File | null>(null);
  const [messageText, setMessageText] = useState('');
  const [messages, setMessages] = useState([
    { sender: 'System', text: `Workspace initialized for ${project.title}.`, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = () => {
    if (!messageText.trim()) return;
    
    const newMessage = {
      sender: 'Me',
      text: messageText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessageText('');
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white dark:bg-slate-900 border border-gray-200 dark:border-slate-800 p-6 rounded-xl shadow-sm">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{project.title}</h1>
            <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                project.status === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' : 
                'bg-gray-100 text-gray-800'
            }`}>
              {project.status}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-1">Client: {project.client.name}</p>
        </div>
        <div className="text-right">
           <div className="text-sm text-gray-500">Total Budget</div>
           <div className="text-xl font-bold text-primary-600 dark:text-primary-400">{project.budget}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Area */}
        <div className="lg:col-span-2 space-y-6">
          {/* Milestones */}
          <Card padding="lg">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <CheckCircleIcon className="w-5 h-5 text-primary-500" />
                Milestones
              </h2>
            </div>
            
            <div className="space-y-4">
              {project.milestones?.map((milestone) => (
                <div key={milestone.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center p-4 rounded-lg bg-gray-50 dark:bg-slate-800/50 border border-gray-100 dark:border-slate-700">
                  <div>
                    <h3 className="font-medium text-gray-900 dark:text-white">{milestone.title}</h3>
                    <div className="flex gap-4 text-xs text-gray-500 mt-1">
                      <span className="flex items-center">
                        <CurrencyDollarIcon className="w-3 h-3 mr-1" />
                        {milestone.amount}
                      </span>
                      <span className="flex items-center">
                        <ClockIcon className="w-3 h-3 mr-1" />
                        Due: {milestone.dueDate}
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 sm:mt-0 flex items-center gap-3">
                     <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                       milestone.status === 'Completed' || milestone.status === 'Paid' ? 'bg-green-100 text-green-700' :
                       milestone.status === 'In Progress' ? 'bg-blue-100 text-blue-700' :
                       'bg-gray-100 text-gray-700'
                     }`}>
                       {milestone.status}
                     </span>
                     {milestone.status === 'In Progress' && (
                       <Button size="sm">Submit Work</Button>
                     )}
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Submission Area */}
          <Card padding="lg">
            <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
              <ArrowUpTrayIcon className="w-5 h-5 text-primary-500" />
              Submit Milestone Work
            </h2>
            
            <input 
              type="file" 
              ref={fileInputRef} 
              className="hidden" 
              onChange={handleFileChange} 
            />

            <div 
              onClick={() => fileInputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-lg p-8 text-center transition-all cursor-pointer group ${
                file 
                  ? 'border-primary-500 bg-primary-50 dark:bg-primary-900/20' 
                  : 'border-gray-300 dark:border-slate-700 hover:bg-gray-50 dark:hover:bg-slate-800/50'
              }`}
            >
              <div className="flex flex-col items-center justify-center">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-transform group-hover:scale-110 ${
                    file ? 'bg-primary-100 text-primary-600' : 'bg-primary-50 dark:bg-primary-900/20 text-gray-400'
                  }`}>
                    {file ? <DocumentTextIcon className="w-6 h-6" /> : <PaperClipIcon className="w-6 h-6" />}
                  </div>
                  
                  {file ? (
                    <div>
                      <p className="text-sm font-medium text-primary-900 dark:text-white truncate max-w-[200px]">
                        {file.name}
                      </p>
                      <p className="text-xs text-primary-600 dark:text-primary-400">
                        {(file.size / 1024).toFixed(1)} KB
                      </p>
                      <p className="text-xs text-gray-500 mt-2">Click to replace</p>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Drag and drop files here, or <span className="text-primary-600 font-medium">browse</span>
                    </p>
                  )}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button disabled={!file} onClick={() => alert('File submitted successfully!')}>
                {file ? 'Submit for Review' : 'Select a File to Submit'}
              </Button>
            </div>
          </Card>
        </div>

        {/* Sidebar (Chat) */}
        <div className="space-y-6">
          <Card padding="none" className="h-[600px] flex flex-col overflow-hidden">
            <div className="p-4 border-b border-gray-100 dark:border-slate-800 bg-gray-50/50 dark:bg-slate-800/50">
                <h2 className="text-sm font-bold flex items-center gap-2">
                <ChatBubbleLeftRightIcon className="w-4 h-4 text-primary-500" />
                Team Chat
                </h2>
            </div>
            
            <div className="flex-grow overflow-y-auto space-y-4 p-4 custom-scrollbar bg-gray-50/30 dark:bg-slate-900/30">
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.sender === 'Me' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm shadow-sm ${
                    msg.sender === 'Me' 
                      ? 'bg-primary-600 text-white rounded-br-none' 
                      : msg.sender === 'System'
                      ? 'bg-gray-200 dark:bg-slate-700 text-gray-600 dark:text-gray-300 w-full text-center text-xs !rounded-full italic'
                      : 'bg-white dark:bg-slate-800 text-gray-900 dark:text-gray-100 rounded-bl-none border border-gray-100 dark:border-slate-700'
                  }`}>
                    {msg.text}
                  </div>
                  {msg.sender !== 'System' && <span className="text-[10px] text-gray-400 mt-1 px-1">{msg.time}</span>}
                </div>
              ))}
            </div>

            <div className="p-4 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800">
              <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 rounded-full px-2 py-2 pr-2 border border-transparent focus-within:border-primary-500 transition-all">
                <input 
                  type="text" 
                  placeholder="Type a message..."
                  className="flex-grow bg-transparent border-none outline-none focus:outline-none focus:ring-0 text-sm px-3 text-gray-900 dark:text-white placeholder-gray-500 min-w-0"
                  value={messageText}
                  onChange={(e) => setMessageText(e.target.value)}
                  onKeyDown={(e) => {
                      if (e.key === 'Enter') {
                          handleSendMessage();
                      }
                  }}
                />
                <Button size="sm" className="rounded-full !px-4 !py-1.5 h-8 shrink-0" onClick={handleSendMessage}>Send</Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
