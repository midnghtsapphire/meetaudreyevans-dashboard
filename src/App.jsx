import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, TrendingUp, Link as LinkIcon, Share2, Music, Zap, BarChart3, Settings,
  Shield, Globe, Headphones, Award, Sparkles, Rocket, Heart, Star, Crown,
  Palette, Camera, Brain, AlertTriangle, Download, Upload, Play, Pause,
  Users, DollarSign, Target, CheckCircle, Clock, Mic, Drum, Guitar, Piano,
  FileAudio, Volume2, VolumeX, RotateCcw, Save, Sliders, Info, AlertCircle,
  Loader, ExternalLink, Filter, Search, Building, Bug, ChevronDown, ChevronUp,
  Calendar, Eye, TrendingDown, BarChart4, LineChart as LineChartIcon, PieChart as PieChartIcon
} from 'lucide-react';
import './App.css';
import './RealTimeAnalytics.css';
import TrueCrime from './TrueCrime';
import RealTimeAnalytics from './RealTimeAnalytics';
import MultiDomainTracker from './MultiDomainTracker';

// ============================================================================
// DASHBOARD - Main Overview Page
// ============================================================================
const Dashboard = () => {
  const [metrics] = useState({
    totalRevenue: 24078.50,
    todayRevenue: 342.89,
    totalClicks: 15847,
    conversionRate: 6.57,
    activeCampaigns: 8,
    totalProducts: 12,
    threatsDetected: 156,
    criticalVulnerabilities: 12,
  });

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <motion.div 
          className="welcome-section"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1>🎵 Welcome to Your Business Empire</h1>
          <p className="welcome-subtitle">
            Complete music industry automation, data intelligence, and cybersecurity platform
          </p>
        </motion.div>
      </div>

      {/* Revenue Apps - Blue Ocean Features */}
      <div className="metrics-section">
        <h2>🚀 Revenue Apps (Blue Ocean Features Live)</h2>
        <div className="metrics-grid">
          <motion.a 
            href="https://3001-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer"
            target="_blank"
            rel="noopener noreferrer"
            className="metric-card revenue"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="metric-icon">
              <Zap size={32} />
            </div>
            <div className="metric-content">
              <h3>TheAltText</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>E-commerce SEO & WCAG AAA Compliance</p>
              <div className="metric-change positive">Blue Ocean Features Live</div>
            </div>
          </motion.a>

          <motion.a 
            href="https://3000-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer"
            target="_blank"
            rel="noopener noreferrer"
            className="metric-card campaigns"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ textDecoration: 'none', cursor: 'pointer' }}
          >
            <div className="metric-icon">
              <Globe size={32} />
            </div>
            <div className="metric-content">
              <h3>InTheWild</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>AI Micro-App Generation Engine</p>
              <div className="metric-change positive">Blue Ocean Features Live</div>
            </div>
          </motion.a>

          <motion.a 
            href="https://8004-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="metric-card security-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            style={{ textDecoration: 'none', cursor: 'pointer', background: 'rgba(52, 152, 219, 0.1)', border: '1px solid rgba(52, 152, 219, 0.2)' }}
          >
            <div className="metric-icon">
              <Shield size={32} />
            </div>
            <div className="metric-content">
              <h3>Forensic Studio</h3>
              <p style={{ fontSize: '0.85rem', color: '#666', marginTop: '4px' }}>Batch Analysis & AI Reconstruction</p>
              <div className="metric-change positive">API & Blue Ocean Features Live</div>
            </div>
          </motion.a>
        </div>
      </div>

      {/* Revenue & Performance Metrics */}
      <div className="metrics-section">
        <h2>💰 Business Performance</h2>
        <div className="metrics-grid">
          <motion.div 
            className="metric-card revenue"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <DollarSign size={32} />
            </div>
            <div className="metric-content">
              <h3>Total Revenue</h3>
              <div className="metric-value">${metrics.totalRevenue.toLocaleString()}</div>
              <div className="metric-change positive">+18.2% this month</div>
            </div>
          </motion.div>

          <motion.div 
            className="metric-card clicks"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <Target size={32} />
            </div>
            <div className="metric-content">
              <h3>Total Clicks</h3>
              <div className="metric-value">{metrics.totalClicks.toLocaleString()}</div>
              <div className="metric-change positive">+12.4% this week</div>
            </div>
          </motion.div>

          <motion.div 
            className="metric-card conversion"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <TrendingUp size={32} />
            </div>
            <div className="metric-content">
              <h3>Conversion Rate</h3>
              <div className="metric-value">{metrics.conversionRate}%</div>
              <div className="metric-change positive">+2.1% improvement</div>
            </div>
          </motion.div>

          <motion.div 
            className="metric-card campaigns"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <Rocket size={32} />
            </div>
            <div className="metric-content">
              <h3>Active Campaigns</h3>
              <div className="metric-value">{metrics.activeCampaigns}</div>
              <div className="metric-change neutral">Running smoothly</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security & Threat Intelligence */}
      <div className="metrics-section">
        <h2>🛡️ Cybersecurity Status</h2>
        <div className="metrics-grid">
          <motion.div 
            className="metric-card security-threats"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <AlertTriangle size={32} />
            </div>
            <div className="metric-content">
              <h3>Threats Detected</h3>
              <div className="metric-value">{metrics.threatsDetected}</div>
              <div className="metric-change warning">Monitored 24/7</div>
            </div>
          </motion.div>

          <motion.div 
            className="metric-card security-critical"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="metric-icon">
              <Shield size={32} />
            </div>
            <div className="metric-content">
              <h3>Critical Vulnerabilities</h3>
              <div className="metric-value">{metrics.criticalVulnerabilities}</div>
              <div className="metric-change neutral">Requires attention</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Showcase */}
      <div className="features-section">
        <h2>✨ Your Platform Features</h2>
        <div className="features-grid">
          <motion.div 
            className="feature-card music-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🎵</div>
            <h3>Music Production Suite</h3>
            <p>AI stem separation, mastering, promotion & distribution</p>
            <div className="feature-tags">
              <span>Stem Separation</span>
              <span>Mastering</span>
              <span>Promotion</span>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card security-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🛡️</div>
            <h3>Cybersecurity Intelligence</h3>
            <p>Real-time threat detection, CVE tracking & vulnerability management</p>
            <div className="feature-tags">
              <span>Threat Detection</span>
              <span>CVE Tracking</span>
              <span>Risk Management</span>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card affiliate-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🔗</div>
            <h3>Affiliate Marketing</h3>
            <p>Automated link generation, performance tracking & optimization</p>
            <div className="feature-tags">
              <span>Link Generation</span>
              <span>Analytics</span>
              <span>Optimization</span>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card social-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">📱</div>
            <h3>Social Media Automation</h3>
            <p>Scheduled posting, engagement tracking & cross-platform management</p>
            <div className="feature-tags">
              <span>Scheduling</span>
              <span>Analytics</span>
              <span>Multi-Platform</span>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card data-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">📊</div>
            <h3>Data Intelligence</h3>
            <p>Advanced filtering, search & business intelligence across all data</p>
            <div className="feature-tags">
              <span>Filtering</span>
              <span>Analytics</span>
              <span>Insights</span>
            </div>
          </motion.div>

          <motion.div 
            className="feature-card trends-card"
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="feature-icon">🌍</div>
            <h3>Global Trends</h3>
            <p>Music trends, market analysis & opportunity identification</p>
            <div className="feature-tags">
              <span>Trends</span>
              <span>Markets</span>
              <span>Opportunities</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h2>🚀 Quick Actions</h2>
        <div className="actions-grid">
          <Link to="/music">
            <motion.button 
              className="action-btn music"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Music size={24} />
              <span>Stem Separation</span>
            </motion.button>
          </Link>
          
          <Link to="/social">
            <motion.button 
              className="action-btn social"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Share2 size={24} />
              <span>Social Media</span>
            </motion.button>
          </Link>
          
          <Link to="/affiliate">
            <motion.button 
              className="action-btn affiliate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <LinkIcon size={24} />
              <span>Affiliate Links</span>
            </motion.button>
          </Link>
          
          <Link to="/security">
            <motion.button 
              className="action-btn security"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Shield size={24} />
              <span>Security</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// MUSIC SECTION - Comprehensive Music Production Tools
