import React from 'react';
import { AlertTriangle, HelpCircle, Cpu, Wrench, Search, DownloadCloud, Monitor, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

const HelpPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-vp-border flex items-center gap-3">
        <HelpCircle className="text-brand" size={36} /> 常见问题
      </h1>

      {/* Tools Quick Links */}
      <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
        <Link to="/gpu-list" className="bg-vp-sidebar border border-vp-border p-4 rounded-xl flex items-center gap-4 hover:border-brand/50 transition-colors group">
            <div className="p-3 bg-brand/10 text-brand rounded-lg group-hover:bg-brand group-hover:text-white transition-colors">
                <Cpu size={24} />
            </div>
            <div>
                <h3 className="font-bold text-white">核显解码性能表</h3>
                <p className="text-sm text-gray-400">查询 CPU 是否支持硬解 AV1/HEVC</p>
            </div>
        </Link>
        <Link to="/docs" className="bg-vp-sidebar border border-vp-border p-4 rounded-xl flex items-center gap-4 hover:border-brand/50 transition-colors group">
            <div className="p-3 bg-blue-500/10 text-blue-500 rounded-lg group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Search size={24} />
            </div>
            <div>
                <h3 className="font-bold text-white">功能文档</h3>
                <p className="text-sm text-gray-400">查看 MoviePilot 详细功能介绍</p>
            </div>
        </Link>
      </div>

      {/* Section 1: 基础与下载 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <DownloadCloud className="text-brand" size={24} /> 基础与下载
        </h2>
        <div className="space-y-4">
            <Accordion title="我该从哪里下载">
                <p className="mb-2 text-gray-300">如果您希望自行部署，MoviePilot 项目开源于 GitHub，您可以直接拉取 Docker 镜像。</p>
                <div className="bg-black/30 p-3 rounded border border-white/10 text-sm font-mono text-gray-300 mb-2">
                    docker pull jxxghp/moviepilot:latest
                </div>
                <p className="text-sm text-gray-400">
                    如果您购买了我们的<b>定制服务</b>，我们将为您全套部署好（包含 MoviePilot、Emby、下载器等），无需您手动操作。
                </p>
            </Accordion>
            
            <Accordion title="我的 PT 账号怎么无法使用了">
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li><b>长期未登录：</b>大多数站点要求每 4-8 周登录一次网站，否则会被标记为不活跃而封禁。</li>
                    <li><b>分享率过低：</b>下载量远大于上传量。建议优先下载 Free（免费）资源来赚取上传量。</li>
                    <li><b>Cookie 过期：</b>MoviePilot 依赖 Cookie 与站点通信。请在“站点管理”中重新获取并保存 Cookie。</li>
                    <li><b>IP 变动异常：</b>部分站点禁止频繁变动 IP 或多 IP 同时登录。</li>
                </ul>
            </Accordion>
        </div>
      </div>

      {/* Section 2: 媒体库管理 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Wrench className="text-brand" size={24} /> 媒体库管理
        </h2>
        <div className="space-y-4">
            <Accordion title="下载后怎么 Emby/Jellyfin/Plex 里没有呢">
                <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li><b>检查刮削状态：</b>MoviePilot 需要先从 TMDB 下载海报和简介（刮削），整理完成后才会通知媒体服务器。</li>
                    <li><b>检查目录映射：</b>请确保 Docker 容器的 Volume 映射正确。MoviePilot 整理后的目录必须被媒体服务器的媒体库读取到。</li>
                    <li><b>手动刷新：</b>进入 Emby/Jellyfin 控制台，点击媒体库右上角的“扫描媒体库”按钮。</li>
                </ol>
            </Accordion>

            <Accordion title="我想删除下载的影片">
                <p className="mb-2 text-gray-300 text-sm">建议通过以下优先顺序进行删除：</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li><b>方式一（推荐）：</b>在 MoviePilot 的“历史记录”或“文件管理”中删除。这样可以同时处理源文件和整理后的链接。</li>
                    <li><b>方式二：</b>在 Emby/Jellyfin 客户端删除。需提前在媒体服务器设置中开启“允许删除媒体”权限。</li>
                </ul>
                <div className="mt-2 bg-yellow-500/10 border border-yellow-500/20 p-3 rounded text-xs text-yellow-200">
                    注意：物理删除文件后，下载器（qbittorrent）中的做种任务可能会报错。建议定期清理下载器中的无效任务。
                </div>
            </Accordion>

            <Accordion title="我用网盘/迅雷下载的影片能不能自动识别">
                <p className="text-gray-300 mb-2 text-sm">可以。请按照以下步骤操作：</p>
                <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li>将外部下载的文件移动到 MoviePilot 监控的<b>“下载目录”</b>中。</li>
                    <li>确保文件名包含<b>中文名</b>和<b>年份</b>（例如：<span className="font-mono text-gray-400">变形金刚.2023.mp4</span>），识别率最高。</li>
                    <li>在 MoviePilot 中手动运行一次“文件整理”任务，或等待系统自动扫描。</li>
                </ol>
            </Accordion>

            <Accordion title="Emby/Jellyfin/Plex 应该怎样设置">
               <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                   <li><b>媒体库路径：</b>添加媒体库时，请选择 Docker 映射的 <span className="font-mono text-gray-400">/media</span> 目录（或您自定义的整理后目录）。</li>
                   <li><b>关闭自带刮削：</b>建议关闭媒体服务器自带的元数据下载器（NFO 阅读器优先），因为 MoviePilot 已经刮削好了，避免覆盖或冲突。</li>
                   <li><b>实时监控：</b>开启“实时监控”选项，以便文件变动时自动刷新。</li>
               </ul>
            </Accordion>
        </div>
      </div>

      {/* Section 3: 播放与客户端 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Monitor className="text-brand" size={24} /> 播放与客户端
        </h2>
        <div className="space-y-4">
            <Accordion title="我播放的时候 NAS 的 CPU 占用很高">
                <p className="mb-2 text-gray-300 text-sm">这是因为 NAS 正在进行<b>软件解码 (CPU 转码)</b>，效率低且占用高。</p>
                <div className="space-y-2">
                    <p className="font-bold text-white text-sm">解决方案：</p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm leading-relaxed">
                        <li><b>开启硬件解码：</b>如果您有 Emby Premiere 或使用 Jellyfin，请在“控制台 -&gt; 播放 -&gt; 转码”中开启硬件加速 (Intel QuickSync)。</li>
                        <li><b>使用原盘播放 (Direct Play)：</b>使用 Infuse、Kodi 等拥有强大解码能力的客户端，让播放设备（手机/电视）解码，NAS 只负责传输数据，CPU 占用几乎为零。</li>
                    </ul>
                </div>
            </Accordion>

            <Accordion title="IOS 上除了 Infuse 还有没有其它 App">
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li><b>VidHub：</b>新兴的国产播放器，支持 Emby/Jellyfin 挂载，界面精美，刮削能力强。</li>
                    <li><b>Fileball：</b>功能强大的文件管理器+播放器，支持挂载云盘和 NAS。</li>
                    <li><b>HamHub：</b>专注于个人媒体库管理。</li>
                    <li><b>官方客户端：</b>Emby 和 Jellyfin 均有官方 iOS App（注：Emby 官方 App 需内购解锁播放限制）。</li>
                </ul>
            </Accordion>

            <Accordion title="怎样设置 Infuse">
                <ol className="list-decimal list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li>打开 Infuse，点击右上角设置图标 -&gt; <b>新增文件来源</b>。</li>
                    <li>在“已保存的共享”下方选择 <b>连接 Emby</b> 或 <b>连接 Jellyfin</b>。</li>
                    <li>输入您的 NAS 地址（如 <span className="font-mono text-gray-400">http://192.168.x.x:8096</span>）、用户名和密码。</li>
                    <li>点击连接，Infuse 会自动同步海报墙数据（速度取决于片量和网络）。</li>
                </ol>
            </Accordion>
        </div>
      </div>

      {/* Section 4: 远程访问 */}
      <div className="mb-10">
        <h2 className="text-2xl font-bold mb-4 text-white flex items-center gap-2">
            <Globe className="text-brand" size={24} /> 远程访问
        </h2>
        <div className="space-y-4">
            <Accordion title="我可以远程操作/观看影片吗">
                <p className="text-gray-300 mb-2 text-sm">当然可以。</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300 text-sm leading-relaxed">
                    <li><b>远程管理：</b>通过 DDNS 或内网穿透（Frp/Tailscale）将 MoviePilot 映射到公网，即可在公司或手机上管理任务。</li>
                    <li><b>远程观影：</b>取决于您家里的<b>上行带宽</b>。
                        <ul className="list-[circle] list-inside ml-5 mt-1 text-gray-400">
                            <li>上行 &gt; 30Mbps：可直接流畅播放 1080P 高码率视频。</li>
                            <li>上行较小：建议在 Emby/Jellyfin 中开启“转码”，将画质压缩后再传输。</li>
                        </ul>
                    </li>
                </ul>
            </Accordion>
             <Accordion title="我可以远程操作吗">
                <p className="text-gray-300 text-sm leading-relaxed">
                    是的。我们推荐使用 <b>ToDesk</b>、<b>向日葵</b> 等远程桌面软件控制您的 NAS 或 PC。
                    <br/>
                    对于高级用户，可以通过 SSH 终端或配置 Web 服务的反向代理来实现网页端的远程管理。
                </p>
            </Accordion>
        </div>
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
    </div>
  );
};

// Reusable Accordion Component
const Accordion: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => {
  return (
    <details className="group bg-vp-sidebar border border-vp-border rounded-lg overflow-hidden">
      <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-vp-sidebar hover:bg-white/5 transition-colors select-none text-[#0099ff] hover:text-brand">
        {title}
        <span className="transition-transform group-open:rotate-180 text-gray-400">
          <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </summary>
      <div className="p-4 border-t border-vp-border bg-black/20">
        {children}
      </div>
    </details>
  );
};

export default HelpPage;