import React, { useState, useMemo, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { CONFIG_OPTIONS } from '../constants';
import { ProductConfig } from '../types';
import { Check, Cpu, HardDrive, Box, Wrench, Info, Cloud, Monitor, Server, HelpCircle, Star } from 'lucide-react';

// Detailed tooltips for each option
const OPTION_TOOLTIPS: Record<string, string> = {
  // Hardware
  h0: "无需购买硬件。您可以使用现有的 NAS、闲置 PC 或服务器。我们将远程协助您安装系统环境。",
  h1: "采用 Intel N100 处理器，6W 超低功耗，被动散热零噪音。支持 AV1 硬件解码，适合 1-2 人家庭轻度使用。",
  h2: "搭载 Intel i3-N305 八核处理器，性能强劲且节能。支持 Docker 多开，适合 3-5 人家庭及重度影音爱好者。",
  h3: "企业级 i5 处理器，32G 大内存，配备万兆网卡。适合 All-in-One 玩家，可流畅运行软路由、Windows 虚拟机及大量服务。",
  
  // Storage
  s0: "不包含硬盘。请确保您自备的硬盘健康状况良好，建议使用 CMR 垂直记录技术的 NAS 专用盘。",
  s1: "希捷酷狼 (IronWolf) 系列，专为 NAS 7x24 小时运行设计。CMR 技术，数据更安全，3 年质保。",
  s2: "目前性价比最高的黄金容量。CMR 垂直盘，运行稳定。可存储约 200-300 部 4K 原盘电影或数千集剧集。",
  s3: "希捷银河 (Exos) 企业级氦气盘。拥有极致的可靠性和超大容量，适合囤积大量 4K 原盘数据的收藏家。",

  // Software
  sw1: "仅安装底层操作系统 (Debian/Unraid/FnOS)，提供 Root 权限。不包含任何应用配置，适合熟悉 Linux 的高阶用户 DIY。",
  sw2: "配置基础影音环境，包括 MoviePilot、Qbittorrent 及 CookieCloud。解决 PT 站点认证、保号和自动下载问题。",
  sw3: "完整的家庭影院体验。增加 Emby/Jellyfin 媒体服务器，配置自动刮削、海报墙展示，支持全平台客户端播放。",
  sw4: "尊享服务。配置企业微信/Telegram 机器人，实现手机端远程控制、下载通知、服务状态监控，随时随地掌握 NAS 状态。",

  // Cloud
  c0: "仅使用本地硬盘存储。适合没有云盘会员或对数据隐私有极致要求的用户。",
  c1: "配置 Rclone 挂载 Google Drive，需自备账号及 API。适合拥有无限容量 GD 账号的用户。",
  c2: "挂载 OneDrive 或 SharePoint。适合 Office 365 E5/家庭版用户，将云端文件作为本地磁盘使用。",
  c3: "推荐国内用户。使用 CloudDrive2 挂载阿里云盘或 115 网盘，实现云端秒播，无需占用本地空间即可观看 4K 原盘。",

  // Support
  sp0: "仅包含硬件官方质保（如有）。软件使用、配置修改等问题需自行查阅文档解决。",
  sp1: "提供 3 个月 VIP 专属群服务。工程师 1 对 1 远程协助解决疑难杂症，提供软件使用教学，保姆式服务。"
};

const OrderPage: React.FC = () => {
  // Mode state: 'software' (Service only) or 'hardware' (Full package)
  const [orderType, setOrderType] = useState<'software' | 'hardware'>('software');

  // State for selections
  const [hardware, setHardware] = useState<string>('h0');
  const [storage, setStorage] = useState<string>('s0');
  const [software, setSoftware] = useState<string>('sw3'); // Default to Viewing Config (sw3)
  const [cloud, setCloud] = useState<string>('c3');
  const [support, setSupport] = useState<string>('sp1');
  
  const location = useLocation();

  // Reset/Set defaults when switching modes
  useEffect(() => {
    if (orderType === 'software') {
      // Software mode: Hardware and Storage are self-provided (id ends with 0 or h0)
      setHardware('h0'); 
      setStorage('s0');
      // If the current software selection is 'sw1' (Pure System), reset it to 'sw3' because sw1 is hidden in this mode
      if (software === 'sw1') {
        setSoftware('sw3');
      }
    } else {
      // Hardware mode: Set recommend defaults
      setHardware('h2');
      setStorage('s2');
    }
  }, [orderType]);

  // Handle hash scrolling
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100); // Slight delay to ensure render
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  // Filter options
  const hardwareOpts = CONFIG_OPTIONS.filter(o => o.category === 'hardware' && (orderType === 'hardware' ? o.id !== 'h0' : true));
  const storageOpts = CONFIG_OPTIONS.filter(o => o.category === 'storage');
  
  const softwareOpts = CONFIG_OPTIONS.filter(o => {
    if (o.category !== 'software') return false;
    if (orderType === 'software' && o.id === 'sw1') return false;
    return true;
  });

  const cloudOpts = CONFIG_OPTIONS.filter(o => o.category === 'cloud');
  const supportOpts = CONFIG_OPTIONS.filter(o => o.category === 'support');

  // Calculate Total
  const total = useMemo(() => {
    const selectedIds = [hardware, storage, software, cloud, support];
    return CONFIG_OPTIONS
      .filter(o => selectedIds.includes(o.id))
      .reduce((sum, item) => sum + item.price, 0);
  }, [hardware, storage, software, cloud, support, orderType]);

  const getOption = (id: string) => CONFIG_OPTIONS.find(o => o.id === id);

  const SelectionCard = ({ 
    options, 
    selectedId, 
    onSelect, 
    title, 
    icon: Icon,
    isVisible = true
  }: { 
    options: ProductConfig[], 
    selectedId: string, 
    onSelect: (id: string) => void,
    title: string,
    icon: any,
    isVisible?: boolean
  }) => {
    if (!isVisible) return null;
    return (
      <div className="mb-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
        <h3 className="flex items-center gap-3 text-2xl font-bold mb-6 text-white border-l-4 border-brand pl-4">
          <Icon className="text-brand" size={28} /> {title}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {options.map((option) => {
            const isSelected = selectedId === option.id;
            const tooltipText = OPTION_TOOLTIPS[option.id];

            return (
              <div
                key={option.id}
                onClick={() => onSelect(option.id)}
                className={`group relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer overflow-visible ${
                  isSelected
                    ? 'border-brand bg-brand/10 shadow-[0_0_20px_rgba(16,185,129,0.15)] transform scale-[1.01]'
                    : 'border-vp-border bg-vp-sidebar hover:border-gray-500 hover:bg-vp-sidebar/80'
                }`}
              >
                {/* Highlight Badge */}
                {option.highlight && (
                  <div className="absolute -top-3 -right-2 z-10">
                    <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold text-white bg-gradient-to-r from-orange-500 to-red-600 rounded-full shadow-md">
                      <Star size={10} fill="currentColor" /> 热门推荐
                    </span>
                  </div>
                )}

                <div className="flex justify-between items-start mb-3">
                  <h4 className={`text-lg font-bold flex items-center gap-2 ${isSelected ? 'text-brand-light' : 'text-gray-100'}`}>
                    {option.name}
                  </h4>
                  <div className={`p-1 rounded-full ${isSelected ? 'bg-brand text-white' : 'bg-gray-700 text-gray-400'}`}>
                    <Check size={14} strokeWidth={3} />
                  </div>
                </div>

                <p className={`text-sm mb-4 leading-relaxed ${isSelected ? 'text-gray-300' : 'text-gray-400'}`}>
                  {option.description}
                </p>

                <div className="flex justify-between items-end border-t border-white/5 pt-3 mt-auto">
                   {/* Tooltip Trigger */}
                   <div className="relative group/tooltip">
                      <div className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-brand transition-colors py-1">
                        <HelpCircle size={14} /> 详情
                      </div>
                      {/* Tooltip Content */}
                      <div className="absolute bottom-full left-0 mb-2 w-64 p-4 bg-gray-900 border border-gray-700 text-gray-200 text-xs rounded-xl shadow-2xl opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all duration-200 z-50 pointer-events-none transform translate-y-1 group-hover/tooltip:translate-y-0">
                         {tooltipText}
                         <div className="absolute -bottom-1.5 left-4 w-3 h-3 bg-gray-900 border-b border-r border-gray-700 transform rotate-45"></div>
                      </div>
                   </div>

                   <span className={`text-lg font-mono font-bold ${isSelected ? 'text-white' : 'text-gray-400'}`}>
                      {option.price === 0 ? '免费/自备' : `¥ ${option.price}`}
                   </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col">
      <div className="pt-24 pb-20 px-4 md:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            定制你的私人影音云
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            请选择适合您的定制方案，我们提供从硬件选配、系统安装到软件配置的全流程服务，打造开箱即用的家庭影音中心。
          </p>
        </div>

        {/* Mode Switcher Tabs */}
        <div className="flex justify-center mb-16 sticky top-20 z-30">
          <div className="bg-black/40 backdrop-blur-md p-1.5 rounded-2xl border border-vp-border flex gap-2 shadow-2xl">
            <button
              onClick={() => setOrderType('software')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                orderType === 'software'
                  ? 'bg-brand text-white shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Monitor size={20} />
              系统配置服务 (自备设备)
            </button>
            <button
              onClick={() => setOrderType('hardware')}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 ${
                orderType === 'hardware'
                  ? 'bg-blue-600 text-white shadow-lg scale-105'
                  : 'text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              <Server size={20} />
              整机定制 (含硬件)
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 relative">
          {/* Left: Configuration Form */}
          <div className="flex-1 min-w-0">
            
            {/* Conditional Hardware Selection */}
            <SelectionCard 
              title="核心硬件 (NAS 主机)" 
              icon={Cpu} 
              options={hardwareOpts} 
              selectedId={hardware} 
              onSelect={setHardware}
              isVisible={orderType === 'hardware'}
            />
            
            {/* Conditional Storage Selection */}
            <SelectionCard 
              title="存储空间 (硬盘)" 
              icon={HardDrive} 
              options={storageOpts} 
              selectedId={storage} 
              onSelect={setStorage} 
              isVisible={orderType === 'hardware'}
            />
            
            <SelectionCard 
              title="系统软件服务" 
              icon={Box} 
              options={softwareOpts} 
              selectedId={software} 
              onSelect={setSoftware} 
            />
            <SelectionCard 
              title="云存储挂载服务" 
              icon={Cloud} 
              options={cloudOpts} 
              selectedId={cloud} 
              onSelect={setCloud} 
            />
            <SelectionCard 
              title="技术支持与售后" 
              icon={Wrench} 
              options={supportOpts} 
              selectedId={support} 
              onSelect={setSupport} 
            />
          </div>

          {/* Right: Summary Sticky Panel */}
          <div className="lg:w-96 flex-shrink-0">
            <div className="sticky top-32 bg-vp-sidebar/80 backdrop-blur border border-vp-border rounded-2xl p-6 shadow-2xl ring-1 ring-white/5">
              <div className="mb-6 pb-4 border-b border-vp-border flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">配置清单</h3>
                <span className={`text-xs px-2.5 py-1 rounded-full font-bold border ${
                    orderType === 'software' 
                    ? 'border-brand/30 text-brand bg-brand/10' 
                    : 'border-blue-500/30 text-blue-400 bg-blue-500/10'
                }`}>
                    {orderType === 'software' ? '纯软件服务' : '含硬件整机'}
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <SummaryRow label="主机" value={getOption(hardware)?.name} />
                <SummaryRow label="硬盘" value={getOption(storage)?.name} />
                <SummaryRow label="系统" value={getOption(software)?.name} />
                <SummaryRow label="云挂载" value={getOption(cloud)?.name} />
                <SummaryRow label="服务" value={getOption(support)?.name} />
              </div>

              <div className="bg-black/20 rounded-xl p-4 mb-6 border border-vp-border/50">
                <div className="flex justify-between items-end mb-1">
                  <span className="text-gray-400 text-sm">预估总价</span>
                  <span className={`text-3xl font-bold ${orderType === 'software' ? 'text-brand' : 'text-blue-500'}`}>
                    ¥ {total}
                  </span>
                </div>
                <p className="text-xs text-right text-gray-500">
                    {orderType === 'hardware' ? '含税 / 顺丰包邮' : '一次性收费 / 无后续费用'}
                </p>
              </div>

              <button 
                className={`w-full py-4 text-white font-bold rounded-xl transition-all shadow-lg hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-2 ${
                    orderType === 'software' 
                    ? 'bg-brand hover:bg-brand-dark shadow-brand/20' 
                    : 'bg-blue-600 hover:bg-blue-700 shadow-blue-500/20'
                }`}
                onClick={() => {
                   // Generate a mock order ID
                   const mockOrderId = `ORD-${Date.now().toString().slice(-6)}`;
                   const orderDetails = {
                       id: mockOrderId,
                       type: orderType,
                       items: [
                           getOption(hardware),
                           getOption(storage),
                           getOption(software),
                           getOption(cloud),
                           getOption(support)
                       ].filter(Boolean),
                       total: total,
                       date: new Date().toISOString()
                   };
                   // Navigate to payment page (Mock)
                   // In a real app, you'd use navigate('/payment', { state: orderDetails })
                   // For now, let's use the alert as per previous behavior but prepare for payment flow
                   window.location.href = `/#/payment?orderId=${mockOrderId}&amount=${total}`;
                }}
              >
                提交{orderType === 'software' ? '服务' : '整机'}订单
              </button>
              
              <div className="mt-4 flex items-start gap-2 text-xs text-gray-500">
                <Info size={14} className="mt-0.5 flex-shrink-0" />
                <p>
                    {orderType === 'hardware' 
                     ? '定制机器发货周期为 3-5 个工作日。硬件享受官方质保，软件配置出厂即用。' 
                     : '下单后请联系客服提供向日葵/ToDesk 识别码，工程师将在 24 小时内完成部署。'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SummaryRow = ({ label, value }: { label: string, value?: string }) => (
  <div className="flex justify-between text-sm group">
    <span className="text-gray-500 group-hover:text-gray-400 transition-colors">{label}</span>
    <span className="text-gray-300 text-right max-w-[65%] truncate group-hover:text-white transition-colors" title={value}>
        {value || '-'}
    </span>
  </div>
);

export default OrderPage;
