import React from 'react';
import { 
  Download, 
  ExternalLink, 
  Globe, 
  Github, 
  Search, 
  Rss, 
  FolderCog, 
  Bell, 
  Puzzle, 
  Globe2,
  Terminal,
  LayoutDashboard,
  DownloadCloud,
  Languages,
  AlertTriangle,
  Info,
  CheckCircle2,
  ShieldCheck,
  Lock
} from 'lucide-react';

const DocPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      
      {/* 1. Intro / Meet Them Section */}
      <section id="intro" className="mb-12 scroll-mt-24">
        <h1 className="text-4xl font-bold mb-8">认识他们</h1>
        
        <Tip title="什么是 MoviePilot">
            <h4 className="font-bold text-white mb-2">MoviePilot</h4>
            <p className="mb-4">MoviePilot 的作用是影视的搜索、刮削、整理、订阅等功能。它拥有现代化的管理界面。</p>
            <img src="/public/mp/moviepilot_dashboard.png" alt="MoviePilot Dashboard" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                 onError={(e) => e.currentTarget.style.display='none'} />
        </Tip>

        <Tip title="什么是 Emby/Jellyfin/PLEX">
            <div className="space-y-8">
                <div>
                    <h4 className="font-bold text-white mb-2">Emby</h4>
                    <p className="mb-2">Emby 是一款优秀的媒体服务器软件，致力于为用户提供丰富的多媒体体验。</p>
                    <img src="/public/mp/emby_dashboard.png" alt="Emby Dashboard" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'} />
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Jellyfin</h4>
                    <p className="mb-2">Jellyfin 是 Emby 的开源免费分支，无付费墙，完全免费。</p>
                    <img src="/public/mp/jellyfin_dashboard.png" alt="Jellyfin Dashboard" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'} />
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Plex</h4>
                    <p className="mb-2">Plex 是一款功能强大的媒体中心软件，界面华丽，支持全平台。</p>
                    <img src="/public/mp/plex_dashboard.png" alt="Plex Dashboard" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'} />
                </div>
            </div>
        </Tip>

        <Details summary="什么是 qBittorrent/Transmission">
            <div className="space-y-6">
                <div>
                    <h4 className="font-bold text-white mb-2">qBittorrent</h4>
                    <p className="mb-2">qBittorrent 是一款开源免费的种子和磁力链接下载工具，支持 Windows、Mac 和 Linux，且功能非常强大。</p>
                    {/* Placeholder or reuse transmission image if specific qb image not available, but user provided transmission */}
                    <img src="/public/mp/qbittorrent.png" alt="qbittorrent" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'} />
                </div>
                <div>
                    <h4 className="font-bold text-white mb-2">Transmission</h4>
                    <p className="mb-2">Transmission 是一款开源免费的种子和磁力链接下载工具，以简洁稳定著称。</p>
                    <img src="/public/mp/transmission.png" alt="transmission" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'} />
                </div>
            </div>
        </Details>

        <Details summary="什么是 ChineseSubFinder">
            <div>
                <h4 className="font-bold text-white mb-2">ChineseSubFinder</h4>
                <p className="mb-2">ChineseSubFinder 是一个开源项目，专注于自动化下载特定条件下的中文字幕。</p>
                <img src="/public/mp/chinesesubfinder.png" alt="ChineseSubFinder" className="rounded-lg max-w-full h-auto shadow-lg border border-white/10" 
                     onError={(e) => e.currentTarget.style.display='none'} />
            </div>
        </Details>

        <Tip title="什么是 PT 下载">
            <div className="space-y-4">
                <div>
                    <h4 className="font-bold text-white mb-1">什么是 PT 下载</h4>
                    <p>PT（英语：Private Tracker）是一种 BitTorrent 协议的 P2P 下载方式的另一种形式，“Private Tracker”指私有种子服务器。<br/>PT 下载与 BT 最大的不同点为：进行私密范围下载，并且记录每一个用户的详细数据。</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1">PT 下载的特点</h4>
                    <p>PT 可进行私密范围下载，因此提供 PT 的网站大多非公开的，采用 <Badge>邀请制</Badge> 或是不定时 <Badge>开放注册</Badge>。用户注册后会得到一个 passkey，因此可借由 passkey 识别每个用户，用户从某 PT 站下载种子后，该种子即带有用户的 passkey，这同时也是计算个人账户流量的方式，亦可透过站内其他方式购买流量(虚拟货币交易)以供下载之用。</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1">PT 邀请注册</h4>
                    <p>为了控制用户数量，关闭自由注册的 PT 网站一般采用邀请码制度，由已注册的用户向自己所信任的人发送邀请，以确保用户质量。有一些站点还会允许用户通过官方渠道 <Badge>捐助</Badge> 或 <Badge>购买邀请码</Badge> 以获得邀请。</p>
                </div>
                <div>
                    <h4 className="font-bold text-white mb-1">PT 账号维护</h4>
                    <p>由于有 passkey，用户上传及下载即可统计，在大多数的 PT 站会以上下载比例 <Badge>即分享率</Badge> 规定用户需上传多少后才可下载多少，有些站甚至会以用户上传及下载的内容等做积分值，<Badge type="warning">分享率过低者会被系统取消使用 PT 的资格</Badge>。由于需有足够的分享率方可下载，因此有些用户会租用网络上有大带宽的 Seedbox 以提高自己的上传率。</p>
                </div>
            </div>
        </Tip>
      </section>

      {/* 2. Workflow Section */}
      <section id="workflow" className="mb-16 scroll-mt-24">
         <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="text-brand" size={32} /> 实现自动观影的工作原理
         </h2>
         <Tip title="工作流程">
            <ol className="list-decimal list-inside space-y-3 text-gray-300">
                <li>
                    用户通过 <Badge>MoviePilot</Badge> 搜索电影/电视剧，系统根据用户 <Badge>输入/选择</Badge> 的内容从已添加的 <Badge>PT站点</Badge> 搜索资源。<br/>
                    <span className="ml-5 text-sm opacity-70">若系统显示 <Badge type="warning">未找到资源</Badge>，表示你选择的 <Badge>PT站点</Badge> 还暂时未收录该影片。</span>
                </li>
                <li>
                    用户在 <Badge>搜索结果</Badge> 中，根据需求情况（包括分辨率、资源大小、是否免费等）选择需要下载的影片。
                </li>
                <li>
                    系统根据 <Badge>用户选择</Badge>，自动传送下载指令，<Badge>qbittorrent</Badge> 开始下载。
                </li>
                <li>
                    <Badge>qbittorrent</Badge> 下载完成后，<Badge>MoviePilot</Badge> 从 <Badge>TMDB</Badge> 进行 <Badge>刮削</Badge>，下载影视简介、封面图等信息。
                </li>
                <li>
                    刮削完成后，系统传送指令给 <Badge>Emby/jellyfin/PLEX</Badge>，进行媒体库更新。
                </li>
                <li>
                    用户通过 <Badge>Emby/jellyfin/PLEX</Badge> 网页或 App 观影。
                </li>
            </ol>
         </Tip>
      </section>

      <hr className="border-vp-border mb-16" />

      {/* 3. Existing Detailed Sections (MoviePilot, Emby, etc.) */}
      {/* MoviePilot Detail */}
      <section id="moviepilot" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-xl">MP</div>
          <h2 className="text-3xl font-bold">MoviePilot 详情</h2>
        </div>
        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
          MoviePilot 是基于 NAStool 重构的新一代媒体库自动化管理工具。它不仅界面现代化，更在算法和性能上进行了深度优化。
        </p>
        
        {/* Core Features Cards */}
        <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
          <LayoutDashboard className="text-brand" size={24} /> 核心特性
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          <FeatureCard icon={Search} title="聚合搜索" desc="一键搜索所有配置的 PT/BT 站点资源，智能择优下载。" />
          <FeatureCard icon={Rss} title="订阅追剧" desc="想看什么直接订阅，上映后自动加入下载队列。" />
          <FeatureCard icon={FolderCog} title="整理刮削" desc="自动识别重命名，下载海报、演职员表，完美适配 Emby。" />
          <FeatureCard icon={Globe2} title="站点管理" desc="自动管理站点 Cookie，支持自动签到保号、流量统计。" />
          <FeatureCard icon={Bell} title="即时通讯" desc="支持微信、Telegram、Slack 等通知渠道，交互式控制。" />
          <FeatureCard icon={Puzzle} title="插件扩展" desc="支持字幕下载、刷流工具等多种扩展功能。" />
        </div>

        {/* Telegram Notification Showcase */}
        <div className="mb-10">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Bell className="text-brand" size={24} /> 交互式通知体验
            </h3>
            <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6 flex flex-col md:flex-row gap-6 items-center">
                <div className="flex-1">
                    <p className="text-gray-300 mb-4 leading-relaxed">
                        MoviePilot 支持双向交互通知。您不仅可以接收下载完成、刮削完毕的通知，还可以直接在 Telegram 或微信中回复指令来搜索资源、管理任务。
                    </p>
                    <ul className="space-y-2 text-sm text-gray-400">
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand"/> 资源搜索与选片</li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand"/> 远程授权管理</li>
                        <li className="flex gap-2"><CheckCircle2 size={16} className="text-brand"/> 服务运行状态监控</li>
                    </ul>
                </div>
                <div className="flex-1 max-w-xs">
                    <img src="/public/mp/mp_notify.png" alt="Telegram Notification" className="rounded-lg shadow-2xl border border-white/10" 
                         onError={(e) => e.currentTarget.style.display='none'}/>
                </div>
            </div>
        </div>

        {/* Configuration Code Block */}
        <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Terminal className="text-brand" size={24} /> 部署参考
            </h3>
            <div className="bg-[#1e1e1e] p-4 rounded-lg border border-vp-border overflow-x-auto shadow-inner">
                <pre className="text-sm font-mono text-gray-300 leading-relaxed">
