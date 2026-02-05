import React from 'react';
import { Mic, Database, Cpu, Wifi, Users, Settings } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: '端侧语音控制',
    description: '店主通过语音指令快速配置系统功能，适配个性化服务场景',
    color: 'from-emerald-500 to-green-500',
  },
  {
    icon: Database,
    title: '专属知识库',
    description: '店铺定制化知识库，精准理解业务需求和产品信息',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Cpu,
    title: '轻量化大模型',
    description: '端侧部署，解决大模型轻量化与实时性矛盾',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Wifi,
    title: '离线稳定运行',
    description: '弱网或离线环境下依然稳定运行，不受网络限制',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Users,
    title: '全流程服务',
    description: '客人接待、咨询解答、需求引导等店小二式完整服务',
    color: 'from-teal-500 to-emerald-500',
  },
  {
    icon: Settings,
    title: '快速适配',
    description: '灵活配置，快速适应不同店铺场景和服务需求',
    color: 'from-indigo-500 to-blue-500',
  },
];

export function Features() {
  return (
    <section className="relative px-4 md:px-6 py-12 md:py-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            核心特性
          </h2>
          <p className="text-base md:text-xl text-slate-400 px-4">
            为线下商铺打造的智能服务解决方案
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 hover:scale-105"
            >
              {/* Icon */}
              <div className={`inline-flex p-3 bg-gradient-to-br ${feature.color} rounded-xl mb-4 shadow-lg`}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-semibold text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-slate-400 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}