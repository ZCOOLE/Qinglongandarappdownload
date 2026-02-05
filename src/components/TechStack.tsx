import React from 'react';
import { Layers } from 'lucide-react';

const techLayers = [
  {
    layer: '语音交互层',
    techs: ['语音识别 (ASR)', '语音合成 (TTS)', '声纹识别', '降噪处理'],
    color: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/30',
  },
  {
    layer: '智能决策层',
    techs: ['轻量化大模型', '意图识别', '对话管理', '知识检索'],
    color: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/30',
  },
  {
    layer: '知识管理层',
    techs: ['向量数据库', '知识图谱', '文档解析', '实时更新'],
    color: 'from-purple-500/20 to-pink-500/20',
    borderColor: 'border-purple-500/30',
  },
  {
    layer: '端侧运行层',
    techs: ['边缘计算', '模型量化', '缓存优化', '离线运行'],
    color: 'from-orange-500/20 to-red-500/20',
    borderColor: 'border-orange-500/30',
  },
];

export function TechStack() {
  return (
    <section className="relative px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-500/20 rounded-full mb-6">
            <Layers className="w-4 h-4 text-blue-400" />
            <span className="text-xs md:text-sm text-blue-300">技术架构</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 px-4">
            四层架构设计
          </h2>
          <p className="text-base md:text-xl text-slate-400 px-4">
            端到端的智能服务技术栈
          </p>
        </div>

        <div className="space-y-3 md:space-y-4">
          {techLayers.map((layer, index) => (
            <div
              key={index}
              className={`p-4 md:p-6 bg-gradient-to-r ${layer.color} backdrop-blur-sm border ${layer.borderColor} rounded-xl hover:scale-[1.02] transition-transform duration-300`}
            >
              <div className="flex flex-col gap-3 md:gap-4">
                <div className="flex-shrink-0">
                  <h3 className="text-lg md:text-xl font-semibold text-white">
                    {layer.layer}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {layer.techs.map((tech, tIndex) => (
                    <div
                      key={tIndex}
                      className="px-3 md:px-4 py-1.5 md:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg text-slate-200 text-xs md:text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture flow */}
        <div className="mt-8 md:mt-12 p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl">
          <div className="grid grid-cols-2 md:flex md:flex-row md:items-center md:justify-between gap-6 md:gap-4">
            <div className="flex-1 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 bg-gradient-to-br from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                1
              </div>
              <p className="text-sm md:text-base text-slate-300">语音输入</p>
            </div>
            <div className="text-slate-500 text-xl md:text-2xl hidden md:block">→</div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                2
              </div>
              <p className="text-sm md:text-base text-slate-300">智能理解</p>
            </div>
            <div className="text-slate-500 text-xl md:text-2xl hidden md:block">→</div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                3
              </div>
              <p className="text-sm md:text-base text-slate-300">知识检索</p>
            </div>
            <div className="text-slate-500 text-xl md:text-2xl hidden md:block">→</div>
            <div className="flex-1 text-center">
              <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-2 md:mb-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white font-bold text-lg md:text-2xl">
                4
              </div>
              <p className="text-sm md:text-base text-slate-300">智能响应</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}