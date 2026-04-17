import React from 'react';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: "重生之我在霸总短剧里当编剧",
    status: "generating",
    progress: 67,
    episodes: "EP02 · 共80集",
    timeRemaining: "预计剩余 23 分钟",
    collab: 4,
    img: "https://picsum.photos/seed/drama-boss/400/250",
    color: "neon-purple"
  },
  {
    id: 2,
    title: "皇后她不想宫斗",
    status: "reviewing",
    episodes: "EP01 · 共60集",
    timeRemaining: "等待审核 8 分钟",
    collab: 2,
    img: "https://picsum.photos/seed/drama-queen/400/250",
    color: "yellow-500"
  },
  {
    id: 3,
    title: "闪婚后傅先生马甲藏不住了",
    status: "published",
    episodes: "全80集",
    timeRemaining: "昨日播放 487.6万",
    collab: null,
    img: "https://picsum.photos/seed/drama-marriage/400/250",
    color: "emerald-500"
  }
];

export function ProductionList() {
  return (
    <div className="glass-panel p-4 flex flex-col h-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-bold border-l-4 border-yellow-500 pl-3 leading-none text-white text-glow-gold">正在生产</h2>
        <div className="flex gap-2 text-xs">
          <button className="px-3 py-1 bg-[#1a153a] text-white rounded-full border border-neon-purple shadow-[0_0_8px_rgba(181,53,246,0.5)]">全部</button>
          <button className="px-3 py-1 bg-transparent text-gray-400 hover:text-white rounded-full">进行中</button>
          <button className="px-3 py-1 bg-transparent text-gray-400 hover:text-white rounded-full">已完成</button>
          <button className="px-3 py-1 bg-transparent text-gray-400 hover:text-white rounded-full">异常</button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto custom-scrollbar flex flex-col gap-4 pr-2">
        {projects.map((proj) => (
          <div key={proj.id} className="relative rounded-xl overflow-hidden group cursor-pointer border border-[#ffffff10] hover:border-white/30 transition-all bg-[#0d0920]">
            {/* Status Badge */}
            <div className={`absolute top-2 left-2 z-20 px-2 py-0.5 rounded text-[10px] font-bold ${
              proj.status === 'generating' ? 'bg-[#b535f6] text-white' : 
              proj.status === 'reviewing' ? 'bg-yellow-500 text-black' : 
              'bg-emerald-500 text-white'
            }`}>
              {proj.status === 'generating' ? `生成中 ${proj.progress}%` : 
               proj.status === 'reviewing' ? '审核中' : '已发布'}
            </div>

            <div className="flex p-3 gap-3">
              {/* Image */}
              <div className="w-24 h-32 rounded-lg overflow-hidden shrink-0 relative">
                 <img src={proj.img} alt={proj.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                 {/* Play overlay */}
                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                    <Play size={24} className="text-white drop-shadow-md" />
                 </div>
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 justify-between py-1">
                <div>
                   {/* Title rendered as dramatic stylized text to match image aesthetic if it were real, here just text */}
                   <h3 className="font-bold text-sm tracking-wide leading-tight text-white line-clamp-2">
                     {proj.title}
                   </h3>
                </div>
                
                <div className="mt-2">
                  <div className="text-xs font-mono text-gray-300">{proj.episodes}</div>
                  <div className={`text-[10px] mt-0.5 ${
                     proj.status === 'generating' ? 'text-neon-purple' : 
                     proj.status === 'published' ? 'text-emerald-400' : 'text-yellow-400'
                  }`}>{proj.timeRemaining}</div>
                </div>

                <div className="flex justify-between items-end mt-2">
                  {proj.collab && (
                    <div className="flex items-center">
                      <div className="flex -space-x-1.5">
                        <img src="https://picsum.photos/seed/u1/20/20" className="w-5 h-5 rounded-full border border-[#0d0920]" alt="u"/>
                        <img src="https://picsum.photos/seed/u2/20/20" className="w-5 h-5 rounded-full border border-[#0d0920]" alt="u"/>
                        <img src="https://picsum.photos/seed/u3/20/20" className="w-5 h-5 rounded-full border border-[#0d0920]" alt="u"/>
                      </div>
                      <span className="text-[10px] text-gray-400 ml-1.5">{proj.collab}人协作</span>
                    </div>
                  )}
                  {!proj.collab && <div></div>}
                  
                  <button className={`px-4 py-1 text-xs rounded-full border transition-all ${
                    proj.status === 'generating' ? 'bg-neon-purple/20 border-neon-purple text-neon-purple hover:bg-neon-purple/40' :
                    proj.status === 'reviewing' ? 'bg-yellow-500/10 border-yellow-500/50 text-yellow-500 hover:bg-yellow-500/20' :
                    'bg-emerald-500/10 border-emerald-500/50 text-emerald-500 hover:bg-emerald-500/20'
                  }`}>
                    {proj.status === 'generating' ? '进入项目' : proj.status === 'reviewing' ? '查看' : '数据复盘'}
                  </button>
                </div>
              </div>
            </div>
            
            {/* Progress bar line for generating */}
            {proj.status === 'generating' && (
               <div className="absolute bottom-0 left-0 h-0.5 bg-neon-purple" style={{width: `${proj.progress}%`, boxShadow: '0 0 10px #b535f6'}}></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-2 text-center">
        <button className="text-xs text-neon-purple hover:text-white transition-colors">查看全部项目 (38)</button>
      </div>
    </div>
  );
}
