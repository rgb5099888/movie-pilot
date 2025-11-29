import React from 'react';
import { Cpu, HardDrive, Network, Tv, MemoryStick, CheckCircle2, AlertTriangle, MonitorPlay } from 'lucide-react';
import { Link } from 'react-router-dom';

const RecommendedConfigPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto py-10 px-6">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-brand to-blue-500">
          打造完美的家庭影音 NAS
        </h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          工欲善其事，必先利其器。基于多年的折腾经验，我们为您整理了最适合 MoviePilot + Emby 体系的硬件推荐指南。
        </p>
      </div>

      <div className="grid gap-12">
        
        {/* 1. CPU Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-blue-500/20 rounded-xl text-blue-400">
              <Cpu size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white">核心选择：CPU</h2>
          </div>
          
          <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6 mb-6">
            <p className="text-gray-300 mb-6 leading-relaxed">
              对于影音 NAS 来说，CPU 的核心指标不是跑分，而是 <b>核显编解码能力 (QuickSync)</b>。
              Emby/Jellyfin 需要调用核显将 NAS 中的高码率 4K 视频实时转码为手机/网页能播放的格式。
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <RecommendationCard 
                title="入门首选：N100" 
                badge="高性价比"
                badgeColor="bg-green-500"
                desc="Intel 12代 Alder Lake-N 架构。6W 超低功耗，但拥有与桌面级 12 代酷睿相同的解码引擎，支持 AV1 硬解。适合 1-2 人使用。"
              />
              <RecommendationCard 
                title="进阶推荐：i3-N305" 
                badge="黄金平衡"
                badgeColor="bg-brand"
                desc="8 核心设计，性能比 N100 强 40% 以上。运行 Docker 更流畅，即使后台在刮削/下载，前台播放也不卡顿。"
              />
              <RecommendationCard 
                title="极致性能：i5-1235U/13400" 
                badge="发烧级"
                badgeColor="bg-purple-500"
                desc="桌面级性能。适合 All-in-One 玩家，同时运行软路由、Windows 虚拟机和大量微服务。"
              />
            </div>
          </div>
        </section>

        {/* 2. Storage Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-purple-500/20 rounded-xl text-purple-400">
              <HardDrive size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white">存储：硬盘与缓存</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">机械硬盘 (HDD)</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span><b>必须使用 CMR 垂直盘：</b> 坚决拒绝 SMR 叠瓦盘，SMR 盘在进行 RAID 校验或大量写入时极易掉速甚至损坏数据。</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span><b>推荐型号：</b> 希捷酷狼 (IronWolf)、希捷银河 (Exos)、西数红盘 Plus (Red Plus/Pro)。</span>
                </li>
                <li className="flex gap-3">
                  <AlertTriangle className="text-yellow-500 shrink-0" size={20} />
                  <span><b>噪音提示：</b> 企业级硬盘（如银河/HC550）虽然寿命长但噪音如炒豆子，放在卧室需慎重。</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
              <h3 className="text-xl font-bold text-white mb-4">固态硬盘 (SSD)</h3>
              <ul className="space-y-4 text-sm text-gray-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span><b>系统与 Docker 盘：</b> 强烈建议准备一条 512GB 以上的 NVMe SSD 专门用于安装系统、Docker 容器和 Emby 刮削数据。</span>
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="text-brand shrink-0" size={20} />
                  <span><b>海报墙加速：</b> 将 Emby 的 metadata 目录放在 SSD 上，浏览几千部电影的海报墙时才能做到丝般顺滑，秒加载。</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 3. Memory & Network */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
               <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl text-green-400">
                  <MemoryStick size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white">内存 (RAM)</h2>
              </div>
              <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6 h-full">
                <ul className="space-y-3 text-gray-300">
                   <li><b>最低要求：</b> 4GB (勉强运行)</li>
                   <li><b>推荐配置：</b> 8GB - 16GB</li>
                   <li><b>说明：</b> ZFS 文件系统（如 TrueNAS）或 Emby 实时转码都比较吃内存。内存越大，系统将更多文件缓存在 RAM 中，机械硬盘读写噪音越小。</li>
                </ul>
              </div>
            </div>

            <div>
               <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl text-orange-400">
                  <Network size={32} />
                </div>
                <h2 className="text-2xl font-bold text-white">网络环境</h2>
              </div>
              <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6 h-full">
                 <ul className="space-y-3 text-gray-300">
                   <li><b>内网：</b> 推荐全链路 <b>2.5G 网络</b> (交换机、路由器、网线)。4K 原盘码率最高可达 100Mbps+，千兆网络 (1000Mbps) 虽够用，但 2.5G 传输文件更爽快。</li>
                   <li><b>外网：</b> 建议申请 <b>公网 IPv4</b> 或 IPv6。如果没有公网 IP，需使用 Tailscale、Zerotier 或内网穿透服务。</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Client Section */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="p-3 bg-red-500/20 rounded-xl text-red-400">
              <Tv size={32} />
            </div>
            <h2 className="text-2xl font-bold text-white">播放终端推荐</h2>
          </div>
          
          <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
             <p className="text-gray-300 mb-6">
                好的 NAS 只是服务端，优秀的播放体验离不开强大的客户端。<b>尽量让客户端解码 (Direct Play)</b>，减轻 NAS 负担。
             </p>
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="border border-vp-border rounded-lg p-4 bg-black/20">
                   <h4 className="font-bold text-white text-lg mb-2">Apple TV 4K</h4>
                   <p className="text-gray-400 mb-3">搭配 <b>Infuse</b> Pro，目前地球上最优雅、画质最好、体验最丝滑的播放方案。支持杜比视界 (Profile 5/8) 和空间音频。</p>
                   <span className="text-brand font-bold">推荐指数：★★★★★</span>
                </div>
                <div className="border border-vp-border rounded-lg p-4 bg-black/20">
                   <h4 className="font-bold text-white text-lg mb-2">Nvidia Shield TV Pro</h4>
                   <p className="text-gray-400 mb-3">安卓阵营的机皇。透传音频能力最强（支持 TrueHD Atmos, DTS:X），Kodi 爱好者的首选。</p>
                   <span className="text-brand font-bold">推荐指数：★★★★☆</span>
                </div>
                <div className="border border-vp-border rounded-lg p-4 bg-black/20">
                   <h4 className="font-bold text-white text-lg mb-2">国产安卓盒子/电视</h4>
                   <p className="text-gray-400 mb-3">如芝杜 (Zidoo) 或安装了 Kodi 的索尼电视。性价比高，但界面体验和刮削能力略逊于 Apple TV。</p>
                   <span className="text-brand font-bold">推荐指数：★★★☆☆</span>
                </div>
             </div>
          </div>
        </section>

        {/* CTA */}
        <div className="text-center mt-8">
           <p className="text-gray-400 mb-4">不想自己费心挑选硬件？来看看我们为您搭配好的整机方案</p>
           <Link to="/order" className="inline-flex items-center gap-2 px-8 py-3 bg-brand hover:bg-brand-dark text-white rounded-full font-bold transition-all shadow-lg shadow-brand/20">
             <MonitorPlay size={20} /> 前往定制页面
           </Link>
        </div>

      </div>
    </div>
  );
};

// Helper Component for CPU Cards
const RecommendationCard = ({ title, badge, badgeColor, desc }: { title: string, badge: string, badgeColor: string, desc: string }) => (
  <div className="bg-black/20 border border-vp-border rounded-lg p-5 hover:border-brand/50 transition-colors">
    <div className="flex justify-between items-start mb-3">
       <h3 className="font-bold text-white text-lg">{title}</h3>
       <span className={`text-xs text-white px-2 py-1 rounded ${badgeColor}`}>{badge}</span>
    </div>
    <p className="text-gray-400 text-sm leading-relaxed">
       {desc}
    </p>
  </div>
);

export default RecommendedConfigPage;