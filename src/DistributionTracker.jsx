import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Clock, 
  CheckCircle, 
  AlertTriangle, 
  XCircle, 
  RefreshCw, 
  Calendar, 
  TrendingUp, 
  Eye, 
  ExternalLink, 
  Bell, 
  Settings, 
  Filter, 
  Search, 
  Download, 
  Upload, 
  Zap, 
  Target, 
  Globe, 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  BarChart3, 
  Users, 
  DollarSign, 
  Award, 
  Star, 
  Heart, 
  Share2, 
  MessageCircle, 
  Headphones, 
  Radio, 
  Mic, 
  Camera, 
  Video, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Speaker, 
  Disc, 
  Vinyl, 
  Cassette, 
  Waves, 
  Equalizer, 
  Shuffle, 
  Repeat, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind
} from 'lucide-react';

// Distribution Tracker Component
const DistributionTracker = () => {
  const [selectedRelease, setSelectedRelease] = useState('latest');
  const [filterStatus, setFilterStatus] = useState('all');
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock distribution data
  const distributionData = {
    releases: [
      {
        id: 'release_1',
        title: 'Entrepreneurial Spirit',
        artist: 'Revvel Hail',
        releaseDate: '2024-05-12',
        distributionDate: '2024-05-10',
        artwork: '/api/placeholder/100/100',
        status: 'live',
        totalPlatforms: 15,
        livePlatforms: 12,
        pendingPlatforms: 2,
        rejectedPlatforms: 1
      },
      {
        id: 'release_2',
        title: 'Neural Networks',
        artist: 'Audrey Evans',
        releaseDate: '2024-03-10',
        distributionDate: '2024-03-08',
        artwork: '/api/placeholder/100/100',
        status: 'live',
        totalPlatforms: 15,
        livePlatforms: 15,
        pendingPlatforms: 0,
        rejectedPlatforms: 0
      },
      {
        id: 'release_3',
        title: 'Coffee Shop Serenade',
        artist: 'Revvel Hail',
        releaseDate: '2024-02-20',
        distributionDate: '2024-02-18',
        artwork: '/api/placeholder/100/100',
        status: 'live',
        totalPlatforms: 15,
        livePlatforms: 14,
        pendingPlatforms: 1,
        rejectedPlatforms: 0
      }
    ],
    platforms: [
      {
        id: 'spotify',
        name: 'Spotify',
        icon: '🎵',
        color: '#1DB954',
        category: 'streaming',
        priority: 'high',
        avgProcessingTime: '2-5 days',
        status: 'live',
        liveDate: '2024-05-12',
        url: 'https://open.spotify.com/track/entrepreneurial-spirit',
        streams: 92156,
        revenue: 184.31,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'apple',
        name: 'Apple Music',
        icon: '🍎',
        color: '#FA243C',
        category: 'streaming',
        priority: 'high',
        avgProcessingTime: '1-3 days',
        status: 'live',
        liveDate: '2024-05-12',
        url: 'https://music.apple.com/song/entrepreneurial-spirit',
        streams: 46078,
        revenue: 138.23,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'youtube',
        name: 'YouTube Music',
        icon: '📺',
        color: '#FF0000',
        category: 'streaming',
        priority: 'high',
        avgProcessingTime: '1-7 days',
        status: 'live',
        liveDate: '2024-05-13',
        url: 'https://music.youtube.com/watch?v=entrepreneurial-spirit',
        streams: 134567,
        revenue: 67.28,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'amazon',
        name: 'Amazon Music',
        icon: '📦',
        color: '#FF9900',
        category: 'streaming',
        priority: 'high',
        avgProcessingTime: '3-7 days',
        status: 'live',
        liveDate: '2024-05-14',
        url: 'https://music.amazon.com/tracks/entrepreneurial-spirit',
        streams: 23456,
        revenue: 58.64,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'tidal',
        name: 'Tidal',
        icon: '🌊',
        color: '#000000',
        category: 'streaming',
        priority: 'medium',
        avgProcessingTime: '3-10 days',
        status: 'live',
        liveDate: '2024-05-15',
        url: 'https://tidal.com/track/entrepreneurial-spirit',
        streams: 8901,
        revenue: 35.60,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'deezer',
        name: 'Deezer',
        icon: '🎶',
        color: '#FF6600',
        category: 'streaming',
        priority: 'medium',
        avgProcessingTime: '2-7 days',
        status: 'live',
        liveDate: '2024-05-14',
        url: 'https://deezer.com/track/entrepreneurial-spirit',
        streams: 5432,
        revenue: 21.73,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'soundcloud',
        name: 'SoundCloud',
        icon: '☁️',
        color: '#FF5500',
        category: 'streaming',
        priority: 'medium',
        avgProcessingTime: '1-3 days',
        status: 'live',
        liveDate: '2024-05-12',
        url: 'https://soundcloud.com/revvelhail/entrepreneurial-spirit',
        streams: 28901,
        revenue: 14.45,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'pandora',
        name: 'Pandora',
        icon: '📻',
        color: '#005483',
        category: 'radio',
        priority: 'medium',
        avgProcessingTime: '5-14 days',
        status: 'pending',
        submittedDate: '2024-05-10',
        expectedDate: '2024-05-24',
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'iheartradio',
        name: 'iHeartRadio',
        icon: '❤️',
        color: '#C6002B',
        category: 'radio',
        priority: 'medium',
        avgProcessingTime: '7-21 days',
        status: 'pending',
        submittedDate: '2024-05-10',
        expectedDate: '2024-05-31',
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'bandcamp',
        name: 'Bandcamp',
        icon: '🎪',
        color: '#629AA0',
        category: 'direct',
        priority: 'low',
        avgProcessingTime: '1-2 days',
        status: 'live',
        liveDate: '2024-05-12',
        url: 'https://revvelhail.bandcamp.com/track/entrepreneurial-spirit',
        streams: 1234,
        revenue: 12.34,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'beatport',
        name: 'Beatport',
        icon: '🎧',
        color: '#01FF95',
        category: 'electronic',
        priority: 'low',
        avgProcessingTime: '3-7 days',
        status: 'live',
        liveDate: '2024-05-15',
        url: 'https://beatport.com/track/entrepreneurial-spirit',
        streams: 567,
        revenue: 8.51,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'traxsource',
        name: 'Traxsource',
        icon: '🎵',
        color: '#FF6B35',
        category: 'electronic',
        priority: 'low',
        avgProcessingTime: '2-5 days',
        status: 'live',
        liveDate: '2024-05-14',
        url: 'https://traxsource.com/track/entrepreneurial-spirit',
        streams: 234,
        revenue: 4.68,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'audiomack',
        name: 'Audiomack',
        icon: '🎤',
        color: '#FF6600',
        category: 'streaming',
        priority: 'low',
        avgProcessingTime: '1-3 days',
        status: 'live',
        liveDate: '2024-05-13',
        url: 'https://audiomack.com/revvelhail/song/entrepreneurial-spirit',
        streams: 3456,
        revenue: 6.91,
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'napster',
        name: 'Napster',
        icon: '🎵',
        color: '#FF6600',
        category: 'streaming',
        priority: 'low',
        avgProcessingTime: '5-10 days',
        status: 'rejected',
        rejectedDate: '2024-05-18',
        rejectionReason: 'Metadata formatting issue',
        lastChecked: '2024-05-25 14:30'
      },
      {
        id: 'anghami',
        name: 'Anghami',
        icon: '🎶',
        color: '#9C27B0',
        category: 'streaming',
        priority: 'low',
        avgProcessingTime: '7-14 days',
        status: 'live',
        liveDate: '2024-05-20',
        url: 'https://anghami.com/song/entrepreneurial-spirit',
        streams: 890,
        revenue: 2.67,
        lastChecked: '2024-05-25 14:30'
      }
    ],
    distributors: [
      {
        id: 'distrokid',
        name: 'DistroKid',
        icon: '🚀',
        color: '#1DB954',
        status: 'active',
        totalReleases: 5,
        successRate: 94.7,
        avgProcessingTime: '1-2 days',
        lastRelease: '2024-05-12',
        nextRelease: '2024-06-15'
      },
      {
        id: 'landr',
        name: 'Landr',
        icon: '🎛️',
        color: '#6C5CE7',
        status: 'active',
        totalReleases: 2,
        successRate: 100,
        avgProcessingTime: '2-3 days',
        lastRelease: '2024-03-10',
        nextRelease: null
      }
    ]
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'live': return '#10B981';
      case 'pending': return '#F59E0B';
      case 'rejected': return '#EF4444';
      case 'processing': return '#3B82F6';
      default: return '#6B7280';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'live': return CheckCircle;
      case 'pending': return Clock;
      case 'rejected': return XCircle;
      case 'processing': return RefreshCw;
      default: return AlertTriangle;
    }
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const getDaysAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const filteredPlatforms = distributionData.platforms.filter(platform => {
    if (filterStatus === 'all') return true;
    return platform.status === filterStatus;
  });

  const statusCounts = {
    live: distributionData.platforms.filter(p => p.status === 'live').length,
    pending: distributionData.platforms.filter(p => p.status === 'pending').length,
    rejected: distributionData.platforms.filter(p => p.status === 'rejected').length,
    processing: distributionData.platforms.filter(p => p.status === 'processing').length
  };

  const totalRevenue = distributionData.platforms
    .filter(p => p.revenue)
    .reduce((sum, p) => sum + p.revenue, 0);

  const totalStreams = distributionData.platforms
    .filter(p => p.streams)
    .reduce((sum, p) => sum + p.streams, 0);

  return (
    <div className="distribution-tracker">
      <div className="tracker-header">
        <h2>📊 Music Distribution Tracker</h2>
        <p>Monitor your music across all platforms in real-time</p>
        
        <div className="header-actions">
          <div className="auto-refresh">
            <label>
              <input 
                type="checkbox" 
                checked={autoRefresh}
                onChange={(e) => setAutoRefresh(e.target.checked)}
              />
              <span>Auto-refresh</span>
            </label>
          </div>
          
          <div className="last-updated">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </div>
          
          <button className="refresh-btn">
            <RefreshCw size={16} />
            <span>Refresh Now</span>
          </button>
        </div>
      </div>

      {/* Overview Stats */}
      <div className="overview-stats">
        <div className="stat-card total">
          <div className="stat-icon">
            <Globe size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Platforms</h3>
            <div className="stat-value">{distributionData.platforms.length}</div>
            <div className="stat-change">Across all distributors</div>
          </div>
        </div>

        <div className="stat-card live">
          <div className="stat-icon">
            <CheckCircle size={24} />
          </div>
          <div className="stat-content">
            <h3>Live Platforms</h3>
            <div className="stat-value">{statusCounts.live}</div>
            <div className="stat-change">
              {Math.round((statusCounts.live / distributionData.platforms.length) * 100)}% success rate
            </div>
          </div>
        </div>

        <div className="stat-card pending">
          <div className="stat-icon">
            <Clock size={24} />
          </div>
          <div className="stat-content">
            <h3>Pending</h3>
            <div className="stat-value">{statusCounts.pending}</div>
            <div className="stat-change">Awaiting approval</div>
          </div>
        </div>

        <div className="stat-card revenue">
          <div className="stat-icon">
            <DollarSign size={24} />
          </div>
          <div className="stat-content">
            <h3>Total Revenue</h3>
            <div className="stat-value">{formatCurrency(totalRevenue)}</div>
            <div className="stat-change">From {formatNumber(totalStreams)} streams</div>
          </div>
        </div>
      </div>

      {/* Release Selection */}
      <div className="release-selection">
        <h3>🎵 Select Release</h3>
        <div className="releases-grid">
          {distributionData.releases.map((release) => (
            <motion.div
              key={release.id}
              className={`release-card ${selectedRelease === release.id ? 'selected' : ''}`}
              onClick={() => setSelectedRelease(release.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="release-artwork">
                <img src="/api/placeholder/80/80" alt={release.title} />
              </div>
              
              <div className="release-info">
                <h4>{release.title}</h4>
                <p>{release.artist}</p>
                <div className="release-date">{release.releaseDate}</div>
              </div>
              
              <div className="release-status">
                <div className="status-summary">
                  <span className="live-count">{release.livePlatforms} live</span>
                  {release.pendingPlatforms > 0 && (
                    <span className="pending-count">{release.pendingPlatforms} pending</span>
                  )}
                  {release.rejectedPlatforms > 0 && (
                    <span className="rejected-count">{release.rejectedPlatforms} rejected</span>
                  )}
                </div>
                
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${(release.livePlatforms / release.totalPlatforms) * 100}%` }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Filter Controls */}
      <div className="filter-controls">
        <div className="filter-buttons">
          <button 
            className={`filter-btn ${filterStatus === 'all' ? 'active' : ''}`}
            onClick={() => setFilterStatus('all')}
          >
            All Platforms ({distributionData.platforms.length})
          </button>
          
          <button 
            className={`filter-btn live ${filterStatus === 'live' ? 'active' : ''}`}
            onClick={() => setFilterStatus('live')}
          >
            <CheckCircle size={16} />
            Live ({statusCounts.live})
          </button>
          
          <button 
            className={`filter-btn pending ${filterStatus === 'pending' ? 'active' : ''}`}
            onClick={() => setFilterStatus('pending')}
          >
            <Clock size={16} />
            Pending ({statusCounts.pending})
          </button>
          
          <button 
            className={`filter-btn rejected ${filterStatus === 'rejected' ? 'active' : ''}`}
            onClick={() => setFilterStatus('rejected')}
          >
            <XCircle size={16} />
            Rejected ({statusCounts.rejected})
          </button>
        </div>

        <div className="search-box">
          <Search size={16} />
          <input type="text" placeholder="Search platforms..." />
        </div>
      </div>

      {/* Platform Status Grid */}
      <div className="platforms-grid">
        {filteredPlatforms.map((platform) => {
          const StatusIcon = getStatusIcon(platform.status);
          
          return (
            <motion.div
              key={platform.id}
              className={`platform-card ${platform.status}`}
              whileHover={{ scale: 1.02, y: -2 }}
              style={{ '--platform-color': platform.color }}
            >
              <div className="platform-header">
                <div className="platform-info">
                  <span className="platform-icon">{platform.icon}</span>
                  <h4>{platform.name}</h4>
                  <span className="platform-category">{platform.category}</span>
                </div>
                
                <div className="platform-status">
                  <StatusIcon 
                    size={20} 
                    style={{ color: getStatusColor(platform.status) }}
                  />
                  <span className="status-text">{platform.status}</span>
                </div>
              </div>

              <div className="platform-details">
                {platform.status === 'live' && (
                  <>
                    <div className="platform-metrics">
                      <div className="metric">
                        <span className="metric-label">Streams</span>
                        <span className="metric-value">{formatNumber(platform.streams)}</span>
                      </div>
                      
                      <div className="metric">
                        <span className="metric-label">Revenue</span>
                        <span className="metric-value">{formatCurrency(platform.revenue)}</span>
                      </div>
                    </div>
                    
                    <div className="platform-timeline">
                      <div className="timeline-item">
                        <span className="timeline-label">Live since:</span>
                        <span className="timeline-value">{platform.liveDate}</span>
                      </div>
                      
                      <div className="timeline-item">
                        <span className="timeline-label">Processing time:</span>
                        <span className="timeline-value">
                          {getDaysAgo(platform.liveDate)} days
                        </span>
                      </div>
                    </div>
                  </>
                )}

                {platform.status === 'pending' && (
                  <div className="pending-details">
                    <div className="timeline-item">
                      <span className="timeline-label">Submitted:</span>
                      <span className="timeline-value">{platform.submittedDate}</span>
                    </div>
                    
                    <div className="timeline-item">
                      <span className="timeline-label">Expected:</span>
                      <span className="timeline-value">{platform.expectedDate}</span>
                    </div>
                    
                    <div className="timeline-item">
                      <span className="timeline-label">Typical time:</span>
                      <span className="timeline-value">{platform.avgProcessingTime}</span>
                    </div>
                    
                    <div className="pending-progress">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ 
                            width: `${Math.min(
                              (getDaysAgo(platform.submittedDate) / 14) * 100, 
                              100
                            )}%` 
                          }}
                        />
                      </div>
                      <span className="progress-text">
                        Day {getDaysAgo(platform.submittedDate)} of processing
                      </span>
                    </div>
                  </div>
                )}

                {platform.status === 'rejected' && (
                  <div className="rejected-details">
                    <div className="timeline-item">
                      <span className="timeline-label">Rejected:</span>
                      <span className="timeline-value">{platform.rejectedDate}</span>
                    </div>
                    
                    <div className="rejection-reason">
                      <span className="reason-label">Reason:</span>
                      <span className="reason-text">{platform.rejectionReason}</span>
                    </div>
                    
                    <button className="resubmit-btn">
                      <RefreshCw size={14} />
                      <span>Resubmit</span>
                    </button>
                  </div>
                )}
              </div>

              <div className="platform-actions">
                {platform.url && (
                  <a 
                    href={platform.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="action-btn"
                  >
                    <ExternalLink size={14} />
                    <span>View</span>
                  </a>
                )}
                
                <button className="action-btn">
                  <BarChart3 size={14} />
                  <span>Analytics</span>
                </button>
                
                <button className="action-btn">
                  <Bell size={14} />
                  <span>Notify</span>
                </button>
              </div>

              <div className="last-checked">
                Last checked: {platform.lastChecked}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Distribution Timeline */}
      <div className="distribution-timeline">
        <h3>📅 Distribution Timeline</h3>
        <div className="timeline">
          <div className="timeline-item completed">
            <div className="timeline-marker">
              <CheckCircle size={16} />
            </div>
            <div className="timeline-content">
              <h4>Track Uploaded to DistroKid</h4>
              <p>May 10, 2024 - 9:30 AM</p>
            </div>
          </div>
          
          <div className="timeline-item completed">
            <div className="timeline-marker">
              <CheckCircle size={16} />
            </div>
            <div className="timeline-content">
              <h4>Distribution Started</h4>
              <p>May 10, 2024 - 10:15 AM</p>
            </div>
          </div>
          
          <div className="timeline-item completed">
            <div className="timeline-marker">
              <CheckCircle size={16} />
            </div>
            <div className="timeline-content">
              <h4>First Platforms Live (Spotify, Apple Music)</h4>
              <p>May 12, 2024 - 6:00 AM</p>
            </div>
          </div>
          
          <div className="timeline-item completed">
            <div className="timeline-marker">
              <CheckCircle size={16} />
            </div>
            <div className="timeline-content">
              <h4>Major Platforms Complete</h4>
              <p>May 15, 2024 - 12:00 PM</p>
            </div>
          </div>
          
          <div className="timeline-item pending">
            <div className="timeline-marker">
              <Clock size={16} />
            </div>
            <div className="timeline-content">
              <h4>Radio Platforms Processing</h4>
              <p>Expected: May 31, 2024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Distributor Performance */}
      <div className="distributor-performance">
        <h3>🚀 Distributor Performance</h3>
        <div className="distributors-grid">
          {distributionData.distributors.map((distributor) => (
            <div key={distributor.id} className="distributor-card">
              <div className="distributor-header">
                <span className="distributor-icon">{distributor.icon}</span>
                <h4>{distributor.name}</h4>
                <div className={`distributor-status ${distributor.status}`}>
                  {distributor.status}
                </div>
              </div>
              
              <div className="distributor-stats">
                <div className="stat">
                  <span className="stat-label">Success Rate</span>
                  <span className="stat-value">{distributor.successRate}%</span>
                </div>
                
                <div className="stat">
                  <span className="stat-label">Avg Processing</span>
                  <span className="stat-value">{distributor.avgProcessingTime}</span>
                </div>
                
                <div className="stat">
                  <span className="stat-label">Total Releases</span>
                  <span className="stat-value">{distributor.totalReleases}</span>
                </div>
              </div>
              
              <div className="distributor-timeline">
                <div className="timeline-item">
                  <span className="timeline-label">Last Release:</span>
                  <span className="timeline-value">{distributor.lastRelease}</span>
                </div>
                
                {distributor.nextRelease && (
                  <div className="timeline-item">
                    <span className="timeline-label">Next Release:</span>
                    <span className="timeline-value">{distributor.nextRelease}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="quick-actions">
        <h3>⚡ Quick Actions</h3>
        <div className="actions-grid">
          <button className="action-card">
            <Upload size={24} />
            <h4>Upload New Release</h4>
            <p>Distribute to all platforms</p>
          </button>
          
          <button className="action-card">
            <RefreshCw size={24} />
            <h4>Force Refresh All</h4>
            <p>Check all platform statuses</p>
          </button>
          
          <button className="action-card">
            <Bell size={24} />
            <h4>Set Notifications</h4>
            <p>Get alerts for status changes</p>
          </button>
          
          <button className="action-card">
            <Download size={24} />
            <h4>Export Report</h4>
            <p>Download distribution summary</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DistributionTracker;

