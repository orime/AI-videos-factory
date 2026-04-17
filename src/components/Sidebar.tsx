import React, { useState } from 'react';
import { 
  Home, 
  Library, 
  BookOpen, 
  Users, 
  LayoutTemplate, 
  Video, 
  Scissors, 
  Mic, 
  CheckSquare, 
  Share2, 
  PieChart, 
  ShieldCheck,
  Play
} from 'lucide-react';
import { cn } from '../lib/utils';

const menuItems = [
  { icon: Home, label: '总控台', active: true },
  { icon: Library, label: '选题库' },
  { icon: BookOpen, label: '剧本工厂' },
  { icon: Users, label: '角色资产' },
  { icon: LayoutTemplate, label: '分镜车间' },
  { icon: Video, label: '视频生成队列' },
  { icon: Scissors, label: '剪辑合成' },
  { icon: Mic, label: '配音配乐' },
  { icon: CheckSquare, label: '审核中心' },
  { icon: Share2, label: '分发中心' },
  { icon: PieChart, label: '数据复盘' },
  { icon: ShieldCheck, label: '团队与权限' },
];

export function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-64 h-full flex flex-col bg-[#0b081a] border-r border-[#ffffff10] shrink-0 z-20">
      {/* Logo */}
      <div className="h-20 flex items-center px-6 gap-3 pt-4">
        <div className="w-8 h-8 rounded shrink-0 bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center text-white shadow-[0_0_15px_rgba(168,85,247,0.5)]">
           <Play size={18} fill="currentColor" />
        </div>
        <div className="flex flex-col">
          <span className="text-lg font-bold tracking-wider text-white text-glow-purple">影擎·AI短剧工厂</span>
          <span className="text-[10px] text-gray-400 tracking-widest">AI SHORT DRAMA FACTORY</span>
        </div>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto custom-scrollbar px-3 py-4 flex flex-col gap-1">
        {menuItems.map((item, index) => {
          const isActive = activeIndex === index;
          return (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "flex items-center gap-4 px-4 py-3 rounded-lg text-sm transition-all duration-300 relative group",
                isActive 
                  ? "bg-gradient-to-r from-[rgba(181,53,246,0.2)] to-transparent text-white" 
                  : "text-gray-400 hover:text-white hover:bg-[rgba(255,255,255,0.05)]"
              )}
            >
              {isActive && (
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-neon-purple rounded-r shadow-[0_0_10px_#b535f6]"></div>
              )}
              {/* Outer glow wrapper for active icon */}
              <div className={cn(
                "relative flex items-center justify-center w-6 h-6",
                isActive ? "text-neon-purple" : "text-gray-400 group-hover:text-gray-200"
              )}>
                {isActive && <div className="absolute inset-0 bg-neon-purple blur-md opacity-40 rounded-full"></div>}
                <item.icon size={18} className="relative z-10" />
              </div>
              <span className={cn("font-medium", isActive && "text-glow-purple")}>{item.label}</span>
            </button>
          );
        })}
      </div>

      {/* Bottom Promo */}
      <div className="p-4 mt-auto">
        <div className="rounded-xl overflow-hidden relative p-4 border border-[rgba(181,53,246,0.3)] bg-[url('https://picsum.photos/seed/cyber1/300/200')] bg-cover bg-center">
          <div className="absolute inset-0 bg-gradient-to-t from-[#0b081a] via-[#0b081a90] to-transparent"></div>
          <div className="relative z-10 flex flex-col items-center text-center">
            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-neon-blue to-neon-purple text-glow-blue mb-1">AI 制片</h4>
            <p className="text-xs text-gray-300 mb-3">24小时不间断生产</p>
            <button className="w-full py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-bold transition-all shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              立即体验
            </button>
          </div>
        </div>
        <div className="text-[10px] text-gray-500 mt-4 text-center">
          V 2.5.0 PRO
        </div>
      </div>
    </div>
  );
}
