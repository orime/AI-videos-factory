import React from 'react';
import { Search, MessageSquare, Bell } from 'lucide-react';

export function TopHeader() {
  return (
    <div className="h-20 w-full flex items-center justify-between px-8 absolute top-0 left-0 right-0 z-10 pointer-events-none">
      {/* Background glowing effect for header area (behind everything) */}
      <div className="absolute inset-x-0 top-0 h-[200px] z-[-1] bg-[url('https://picsum.photos/seed/firecity/1920/400')] bg-cover bg-top opacity-30 mix-blend-screen pointer-events-none" style={{ maskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 20%, transparent 100%)' }}></div>
      <div className="absolute inset-x-0 top-0 h-[100px] z-[-1] bg-gradient-to-b from-[#b535f620] to-transparent pointer-events-none"></div>

      {/* Left filler to offset sidebar space */}
      <div className="w-64 shrink-0"></div>

      {/* Center Title */}
      <div className="flex-1 flex flex-col items-center justify-center pointer-events-auto">
        <h1 className="text-4xl font-extrabold tracking-widest text-transparent bg-clip-text bg-gradient-to-b from-yellow-100 via-yellow-400 to-yellow-600 text-glow-gold filter drop-shadow-[0_0_15px_rgba(255,215,0,0.5)] italic pr-4">
          全自动化 AI 短剧 内容工厂
        </h1>
        <p className="text-sm font-medium tracking-[0.3em] text-yellow-500 mt-1 flex items-center gap-2">
          <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-yellow-500"></span>
          从选题到爆款发布 ∙ 一条产线全部跑通
          <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-yellow-500"></span>
        </p>
      </div>

      {/* Right Controls */}
      <div className="flex items-center gap-6 pointer-events-auto shrink-0">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
          <input 
            type="text" 
            placeholder="搜索项目 / 素材 / 功能" 
            className="bg-[#110d2980] border border-[rgba(255,255,255,0.1)] text-sm rounded-full py-1.5 pl-9 pr-4 text-white placeholder-gray-400 focus:outline-none focus:border-neon-purple w-64 backdrop-blur-sm transition-all"
          />
        </div>
        
        <div className="flex items-center gap-4">
          <button className="text-gray-300 hover:text-white transition-colors relative">
            <MessageSquare size={20} />
          </button>
          <button className="text-gray-300 hover:text-white transition-colors relative">
            <Bell size={20} />
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full text-[10px] flex items-center justify-center text-white font-bold border border-[#0b081a]">12</span>
          </button>
          
          <div className="flex items-center gap-2 ml-2 pl-4 border-l border-[rgba(255,255,255,0.1)]">
            <img src="https://picsum.photos/seed/user1/100/100" alt="Avatar" className="w-8 h-8 rounded-full border border-neon-gold shadow-[0_0_10px_rgba(255,215,0,0.3)] object-cover" />
            <div className="flex flex-col text-xs">
              <span className="text-gray-100 font-medium">制片人·张晓</span>
              <span className="text-yellow-500 text-[10px] border border-yellow-500/50 rounded-full px-1.5 mt-0.5 bg-yellow-500/10 text-center">超级管理员</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
