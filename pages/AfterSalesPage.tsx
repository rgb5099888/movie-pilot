import React from 'react';
import { ShieldCheck, Clock, FileText, AlertTriangle, Headset, Banknote, HelpCircle, Info } from 'lucide-react';

const AfterSalesPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-vp-border flex items-center gap-3">
        <ShieldCheck className="text-brand" size={36} /> 售后服务
      </h1>

      {/* 1. 服务时间 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
          <Clock className="text-brand" size={24} /> 服务时间
        </h2>
        <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
          <ul className="space-y-3 text-gray-300">
            <li className="flex justify-between border-b border-vp-border pb-2">
              <span>周一至周五</span>
              <span className="font-mono text-brand">09:30 - 23:00</span>
            </li>
            <li className="flex justify-between border-b border-vp-border pb-2">
              <span>周六、周日</span>
              <span className="font-mono text-brand">10:00 - 23:00</span>
            </li>
            <li className="flex justify-between pt-2">
              <span>法定节假日</span>
              <span className="text-gray-500">不定时回复 (看到即回)</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 2. 服务范围 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
          <FileText className="text-brand" size={24} /> 免费售后服务范围
        </h2>
        <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
          <p className="mb-4 text-sm text-gray-400">
            以下内容属于免费售后范围，您可以通过微信或远程工具联系我们处理：
          </p>
          <ul className="space-y-3 text-gray-300 list-disc list-inside">
            <li><span className="text-white font-medium">系统重装</span>：因操作失误导致系统崩溃，提供免费远程重装服务（限 MoviePilot 套件）。</li>
            <li><span className="text-white font-medium">配置修复</span>：Docker 容器无法启动、端口冲突、挂载失效等配置问题排查。</li>
            <li><span className="text-white font-medium">更新维护</span>：MoviePilot 及相关组件的版本更新指导。</li>
            <li><span className="text-white font-medium">账号连接</span>：PT 站点 Cookie 失效、豆瓣账号重新绑定等连接问题。</li>
            <li><span className="text-white font-medium">刮削修正</span>：解决因网络问题导致的元数据刮削失败、海报缺失问题。</li>
            <li><span className="text-white font-medium">网络穿透</span>：协助检查 DDNS 或内网穿透服务状态（不包含网络运营商层面的故障）。</li>
          </ul>
        </div>
      </section>

      {/* 3. 收费服务 */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
          <Banknote className="text-brand" size={24} /> 收费服务项目
        </h2>
        <div className="bg-vp-sidebar border border-vp-border rounded-xl p-6">
          <div className="mb-4 p-3 bg-brand/10 text-brand text-sm rounded-lg border border-brand/20">
            <strong>说明：</strong> 非本机或非我方部署的系统，如需技术支持，按以下标准收费。
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-400">
              <thead className="bg-black/20 text-white uppercase font-bold">
                <tr>
                  <th className="px-4 py-3">服务项目</th>
                  <th className="px-4 py-3">费用</th>
                  <th className="px-4 py-3">说明</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-vp-border">
                <tr>
                  <td className="px-4 py-3 font-medium text-white">单次远程调试</td>
                  <td className="px-4 py-3 text-brand font-bold">¥ 50 / 次</td>
                  <td className="px-4 py-3">解决单一技术故障，限时 30 分钟内</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">MoviePilot 全套部署</td>
                  <td className="px-4 py-3 text-brand font-bold">¥ 200 / 次</td>
                  <td className="px-4 py-3">包含 MP、Emby、Qb、ChineseSubFinder 等</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">NAS 系统安装</td>
                  <td className="px-4 py-3 text-brand font-bold">¥ 100 / 次</td>
                  <td className="px-4 py-3">群晖、Unraid、FNOS 等系统底层安装</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 font-medium text-white">家庭网络规划</td>
                  <td className="px-4 py-3 text-brand font-bold">¥ 100 起</td>
                  <td className="px-4 py-3">软路由设置、旁路由网关、DNS 优化等</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. 免责声明 (原有概括性声明) */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
          <AlertTriangle className="text-brand" size={24} /> 免责声明与注意事项
        </h2>
        <div className="bg-red-900/10 border border-red-500/30 rounded-xl p-6 space-y-4">
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 text-red-400 font-bold">01</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              本店仅提供软件系统的安装、配置与调试服务。我们<span className="text-white font-bold">不提供</span>任何形式的盗版影视资源下载、存储或传播服务。所有演示数据仅用于功能测试。
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 text-red-400 font-bold">02</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              对于用户自行安装第三方插件、修改系统底层文件、或因操作不当导致的数据丢失、硬件损坏，本店不承担责任。建议用户定期备份重要数据。
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 text-red-400 font-bold">03</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              因网络运营商（ISP）封锁端口、IP 变动、网络波动等不可抗力因素导致的外网访问中断，不属于售后服务范围，但我们会提供力所能及的排查建议。
            </p>
          </div>
          <div className="flex gap-3">
            <div className="mt-1 shrink-0 text-red-400 font-bold">04</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              PT 站点账号属于用户个人资产，因用户违反站点规则（如分享率过低、多 IP 登录）导致的封号，与本店无关。
            </p>
          </div>
        </div>
      </section>

      {/* 5. 详细售后说明 (新增) */}
      <section className="mb-10">
         <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
            <Info className="text-brand" size={24} /> 售后说明
         </h2>
         
         <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            <div className="flex items-center gap-2 font-bold text-blue-400 mb-4 text-lg">
               <Info size={20} /> 详细说明
            </div>
            
            <div className="space-y-6 text-gray-300 text-sm leading-relaxed">
               <div>
                  <h4 className="font-bold text-white mb-2 text-base">免责声明</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400">
                     <li>未进行人为的软件关键设置改动(修改密码除外)、Docker 设置改动、配置文件夹删除、更新镜像等</li>
                     <li>没有更新(群晖/威联通/绿联/极空间/Unraid 等)系统，部分系统更新会导致 Docker 软件重置</li>
                     <li>非硬件损坏、硬盘损坏导致的系统崩溃、重装、恢复出厂设置，非更换系统等</li>
                     <li>非网络问题导致的无法连接 TMDB 页面</li>
                     <li>正常售后问题优先进行客服远程指导解决，指导解决不了的可进行远程控制解决</li>
                     <li>超出售后范围的，能指导解决的可帮忙指导，指导解决不了的，根据问题程度进行收费，起步 30 元/次</li>
                     <li>三天内不满意可退款，本店安装的软件可以教你怎么用、怎么设置，不教安装，不是本店安装的软件本店概不负责</li>
                  </ol>
               </div>

               <div>
                  <h4 className="font-bold text-white mb-2 text-base">遇到问题如何反馈给客服</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-400">
                     <li>文档左上角搜索你问题的关键词，查看是否有相关的教程</li>
                     <li>教程不清楚，或者其他问题，请截图(截完整)或录屏的方式，详细描述进行了什么操作出现的问题具体的问题是什么?</li>
                  </ol>
               </div>
            </div>
         </div>
      </section>

      {/* 6. 联系方式 */}
      <section>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2 text-white">
          <Headset className="text-brand" size={24} /> 联系售后
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-vp-sidebar border border-vp-border p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center text-green-500">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.05 2a9 9 0 0 0-9 9c0 3.31 2.69 6 6 6v5.523c0 .822.956 1.255 1.543.68l4.136-4.136A8.96 8.96 0 0 0 16.95 11a9 9 0 0 0-8.9-9Zm10.95 5a8 8 0 0 1 0 16 8 8 0 0 1-8-8 8 8 0 0 1 8-8Z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-white">微信支持</h3>
              <p className="text-gray-400 text-sm">添加客服微信 (ID: nas_pilot_help)</p>
            </div>
          </div>
          <div className="bg-vp-sidebar border border-vp-border p-6 rounded-xl flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center text-blue-500">
              <HelpCircle className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-bold text-white">ToDesk 远程</h3>
              <p className="text-gray-400 text-sm">发送设备代码，工程师远程协助</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default AfterSalesPage;