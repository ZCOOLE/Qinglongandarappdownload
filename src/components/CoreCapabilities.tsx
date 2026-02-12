import React from 'react';
import { Target, CheckCircle2 } from 'lucide-react';

const goals = [
  {
    title: '语音快速配置',
    description: '支持店主通过语音指令快速配置系统功能，适配店铺服务场景',
    highlights: ['自然语言理解', '场景自动识别', '一键配置部署'],
  },
  {
    title: '全流程智能服务',
    description: '实现客人接待、咨询解答、需求引导等店小二式全流程服务',
    highlights: ['智能接待问候', '专业咨询解答', '需求精准引导'],
  },
  {
    title: '端侧轻量部署',
    description: '解决端侧大模型部署的轻量化与实时性矛盾，确保离线/弱网环境下稳定运行',
    highlights: ['模型压缩优化', '边缘计算', '离线运行保障'],
  },
  {
    title: '降本增效',
    description: '填补线下商铺"智能服务+个性化适配"的技术缺口，降低人力成本，提升服务质量',
    highlights: ['减少人力成本', '提升服务效率', '保证服务质量'],
  },
];

export function CoreCapabilities() {
  return (
    <section className="relative px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 border border-emerald-200 rounded-full mb-6">
            <Target className="w-4 h-4 text-emerald-600" />
            <span className="text-xs md:text-sm text-emerald-700">核心目标</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 px-4">
            打造智能化店铺服务体系
          </h2>
        </div>

        <div className="space-y-4 md:space-y-6">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group p-6 md:p-8 bg-white/80 backdrop-blur-sm border border-emerald-100 rounded-2xl hover:border-emerald-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                {/* Number Badge */}
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gradient-to-br from-emerald-500 to-cyan-500 rounded-xl text-white font-bold text-lg md:text-xl shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-3 md:space-y-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-slate-800 mb-2">
                      {goal.title}
                    </h3>
                    <p className="text-sm md:text-base text-slate-600 leading-relaxed">
                      {goal.description}
                    </p>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {goal.highlights.map((highlight, hIndex) => (
                      <div
                        key={hIndex}
                        className="flex items-center gap-2 px-3 md:px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                        <span className="text-xs md:text-sm text-slate-700">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}