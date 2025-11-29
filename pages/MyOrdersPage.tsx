import React, { useState } from 'react';
import { Search, Package, AlertCircle } from 'lucide-react';

const MyOrdersPage: React.FC = () => {
  const [orderId, setOrderId] = useState('');
  const [phone, setPhone] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSearching(true);
    // Simulate search delay
    setTimeout(() => {
      setIsSearching(false);
      alert('未找到相关订单信息，请确认订单号和手机号是否正确。');
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-4xl font-bold mb-8 pb-4 border-b border-vp-border flex items-center gap-3">
        <Package className="text-brand" size={36} /> 我的订单
      </h1>

      <div className="max-w-2xl mx-auto">
        <div className="bg-vp-sidebar border border-vp-border rounded-xl p-8 mb-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-white mb-2">订单查询</h2>
            <p className="text-gray-400">输入下单时预留的手机号或订单编号查询进度</p>
          </div>

          <form onSubmit={handleSearch} className="space-y-6">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-300 mb-2">
                订单编号
              </label>
              <input
                type="text"
                id="orderId"
                className="w-full px-4 py-3 bg-black/20 border border-vp-border rounded-lg text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="请输入订单编号"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                手机号码
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 bg-black/20 border border-vp-border rounded-lg text-white focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-colors"
                placeholder="请输入下单手机号"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <button
              type="submit"
              disabled={isSearching}
              className={`w-full py-4 bg-brand hover:bg-brand-dark text-white font-bold rounded-xl transition-all shadow-lg shadow-brand/20 flex items-center justify-center gap-2 ${
                isSearching ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSearching ? (
                '查询中...'
              ) : (
                <>
                  <Search size={20} /> 查询订单
                </>
              )}
            </button>
          </form>
        </div>

        <div className="bg-brand/5 border border-brand/10 rounded-xl p-6 flex items-start gap-4">
          <AlertCircle className="text-brand shrink-0 mt-1" size={24} />
          <div>
            <h3 className="font-bold text-white mb-2">温馨提示</h3>
            <ul className="text-sm text-gray-400 space-y-2 list-disc list-inside">
              <li>仅支持查询最近 3 个月内的订单信息。</li>
              <li>定制系统通常需要 3-5 个工作日的配置时间，请耐心等待。</li>
              <li>如遗忘订单号，请通过页面底部的联系方式咨询客服。</li>
              <li>所有发货信息将通过短信同步发送至您的手机。</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyOrdersPage;