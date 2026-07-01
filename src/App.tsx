import React from 'react';
import { MessageSquare, ThumbsUp, User, Clock, TrendingUp, AlertCircle } from 'lucide-react';

const categories = [
  { id: 1, name: 'Frontend Development', posts: 1240, replies: 5600 },
  { id: 2, name: 'Backend Systems', posts: 890, replies: 3200 },
  { id: 3, name: 'DevOps & Infrastructure', posts: 450, replies: 1100 },
];

export default function App() {
  return (
    <div className="min-h-screen p-6 max-w-5xl mx-auto">
      <header className="mb-10 border-b border-slate-800 pb-6">
        <h1 className="text-3xl font-bold text-white">DevForum</h1>
        <p className="text-slate-400">Connect, discuss, and grow with fellow developers.</p>
      </header>

      <main className="grid gap-8">
        <section>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <MessageSquare size={20} /> Categories
          </h2>
          <div className="grid gap-3">
            {categories.map(cat => (
              <div key={cat.id} className="bg-slate-900 p-4 rounded-lg border border-slate-800 flex justify-between items-center hover:border-blue-500 transition">
                <span className="font-medium text-lg">{cat.name}</span>
                <div className="flex gap-6 text-sm text-slate-400">
                  <span>{cat.posts} Posts</span>
                  <span>{cat.replies} Replies</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">Latest Threads</h2>
            <div className="flex gap-2">
              <button className="px-3 py-1 bg-slate-800 rounded text-sm hover:bg-slate-700">Latest</button>
              <button className="px-3 py-1 bg-slate-800 rounded text-sm hover:bg-slate-700">Popular</button>
            </div>
          </div>
          <div className="bg-slate-900 rounded-lg border border-slate-800 divide-y divide-slate-800">
            {[1, 2, 3].map(i => (
              <div key={i} className="p-4 flex items-start gap-4">
                <div className="bg-blue-600 p-2 rounded">
                  <TrendingUp size={20} />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium text-white">How to optimize React performance in large scale apps?</h3>
                  <p className="text-sm text-slate-400">Started by @dev_user • 2 hours ago</p>
                </div>
                <div className="flex items-center gap-4 text-sm">
                  <span className="flex items-center gap-1"><ThumbsUp size={14} /> 42</span>
                  <span className="flex items-center gap-1"><MessageSquare size={14} /> 15</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}