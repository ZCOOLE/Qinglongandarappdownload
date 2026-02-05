import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CallToAction() {
  return (
    <section className="relative px-6 py-20">
      <div className="max-w-5xl mx-auto">
        {/* Main CTA Card */}
        <div className="relative overflow-hidden p-8 md:p-12 bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-3xl shadow-2xl mb-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
          
          <div className="relative text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              开启智能店小二新时代
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
              降低人力成本，提升服务质量，让每一位客人都享受专业周到的服务体验
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
              <button className="group px-8 py-4 bg-white text-emerald-600 font-semibold rounded-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center gap-2">
                正在开发中，敬请期待
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-lg border-2 border-white/30 hover:bg-white/30 transition-all duration-300"
              >
                返回顶部
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-20 pt-12 border-t border-white/10">
        <div className="flex flex-col items-center gap-4 text-center">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">青龙安答</h3>
            <p className="text-slate-400">智能店小二系统</p>
          </div>
          <div className="text-slate-500 text-sm">
            © 2026 厦门安答迎风科技有限公司. All rights reserved.
          </div>
        </div>
      </div>
    </section>
  );
}