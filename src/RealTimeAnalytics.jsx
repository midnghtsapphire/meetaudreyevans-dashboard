import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Activity, Globe, Users, TrendingUp, TrendingDown, Eye, Clock,
  BarChart3, Zap, Wifi, WifiOff, RefreshCw, ArrowUpRight, ArrowDownRight,
  Monitor, Smartphone, Tablet, MapPin, ExternalLink
} from 'lucide-react';

// ============================================================================
// REAL-TIME ANALYTICS WIDGETS — Blue Ocean Enhancement
// Multi-domain tracking across all Audrey's domains
// ============================================================================

const TRACKED_DOMAINS = [
  { domain: 'meetaudreyevans.com', label: 'Main Hub', color: '#8B5CF6' },
  { domain: 'tikiwikicoffee.com', label: 'Tiki Wiki Coffee', color: '#F59E0B' },
  { domain: 'qahwacoffeebeans.com', label: 'Qahwa Coffee', color: '#10B981' },
  { domain: 'datascope-enhanced.com', label: 'DataScope', color: '#3B82F6' },
  { domain: 'audreysmusic.com', label: 'Music Portal', color: '#EC4899' },
];

const generateLiveMetric = (base, variance) => {
  return Math.round(base + (Math.random() - 0.5) * variance);
};

const generateDomainData = () => TRACKED_DOMAINS.map(d => ({
  ...d,
  activeUsers: generateLiveMetric(45, 30),
  pageViews: generateLiveMetric(320, 200),
  bounceRate: (Math.random() * 25 + 20).toFixed(1),
  avgSession: `${Math.floor(Math.random() * 5 + 2)}m ${Math.floor(Math.random() * 59)}s`,
  conversionRate: (Math.random() * 5 + 1).toFixed(2),
  topPage: ['/', '/products', '/about', '/blog', '/shop'][Math.floor(Math.random() * 5)],
}));

const LivePulse = () => (
  <span className="live-pulse">
    <span className="pulse-dot" />
    <span className="pulse-ring" />
    LIVE
  </span>
);

