import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import { HelpCircle, ChevronRight, Music, Video, Youtube, MessageCircle } from 'lucide-react';

const radarData = [
  { subject: '逆袭', A: 120, fullMark: 150 },
  { subject: '复仇', A: 98, fullMark: 150 },
  { subject: '穿越', A: 86, fullMark: 150 },
  { subject: '爽文', A: 99, fullMark: 150 },
  { subject: '重生', A: 135, fullMark: 150 },
];

const lineData = [
  { name: '1', uv: 94 }, { name: '2', uv: 95 }, { name: '3', uv: 93 }, 
  { name: '4', uv: 96 }, { name: '5', uv: 95 }, { name: '6', uv: 97 }, 
  { name: '7', uv: 98 }, { name: '8', uv: 96 }, { name: '9', uv: 99 },
];

export function RightPanel() {
  return (
    <div className="flex flex-col gap-4 h-full pr-2 overflow-y-auto custom-scrollbar">
      
      {/* 行业热点 & 趋势 */}
      <div className="glass-panel p-4">
        <h3 className="text-sm font-bold border-l-4 border-neon-purple pl-2 mb-3 text-white">行业热点 & 趋势</h3>
        <div className="flex">
          <div className="w-[120px] h-[120px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarData}>
                <PolarGrid stroke="#ffffff30" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Radar name="Trend" dataKey="A" stroke="#b535f6" fill="#b535f6" fillOpacity={0.4} />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <div className="flex-1 pl-4 flex flex-col justify-center">
            <h4 className="text-xs text-gray-400 mb-2 font-medium">今日飙升 TOP3</h4>
            <div className="flex flex-col gap-2 text-xs">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-yellow-500/20 text-yellow-500 flex items-center justify-center font-bold text-[10px]">1</span> 重生逆袭</span>
                <span className="text-red-400 font-mono">+186%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-gray-500/20 text-gray-400 flex items-center justify-center font-bold text-[10px]">2</span> 闪婚总裁</span>
                <span className="text-red-400 font-mono">+129%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2"><span className="w-4 h-4 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-bold text-[10px]">3</span> 复仇打脸</span>
                <span className="text-red-400 font-mono">+109%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 角色一致性健康度 */}
      <div className="glass-panel p-4 pb-2">
        <h3 className="text-sm font-bold border-l-4 border-neon-blue pl-2 mb-2 text-white flex justify-between">
          角色一致性健康度
        </h3>
        <div className="flex justify-between items-end mb-1">
           <div>
             <div className="text-[10px] text-gray-400">全局角色</div>
             <div className="text-2xl font-bold font-mono text-neon-blue">96.8%</div>
             <div className="text-[10px] text-green-400 flex items-center">较昨日 ↑ 1.2%</div>
           </div>
           <div className="w-[150px] h-[40px]">
             <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={lineData} margin={{ top: 5, right: 0, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#00f0ff" stopOpacity={0.8}/>
                      <stop offset="95%" stopColor="#00f0ff" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <Area type="monotone" dataKey="uv" stroke="#00f0ff" fillOpacity={1} fill="url(#colorUv)" strokeWidth={2} />
                </AreaChart>
             </ResponsiveContainer>
           </div>
        </div>
      </div>

      {/* 模型 & 资源状态 */}
      <div className="glass-panel p-4">
        <h3 className="text-sm font-bold border-l-4 border-yellow-500 pl-2 mb-3 text-white">模型 & 资源状态</h3>
        
        <div className="flex flex-col gap-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="text-gray-300">GPU 集群</span>
              <span className="text-green-400">稳定</span>
            </div>
            <div className="flex items-end gap-2">
              <span className="text-lg font-mono font-bold text-white w-16">78%</span>
              <div className="flex-1 flex gap-0.5 h-3 mb-1">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className={`flex-1 rounded-sm ${i < 15 ? 'bg-neon-purple shadow-[0_0_5px_#b535f6]' : 'bg-[#1a153a]'}`}></div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 w-16">文生视频</span>
              <span className="text-gray-300 w-8">V3.2</span>
              <div className="flex-1 h-1.5 bg-[#1a153a] border border-[#ffffff10] rounded-full mx-2 overflow-hidden">
                <div className="w-[85%] h-full bg-neon-purple"></div>
              </div>
              <span className="text-green-400">正常</span>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 w-16">语音合成</span>
              <span className="text-gray-300 w-8">Ultra</span>
              <div className="flex-1 h-1.5 bg-[#1a153a] border border-[#ffffff10] rounded-full mx-2 overflow-hidden">
                <div className="w-[92%] h-full bg-neon-purple"></div>
              </div>
              <span className="text-green-400">正常</span>
            </div>
            
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-400 w-16">智能剪辑</span>
              <span className="text-gray-300 w-8">Pro</span>
              <div className="flex-1 h-1.5 bg-[#1a153a] border border-[#ffffff10] rounded-full mx-2 overflow-hidden">
                <div className="w-[70%] h-full bg-neon-purple"></div>
              </div>
              <span className="text-green-400">正常</span>
            </div>
          </div>
        </div>
      </div>

      {/* 异常任务 */}
      <div className="glass-panel p-4">
        <div className="flex justify-between items-center mb-3">
           <h3 className="text-sm font-bold border-l-4 border-red-500 pl-2 text-white">异常任务 (5)</h3>
           <button className="text-[10px] text-gray-400 border border-gray-600 px-2 py-0.5 rounded hover:text-white transition-colors">查看全部</button>
        </div>
        <div className="flex flex-col gap-2 text-xs">
          <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-1 rounded transition-colors -mx-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_red]"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">角色嘴型不同步</span>
              <HelpCircle size={10} className="text-red-400" />
            </div>
            <span className="text-yellow-500 font-mono">3</span>
          </div>
          <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-1 rounded transition-colors -mx-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-orange-500 shadow-[0_0_5px_orange]"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">素材版权风险</span>
              <span className="text-[8px] bg-green-500/20 text-green-400 px-1 rounded border border-green-500/30">1</span>
            </div>
            <span className="text-yellow-500 font-mono">1</span>
          </div>
          <div className="flex justify-between items-center group cursor-pointer hover:bg-white/5 p-1 rounded transition-colors -mx-1">
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-red-500 shadow-[0_0_5px_red]"></div>
              <span className="text-gray-300 group-hover:text-white transition-colors">生成失败 - 超时</span>
            </div>
            <span className="text-yellow-500 font-mono">1</span>
          </div>
        </div>
      </div>

      {/* 多平台发布 */}
      <div className="glass-panel p-4">
        <h3 className="text-sm font-bold border-l-4 border-neon-purple pl-2 mb-3 text-white">多平台发布</h3>
        <div className="flex justify-between mb-3 text-xs">
          <div className="text-gray-400">今日发布 <span className="text-white font-bold ml-1">8</span> 条</div>
          <div className="text-gray-400">播放量 <span className="text-white font-bold ml-1 font-mono">1,247.6万</span></div>
        </div>
        <div className="flex justify-between items-center">
           <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-md bg-black/50 border border-gray-700 flex items-center justify-center text-white"><Music size={14}/></div>
              <span className="font-mono font-bold">5</span>
              <span className="text-[10px] text-gray-500">623.4万</span>
           </div>
           <div className="flex flex-col items-center gap-1 relative">
              <div className="w-6 h-6 rounded-md bg-[#ff6b0015] border border-[#ff6b0050] flex items-center justify-center text-[#ff6b00]"><Video size={14}/></div>
              {/* Fake badge */}
              <div className="absolute -top-1 -right-1.5 bg-red-500 rounded-full text-[8px] border border-[#0d0920] w-3 h-3 flex items-center justify-center">2</div>
              <span className="font-mono font-bold">8</span>
              <span className="text-[10px] text-gray-500">187.6万</span>
           </div>
           <div className="flex flex-col items-center gap-1 relative">
              <div className="w-6 h-6 rounded-md bg-[#00c23a15] border border-[#00c23a50] flex items-center justify-center text-[#00c23a]"><MessageCircle size={14}/></div>
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full text-[8px] border border-[#0d0920] w-3 h-3 flex items-center justify-center">1</div>
              <span className="font-mono font-bold">1</span>
              <span className="text-[10px] text-gray-500">436.6万</span>
           </div>
           <div className="flex flex-col items-center gap-1">
              <div className="w-6 h-6 rounded-md bg-[#ff000015] border border-[#ff000050] flex items-center justify-center text-[#ff0000]"><Youtube size={14}/></div>
              <span className="font-mono font-bold text-gray-500">0</span>
              <span className="text-[10px] text-gray-600">-</span>
           </div>
        </div>
      </div>

      {/* AI建议 */}
      <div className="glass-panel p-4 relative overflow-hidden flex flex-col justify-between" style={{minHeight: '120px'}}>
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#b535f620] to-transparent pointer-events-none"></div>
        <div className="flex justify-between items-start relative z-10">
          <h3 className="text-sm font-bold border-l-4 border-neon-blue pl-2 text-white">AI 建议</h3>
          <div className="w-16 h-16 absolute right-0 top-0 opacity-80 pointer-events-none mix-blend-screen overflow-hidden rounded-full">
            <img src="https://picsum.photos/seed/cyberrobot/100/100" className="w-full h-full object-cover rounded-full" alt="bot"/>
          </div>
        </div>
        <p className="text-xs text-gray-300 mt-2 relative z-10 leading-relaxed max-w-[80%]">
          检测到 "女频逆袭" 题材转化率最高<br/>
          建议加大该类型内容生产
        </p>
        <button className="self-start mt-2 px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded text-[10px] text-white hover:from-purple-500 hover:to-indigo-500 transition-colors shadow-[0_0_10px_rgba(168,85,247,0.4)] relative z-10">采纳建议</button>
      </div>

    </div>
  );
}
