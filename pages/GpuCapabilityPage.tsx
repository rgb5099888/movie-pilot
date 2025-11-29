import React from 'react';
import { Cpu, Check, X, AlertCircle } from 'lucide-react';

const GpuCapabilityPage: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-10 px-6">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <Cpu className="text-brand" size={40} /> Intel 核显解码性能表
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          NAS 媒体服务器的核心在于硬件转码能力。Intel QuickSync 技术提供了卓越的转码效率。
          请参考下表了解不同 CPU 架构对各类视频编码格式的硬件解码支持情况。
        </p>
      </div>

      <div className="overflow-x-auto bg-vp-sidebar border border-vp-border rounded-xl shadow-xl">
        <table className="w-full text-center border-collapse">
          <thead>
            <tr className="bg-black/30 text-white border-b border-vp-border">
              <th className="p-4 text-left">架构代号 / 世代</th>
              <th className="p-4 text-left">常见 NAS CPU 型号</th>
              <th className="p-4">H.264 (AVC)</th>
              <th className="p-4">H.265 (HEVC) 8bit</th>
              <th className="p-4">H.265 (HEVC) 10bit</th>
              <th className="p-4">VP9</th>
              <th className="p-4">AV1</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300 divide-y divide-vp-border">
            {/* Old Generations */}
            <Row 
              arch="Sandy Bridge (2nd Gen)" 
              cpus="i3-2100, i5-2500" 
              h264={true} hevc8={false} hevc10={false} vp9={false} av1={false} 
            />
            <Row 
              arch="Haswell (4th Gen)" 
              cpus="i3-4130, i5-4590, G3260" 
              h264={true} hevc8="partial" hevc10={false} vp9={false} av1={false} 
            />
            
            {/* Atom Series - Entry Level */}
            <Row 
              arch="Braswell" 
              cpus="N3150, N3160, J3160" 
              h264={true} hevc8={true} hevc10={false} vp9={false} av1={false} 
            />
            <Row 
              arch="Apollo Lake" 
              cpus="J3455, J3355, N3450" 
              h264={true} hevc8={true} hevc10="partial" vp9={true} av1={false} 
            />
            <Row 
              arch="Gemini Lake / Refresh" 
              cpus="J4105, J4125, N4100" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={false} 
              isPopular
            />
            <Row 
              arch="Jasper Lake" 
              cpus="N5105, N5095, N6005" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={false} 
              isPopular
            />
            
            {/* Core Series - Modern */}
            <Row 
              arch="Kaby Lake (7th Gen)" 
              cpus="i3-7100, i5-7500, G4600" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={false} 
            />
            <Row 
              arch="Coffee / Comet Lake (8/9/10th Gen)" 
              cpus="i3-8100, i5-9400, i3-10100" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={false} 
              isPopular
            />
            
            {/* Newest Generations */}
            <Row 
              arch="Tiger / Rocket Lake (11th Gen)" 
              cpus="i5-1135G7, i5-11400" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={true} 
            />
            <Row 
              arch="Alder Lake-N (12th Gen)" 
              cpus="N100, N305" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={true} 
              isHighlight
            />
             <Row 
              arch="Alder / Raptor Lake (12/13/14th Gen)" 
              cpus="i3-12100, i5-12400, i5-13500" 
              h264={true} hevc8={true} hevc10={true} vp9={true} av1={true} 
              isHighlight
            />
          </tbody>
        </table>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-brand/10 border border-brand/20 rounded-lg p-5">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <Check size={20} className="text-brand"/> 推荐选择
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
                目前性价比最高的选择是 <b>Intel N100</b> (Alder Lake-N) 系列。它功耗极低（TDP 6W），但却拥有完整的媒体解码引擎，支持最新的 <b>AV1</b> 格式硬解，完美适配 Emby 和 Jellyfin 的未来需求。
            </p>
        </div>
        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-5">
            <h3 className="font-bold text-white mb-2 flex items-center gap-2">
                <AlertCircle size={20} className="text-blue-400"/> 什么是 AV1？
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
                AV1 是下一代开源视频编码格式，比 HEVC (H.265) 压缩率更高且无专利费。随着 YouTube、Netflix 和 Bilibili 全面拥抱 AV1，支持 AV1 硬解的 NAS 将在未来 3-5 年内保持不落伍。
            </p>
        </div>
      </div>
    </div>
  );
};

interface RowProps {
    arch: string;
    cpus: string;
    h264: boolean | 'partial';
    hevc8: boolean | 'partial';
    hevc10: boolean | 'partial';
    vp9: boolean | 'partial';
    av1: boolean;
    isPopular?: boolean;
    isHighlight?: boolean;
}

const Row: React.FC<RowProps> = ({ arch, cpus, h264, hevc8, hevc10, vp9, av1, isPopular, isHighlight }) => {
    const getIcon = (status: boolean | 'partial') => {
        if (status === true) return <Check className="mx-auto text-green-500" size={20} />;
        if (status === 'partial') return <span className="text-yellow-500 font-bold text-xs px-2 py-1 bg-yellow-500/10 rounded">部分支持</span>;
        return <span className="text-gray-600 block">-</span>;
    };

    let bgClass = "hover:bg-white/5 transition-colors";
    if (isHighlight) bgClass = "bg-brand/5 hover:bg-brand/10 border-l-2 border-brand transition-colors";
    else if (isPopular) bgClass = "bg-blue-500/5 hover:bg-blue-500/10 transition-colors";

    return (
        <tr className={bgClass}>
            <td className="p-4 text-left border-r border-vp-border/50">
                <div className="font-bold text-white">{arch}</div>
                {isHighlight && <span className="text-[10px] bg-brand text-white px-1.5 rounded ml-2 align-middle">推荐</span>}
                {isPopular && <span className="text-[10px] bg-blue-500 text-white px-1.5 rounded ml-2 align-middle">热门</span>}
            </td>
            <td className="p-4 text-left font-mono text-gray-400 border-r border-vp-border/50">{cpus}</td>
            <td className="p-4">{getIcon(h264)}</td>
            <td className="p-4">{getIcon(hevc8)}</td>
            <td className="p-4">{getIcon(hevc10)}</td>
            <td className="p-4">{getIcon(vp9)}</td>
            <td className="p-4">{getIcon(av1)}</td>
        </tr>
    );
};

export default GpuCapabilityPage;