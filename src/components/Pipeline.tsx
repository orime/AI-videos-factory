import React from 'react';
import { Lightbulb, FileText, Users, Layout, PlaySquare, Scissors, Mic, ShieldCheck, Rocket, PieChart } from 'lucide-react';

const steps = [
  { num: '01', label: '选题', status: 'done', progress: '12 / 12', icon: Lightbulb },
  { num: '02', label: '剧本', status: 'done', progress: '28 / 28', icon: FileText },
  { num: '03', label: '角色', status: 'done', progress: '16 / 16', icon: Users },
  { num: '04', label: '分镜', status: 'done', progress: '192 / 192', icon: Layout },
  { num: '05', label: '生成', status: 'active', progress: '3,886 / 4,320', icon: PlaySquare },
  { num: '06', label: '剪辑', status: 'waiting', progress: '8 / 12', icon: Scissors },
  { num: '07', label: '配音', status: 'done', progress: '12 / 12', icon: Mic },
  { num: '08', label: '审核', status: 'warning', progress: '5 / 36', icon: ShieldCheck },
  { num: '09', label: '发布', status: 'waiting', progress: '3 / 8', icon: Rocket },
  { num: '10', label: '复盘', status: 'waiting', progress: '进行中', icon: PieChart },
];

export function Pipeline() {
  return (
    <div className="glass-panel p-5 mt-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-bold border-l-4 border-neon-purple pl-3 leading-none text-white text-glow-purple">短剧生产流水线</h2>
        <div className="flex items-center gap-4 text-xs">
          <span className="text-gray-400">当前项目：《重生之我在霸总短剧里当编剧》</span>
          <div className="flex items-center gap-2">
            <span className="text-gray-300">生产进度</span>
            <div className="w-48 h-1.5 bg-[#1a153a] rounded-full overflow-hidden border border-[#ffffff10]">
              <div className="h-full bg-gradient-to-r from-neon-purple to-neon-blue w-[67.3%] shadow-[0_0_10px_#b535f6]"></div>
            </div>
            <span className="text-neon-purple font-mono">67.3%</span>
          </div>
          <button className="px-4 py-1.5 bg-[#b535f620] hover:bg-[#b535f640] border border-neon-purple rounded text-neon-purple font-medium transition-colors ml-4 box-glow-purple">
            进入项目
          </button>
        </div>
      </div>

      <div className="flex justify-between items-start relative px-4 mt-2">
        {/* Connection Line */}
        <div className="absolute top-[3.25rem] left-10 right-10 h-[2px] bg-[#2a244a] z-0">
           <div className="absolute top-0 left-0 h-full bg-gradient-to-r from-yellow-500 via-neon-purple to-transparent w-[60%]"></div>
        </div>

        {steps.map((step, i) => {
          let colorClass = "from-gray-700 to-gray-600";
          let glowClass = "";
          let textColor = "text-gray-400";
          
          if (step.status === 'done') {
            colorClass = "from-yellow-600 to-yellow-400";
            glowClass = "shadow-[0_0_15px_rgba(245,158,11,0.5)]";
            textColor = "text-yellow-400";
          } else if (step.status === 'active') {
            colorClass = "from-purple-600 to-indigo-500";
            glowClass = "shadow-[0_0_20px_rgba(181,53,246,0.8)] border-2 border-neon-purple";
            textColor = "text-white text-glow-purple";
          } else if (step.status === 'warning') {
            colorClass = "from-orange-600 to-red-500";
            glowClass = "shadow-[0_0_15px_rgba(239,68,68,0.5)] border border-red-400";
            textColor = "text-orange-400";
          }

          return (
            <div key={i} className="flex flex-col items-center relative z-10 w-24">
              <span className={`text-xl font-black font-mono mb-2 track-widest ${textColor}`}>{step.num}</span>
              
              <div className="relative group cursor-pointer">
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-br ${colorClass} ${glowClass} transform rotate-45 transition-transform group-hover:scale-110`}>
                  <div className="-rotate-45">
                    <step.icon size={22} className={step.status === 'waiting' ? 'text-gray-400' : 'text-white'} />
                  </div>
                </div>
                
                {/* Status dot */}
                {step.status === 'done' && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-[#0b081a] flex items-center justify-center z-20">
                    <CheckSquareIcon size={10} className="text-white"/>
                  </div>
                )}
                 {step.status === 'warning' && (
                  <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-orange-500 rounded-full border-2 border-[#0b081a] flex items-center justify-center z-20 text-[10px] font-bold text-white">
                    !
                  </div>
                )}
              </div>
              
              <span className={`mt-4 text-sm font-medium ${step.status === 'active' ? 'text-white' : 'text-gray-300'}`}>{step.label}</span>
              <span className="mt-1 text-[10px] text-gray-500 font-mono tracking-tighter truncate w-full text-center flex items-center justify-center gap-1">
                {step.progress}
                {step.status === 'done' && <CheckCircleIcon size={10} className="text-green-500"/>}
                {step.status === 'warning' && <AlertTriangleIcon size={10} className="text-orange-500"/>}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Minimal icons for status dots to avoid importing more
const CheckSquareIcon = ({size, className}:{size:number, className:string}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="20 6 9 17 4 12"></polyline></svg>
const CheckCircleIcon = ({size, className}:{size:number, className:string}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
const AlertTriangleIcon = ({size, className}:{size:number, className:string}) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path><line x1="12" x2="12" y1="9" y2="13"></line><line x1="12" x2="12.01" y1="17" y2="17"></line></svg>
