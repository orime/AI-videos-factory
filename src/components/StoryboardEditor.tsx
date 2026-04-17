import React from 'react';
import { Maximize2, Settings, PlayCircle } from 'lucide-react';

const storyboards = [
  { id: '#12', type: '中景 ｜ 对话', desc: '"我会帮你拿回属于你的一切"', img: 'https://picsum.photos/seed/sb1/300/169' },
  { id: '#13', type: '近景 ｜ 情绪', desc: '"这一次，我不会再输"', img: 'https://picsum.photos/seed/sb2/300/169' },
  { id: '#14', type: '全景 ｜ 转场', desc: '城市夜景 航拍 establishing', img: 'https://picsum.photos/seed/sb3/300/169' },
  { id: '#15', type: '特写 ｜ 戒指', desc: '婚戒特写 镜头推进', img: 'https://picsum.photos/seed/sb4/300/169' },
  { id: '#16', type: '双人 ｜ 中景', desc: '"我们合作，互利利用"', img: 'https://picsum.photos/seed/sb5/300/169' },
  { id: '#17', type: '近景 ｜ 反转', desc: '她露出神 秘微笑', img: 'https://picsum.photos/seed/sb6/300/169' },
];

export function StoryboardEditor() {
  return (
    <div className="glass-panel p-4 flex flex-col h-full">
      {/* Header */}
      <div className="flex justify-between items-center mb-4 z-10 relative">
        <h2 className="text-lg font-bold border-l-4 border-yellow-500 pl-3 leading-none text-white text-glow-gold flex items-center gap-2">
          分镜预览
        </h2>
        <button className="text-xs flex items-center gap-1 text-yellow-500 border border-yellow-500/40 px-2 py-1 rounded bg-yellow-500/10 hover:bg-yellow-500/20 transition-colors">
          <Maximize2 size={12} /> 打开分镜车间
        </button>
      </div>

      <div className="text-sm font-medium text-gray-300 mb-2">EP02 关键镜头 (12/58)</div>

      {/* Grid Images */}
      <div className="grid grid-cols-3 gap-3 mb-4">
        {storyboards.map((sb, i) => (
          <div key={i} className="flex flex-col gap-1 group cursor-pointer">
            <div className="relative rounded overflow-hidden aspect-video border border-[#ffffff15] group-hover:border-neon-purple transition-colors">
              <img src={sb.img} alt={sb.desc} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
            </div>
            <div className="flex justify-between items-center mt-1">
              <span className="text-xs font-bold text-gray-200">{sb.id} <span className="text-gray-400 font-normal">{sb.type}</span></span>
            </div>
            <p className="text-[10px] text-gray-400 line-clamp-1 group-hover:text-white transition-colors">{sb.desc}</p>
          </div>
        ))}
      </div>

      {/* Timeline Editor Mockup */}
      <div className="mt-auto bg-[#0A0713] rounded-lg border border-[#ffffff10] p-3 flex flex-col relative overflow-hidden">
         {/* Time Ruler */}
         <div className="flex justify-between text-[10px] text-gray-500 font-mono mb-2 px-12 border-b border-[#ffffff10] pb-1">
           <span>00:18</span>
           <span>00:20</span>
           <span>00:22</span>
           <span>00:24</span>
           <span>00:26</span>
           <span>00:28</span>
         </div>

         {/* Tracks */}
         <div className="flex flex-col gap-1.5 relative">
            {/* Playhead */}
            <div className="absolute top-0 bottom-0 left-[35%] w-px bg-neon-purple z-20 shadow-[0_0_8px_#b535f6]">
               <div className="absolute -top-3 -left-1.5 w-3 h-3 bg-neon-purple rotate-45 transform"></div>
               <div className="absolute -bottom-3 -left-1.5 w-3 h-3 bg-neon-purple rotate-45 transform"></div>
            </div>

            {/* Video Track */}
            <div className="flex items-center h-8 bg-[#110d29] rounded overflow-hidden">
               <div className="w-12 shrink-0 bg-[#1a153a] h-full flex items-center justify-center text-[10px] text-gray-400 border-r border-[#ffffff10]">视频轨</div>
               <div className="flex-1 flex px-1 gap-0.5 overflow-hidden">
                 {storyboards.slice(0, 5).map((sb, i) => (
                   <img key={i} src={sb.img} className="h-full aspect-video object-cover opacity-80 border border-transparent hover:border-white rounded-sm" alt="track"/>
                 ))}
                 <img src={storyboards[0].img} className="h-full w-20 object-cover opacity-80 border border-transparent hover:border-white rounded-sm" alt="track"/>
               </div>
            </div>

            {/* Audio Track */}
            <div className="flex items-center h-8 bg-[#110d29] rounded overflow-hidden">
               <div className="w-12 shrink-0 bg-[#1a153a] h-full flex items-center justify-center text-[10px] text-gray-400 border-r border-[#ffffff10]">音频轨</div>
               <div className="flex-1 px-1 flex items-center overflow-hidden">
                  {/* Waveform Mock - using lots of small bars */}
                  <div className="w-full h-4 flex items-center gap-[1px] opacity-70 justify-center overflow-hidden">
                     {[...Array(60)].map((_, i) => (
                        <div key={i} className="w-1 bg-green-400 rounded-full" style={{ height: `${Math.max(10, Math.random() * 100)}%` }}></div>
                     ))}
                  </div>
               </div>
            </div>

            {/* Subtitle Track */}
            <div className="flex items-center h-8 bg-[#110d29] rounded overflow-hidden">
               <div className="w-12 shrink-0 bg-[#1a153a] h-full flex items-center justify-center text-[10px] text-gray-400 border-r border-[#ffffff10]">字幕轨</div>
               <div className="flex-1 px-1 relative h-full flex items-center">
                  <div className="absolute left-[10%] w-[30%] h-5 bg-[#b535f640] border border-neon-purple rounded text-[10px] flex items-center justify-center text-white truncate px-1">"我会帮你拿回属于你的一切"</div>
                  <div className="absolute left-[45%] w-[40%] h-5 bg-[#b535f640] border border-neon-purple rounded text-[10px] flex items-center justify-center text-white truncate px-1">"这一次，我不会再输"</div>
               </div>
            </div>

            {/* Music Track */}
             <div className="flex items-center h-8 bg-[#110d29] rounded overflow-hidden mb-2">
               <div className="w-12 shrink-0 bg-[#1a153a] h-full flex items-center justify-center text-[10px] text-gray-400 border-r border-[#ffffff10]">音乐轨</div>
               <div className="flex-1 px-1 flex items-center">
                  <div className="w-[90%] h-5 bg-blue-900/40 border border-blue-500/50 rounded flex items-center px-2 overflow-hidden relative">
                     <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
                     {/* Simpler continuous waveform */}
                     <svg className="w-full h-full text-blue-400" preserveAspectRatio="none" viewBox="0 0 100 20">
                        <path d="M0,10 Q10,20 20,10 T40,10 T60,10 T80,10 T100,10" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.8"/>
                     </svg>
                  </div>
               </div>
            </div>
         </div>
      </div>
      
      {/* Action Buttons */}
      <div className="flex justify-center gap-4 mt-3">
        <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-sm font-bold shadow-[0_0_15px_rgba(168,85,247,0.5)] transition-all flex items-center gap-2">
          一键生成整集
        </button>
        <button className="px-6 py-2 rounded-full bg-[#1a153a] hover:bg-[#251e4d] border border-gray-600 text-white text-sm font-medium transition-all">
          批量生成镜头
        </button>
        <button className="px-6 py-2 rounded-full bg-[#1a153a] hover:bg-[#251e4d] border border-gray-600 text-white text-sm font-medium transition-all">
          智能剪辑
        </button>
        <button className="px-6 py-2 rounded-full bg-[#1a153a] hover:bg-[#251e4d] border border-gray-600 text-white text-sm font-medium transition-all">
          导出成片
        </button>
      </div>

    </div>
  );
}
