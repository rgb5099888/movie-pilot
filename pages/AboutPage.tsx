import React from 'react';
import { Heart, Users, ShieldCheck } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-16 px-6">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">关于我们</h1>
        <div className="w-16 h-1 bg-brand mx-auto rounded-full"></div>
        <p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          NAS Pilot 致力于为您提供<span className="text-brand font-semibold">开箱即用</span>的家庭影音解决方案。
          我们深知配置一台完美的 NAS 需要花费大量的时间和精力学习 Linux、Docker 和网络知识。
          我们的使命是降低门槛，通过软硬结合的方式，让每个人都能轻松享受自动化影音带来的乐趣。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-20">
        <div className="p-8 rounded-2xl bg-vp-sidebar border border-vp-border hover:border-brand/30 transition-colors">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-red-500">
            <Heart size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">用爱发电</h3>
          <p className="text-gray-400 leading-relaxed">
            源于对影音技术的热爱，我们不断探索最佳的软件组合与硬件配置，只为呈现最流畅的观影体验。
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-vp-sidebar border border-vp-border hover:border-brand/30 transition-colors">
          <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-blue-500">
            <Users size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">社群支持</h3>
          <p className="text-gray-400 leading-relaxed">
            购买不仅仅是交易的结束。加入我们的 VIP 用户群，与数百位影音爱好者交流心得，获取最新玩法。
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-vp-sidebar border border-vp-border hover:border-brand/30 transition-colors">
          <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 text-green-500">
            <ShieldCheck size={32} />
          </div>
          <h3 className="text-xl font-bold mb-3 text-white">品质承诺</h3>
          <p className="text-gray-400 leading-relaxed">
            严选一线品牌硬件，经过 24 小时满载压力测试。软件系统经过深度调优，确保稳定运行不掉链。
          </p>
        </div>
      </div>

      <div className="bg-vp-sidebar border border-vp-border rounded-2xl p-8 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-center">我们的历程</h2>
        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-brand before:to-transparent">
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-vp-bg bg-vp-sidebar group-[.is-active]:bg-brand text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold text-xs">2022</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-black/20 border border-vp-border">
              <div className="font-bold text-white mb-1">项目启动</div>
              <p className="text-gray-400 text-sm">开始探索 NAS 媒体库自动化方案，基于 NAStool 进行二次开发与优化。</p>
            </div>
          </div>
          
          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-vp-bg bg-vp-sidebar group-[.is-active]:bg-brand text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold text-xs">2023</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-black/20 border border-vp-border">
              <div className="font-bold text-white mb-1">社区成立</div>
              <p className="text-gray-400 text-sm">建立首个技术交流群，汇聚了 500+ 核心用户，共同完善配置模板。</p>
            </div>
          </div>

          <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
             <div className="flex items-center justify-center w-10 h-10 rounded-full border border-vp-bg bg-vp-sidebar group-[.is-active]:bg-brand text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
              <span className="font-bold text-xs">2024</span>
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded bg-black/20 border border-vp-border">
              <div className="font-bold text-white mb-1">NAS Pilot 平台上线</div>
              <p className="text-gray-400 text-sm">正式推出一站式定制服务，解决用户“硬件选择难、软件配置难”的痛点。</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-16 text-center text-gray-500 text-sm">
        <p>&copy; {new Date().getFullYear()} NAS Pilot. All rights reserved.</p>
      </div>
    </div>
  );
};

export default AboutPage;