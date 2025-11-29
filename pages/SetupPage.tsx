import React from 'react';
import { AlertTriangle, Info, Terminal, Monitor, Download, Lock, CheckCircle2, ShieldCheck, Settings, Cpu, HardDrive, Box, Cloud, Wrench, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SetupPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      
      <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-vp-border">安装准备</h1>

      {/* 1. 平台要求 */}
      <section id="requirements" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Monitor className="text-brand" size={24} /> 平台要求
        </h2>
        <div className="overflow-x-auto rounded-lg border border-vp-border">
          <table className="w-full text-left text-sm text-gray-400">
            <thead className="bg-vp-sidebar text-white uppercase font-bold">
              <tr>
                <th className="px-6 py-4 text-center">配置项</th>
                <th className="px-6 py-4">系统要求</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-vp-border">
              <tr className="bg-vp-bg hover:bg-vp-sidebar/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white text-center border-r border-vp-border">系统要求</td>
                <td className="px-6 py-4">群晖、威联通、绿联、极空间、Unraid、飞牛fnOS，其它 Linux、Windows 等</td>
              </tr>
              <tr className="bg-vp-bg hover:bg-vp-sidebar/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white text-center border-r border-vp-border">Docker</td>
                <td className="px-6 py-4">全 Docker 安装，群晖可套件安装（不推荐），Windows 安装 App</td>
              </tr>
              <tr className="bg-vp-bg hover:bg-vp-sidebar/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white text-center border-r border-vp-border">内存</td>
                <td className="px-6 py-4">不低于 2GB</td>
              </tr>
              <tr className="bg-vp-bg hover:bg-vp-sidebar/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white text-center border-r border-vp-border">网络要求</td>
                <td className="px-6 py-4">电脑和 NAS 在同一个局域网</td>
              </tr>
              <tr className="bg-vp-bg hover:bg-vp-sidebar/50 transition-colors">
                <td className="px-6 py-4 font-medium text-white text-center border-r border-vp-border">媒体库</td>
                <td className="px-6 py-4">只支持单个硬盘或单个 RAID 组合盘 (非网盘、非挂载)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 2. 准备工作 */}
      <section id="preparation" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <CheckCircle2 className="text-brand" size={24} /> 准备工作
        </h2>
        
        <div className="bg-brand/10 border border-brand/20 rounded-lg p-6 mb-8">
          <div className="flex items-start gap-3">
            <Info className="text-brand shrink-0 mt-0.5" size={20} />
            <div className="space-y-3 text-brand-light">
              <p className="font-bold text-lg mb-2">准备清单</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-300 ml-1">
                <li>
                  准备一台和 <Badge>NAS在同一局域网的电脑</Badge>，并在 <Badge>浏览器</Badge> 打开 NAS 的操作台。
                </li>
                <li>
                  下载安装 <Badge>ToDesk</Badge>，并发送 <Badge>远程控制码</Badge>。<br />
                  <span className="ml-5 text-sm opacity-80">建议将 <Badge>临时密码</Badge> 修改成 <Badge>自定义临时密码</Badge>。</span>
                </li>
                <li>
                  登录你的 <Badge>PT站点</Badge>，最好是官方支持 <Badge>可用于认证</Badge> 的站点。
                </li>
                <li>
                  登录你的 <Badge>豆瓣</Badge> 账号，如果没有 <a href="https://www.douban.com/" target="_blank" rel="noreferrer" className="text-brand hover:underline">点此申请</a>。
                </li>
                <li>
                  准备一个 <Badge>SSH工具</Badge>，并登录 NAS。
                </li>
              </ol>
            </div>
          </div>
        </div>

        {/* 3. ToDesk Section */}
        <h3 className="text-xl font-bold mb-4">发送 ToDesk 远程控制码</h3>
        <div className="bg-brand/10 border border-brand/20 rounded-lg p-4 mb-6">
          <div className="flex items-center gap-2 mb-3 text-brand font-bold">
            <Info size={18} /> 如何发送 ToDesk 远程控制码
          </div>
          <div className="bg-black/40 rounded overflow-hidden flex justify-center p-4 border border-vp-border">
             {/* Placeholder for GIF */}
             <div className="relative group">
                <img 
                    src="/public/mp/todesk.gif" 
                    alt="Todesk演示" 
                    className="max-w-full h-auto rounded shadow-lg"
                    onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        e.currentTarget.nextElementSibling!.classList.remove('hidden');
                    }}
                />
                <div className="hidden flex flex-col items-center justify-center p-8 text-gray-500">
                    <Monitor size={48} className="mb-2 opacity-50"/>
                    <span className="text-sm">演示图片加载失败 (本地资源)</span>
                </div>
             </div>
          </div>
        </div>

        {/* Accordions */}
        <div className="space-y-4 mb-8">
           <Details summary="ToDesk 下载地址">
              <p className="mb-2">最新官网下载地址：<a href="https://daas-personal.todesk.com/download" target="_blank" rel="noreferrer" className="text-brand hover:underline">https://daas-personal.todesk.com/download</a></p>
              <p className="text-sm text-gray-400">MAC 电脑需要给控制权限：<a href="https://www.todesk.com/faq/108.html" target="_blank" rel="noreferrer" className="text-brand hover:underline">方法1</a> &nbsp; <a href="https://www.todesk.com/faq/60.html" target="_blank" rel="noreferrer" className="text-brand hover:underline">方法2</a></p>
           </Details>

           <Details summary="SSH 工具下载地址">
              <ul className="list-disc list-inside space-y-1 text-brand-light">
                <li><a href="https://www.hostbuf.com/t/988.html" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">FinalShell</a></li>
                <li><a href="https://www.putty.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Putty</a></li>
                <li><a href="https://windterm.org/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">WindTerm</a></li>
                <li><a href="https://termius.com/download" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Termius</a></li>
                <li><a href="https://www.terminal.icu/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Xterminal</a></li>
                <li><a href="https://mob.wzhxinkj.cn/index.html" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Mobaxterm</a></li>
                <li><a href="https://tabby.sh" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Tabby</a></li>
              </ul>
           </Details>
        </div>
      </section>

      {/* 4. 站点认证 */}
      <section id="sites" className="mb-12 scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
           <Lock className="text-brand" size={24} /> 站点与认证
        </h2>

        <div className="bg-brand/10 border border-brand/20 rounded-lg p-4 mb-8">
             <h4 className="font-bold text-brand mb-2 flex items-center gap-2"><Info size={16}/> 支持认证的站点</h4>
             <p className="text-gray-300 leading-relaxed font-mono text-sm break-words">
                iyuu, hhclub, audiences, hddolby, zmpt, freefarm, hdfans, wintersakura, leaves, ptba, icc2022, xingtan, ptvicomo, agsvpt, hdkyl, qingwa, discfan, haidan, rousi
             </p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-6 mb-6">
           <h4 className="font-bold text-blue-400 mb-3">为什么要认证</h4>
           <p className="text-gray-300 text-sm leading-relaxed mb-4">
              为了控制用户数量避免大范围泛滥使用，MoviePilot 引入了 PT 用户认证机制，你需要有认证站点范围内的账号才能使用软件的资源搜索、订阅及下载功能。
           </p>
           <p className="text-sm border-l-2 border-blue-500 pl-3 italic text-gray-400">
               软件作者表示：<Badge className="bg-blue-500/20 text-blue-300">出此下策与利益无关，属 NAStool 一路走来，吸取失败经验的无奈之举。</Badge>
           </p>
        </div>

        {/* 认证机制详解 */}
        <div className="mb-6">
            <h4 className="font-bold text-white mb-3 flex items-center gap-2">
                <ShieldCheck size={18} className="text-brand"/> 认证机制详解
            </h4>
            <div className="bg-vp-sidebar border border-vp-border rounded-lg p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">如何完成认证</h5>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            MoviePilot 的认证过程是完全自动化的。您只需要在<b>站点管理</b>中，成功添加并登录（配置 Cookie）任意一个<b>支持认证的 PT 站点</b>。
                            <br/><br/>
                            系统后台会自动检测站点的连通性。一旦检测到您拥有有效且在支持列表中的站点账号，系统会自动解锁全部功能。
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-white mb-2 text-sm uppercase tracking-wider">认证的重要性</h5>
                        <ul className="space-y-2 text-sm text-gray-400">
                            <li className="flex gap-2">
                                <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5"/>
                                <span><b>解锁搜索：</b> 开启全站聚合搜索能力。</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5"/>
                                <span><b>解锁订阅：</b> 开启自动追剧与洗版功能。</span>
                            </li>
                            <li className="flex gap-2">
                                <CheckCircle2 size={16} className="text-brand shrink-0 mt-0.5"/>
                                <span><b>站点保号：</b> 开启自动签到与流量统计。</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-10 flex items-start gap-3">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
            <div>
                <p className="font-bold text-red-500 mb-1">重要提醒</p>
                <p className="text-sm text-red-200/80">如果你没有通过用户认证，下面的私有站点和公开站点都无法维护到系统中，已维护的站点实际也无法使用。</p>
            </div>
        </div>
        
        <h3 className="text-xl font-bold mb-4">PT 站点清单</h3>
        
        <div className="mb-6">
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">私有站点</h4>
            <pre className="bg-black/50 p-4 rounded-lg border border-vp-border overflow-x-auto text-sm text-gray-300 font-mono scrollbar-thin scrollbar-thumb-vp-border">
