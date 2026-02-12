import React from 'react';
import avatarImage from 'figma:asset/2d966441904efc7d190bd94ec989d9cd7acc5327.png';
import { Sparkles, Mic, Brain, Zap } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 md:px-6 py-12 md:py-20 bg-gradient-to-br from-emerald-400 via-teal-500 to-cyan-500 rounded-b-[3rem]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-white/20 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <div className="flex flex-col gap-8 md:gap-12 items-center">
          {/* Avatar - 移动端优先显示 */}
          <div className="relative w-full max-w-sm md:max-w-md order-1">
            <div className="relative z-10">
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 to-cyan-500/30 blur-3xl"></div>
                
                {/* Avatar */}
                <img 
                  src={avatarImage} 
                  alt="青龙安答智能助手" 
                  className="relative z-10 w-full mx-auto drop-shadow-2xl"
                />

                {/* Floating badges - 调整位置避免遮挡头像，增加z-index */}
                <div className="absolute top-8 md:top-14 left-6 md:left-8 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg animate-float z-20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Mic className="w-4 md:w-5 h-4 md:h-5 text-emerald-400" />
                    <span className="text-white font-medium text-sm md:text-base">语音控制</span>
                  </div>
                </div>

                <div className="absolute top-36 md:top-44 right-4 md:right-6 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg animate-float-delayed z-20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Brain className="w-4 md:w-5 h-4 md:h-5 text-cyan-400" />
                    <span className="text-white font-medium text-sm md:text-base">智能学习</span>
                  </div>
                </div>

                <div className="absolute bottom-16 md:bottom-24 left-4 md:left-6 px-3 md:px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-lg animate-float z-20 shadow-xl">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 md:w-5 h-4 md:h-5 text-yellow-400" />
                    <span className="text-white font-medium text-sm md:text-base">实时响应</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content - 移动端在头像下方 */}
          <div className="space-y-6 md:space-y-8 w-full order-2 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span className="text-xs md:text-sm text-emerald-300">AI驱动的智能服务系统</span>
            </div>

            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
              青龙安答
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400 mt-2">
                智能店小二
              </span>
            </h1>

            <p className="text-base md:text-xl text-slate-300 leading-relaxed max-w-2xl mx-auto px-4">
              端侧语音控制 + 专属知识库 + 轻量化大模型，为线下商铺打造的全流程智能服务系统
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4 px-4">
              <button className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-emerald-500/50 transition-all duration-300">
                正在开发中，敬请期待
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                返回顶部
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 pt-8 border-t border-white/10 max-w-lg mx-auto">
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">99.9%</div>
                <div className="text-xs md:text-sm text-slate-400">离线可用率</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">&lt;100ms</div>
                <div className="text-xs md:text-sm text-slate-400">响应速度</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-bold text-white">24/7</div>
                <div className="text-xs md:text-sm text-slate-400">全天服务</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 3s ease-in-out infinite 1.5s;
        }
      `}</style>
    </section>
  );
}