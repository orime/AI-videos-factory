import React from 'react';
import { Film, Video, CheckCircle, Database, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  {
    title: "今日启动项目",
    value: "128",
    trend: "+23.5%",
    trendUp: true,
    sub: "昨日 104",
    icon: Film,
    color: "from-blue-600 to-blue-400",
    glow: "rgba(59, 130, 246, 0.5)",
    textColor: "text-blue-400"
  },
  {
    title: "生成镜头",
    value: "4,892",
    trend: "",
    sub: "已完成 78.3%",
    icon: Video,
    color: "from-purple-600 to-purple-400",
    glow: "rgba(168, 85, 247, 0.5)",
    textColor: "text-purple-400"
  },
  {
    title: "待审核剧集",
    value: "36",
    trend: "-6",
    trendUp: false,
    sub: "审核通过率 92.4%",
    icon: CheckCircle,
    color: "from-yellow-600 to-orange-400",
    glow: "rgba(245, 158, 11, 0.5)",
    textColor: "text-amber-400"
  },
  {
    title: "今日消耗 Credits",
    value: "89,560",
    trend: "",
    sub: "剩余 1,240,880",
    icon: Database,
    color: "from-emerald-600 to-teal-400",
    glow: "rgba(16, 185, 129, 0.5)",
    textColor: "text-emerald-400"
  },
  {
    title: "爆款预测",
    value: "92.7",
    trend: "S级潜力",
    isBadge: true,
    sub: "超越 98.3% 项目",
    icon: TrendingUp,
    color: "from-pink-600 to-rose-400",
    glow: "rgba(244, 63, 94, 0.5)",
    textColor: "text-pink-400"
  }
];

export function TopStats() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {stats.map((stat, i) => (
        <div key={i} className="glass-panel p-4 relative overflow-hidden group">
          {/* Subtle background gradient on hover */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          
          <div className="flex justify-between items-start mb-2 relative z-10">
            <div className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`} style={{ boxShadow: `0 0 15px ${stat.glow}` }}>
                <stat.icon size={16} className="text-white" />
              </div>
              <span className="text-sm font-medium text-gray-200">{stat.title}</span>
            </div>
            
            {stat.trend && !stat.isBadge && (
              <div className={`flex items-center text-xs font-medium ${stat.trendUp ? 'text-green-400' : 'text-orange-400'}`}>
                {stat.trendUp ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                {stat.trend}
              </div>
            )}
            {stat.isBadge && (
              <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#b535f630] border border-neon-purple text-neon-purple">
                {stat.trend}
              </span>
            )}
          </div>
          
          <div className="flex items-baseline gap-2 relative z-10 mt-2">
            <span className="text-3xl font-bold font-mono tracking-tight text-white">{stat.value}</span>
          </div>
          
          <div className="text-xs text-gray-400 mt-2 flex items-center justify-between relative z-10">
             <span>{stat.sub}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