北邮人、白兔、我堡、海棠、梓喵、聆音、库非、红叶PT、UBits、高清杜比、朋友、大青虫、
铂金家、空间、艾薇、铂金学院、猪猪、小蚂蚁、织梦、OshenPT、冬樱、憨憨、CARPT、
丐帮、熊猫高清、咖啡、iHDBits、百川、蝶粉、FileList、好多油、PT时间、ultrahd、
HDVIDEO、朱雀、北洋园、明教、兽站、JPTV、彩虹岛、老师、家园、莫妮卡、1PTBA、
听听歌、学校、CinemaGeddon、天空、52pt、IPT、城市、葡萄、红豆饭、南洋、Uploads、
伊甸园、备胎、打胶、馒头、吐鲁番、高清时间、2xFree、春天、观众、皇后、龙之家、
瓷器、蝴蝶、幼儿园、阿童木、自由农场、高清视界、开心、他吹吹风、冰淇淋、天雪、
烧包乐园、Rousi、OKPT、猫站、PTLSP、梓喵、象站、AGSVPT、星空、鲨鱼、麒麟、
萝莉、青蛙、蟹黄堡、花梨月下、杏坛、YemaPT、ToSky、海胆之家、HDVBits、PTLGS
            </pre>
        </div>

        <div>
            <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wider">公开站点</h4>
            <pre className="bg-black/50 p-4 rounded-lg border border-vp-border overflow-x-auto text-sm text-gray-300 font-mono scrollbar-thin scrollbar-thumb-vp-border">
