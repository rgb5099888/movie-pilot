import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Film, DownloadCloud, Languages, Play, Tv, Server } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-full z-0 pointer-events-none">
            <div className="absolute top-20 left-10 w-72 h-72 bg-brand/20 rounded-full blur-[100px]"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-600/20 rounded-full blur-[120px]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight mb-4">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-light to-blue-400">
                MoviePilot
              </span>
            </h1>
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
              自由观影
            </h2>
            <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              远程搜索、下载、订阅、整理，实现影视墙效果。
              <br />
              打造属于你的一站式家庭影音中心。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <Link
                to="/order"
                className="px-8 py-3 rounded-full bg-brand hover:bg-brand-dark text-white font-medium text-lg transition-all flex items-center gap-2 shadow-lg shadow-brand/20"
              >
                立即开始 <ArrowRight size={20} />
              </Link>
              <Link
                to="/docs"
                className="px-8 py-3 rounded-full bg-vp-sidebar border border-vp-border hover:bg-vp-border text-white font-medium text-lg transition-all"
              >
                查看文档
              </Link>
            </div>
          </div>

          {/* Hero Image / Visual Representation */}
          <div className="flex-1 w-full max-w-lg lg:max-w-xl relative">
            <div className="relative aspect-square rounded-full bg-gradient-to-br from-brand/10 to-blue-500/10 border border-white/5 backdrop-blur-3xl flex items-center justify-center p-12 animate-in fade-in zoom-in duration-1000">
              <div className="relative z-10 grid grid-cols-2 gap-6 w-full h-full p-4">
                 {/* Floating Icons representing the ecosystem */}
                 <div className="bg-vp-sidebar border border-vp-border rounded-2xl flex items-center justify-center shadow-2xl transform translate-y-4">
                    <Zap size={64} className="text-brand" />
                 </div>
                 <div className="bg-vp-sidebar border border-vp-border rounded-2xl flex items-center justify-center shadow-2xl transform -translate-y-4">
                    <Film size={64} className="text-blue-400" />
                 </div>
                 <div className="bg-vp-sidebar border border-vp-border rounded-2xl flex items-center justify-center shadow-2xl transform translate-y-4">
                    <DownloadCloud size={64} className="text-purple-400" />
                 </div>
                 <div className="bg-vp-sidebar border border-vp-border rounded-2xl flex items-center justify-center shadow-2xl transform -translate-y-4">
                    <Tv size={64} className="text-green-400" />
                 </div>
                 
                 {/* Center Piece */}
                 <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div className="w-24 h-24 bg-brand rounded-full blur-2xl opacity-20"></div>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-vp-nav/30 border-t border-vp-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* MoviePilot */}
            <Link to="/docs#moviepilot" className="group block h-full">
              <div className="h-full p-6 rounded-2xl bg-vp-sidebar border border-vp-border group-hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand transition-colors">MoviePilot</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  MoviePilot 是NasTools作者的新项目，是一款Nas媒体库自动化管理工具，仅用于学习交流使用。
                </p>
                <div className="mt-4 text-brand text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  了解更多 <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* Emby/Jellyfin/PLEX */}
            <Link to="/docs#emby" className="group block h-full">
              <div className="h-full p-6 rounded-2xl bg-vp-sidebar border border-vp-border group-hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-green-500/10 text-green-400 group-hover:bg-green-500/20 transition-colors">
                    <Film size={24} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand transition-colors">Emby/Jellyfin/PLEX</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  Emby是一款优秀的媒体服务器软件，致力于为用户提供丰富的多媒体体验。支持全平台播放与硬件转码。
                </p>
                <div className="mt-4 text-brand text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  了解更多 <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* qBittorrent */}
            <Link to="/docs#qbittorrent" className="group block h-full">
              <div className="h-full p-6 rounded-2xl bg-vp-sidebar border border-vp-border group-hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                    <DownloadCloud size={24} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand transition-colors">qBittorrent</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  qBittorrent 是一款开源免费的种子和磁力链接下载工具，支持 Windows、Mac 和 Linux，功能非常强大！
                </p>
                <div className="mt-4 text-brand text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  了解更多 <ArrowRight size={14} />
                </div>
              </div>
            </Link>

            {/* ChineseSubFinder */}
            <Link to="/docs#chinesesubfinder" className="group block h-full">
              <div className="h-full p-6 rounded-2xl bg-vp-sidebar border border-vp-border group-hover:border-brand/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/5 flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-orange-500/10 text-orange-400 group-hover:bg-orange-500/20 transition-colors">
                    <Languages size={24} />
                  </div>
                  <h3 className="text-lg font-bold group-hover:text-brand transition-colors">ChineseSubFinder</h3>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                  ChineseSubFinder 是一个开源项目，专注于自动化下载特定条件下的中文字幕，解决生肉烦恼。
                </p>
                <div className="mt-4 text-brand text-sm font-medium flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  了解更多 <ArrowRight size={14} />
                </div>
              </div>
            </Link>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;