// ============================================================================
const MusicSection = () => {
  return (
    <div className="music-section">
      <div className="section-header">
        <h1>🎵 Music Production Suite</h1>
        <p>Professional tools for music creation, production, and distribution</p>
      </div>

      <div className="music-tools-grid">
        <motion.div 
          className="tool-card stem-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">🎧</div>
          <h3>Stem Separation</h3>
          <p>AI-powered audio stem separation to extract vocals, drums, bass, and instruments from any track</p>
          <ul className="tool-features">
            <li>✓ Vocal extraction</li>
            <li>✓ Drum isolation</li>
            <li>✓ Bass separation</li>
            <li>✓ Instrument extraction</li>
            <li>✓ High-quality output</li>
          </ul>
        </motion.div>

        <motion.div 
          className="tool-card mastering-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">🎚️</div>
          <h3>Auto Mastering Engine</h3>
          <p>Professional mastering with AI-powered optimization for all platforms</p>
          <ul className="tool-features">
            <li>✓ EQ optimization</li>
            <li>✓ Compression</li>
            <li>✓ Loudness normalization</li>
            <li>✓ Multi-format export</li>
            <li>✓ Platform optimization</li>
          </ul>
        </motion.div>

        <motion.div 
          className="tool-card trends-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">📈</div>
          <h3>Global Music Trends</h3>
          <p>Track music trends worldwide and identify market opportunities</p>
          <ul className="tool-features">
            <li>✓ Genre trends</li>
            <li>✓ Regional analysis</li>
            <li>✓ Opportunity gaps</li>
            <li>✓ Market insights</li>
            <li>✓ Competitor analysis</li>
          </ul>
        </motion.div>

        <motion.div 
          className="tool-card promotion-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">📢</div>
          <h3>Music Promotion</h3>
          <p>Strategic promotion across all platforms with proven strategies</p>
          <ul className="tool-features">
            <li>✓ Platform strategies</li>
            <li>✓ Ad placement</li>
            <li>✓ Playlist pitching</li>
            <li>✓ Social media</li>
            <li>✓ PR guidance</li>
          </ul>
        </motion.div>

        <motion.div 
          className="tool-card distribution-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">🌐</div>
          <h3>Distribution Tracker</h3>
          <p>Track your music across all streaming platforms in real-time</p>
          <ul className="tool-features">
            <li>✓ Spotify tracking</li>
            <li>✓ Apple Music sync</li>
            <li>✓ YouTube monitoring</li>
            <li>✓ Streaming stats</li>
            <li>✓ Revenue tracking</li>
          </ul>
        </motion.div>

        <motion.div 
          className="tool-card rights-card"
          whileHover={{ scale: 1.05 }}
        >
          <div className="tool-icon">⚖️</div>
          <h3>Copyright & Rights</h3>
          <p>Complete guide to music rights, registration, and compliance</p>
          <ul className="tool-features">
            <li>✓ Copyright registration</li>
            <li>✓ PRO information</li>
            <li>✓ Rights management</li>
            <li>✓ Compliance guide</li>
            <li>✓ Legal resources</li>
          </ul>
        </motion.div>
      </div>

      <div className="music-stats">
        <h2>Your Music Impact</h2>
        <div className="stats-grid">
          <div className="stat-box">
            <div className="stat-number">1.2M</div>
            <div className="stat-label">Total Streams</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">45K</div>
            <div className="stat-label">Monthly Listeners</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">12</div>
            <div className="stat-label">Tracks Released</div>
          </div>
          <div className="stat-box">
            <div className="stat-number">$8.5K</div>
            <div className="stat-label">Monthly Revenue</div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// CYBERSECURITY SECTION - Threat Intelligence & CVE Tracking
// ============================================================================
const SecuritySection = () => {
  const [threats] = useState([
    { cveID: "CVE-2025-20362", vendor: "Cisco", severity: "Critical", status: "Requires Action" },
    { cveID: "CVE-2025-20333", vendor: "Cisco", severity: "Critical", status: "Requires Action" },
    { cveID: "CVE-2025-10585", vendor: "Google", severity: "High", status: "Monitoring" },
    { cveID: "CVE-2025-5086", vendor: "Dassault", severity: "High", status: "Monitoring" },
    { cveID: "CVE-2025-38352", vendor: "Linux", severity: "High", status: "Patched" },
  ]);

  return (
    <div className="security-section">
      <div className="section-header">
        <h1>🛡️ Cybersecurity Intelligence</h1>
        <p>Real-time threat detection, CVE tracking, and vulnerability management</p>
      </div>

      <div className="security-stats">
        <motion.div className="security-stat-card critical">
          <AlertTriangle size={32} />
          <div>
            <div className="stat-number">12</div>
            <div className="stat-label">Critical Threats</div>
          </div>
        </motion.div>
        <motion.div className="security-stat-card high">
          <AlertTriangle size={32} />
          <div>
            <div className="stat-number">34</div>
            <div className="stat-label">High Priority</div>
          </div>
        </motion.div>
        <motion.div className="security-stat-card medium">
          <AlertCircle size={32} />
          <div>
            <div className="stat-number">89</div>
            <div className="stat-label">Medium Risk</div>
          </div>
        </motion.div>
        <motion.div className="security-stat-card monitoring">
          <Shield size={32} />
          <div>
            <div className="stat-number">24/7</div>
            <div className="stat-label">Monitoring</div>
          </div>
        </motion.div>
      </div>

      <div className="threats-list">
        <h2>Latest CVE Threats</h2>
        <div className="threats-table">
          {threats.map((threat, idx) => (
            <motion.div 
              key={idx}
              className={`threat-row severity-${threat.severity.toLowerCase()}`}
              whileHover={{ x: 5 }}
            >
              <div className="threat-id">{threat.cveID}</div>
              <div className="threat-vendor">{threat.vendor}</div>
              <div className={`threat-severity ${threat.severity.toLowerCase()}`}>
                {threat.severity}
              </div>
              <div className={`threat-status status-${threat.status.toLowerCase().replace(' ', '-')}`}>
                {threat.status}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="security-features">
        <h2>Security Features</h2>
        <div className="features-list">
          <div className="feature-item">
            <Shield size={24} />
            <div>
              <h3>Real-Time Threat Detection</h3>
              <p>24/7 monitoring of emerging threats and vulnerabilities</p>
            </div>
          </div>
          <div className="feature-item">
            <AlertTriangle size={24} />
            <div>
              <h3>CVE Tracking</h3>
              <p>Automatic tracking of critical CVEs affecting your systems</p>
            </div>
          </div>
          <div className="feature-item">
            <TrendingUp size={24} />
            <div>
              <h3>Risk Assessment</h3>
              <p>Comprehensive risk scoring and prioritization</p>
            </div>
          </div>
          <div className="feature-item">
            <CheckCircle size={24} />
            <div>
              <h3>Remediation Guidance</h3>
              <p>Actionable steps to mitigate and resolve threats</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// AFFILIATE MANAGEMENT
// ============================================================================
const AffiliateManagement = () => {
  return (
    <div className="affiliate-management">
      <div className="section-header">
        <h1>🔗 Affiliate Link Management</h1>
        <p>Automated affiliate link generation, tracking, and optimization</p>
      </div>

      <div className="affiliate-features">
        <motion.div className="feature-box">
          <LinkIcon size={32} />
          <h3>Automated Link Generation</h3>
          <p>Generate affiliate links for Amazon, music equipment, and partner products</p>
        </motion.div>
        <motion.div className="feature-box">
          <BarChart3 size={32} />
          <h3>Performance Analytics</h3>
          <p>Track clicks, conversions, and revenue from each affiliate link</p>
        </motion.div>
        <motion.div className="feature-box">
          <TrendingUp size={32} />
          <h3>Optimization Tools</h3>
          <p>AI-powered recommendations to improve conversion rates</p>
        </motion.div>
        <motion.div className="feature-box">
          <DollarSign size={32} />
          <h3>Revenue Tracking</h3>
          <p>Real-time revenue tracking and payout management</p>
        </motion.div>
      </div>

      <div className="affiliate-stats">
        <div className="stat-card">
          <div className="stat-value">2,847</div>
          <div className="stat-label">Active Links</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">$12.5K</div>
          <div className="stat-label">Monthly Revenue</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">3.2%</div>
          <div className="stat-label">Conversion Rate</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">45K</div>
          <div className="stat-label">Total Clicks</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// SOCIAL MEDIA MANAGEMENT
// ============================================================================
const SocialMediaManagement = () => {
  return (
    <div className="social-media-management">
      <div className="section-header">
        <h1>📱 Social Media Automation</h1>
        <p>Automate posting, engagement, and cross-platform management</p>
      </div>

      <div className="social-features">
        <motion.div className="feature-box">
          <Share2 size={32} />
          <h3>Multi-Platform Posting</h3>
          <p>Schedule and post to LinkedIn, Facebook, Instagram, TikTok, and Lemon8</p>
        </motion.div>
        <motion.div className="feature-box">
          <Users size={32} />
          <h3>Engagement Tracking</h3>
          <p>Monitor likes, comments, shares, and audience growth</p>
        </motion.div>
        <motion.div className="feature-box">
          <Sparkles size={32} />
          <h3>Content Generation</h3>
          <p>AI-powered content suggestions and optimization</p>
        </motion.div>
        <motion.div className="feature-box">
          <Clock size={32} />
          <h3>Smart Scheduling</h3>
          <p>Optimal posting times based on audience activity</p>
        </motion.div>
      </div>

      <div className="social-stats">
        <div className="stat-card">
          <div className="stat-value">125K</div>
          <div className="stat-label">Total Followers</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">8.2K</div>
          <div className="stat-label">Avg. Engagement</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">156</div>
          <div className="stat-label">Scheduled Posts</div>
        </div>
        <div className="stat-card">
          <div className="stat-value">4.7%</div>
          <div className="stat-label">Engagement Rate</div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// ANALYTICS PAGE
// ============================================================================
const AnalyticsPage = () => {
  return (
    <div className="analytics-page">
      <div className="section-header">
        <h1>📊 Business Analytics</h1>
        <p>Comprehensive insights across all your business streams</p>
      </div>

      <div className="analytics-grid">
        <div className="analytics-card">
          <h3>Revenue Breakdown</h3>
          <div className="chart-placeholder">
            <BarChart3 size={48} />
            <p>Music Streams: $8.5K | Affiliate: $12.5K | Consulting: $3K</p>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Traffic Sources</h3>
          <div className="chart-placeholder">
            <PieChartIcon size={48} />
            <p>Organic: 45% | Social: 35% | Referral: 20%</p>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Monthly Growth</h3>
          <div className="chart-placeholder">
            <LineChartIcon size={48} />
            <p>+18.2% Revenue | +12.4% Traffic | +8.7% Engagement</p>
          </div>
        </div>

        <div className="analytics-card">
          <h3>Performance Metrics</h3>
          <div className="metrics-list">
            <div className="metric-row">
              <span>Conversion Rate</span>
              <strong>6.57%</strong>
            </div>
            <div className="metric-row">
              <span>Avg. Session Duration</span>
              <strong>4m 23s</strong>
            </div>
            <div className="metric-row">
              <span>Bounce Rate</span>
              <strong>32.1%</strong>
            </div>
            <div className="metric-row">
              <span>Customer Lifetime Value</span>
              <strong>$1,247</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// ============================================================================
// NAVIGATION COMPONENT
// ============================================================================
const Navigation = () => {
  const location = useLocation();
  
  const navItems = [
    { path: '/', icon: Home, label: 'Dashboard', color: '#8B5CF6' },
    { path: '/music', icon: Music, label: 'Music', color: '#EC4899' },
    { path: '/security', icon: Shield, label: 'Security', color: '#EF4444' },
    { path: '/affiliate', icon: LinkIcon, label: 'Affiliate', color: '#10B981' },
    { path: '/social', icon: Share2, label: 'Social', color: '#F59E0B' },
    { path: '/analytics', icon: BarChart3, label: 'Analytics', color: '#3B82F6' },
    { path: '/realtime', icon: Zap, label: 'Real-Time', color: '#F97316' },
    { path: '/domains', icon: Globe, label: 'Domains', color: '#06B6D4' }
  ];

  return (
    <nav className="main-navigation">
      <div className="nav-header">
        <motion.div 
          className="nav-logo"
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Crown size={32} />
          <span>Audrey Evans</span>
        </motion.div>
      </div>
      
      <div className="nav-items">
        {navItems.map((item) => (
          <Link key={item.path} to={item.path}>
            <motion.div 
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
              whileHover={{ scale: 1.05, x: 10 }}
              whileTap={{ scale: 0.95 }}
              style={{ '--nav-color': item.color }}
            >
              <item.icon size={24} />
              <span>{item.label}</span>
              {location.pathname === item.path && (
                <motion.div 
                  className="nav-indicator"
                  layoutId="nav-indicator"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.div>
          </Link>
        ))}
      </div>
      
      <div className="nav-footer">
        <motion.button 
          className="settings-btn"
          whileHover={{ scale: 1.1, rotate: 90 }}
        >
          <Settings size={24} />
        </motion.button>
      </div>
    </nav>
  );
};

// ============================================================================
// MAIN APP COMPONENT
// ============================================================================
const App = () => {
  return (
    <Router>
      <div className="app">
        <Navigation />
        <main className="main-content">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/music" element={<MusicSection />} />
              <Route path="/security" element={<SecuritySection />} />
              <Route path="/affiliate" element={<AffiliateManagement />} />
              <Route path="/social" element={<SocialMediaManagement />} />
              <Route path="/analytics" element={<AnalyticsPage />} />
              <Route path="/truecrime" element={<TrueCrime />} />
              <Route path="/realtime" element={<RealTimeAnalytics />} />
              <Route path="/domains" element={<MultiDomainTracker />} />
            </Routes>
          </AnimatePresence>
        </main>
      </div>
    </Router>
  );
};

export default App;
// Cache bust: Wed Jan 28 12:36:34 EST 2026