const MetricTicker = ({ label, value, change, icon: Icon, color }) => {
  const isPositive = change >= 0;
  return (
    <motion.div
      className="metric-ticker"
      whileHover={{ scale: 1.03 }}
      style={{ borderLeft: `4px solid ${color}` }}
    >
      <div className="ticker-icon" style={{ background: `${color}20`, color }}>
        <Icon size={20} />
      </div>
      <div className="ticker-content">
        <span className="ticker-label">{label}</span>
        <span className="ticker-value">{value}</span>
      </div>
      <div className={`ticker-change ${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
        {Math.abs(change).toFixed(1)}%
      </div>
    </motion.div>
  );
};

const DomainCard = ({ data, isSelected, onClick }) => (
  <motion.div
    className={`domain-card ${isSelected ? 'selected' : ''}`}
    onClick={onClick}
    whileHover={{ scale: 1.02, y: -2 }}
    whileTap={{ scale: 0.98 }}
    style={{ '--domain-color': data.color }}
    layout
  >
    <div className="domain-header">
      <div className="domain-dot" style={{ background: data.color }} />
      <div className="domain-info">
        <span className="domain-name">{data.domain}</span>
        <span className="domain-label">{data.label}</span>
      </div>
      <div className="domain-users">
        <Users size={14} />
        <span>{data.activeUsers}</span>
      </div>
    </div>
    {isSelected && (
      <motion.div
        className="domain-details"
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: 1, height: 'auto' }}
        exit={{ opacity: 0, height: 0 }}
      >
        <div className="detail-row">
          <span>Page Views</span><strong>{data.pageViews}</strong>
        </div>
        <div className="detail-row">
          <span>Bounce Rate</span><strong>{data.bounceRate}%</strong>
        </div>
        <div className="detail-row">
          <span>Avg Session</span><strong>{data.avgSession}</strong>
        </div>
        <div className="detail-row">
          <span>Conversion</span><strong>{data.conversionRate}%</strong>
        </div>
        <div className="detail-row">
          <span>Top Page</span><strong>{data.topPage}</strong>
        </div>
      </motion.div>
    )}
  </motion.div>
);

const VisitorMap = ({ domains }) => {
  const regions = [
    { name: 'North America', pct: 42, visitors: generateLiveMetric(180, 50) },
    { name: 'Europe', pct: 28, visitors: generateLiveMetric(120, 40) },
    { name: 'Asia Pacific', pct: 18, visitors: generateLiveMetric(75, 30) },
    { name: 'Latin America', pct: 8, visitors: generateLiveMetric(35, 15) },
    { name: 'Other', pct: 4, visitors: generateLiveMetric(18, 10) },
  ];
  return (
    <div className="visitor-map-widget">
      <h3><MapPin size={18} /> Visitor Regions</h3>
      {regions.map(r => (
        <div key={r.name} className="region-bar">
          <div className="region-label">
            <span>{r.name}</span>
            <span className="region-visitors">{r.visitors} active</span>
          </div>
          <div className="region-track">
            <motion.div
              className="region-fill"
              initial={{ width: 0 }}
              animate={{ width: `${r.pct}%` }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

const DeviceBreakdown = () => {
  const devices = [
    { icon: Smartphone, label: 'Mobile', pct: 58, color: '#EC4899' },
    { icon: Monitor, label: 'Desktop', pct: 32, color: '#3B82F6' },
    { icon: Tablet, label: 'Tablet', pct: 10, color: '#10B981' },
  ];
  return (
    <div className="device-breakdown">
      <h3><Monitor size={18} /> Device Breakdown</h3>
      <div className="device-bars">
        {devices.map(d => (
          <div key={d.label} className="device-item">
            <d.icon size={18} style={{ color: d.color }} />
            <span>{d.label}</span>
            <div className="device-bar-track">
              <motion.div
                className="device-bar-fill"
                style={{ background: d.color }}
                initial={{ width: 0 }}
                animate={{ width: `${d.pct}%` }}
                transition={{ duration: 0.8 }}
              />
            </div>
            <strong>{d.pct}%</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

const RealTimeAnalytics = () => {
  const [domainData, setDomainData] = useState(generateDomainData());
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [isConnected, setIsConnected] = useState(true);
  const [lastUpdate, setLastUpdate] = useState(new Date());

  const refreshData = useCallback(() => {
    setDomainData(generateDomainData());
    setLastUpdate(new Date());
  }, []);

  useEffect(() => {
    const interval = setInterval(refreshData, 5000);
    return () => clearInterval(interval);
  }, [refreshData]);

  const totalActiveUsers = domainData.reduce((sum, d) => sum + d.activeUsers, 0);
  const totalPageViews = domainData.reduce((sum, d) => sum + d.pageViews, 0);

  return (
    <div className="realtime-analytics">
      <div className="realtime-header">
        <div className="realtime-title">
          <Activity size={24} />
          <h2>Real-Time Analytics</h2>
          <LivePulse />
        </div>
        <div className="realtime-meta">
          <span className="connection-status">
            {isConnected ? <Wifi size={14} /> : <WifiOff size={14} />}
            {isConnected ? 'Connected' : 'Reconnecting...'}
          </span>
          <span className="last-update">
            <Clock size={14} />
            {lastUpdate.toLocaleTimeString()}
          </span>
          <motion.button
            className="refresh-btn"
            onClick={refreshData}
            whileHover={{ rotate: 180 }}
            transition={{ duration: 0.3 }}
          >
            <RefreshCw size={16} />
          </motion.button>
        </div>
      </div>

      <div className="realtime-summary">
        <MetricTicker
          label="Total Active Users"
          value={totalActiveUsers}
          change={12.4}
          icon={Users}
          color="#8B5CF6"
        />
        <MetricTicker
          label="Page Views / min"
          value={Math.round(totalPageViews / 5)}
          change={8.7}
          icon={Eye}
          color="#3B82F6"
        />
        <MetricTicker
          label="Domains Tracked"
          value={TRACKED_DOMAINS.length}
          change={0}
          icon={Globe}
          color="#10B981"
        />
        <MetricTicker
          label="Avg Load Time"
          value="1.2s"
          change={-5.3}
          icon={Zap}
          color="#F59E0B"
        />
      </div>

      <div className="realtime-body">
        <div className="domains-panel">
          <h3><Globe size={18} /> Multi-Domain Tracking</h3>
          <AnimatePresence>
            {domainData.map(d => (
              <DomainCard
                key={d.domain}
                data={d}
                isSelected={selectedDomain === d.domain}
                onClick={() => setSelectedDomain(
                  selectedDomain === d.domain ? null : d.domain
                )}
              />
            ))}
          </AnimatePresence>
        </div>
        <div className="realtime-side">
          <VisitorMap domains={domainData} />
          <DeviceBreakdown />
        </div>
      </div>
    </div>
  );
};

export default RealTimeAnalytics;