Nyaa、TorrentGalaxy、ACG.RIP、MiKan、动漫花园、TorrentLeech
            </pre>
        </div>
      </section>

      {/* 5. 定制指南 - NEW SECTION */}
      <section id="config-guide" className="mb-12 scroll-mt-24">
         <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Settings className="text-brand" size={24} /> 定制配置说明
         </h2>
         <p className="text-gray-300 mb-6">
            在 <Link to="/order" className="text-brand hover:underline">定制页面</Link> 中，我们提供了灵活的硬件与软件组合方案。以下是各配置项的详细说明，帮助您选择最适合自己的方案。
         </p>

         <div className="space-y-6">
            {/* Hardware */}
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
               <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Cpu size={20} className="text-blue-400" /> 核心硬件 (NAS 主机)
               </h3>
               <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-400">
                  <div className="p-3 bg-black/20 rounded">
                     <strong className="block text-white mb-1">基础版 (N100)</strong>
                     适合入门用户，低功耗。支持 4K 视频流畅播放，但重度转码能力有限。
                  </div>
                  <div className="p-3 bg-black/20 rounded">
                     <strong className="block text-white mb-1">进阶版 (i3)</strong>
                     <span className="text-brand">推荐选择。</span>性能均衡，强大的核显支持多人同时转码观看，系统响应更迅速。
                  </div>
                  <div className="p-3 bg-black/20 rounded">
                     <strong className="block text-white mb-1">旗舰版 (i5)</strong>
                     极致性能，支持万兆网络扩展。适合发烧友，可同时运行大量 Docker 容器和虚拟机。
                  </div>
               </div>
            </div>

            {/* Storage */}
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
               <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <HardDrive size={20} className="text-purple-400" /> 存储空间
               </h3>
               <p className="text-sm text-gray-400 mb-3">
                  我们仅提供希捷 (Seagate) 品牌的高品质硬盘。当然，您也可以选择<b>自备硬盘</b>。
               </p>
               <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                  <li><b>酷狼 (IronWolf)：</b> 专为 NAS 设计，CMR 垂直记录技术，静音且运行稳定，适合家庭环境。</li>
                  <li><b>银河 (Exos)：</b> 企业级氦气盘，寿命极长，但运行噪音较大，适合对数据安全性有极高要求的用户。</li>
               </ul>
            </div>

            {/* Software */}
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
               <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                  <Box size={20} className="text-green-400" /> 系统软件服务
               </h3>
               <div className="space-y-3 text-sm">
                  <div className="flex gap-2">
                     <span className="font-bold text-white whitespace-nowrap">纯净系统：</span>
                     <span className="text-gray-400">仅安装底层操作系统 (如 Unraid/FnOS)，不包含任何应用软件。适合喜欢折腾的 DIY 用户。</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="font-bold text-white whitespace-nowrap">全套影音：</span>
                     <span className="text-gray-400">预装 MP + Emby + Qbittorrent，配置好基础的刮削与整理流程。到手即用。</span>
                  </div>
                  <div className="flex gap-2">
                     <span className="font-bold text-white whitespace-nowrap">豪华终极版：</span>
                     <span className="text-gray-400">包含域名申请、SSL 证书配置、DDNS 或内网穿透服务。让您在全球任何地方都能访问家中的影音中心。</span>
                  </div>
               </div>
            </div>

            {/* Cloud & Support */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
                   <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Cloud size={20} className="text-sky-400" /> 云存储挂载
                   </h3>
                   <p className="text-sm text-gray-400">
                      通过 Rclone 或 CD2 技术，将 Google Drive、OneDrive、阿里云盘等挂载为本地磁盘。实现“无限容量”的媒体库，秒级洗版，无需占用本地硬盘空间。
                   </p>
               </div>
               <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
                   <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                      <Wrench size={20} className="text-orange-400" /> 技术支持
                   </h3>
                   <p className="text-sm text-gray-400">
                      <b>标准质保</b>包含硬件故障换新。如需<b>软件层面的教学</b>（如教您如何使用 PT 站、如何优化 Emby 刮削），请选择 VIP 远程调试服务。
                   </p>
               </div>
            </div>
         </div>
         
         <div className="mt-8 text-center">
            <Link to="/order" className="inline-flex items-center gap-2 px-6 py-3 bg-brand hover:bg-brand-dark text-white rounded-full font-bold transition-all">
               前往定制页面 <ArrowRight size={18} />
            </Link>
         </div>
      </section>

      {/* 6. 其它事项 & 警告 */}
      <section id="notes" className="scroll-mt-24">
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <AlertTriangle className="text-red-500" size={24} /> 注意事项
        </h2>
        
        <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4 mb-8 flex items-start gap-3">
            <AlertTriangle className="text-red-500 shrink-0 mt-0.5" size={20} />
            <p className="text-sm text-red-200/80 leading-relaxed">
                因网络原因，Docker 拉取镜像文件可能会比较慢，建议把电脑自动锁定或屏幕保护关闭，避免重复输入密码。
            </p>
        </div>

        <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-6">
            <h4 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2">
                <AlertTriangle size={24}/> 特别提醒
            </h4>
            <ul className="space-y-3 text-red-200/70 text-sm">
                <li className="flex gap-2">
                    <span className="font-bold text-red-400 shrink-0">请勿</span>
                    在任何国内平台宣传 MoviePilot，MoviePilot 仅用于学习交流使用。
                </li>
                <li className="flex gap-2">
                    <span className="font-bold text-red-400 shrink-0">请勿</span>
                    将 MoviePilot 用于商业用途。
                </li>
                <li className="flex gap-2">
                    <span className="font-bold text-red-400 shrink-0">请勿</span>
                    将 MoviePilot 制作为视频内容，于境内视频网站(版权利益方)传播。
                </li>
                <li className="flex gap-2">
                    <span className="font-bold text-red-400 shrink-0">请勿</span>
                    将 MoviePilot 用于任何违反法律法规的行为。
                </li>
                <li className="flex gap-2">
                    <span className="font-bold text-red-400 shrink-0">请勿</span>
                    将本教程在国内任何平台宣传，本教程只作为官方仓库教程补充。
                </li>
            </ul>
        </div>
      </section>
    </div>
  );
};

// Helper Components
const Badge: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className }) => (
  <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium bg-brand/15 text-brand align-middle mx-0.5 ${className || ''}`}>
    {children}
  </span>
);

const Details: React.FC<{ summary: string, children: React.ReactNode }> = ({ summary, children }) => (
    <details className="group bg-vp-sidebar border border-vp-border rounded-lg overflow-hidden">
        <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-vp-sidebar hover:bg-white/5 transition-colors select-none text-brand">
            {summary}
            <span className="transition-transform group-open:rotate-180">
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </span>
        </summary>
        <div className="p-4 border-t border-vp-border bg-black/20 text-sm leading-relaxed">
            {children}
        </div>
    </details>
);

export default SetupPage;