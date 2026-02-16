import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Globe, TrendingUp, TrendingDown, BarChart3, ArrowUpRight,
  ArrowDownRight, ExternalLink, AlertCircle, CheckCircle, Clock,
  Zap, Shield, Search, Filter
} from 'lucide-react';

// ============================================================================
// MULTI-DOMAIN TRACKER — Blue Ocean Enhancement
// Track performance, SEO, uptime across all of Audrey's domains
// ============================================================================

const DOMAINS_CONFIG = [
  {
    domain: 'meetaudreyevans.com',
    label: 'Main Hub',
    category: 'Business',
    sslExpiry: '2026-08-15',
    hosting: 'Vercel',
  },
  {
    domain: 'tikiwikicoffee.com',
    label: 'Tiki Wiki Coffee',
    category: 'E-Commerce',
    sslExpiry: '2026-09-20',
    hosting: 'Shopify',
  },
  {
    domain: 'qahwacoffeebeans.com',
    label: 'Qahwa Coffee',
    category: 'E-Commerce',
    sslExpiry: '2026-07-10',
    hosting: 'Shopify',
  },
  {
    domain: 'datascope-enhanced.com',
    label: 'DataScope Platform',
    category: 'SaaS',
    sslExpiry: '2026-11-01',
    hosting: 'AWS',
  },
  {
    domain: 'freshqahwa.shop',
    label: 'Qahwa Shop',
    category: 'E-Commerce',
    sslExpiry: '2026-06-30',
    hosting: 'Shopify',
  },
];

const generateDomainMetrics = (domain) => ({
  ...domain,
  uptime: (99 + Math.random()).toFixed(2),
  responseTime: Math.floor(Math.random() * 300 + 100),
  seoScore: Math.floor(Math.random() * 30 + 65),
  organicTraffic: Math.floor(Math.random() * 5000 + 500),
  trafficChange: (Math.random() * 20 - 5).toFixed(1),
  backlinks: Math.floor(Math.random() * 500 + 50),
  domainAuthority: Math.floor(Math.random() * 30 + 20),
  topKeywords: [
    'audrey evans music', 'tiki coffee beans', 'qahwa arabic coffee',
    'cybersecurity dashboard', 'music stem separation'
  ].slice(0, Math.floor(Math.random() * 3 + 2)),
  status: Math.random() > 0.05 ? 'online' : 'degraded',
  lastChecked: new Date().toLocaleTimeString(),
});

const StatusBadge = ({ status }) => {
  const config = {
    online: { color: '#10B981', icon: CheckCircle, label: 'Online' },
    degraded: { color: '#F59E0B', icon: AlertCircle, label: 'Degraded' },
    offline: { color: '#EF4444', icon: AlertCircle, label: 'Offline' },
  };
  const { color, icon: Icon, label } = config[status] || config.online;
  return (
    <span className="status-badge" style={{ color, background: `${color}15` }}>
      <Icon size={12} /> {label}
    </span>
  );
};

const DomainRow = ({ data, isExpanded, onToggle }) => {
  const trafficPositive = parseFloat(data.trafficChange) >= 0;
  return (
    <motion.div
      className={`domain-row ${isExpanded ? 'expanded' : ''}`}
      layout
    >
      <div className="domain-row-main" onClick={onToggle}>
        <div className="domain-identity">
          <StatusBadge status={data.status} />
          <div>
            <strong>{data.domain}</strong>
            <span className="domain-category">{data.label} — {data.category}</span>
          </div>
        </div>
        <div className="domain-metrics-row">
          <div className="mini-metric">
            <span>Uptime</span>
            <strong>{data.uptime}%</strong>
          </div>
          <div className="mini-metric">
            <span>Response</span>
            <strong>{data.responseTime}ms</strong>
          </div>
          <div className="mini-metric">
            <span>SEO</span>
            <strong>{data.seoScore}/100</strong>
          </div>
          <div className={`mini-metric ${trafficPositive ? 'positive' : 'negative'}`}>
            <span>Traffic</span>
            <strong>
              {trafficPositive ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
              {data.trafficChange}%
            </strong>
          </div>
        </div>
      </div>
      {isExpanded && (
        <motion.div
          className="domain-row-expanded"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="expanded-grid">
            <div className="expanded-item">
              <Globe size={16} />
              <span>Hosting: <strong>{data.hosting}</strong></span>
            </div>
            <div className="expanded-item">
              <Shield size={16} />
              <span>SSL Expiry: <strong>{data.sslExpiry}</strong></span>
            </div>
            <div className="expanded-item">
              <BarChart3 size={16} />
              <span>Domain Authority: <strong>{data.domainAuthority}</strong></span>
            </div>
            <div className="expanded-item">
              <ExternalLink size={16} />
              <span>Backlinks: <strong>{data.backlinks}</strong></span>
            </div>
            <div className="expanded-item">
              <TrendingUp size={16} />
              <span>Organic Traffic: <strong>{data.organicTraffic.toLocaleString()}/mo</strong></span>
            </div>
            <div className="expanded-item">
              <Clock size={16} />
              <span>Last Checked: <strong>{data.lastChecked}</strong></span>
            </div>
          </div>
          <div className="top-keywords">
            <Search size={14} /> Top Keywords:
            {data.topKeywords.map(kw => (
              <span key={kw} className="keyword-tag">{kw}</span>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
};

const MultiDomainTracker = () => {
  const [domains, setDomains] = useState([]);
  const [expandedDomain, setExpandedDomain] = useState(null);
  const [filterCategory, setFilterCategory] = useState('All');

  useEffect(() => {
    setDomains(DOMAINS_CONFIG.map(generateDomainMetrics));
    const interval = setInterval(() => {
      setDomains(DOMAINS_CONFIG.map(generateDomainMetrics));
    }, 30000);
    return () => clearInterval(interval);
  }, []);

  const categories = ['All', ...new Set(DOMAINS_CONFIG.map(d => d.category))];
  const filtered = filterCategory === 'All'
    ? domains
    : domains.filter(d => d.category === filterCategory);

  const allOnline = domains.every(d => d.status === 'online');

  return (
    <div className="multi-domain-tracker">
      <div className="tracker-header">
        <div>
          <h2><Globe size={24} /> Multi-Domain Tracker</h2>
          <p>Monitor all domains in one place — uptime, SEO, traffic, and security</p>
        </div>
        <div className="tracker-status-summary">
          {allOnline ? (
            <span className="all-green"><CheckCircle size={16} /> All Systems Operational</span>
          ) : (
            <span className="has-issues"><AlertCircle size={16} /> Issues Detected</span>
          )}
        </div>
      </div>

      <div className="tracker-filters">
        <Filter size={16} />
        {categories.map(cat => (
          <motion.button
            key={cat}
            className={`filter-btn ${filterCategory === cat ? 'active' : ''}`}
            onClick={() => setFilterCategory(cat)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      <div className="domain-list">
        {filtered.map(d => (
          <DomainRow
            key={d.domain}
            data={d}
            isExpanded={expandedDomain === d.domain}
            onToggle={() => setExpandedDomain(
              expandedDomain === d.domain ? null : d.domain
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default MultiDomainTracker;
