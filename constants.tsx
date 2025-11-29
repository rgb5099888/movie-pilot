import React from 'react';
import { ProductConfig, NavItem } from './types';
import { HardDrive, Server, Wrench, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { text: '首页', link: '/' },
  { text: '系统介绍', link: '/docs' },
  { text: '安装准备', link: '/setup' },
  { text: '推荐配置', link: '/recommended' },
  { text: '定制系统', link: '/order' },
  { text: '我的订单', link: '/my-orders' },
  { text: '显卡性能', link: '/gpu-list' },
  { text: '关于我们', link: '/about' },
  { text: '常见问题', link: '/help' },
  { text: '售后服务', link: '/after-sales' },
];

export const DOCS_SIDEBAR_ITEMS: NavItem[] = [
  { text: '介绍', link: '/docs#intro' },
  { text: '工作原理', link: '/docs#workflow' },
  { text: 'MoviePilot', link: '/docs#moviepilot' },
  { text: 'Emby Server', link: '/docs#emby' },
  { text: 'Jellyfin', link: '/docs#jellyfin' },
  { text: 'qBittorrent', link: '/docs#qbittorrent' },
  { text: 'ChineseSubFinder', link: '/docs#chinesesubfinder' },
  { text: '功能列表', link: '/docs#features' },
  { text: '下载中心', link: '/docs#downloads' },
];

export const SETUP_SIDEBAR_ITEMS: NavItem[] = [
  { text: '平台要求', link: '/setup#requirements' },
  { text: '准备工作', link: '/setup#preparation' },
  { text: '站点认证', link: '/setup#sites' },
  { text: '定制指南', link: '/setup#config-guide' },
  { text: '注意事项', link: '/setup#notes' },
];

export const CONFIG_OPTIONS: ProductConfig[] = [
  // Hardware
  { id: 'h0', category: 'hardware', name: '自备设备 (仅软件服务)', description: '您提供硬件，我们提供远程技术部署服务', price: 0 },
  { id: 'h1', category: 'hardware', name: '基础版 NAS (N100)', description: 'Intel N100 / 8G RAM / 2.5G 网口', price: 899 },
  { id: 'h2', category: 'hardware', name: '进阶版 NAS (i3-N305)', description: 'Intel i3-N305 / 16G RAM / 4盘位', price: 1599, highlight: true },
  { id: 'h3', category: 'hardware', name: '旗舰版 NAS (i5-1235U)', description: 'Intel i5 / 32G RAM / 万兆网卡', price: 2899 },

  // Storage
  { id: 's0', category: 'storage', name: '自备硬盘', description: '不包含硬盘', price: 0 },
  { id: 's1', category: 'storage', name: '4TB 酷狼 NAS盘', description: '希捷酷狼 / CMR', price: 650 },
  { id: 's2', category: 'storage', name: '8TB 酷狼 NAS盘', description: '希捷酷狼 / CMR / 推荐', price: 1250, highlight: true },
  { id: 's3', category: 'storage', name: '16TB 企业级硬盘', description: '希捷银河 / 氦气盘', price: 1950 },

  // Software (Updated)
  { id: 'sw1', category: 'software', name: '纯净系统 (Debian/Unraid)', description: '仅安装底层操作系统，不含任何应用软件', price: 0 },
  { id: 'sw2', category: 'software', name: '基础影音 (MP+QB+PT认证)', description: '安装 MoviePilot、Qbittorrent 并完成站点认证', price: 100 },
  { id: 'sw3', category: 'software', name: '观影配置 (含媒体服)', description: '基础影音 + Emby/Jellyfin/Plex + 刮削海报墙', price: 300, highlight: true },
  { id: 'sw4', category: 'software', name: '豪华配置 (+消息通知)', description: '观影配置 + 微信/Telegram 消息通知推送服务', price: 400 },

  // Cloud Storage
  { id: 'c0', category: 'cloud', name: '无需云盘挂载', description: '仅使用本地存储', price: 0 },
  { id: 'c1', category: 'cloud', name: 'Google Drive 挂载配置', description: '配置 Rclone 挂载 / 无限空间配置服务', price: 50 },
  { id: 'c2', category: 'cloud', name: 'OneDrive / SharePoint', description: '配置 5TB/25TB 挂载 / 自动同步', price: 50 },
  { id: 'c3', category: 'cloud', name: '115网盘 / 阿里云盘', description: '本地挂载 / CD2 部署 / 极速洗版', price: 80, highlight: true },

  // Support
  { id: 'sp0', category: 'support', name: '标准质保', description: '硬件1年质保，无软件咨询', price: 0 },
  { id: 'sp1', category: 'support', name: 'VIP 远程调试', description: '3个月远程技术支持 + 1对1 教学', price: 299, highlight: true },
];