<span className="text-purple-400">version:</span> <span className="text-green-400">'3'</span>
<br/>
<span className="text-purple-400">services:</span>
<br/>
  <span className="text-blue-400">moviepilot:</span>
<br/>
    <span className="text-purple-400">image:</span> <span className="text-green-400">jxxghp/moviepilot:latest</span>
<br/>
    <span className="text-purple-400">restart:</span> <span className="text-green-400">always</span>
</pre>
            </div>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/jxxghp/MoviePilot" target="_blank" rel="noreferrer" className="btn-secondary">
            <Github size={16} className="mr-2" /> GitHub 仓库
          </a>
        </div>
      </section>

      {/* 4. Emby Section */}
      <section id="emby" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-green-600 flex items-center justify-center text-white font-bold text-xl">Em</div>
          <h2 className="text-3xl font-bold">Emby & Plex</h2>
        </div>
        <p className="text-gray-300 mb-4">
          拥有强大的硬件解码能力，可以将 NAS 中的高码率视频实时转码推送到手机、电视、平板等设备上播放。
        </p>
        <a href="https://emby.media/download.html" target="_blank" rel="noreferrer" className="btn-secondary">
          <Globe size={16} className="mr-2" /> Emby 官网下载
        </a>
      </section>

      {/* 5. Jellyfin Section */}
      <section id="jellyfin" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center text-white font-bold text-xl">Jf</div>
          <h2 className="text-3xl font-bold">Jellyfin</h2>
        </div>
        <p className="text-gray-300 mb-6">
          Jellyfin 是 Emby 的开源免费分支。它承诺永久免费，且不包含任何付费墙。
        </p>
        <a href="https://jellyfin.org/downloads/" target="_blank" rel="noreferrer" className="btn-secondary">
          <Globe size={16} className="mr-2" /> 官网下载
        </a>
      </section>

      {/* 6. qBittorrent Section */}
      <section id="qbittorrent" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-bold text-xl">qB</div>
          <h2 className="text-3xl font-bold">qBittorrent</h2>
        </div>
        <p className="text-gray-300 mb-6">
            qBittorrent 是一款轻量级、快速且功能强大的开源 BT 下载客户端。
        </p>
        <a href="https://www.qbittorrent.org/download.php" target="_blank" rel="noreferrer" className="btn-secondary">
            <DownloadCloud size={16} className="mr-2" /> 官网下载
        </a>
      </section>

      {/* 7. ChineseSubFinder Section */}
      <section id="chinesesubfinder" className="mb-16 scroll-mt-24">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-12 h-12 rounded-full bg-orange-600 flex items-center justify-center text-white font-bold text-xl">CS</div>
          <h2 className="text-3xl font-bold">ChineseSubFinder</h2>
        </div>
        <p className="text-gray-300 mb-6">
          ChineseSubFinder 是一个自动化的字幕下载工具，支持 Emby、Jellyfin、Plex 等。
        </p>
        <a href="https://github.com/allanpk716/ChineseSubFinder" target="_blank" rel="noreferrer" className="btn-secondary">
          <Github size={16} className="mr-2" /> GitHub 仓库
        </a>
      </section>

      {/* 8. Feature List Table (New) */}
      <section id="features" className="mb-16 scroll-mt-24">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-2">
            <LayoutDashboard className="text-brand" size={32} /> 功能介绍
        </h2>
        
        <Details summary="点击查看完整功能列表">
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-gray-400 border-collapse">
                    <thead className="bg-black/20 text-white font-bold">
                        <tr>
                            <th className="px-4 py-3 border border-vp-border">类别</th>
                            <th className="px-4 py-3 border border-vp-border">子类别</th>
                            <th className="px-4 py-3 border border-vp-border">内容</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* 仪表盘 */}
                        <tr>
                            <td className="px-4 py-3 border border-vp-border text-white font-medium">仪表盘</td>
                            <td className="px-4 py-3 border border-vp-border">-</td>
                            <td className="px-4 py-3 border border-vp-border">展示一些基础信息</td>
                        </tr>
                        {/* 发现 */}
                        <tr>
                            <td rowSpan={2} className="px-4 py-3 border border-vp-border text-white font-medium bg-vp-sidebar/30">发现</td>
                            <td className="px-4 py-3 border border-vp-border">推荐</td>
                            <td className="px-4 py-3 border border-vp-border">搜索影视资源 <br/>- 添加订阅 <br/>- 搜索已添加站点里的种子资源</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">资源搜索</td>
                            <td className="px-4 py-3 border border-vp-border">搜索已添加站点里的种子资源</td>
                        </tr>
                        {/* 订阅 */}
                        <tr>
                            <td rowSpan={3} className="px-4 py-3 border border-vp-border text-white font-medium bg-vp-sidebar/30">订阅 (自动追剧) ⭐</td>
                            <td className="px-4 py-3 border border-vp-border">电影</td>
                            <td className="px-4 py-3 border border-vp-border">-</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">电视剧</td>
                            <td className="px-4 py-3 border border-vp-border">-</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">日历</td>
                            <td className="px-4 py-3 border border-vp-border">更新时间展示</td>
                        </tr>
                        {/* 整理 */}
                        <tr>
                            <td rowSpan={3} className="px-4 py-3 border border-vp-border text-white font-medium bg-vp-sidebar/30">整理</td>
                            <td className="px-4 py-3 border border-vp-border">正在下载</td>
                            <td className="px-4 py-3 border border-vp-border">当前正在下载的任务信息</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">历史记录 ⭐</td>
                            <td className="px-4 py-3 border border-vp-border">媒体库整理纪录 <br/>经过 MoviePilot 的资源全靠这个历史记录来管理，比较重要</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">文件管理</td>
                            <td className="px-4 py-3 border border-vp-border">配置的下载目录下的文件列表 <br/>也可以跳转到上层，展示整个 Docker 容器的目录<br/>支持 <Badge>阿里云盘</Badge> <Badge>115网盘</Badge></td>
                        </tr>
                        {/* 系统 */}
                        <tr>
                            <td rowSpan={12} className="px-4 py-3 border border-vp-border text-white font-medium bg-vp-sidebar/30">系统</td>
                            <td className="px-4 py-3 border border-vp-border">插件 ⭐</td>
                            <td className="px-4 py-3 border border-vp-border">插件系统</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">站点管理 ⭐</td>
                            <td className="px-4 py-3 border border-vp-border">PT 站点管理</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">设定</td>
                            <td className="px-4 py-3 border border-vp-border">系统设置内容</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--用户</td>
                            <td className="px-4 py-3 border border-vp-border">-</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--连接</td>
                            <td className="px-4 py-3 border border-vp-border">设置下载器<br/>设置媒体服务器</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--目录</td>
                            <td className="px-4 py-3 border border-vp-border">设置下载目录和媒体库目录<br/>设置整理模式</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--站点</td>
                            <td className="px-4 py-3 border border-vp-border">设置同步 CookieCloud<br/>设置下载优先级</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--搜索</td>
                            <td className="px-4 py-3 border border-vp-border">媒体数据源</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border"></td>
                            <td className="px-4 py-3 border border-vp-border">站点选择 <br/>优先级规则</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--订阅</td>
                            <td className="px-4 py-3 border border-vp-border">站点选择 <br/>优先级规则</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--服务</td>
                            <td className="px-4 py-3 border border-vp-border">自带的服务，可以手动执行</td>
                        </tr>
                        <tr>
                            <td className="px-4 py-3 border border-vp-border">--通知</td>
                            <td className="px-4 py-3 border border-vp-border">设置通知密钥 <br/>选择通知方案，微信、Tg、Slack、群晖</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </Details>

        <Tip title="重要信息">
            <p className="mb-2">MoviePilot、qbittorrent、emby、ChineseSubFinder 部署的时候默认用户名和密码。</p>
            <ul className="list-none font-mono text-sm bg-black/30 p-2 rounded border border-white/5">
                <li>用户名：<span className="text-green-400">admin</span></li>
                <li>密  码：<span className="text-green-400">admin888</span></li>
            </ul>
        </Tip>
      </section>

      {/* 9. Downloads Section (Existing) */}
      <section id="downloads" className="scroll-mt-24 mb-16">
        <h2 className="text-3xl font-bold mb-8">其他资源</h2>
        <div className="grid gap-4">
          <div className="p-6 bg-vp-sidebar rounded-xl border border-vp-border flex items-center justify-between transition-colors hover:border-brand/50">
            <div>
              <h3 className="font-bold text-lg text-white">Docker Compose 模板</h3>
              <p className="text-gray-400 text-sm mt-1">一键部署 MoviePilot + Emby + Qbittorrent</p>
            </div>
            <button className="p-2 bg-brand/10 text-brand rounded-lg hover:bg-brand hover:text-white transition-colors">
              <Download size={24} />
            </button>
          </div>
        </div>
      </section>

      {/* 10. Footer Warnings (New) */}
      <Danger title="特别提醒">
        <ul className="space-y-2">
            <li className="flex gap-2">
                <strong className="text-red-400 shrink-0">请勿</strong>
                在任何国内平台宣传 MoviePilot，MoviePilot 仅用于学习交流使用。
            </li>
            <li className="flex gap-2">
                <strong className="text-red-400 shrink-0">请勿</strong>
                将 MoviePilot 用于商业用途。
            </li>
            <li className="flex gap-2">
                <strong className="text-red-400 shrink-0">请勿</strong>
                将 MoviePilot 制作为视频内容，于境内视频网站(版权利益方)传播。
            </li>
            <li className="flex gap-2">
                <strong className="text-red-400 shrink-0">请勿</strong>
                将 MoviePilot 用于任何违反法律法规的行为。
            </li>
            <li className="flex gap-2">
                <strong className="text-red-400 shrink-0">请勿</strong>
                将本教程在国内任何平台宣传，本教程只作为官方仓库教程补充。
            </li>
        </ul>
      </Danger>

      {/* Styles */}
      <style>{`
        .btn-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.5rem 1rem;
          background-color: #2e2e32;
          color: white;
          border-radius: 0.5rem;
          font-weight: 500;
          transition: background-color 0.2s;
        }
        .btn-secondary:hover {
          background-color: #3f3f46;
        }
      `}</style>
    </div>
  );
};

// --- Helper Components ---

const FeatureCard: React.FC<{ icon: any, title: string, desc: string }> = ({ icon: Icon, title, desc }) => (
  <div className="bg-vp-sidebar p-5 rounded-xl border border-vp-border hover:border-gray-500 transition-colors">
    <div className="flex items-center gap-3 mb-3">
      <div className="p-2 bg-brand/10 rounded-lg text-brand">
        <Icon size={20} />
      </div>
      <h4 className="font-bold text-white">{title}</h4>
    </div>
    <p className="text-sm text-gray-400 leading-relaxed">
      {desc}
    </p>
  </div>
);

const Tip = ({ title, children }: { title?: React.ReactNode, children: React.ReactNode }) => (
  <div className="bg-brand/10 border border-brand/20 rounded-lg p-4 mb-6">
    {title && <div className="font-bold text-brand mb-3 flex items-center gap-2 text-lg"><Info size={20}/> {title}</div>}
    <div className="text-gray-300 text-sm leading-relaxed">
      {children}
    </div>
  </div>
);

const Danger = ({ title, children }: { title?: React.ReactNode, children: React.ReactNode }) => (
  <div className="bg-red-900/20 border border-red-500/40 rounded-lg p-6 mb-6">
    {title && <h4 className="font-bold text-red-500 text-lg mb-4 flex items-center gap-2"><AlertTriangle size={24}/> {title}</h4>}
    <div className="text-red-200/70 text-sm">
      {children}
    </div>
  </div>
);

const Details = ({ summary, children }: { summary: React.ReactNode, children: React.ReactNode }) => (
  <details className="group bg-vp-sidebar border border-vp-border rounded-lg overflow-hidden mb-6">
    <summary className="flex items-center justify-between p-4 font-medium cursor-pointer bg-vp-sidebar hover:bg-white/5 transition-colors select-none text-brand">
      {summary}
      <span className="transition-transform group-open:rotate-180">
         <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
      </span>
    </summary>
    <div className="p-4 border-t border-vp-border bg-black/20 text-sm leading-relaxed">
      {children}
    </div>
  </details>
);

const Badge = ({ type = 'tip', children }: { type?: 'tip' | 'danger' | 'warning', children: React.ReactNode }) => {
   let colors = "bg-brand/15 text-brand";
   if (type === 'danger') colors = "bg-red-500/15 text-red-500";
   if (type === 'warning') colors = "bg-orange-500/15 text-orange-500";

   return (
     <span className={`inline-flex items-center px-1.5 py-0.5 rounded text-xs font-medium align-middle mx-0.5 ${colors}`}>
       {children}
     </span>
   );
};

export default DocPage;