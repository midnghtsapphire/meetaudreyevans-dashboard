import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Activity, 
  BarChart3, 
  LineChart, 
  PieChart, 
  Target, 
  Zap, 
  Fire, 
  Eye, 
  Users, 
  DollarSign, 
  Clock, 
  Calendar, 
  MapPin, 
  Globe, 
  Filter, 
  RefreshCw, 
  Download, 
  Upload, 
  Save, 
  Share2, 
  Bell, 
  Settings, 
  Info, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Plus, 
  Minus, 
  X, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUp, 
  ArrowDown, 
  ArrowLeft, 
  ArrowRight, 
  Maximize, 
  Minimize, 
  RotateCw, 
  Layers, 
  Database, 
  Server, 
  Wifi, 
  Signal, 
  Pulse, 
  Waves, 
  Volume2, 
  Headphones, 
  Radio, 
  Mic, 
  Music, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind, 
  Shuffle, 
  Repeat, 
  Equalizer, 
  Disc, 
  Vinyl, 
  Cassette, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Speaker, 
  Award, 
  Star, 
  Crown, 
  Heart, 
  Lightbulb, 
  Rocket, 
  Compass, 
  Telescope, 
  Crosshair, 
  Focus, 
  Link, 
  Copy, 
  ExternalLink, 
  Edit3
} from 'lucide-react';

// Search Trends Analyzer Component
const SearchTrendsAnalyzer = () => {
  const [activeView, setActiveView] = useState('realtime');
  const [selectedTimeframe, setSelectedTimeframe] = useState('7d');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [searchQuery, setSearchQuery] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [autoRefresh, setAutoRefresh] = useState(true);

  // Mock real-time search trends data
  const searchTrendsData = {
    realTimeGaps: [
      {
        id: 'rt_1',
        searchTerm: 'Clarinet Drill Music',
        currentSearches: 2847,
        hourlyGrowth: '+234%',
        availableContent: 3,
        gapScore: 949,
        urgency: 'critical',
        timeToSaturation: '2-3 days',
        estimatedRevenue: '$8,400/month',
        yourMatch: ['Clarinet'],
        regions: ['UK', 'US', 'Canada'],
        relatedTerms: ['UK Drill Clarinet', 'Woodwind Drill', 'Classical Drill'],
        searchIntent: 'discovery',
        competitorAnalysis: {
          directCompetitors: 0,
          indirectCompetitors: 2,
          marketLeader: 'None identified'
        }
      },
      {
        id: 'rt_2',
        searchTerm: 'Opera Reggaeton Fusion',
        currentSearches: 1923,
        hourlyGrowth: '+189%',
        availableContent: 1,
        gapScore: 1923,
        urgency: 'critical',
        timeToSaturation: '1-2 days',
        estimatedRevenue: '$6,200/month',
        yourMatch: ['Opera'],
        regions: ['US', 'Mexico', 'Spain', 'Colombia'],
        relatedTerms: ['Latin Opera', 'Reggaeton Classical', 'Opera Latina'],
        searchIntent: 'discovery',
        competitorAnalysis: {
          directCompetitors: 0,
          indirectCompetitors: 1,
          marketLeader: 'None identified'
        }
      },
      {
        id: 'rt_3',
        searchTerm: 'Country Jazz Clarinet',
        currentSearches: 1456,
        hourlyGrowth: '+156%',
        availableContent: 5,
        gapScore: 291,
        urgency: 'high',
        timeToSaturation: '3-5 days',
        estimatedRevenue: '$4,800/month',
        yourMatch: ['Clarinet', 'Country', 'Jazz'],
        regions: ['US', 'Canada', 'Australia'],
        relatedTerms: ['Western Swing Clarinet', 'Country Woodwind', 'Jazz Country'],
        searchIntent: 'specific',
        competitorAnalysis: {
          directCompetitors: 1,
          indirectCompetitors: 3,
          marketLeader: 'Emerging market'
        }
      },
      {
        id: 'rt_4',
        searchTerm: 'Afrobeat Opera Vocals',
        currentSearches: 1234,
        hourlyGrowth: '+298%',
        availableContent: 2,
        gapScore: 617,
        urgency: 'critical',
        timeToSaturation: '2-4 days',
        estimatedRevenue: '$5,600/month',
        yourMatch: ['Opera', 'Afrosambaswing'],
        regions: ['Nigeria', 'Ghana', 'UK', 'US'],
        relatedTerms: ['African Opera', 'Afrobeat Classical', 'World Opera'],
        searchIntent: 'discovery',
        competitorAnalysis: {
          directCompetitors: 0,
          indirectCompetitors: 2,
          marketLeader: 'None identified'
        }
      },
      {
        id: 'rt_5',
        searchTerm: 'Pop Rock Clarinet Solos',
        currentSearches: 987,
        hourlyGrowth: '+123%',
        availableContent: 7,
        gapScore: 141,
        urgency: 'medium',
        timeToSaturation: '5-7 days',
        estimatedRevenue: '$3,200/month',
        yourMatch: ['Clarinet', 'Pop', 'Rock'],
        regions: ['US', 'UK', 'Germany', 'Canada'],
        relatedTerms: ['Alternative Rock Clarinet', 'Indie Pop Clarinet', 'Rock Woodwind'],
        searchIntent: 'specific',
        competitorAnalysis: {
          directCompetitors: 2,
          indirectCompetitors: 4,
          marketLeader: 'Fragmented market'
        }
      }
    ],
    trendingSearches: [
      {
        term: 'Clarinet Phonk',
        searches: 45600,
        growth: '+567%',
        timeframe: '24h',
        regions: ['Global'],
        opportunity: 'very_high'
      },
      {
        term: 'Opera Trap Beats',
        searches: 34500,
        growth: '+234%',
        timeframe: '24h',
        regions: ['US', 'UK'],
        opportunity: 'high'
      },
      {
        term: 'Country Afrobeat',
        searches: 28900,
        growth: '+189%',
        timeframe: '24h',
        regions: ['US', 'Nigeria'],
        opportunity: 'high'
      },
      {
        term: 'Jazz Opera Fusion',
        searches: 23400,
        growth: '+156%',
        timeframe: '24h',
        regions: ['US', 'Europe'],
        opportunity: 'medium'
      },
      {
        term: 'Rock Clarinet Band',
        searches: 19800,
        growth: '+134%',
        timeframe: '24h',
        regions: ['US', 'UK', 'Germany'],
        opportunity: 'medium'
      }
    ],
    searchPatterns: {
      hourlyData: [
        { hour: '00:00', searches: 1200, gaps: 15 },
        { hour: '01:00', searches: 980, gaps: 12 },
        { hour: '02:00', searches: 750, gaps: 8 },
        { hour: '03:00', searches: 650, gaps: 6 },
        { hour: '04:00', searches: 580, gaps: 5 },
        { hour: '05:00', searches: 720, gaps: 7 },
        { hour: '06:00', searches: 1100, gaps: 13 },
        { hour: '07:00', searches: 1450, gaps: 18 },
        { hour: '08:00', searches: 1680, gaps: 21 },
        { hour: '09:00', searches: 1890, gaps: 24 },
        { hour: '10:00', searches: 2100, gaps: 27 },
        { hour: '11:00', searches: 2340, gaps: 31 },
        { hour: '12:00', searches: 2580, gaps: 34 },
        { hour: '13:00', searches: 2720, gaps: 36 },
        { hour: '14:00', searches: 2890, gaps: 38 },
        { hour: '15:00', searches: 3100, gaps: 42 },
        { hour: '16:00', searches: 3350, gaps: 45 },
        { hour: '17:00', searches: 3580, gaps: 48 },
        { hour: '18:00', searches: 3820, gaps: 52 },
        { hour: '19:00', searches: 4100, gaps: 56 },
        { hour: '20:00', searches: 4350, gaps: 59 },
        { hour: '21:00', searches: 4200, gaps: 57 },
        { hour: '22:00', searches: 3890, gaps: 53 },
        { hour: '23:00', searches: 3450, gaps: 47 }
      ],
      weeklyTrends: [
        { day: 'Mon', searches: 45600, gaps: 234 },
        { day: 'Tue', searches: 52300, gaps: 267 },
        { day: 'Wed', searches: 48900, gaps: 251 },
        { day: 'Thu', searches: 56700, gaps: 289 },
        { day: 'Fri', searches: 67800, gaps: 345 },
        { day: 'Sat', searches: 78900, gaps: 402 },
        { day: 'Sun', searches: 71200, gaps: 364 }
      ]
    },
    genreAnalysis: {
      topGaps: [
        {
          genre: 'Fusion Genres',
          totalGaps: 156,
          avgGapScore: 847,
          topOpportunity: 'Opera Drill',
          growth: '+234%'
        },
        {
          genre: 'Instrumental Crossover',
          totalGaps: 134,
          avgGapScore: 623,
          topOpportunity: 'Clarinet Trap',
          growth: '+189%'
        },
        {
          genre: 'World Music Fusion',
          totalGaps: 98,
          avgGapScore: 456,
          topOpportunity: 'Afrobeat Classical',
          growth: '+167%'
        },
        {
          genre: 'Electronic Crossover',
          totalGaps: 87,
          avgGapScore: 389,
          topOpportunity: 'Opera EDM',
          growth: '+145%'
        }
      ]
    },
    alertSystem: {
      criticalAlerts: [
        {
          id: 'alert_1',
          type: 'gap_surge',
          message: 'Clarinet Drill Music searches spiked 234% in last hour',
          urgency: 'critical',
          timeToAct: '2 hours',
          potentialRevenue: '$8,400/month'
        },
        {
          id: 'alert_2',
          type: 'new_gap',
          message: 'New gap detected: Opera Reggaeton Fusion',
          urgency: 'high',
          timeToAct: '6 hours',
          potentialRevenue: '$6,200/month'
        },
        {
          id: 'alert_3',
          type: 'competitor_entry',
          message: 'New competitor entered Jazz Country Clarinet space',
          urgency: 'medium',
          timeToAct: '24 hours',
          impact: 'Market share reduction'
        }
      ]
    }
  };

  const getUrgencyColor = (urgency) => {
    switch (urgency) {
      case 'critical': return '#EF4444';
      case 'high': return '#F59E0B';
      case 'medium': return '#3B82F6';
      case 'low': return '#10B981';
      default: return '#6B7280';
    }
  };

  const getOpportunityColor = (level) => {
    switch (level) {
      case 'very_high': return '#10B981';
      case 'high': return '#F59E0B';
      case 'medium': return '#3B82F6';
      case 'low': return '#6B7280';
      default: return '#6B7280';
    }
  };

  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const analyzeCustomSearch = async () => {
    if (!searchQuery.trim()) return;
    
    setIsAnalyzing(true);
    
    // Simulate analysis
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsAnalyzing(false);
  };

  const views = [
    { id: 'realtime', label: 'Real-Time Gaps', icon: Pulse },
    { id: 'trending', label: 'Trending Searches', icon: TrendingUp },
    { id: 'patterns', label: 'Search Patterns', icon: BarChart3 },
    { id: 'alerts', label: 'Smart Alerts', icon: Bell }
  ];

  const timeframes = [
    { id: '1h', label: '1 Hour' },
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' }
  ];

  return (
    <div className="search-trends-analyzer">
      <div className="analyzer-header">
        <h2>📊 Search Trends Analyzer</h2>
        <p>Real-time musical genre gap detection and opportunity analysis</p>
        
        <div className="header-controls">
          <div className="search-input">
            <Search size={20} />
            <input 
              type="text" 
              placeholder="Analyze custom search term..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && analyzeCustomSearch()}
            />
            <button 
              className="analyze-btn"
              onClick={analyzeCustomSearch}
              disabled={isAnalyzing || !searchQuery.trim()}
            >
              {isAnalyzing ? <RefreshCw size={16} className="spinning" /> : <Target size={16} />}
              <span>{isAnalyzing ? 'Analyzing...' : 'Analyze'}</span>
            </button>
          </div>
          
          <div className="timeframe-selector">
            {timeframes.map((tf) => (
              <button
                key={tf.id}
                className={`timeframe-btn ${selectedTimeframe === tf.id ? 'active' : ''}`}
                onClick={() => setSelectedTimeframe(tf.id)}
              >
                {tf.label}
              </button>
            ))}
          </div>
          
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
        </div>
      </div>

      {/* Critical Alerts Banner */}
      {searchTrendsData.alertSystem.criticalAlerts.length > 0 && (
        <div className="critical-alerts-banner">
          <div className="alerts-header">
            <AlertTriangle size={20} />
            <h3>🚨 Critical Opportunities</h3>
          </div>
          
          <div className="alerts-list">
            {searchTrendsData.alertSystem.criticalAlerts.slice(0, 2).map((alert) => (
              <motion.div
                key={alert.id}
                className={`alert-item ${alert.urgency}`}
                whileHover={{ scale: 1.02 }}
                style={{ '--urgency-color': getUrgencyColor(alert.urgency) }}
              >
                <div className="alert-content">
                  <p className="alert-message">{alert.message}</p>
                  <div className="alert-meta">
                    <span className="time-to-act">Act within: {alert.timeToAct}</span>
                    {alert.potentialRevenue && (
                      <span className="potential-revenue">Potential: {alert.potentialRevenue}</span>
                    )}
                  </div>
                </div>
                
                <button className="alert-action">
                  <Target size={14} />
                  <span>Act Now</span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* View Navigation */}
      <div className="view-navigation">
        {views.map((view) => (
          <motion.button
            key={view.id}
            className={`view-btn ${activeView === view.id ? 'active' : ''}`}
            onClick={() => setActiveView(view.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <view.icon size={20} />
            <span>{view.label}</span>
          </motion.button>
        ))}
      </div>

      {/* View Content */}
      <AnimatePresence mode="wait">
        {activeView === 'realtime' && (
          <motion.div 
            className="realtime-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>⚡ Real-Time Genre Gaps</h3>
              <p>Live opportunities detected in the last hour</p>
            </div>

            <div className="realtime-stats">
              <div className="stat-card">
                <div className="stat-icon">
                  <Search size={24} />
                </div>
                <div className="stat-content">
                  <h4>Active Searches</h4>
                  <div className="stat-value">8,447</div>
                  <div className="stat-change positive">+23% vs last hour</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Target size={24} />
                </div>
                <div className="stat-content">
                  <h4>Gaps Detected</h4>
                  <div className="stat-value">156</div>
                  <div className="stat-change positive">+34 new gaps</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <Fire size={24} />
                </div>
                <div className="stat-content">
                  <h4>Critical Opportunities</h4>
                  <div className="stat-value">12</div>
                  <div className="stat-change critical">Immediate action needed</div>
                </div>
              </div>

              <div className="stat-card">
                <div className="stat-icon">
                  <DollarSign size={24} />
                </div>
                <div className="stat-content">
                  <h4>Est. Revenue Potential</h4>
                  <div className="stat-value">$47.2K</div>
                  <div className="stat-change positive">Monthly estimate</div>
                </div>
              </div>
            </div>

            <div className="realtime-gaps">
              {searchTrendsData.realTimeGaps.map((gap) => (
                <motion.div
                  key={gap.id}
                  className="realtime-gap-card"
                  whileHover={{ scale: 1.02, y: -3 }}
                  style={{ '--urgency-color': getUrgencyColor(gap.urgency) }}
                >
                  <div className="gap-header">
                    <div className="gap-info">
                      <h4>{gap.searchTerm}</h4>
                      <div className="gap-growth">
                        <TrendingUp size={16} />
                        <span>{gap.hourlyGrowth}</span>
                      </div>
                    </div>
                    
                    <div className={`urgency-badge ${gap.urgency}`}>
                      {gap.urgency}
                    </div>
                  </div>

                  <div className="gap-metrics">
                    <div className="metric-row">
                      <div className="metric">
                        <span className="metric-label">Current Searches</span>
                        <span className="metric-value">{formatNumber(gap.currentSearches)}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Available Content</span>
                        <span className="metric-value low">{gap.availableContent}</span>
                      </div>
                    </div>
                    
                    <div className="metric-row">
                      <div className="metric">
                        <span className="metric-label">Gap Score</span>
                        <span className="metric-value high">{gap.gapScore}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Est. Revenue</span>
                        <span className="metric-value">{gap.estimatedRevenue}</span>
                      </div>
                    </div>
                  </div>

                  <div className="time-critical">
                    <Clock size={16} />
                    <span>Time to saturation: {gap.timeToSaturation}</span>
                  </div>

                  <div className="your-match">
                    <h5>🎯 Your Match</h5>
                    <div className="match-tags">
                      {gap.yourMatch.map((skill, index) => (
                        <span key={index} className="match-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="gap-regions">
                    <h5>🌍 Top Regions</h5>
                    <div className="regions-list">
                      {gap.regions.slice(0, 3).map((region, index) => (
                        <span key={index} className="region-tag">{region}</span>
                      ))}
                    </div>
                  </div>

                  <div className="competitor-analysis">
                    <h5>🏆 Competition</h5>
                    <div className="competition-stats">
                      <div className="comp-stat">
                        <span>Direct: {gap.competitorAnalysis.directCompetitors}</span>
                      </div>
                      <div className="comp-stat">
                        <span>Indirect: {gap.competitorAnalysis.indirectCompetitors}</span>
                      </div>
                    </div>
                    <p className="market-leader">{gap.competitorAnalysis.marketLeader}</p>
                  </div>

                  <div className="gap-actions">
                    <button className="action-btn primary">
                      <Rocket size={14} />
                      <span>Create Content</span>
                    </button>
                    
                    <button className="action-btn">
                      <Bell size={14} />
                      <span>Set Alert</span>
                    </button>
                    
                    <button className="action-btn">
                      <BarChart3 size={14} />
                      <span>Deep Analysis</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === 'trending' && (
          <motion.div 
            className="trending-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🔥 Trending Searches</h3>
              <p>Fastest growing search terms in your expertise areas</p>
            </div>

            <div className="trending-list">
              {searchTrendsData.trendingSearches.map((trend, index) => (
                <motion.div
                  key={trend.term}
                  className="trending-item"
                  whileHover={{ scale: 1.02 }}
                  style={{ '--opportunity-color': getOpportunityColor(trend.opportunity) }}
                >
                  <div className="trending-rank">
                    #{index + 1}
                  </div>
                  
                  <div className="trending-content">
                    <h4>{trend.term}</h4>
                    <div className="trending-stats">
                      <div className="stat">
                        <Search size={14} />
                        <span>{formatNumber(trend.searches)} searches</span>
                      </div>
                      <div className="stat">
                        <TrendingUp size={14} />
                        <span>{trend.growth}</span>
                      </div>
                      <div className="stat">
                        <Clock size={14} />
                        <span>{trend.timeframe}</span>
                      </div>
                    </div>
                    
                    <div className="trending-regions">
                      {trend.regions.map((region, regionIndex) => (
                        <span key={regionIndex} className="region-badge">{region}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className={`opportunity-level ${trend.opportunity}`}>
                    <Star size={16} />
                    <span>{trend.opportunity.replace('_', ' ')}</span>
                  </div>
                  
                  <div className="trending-actions">
                    <button className="action-btn">
                      <Target size={14} />
                      <span>Analyze</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeView === 'patterns' && (
          <motion.div 
            className="patterns-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>📈 Search Patterns</h3>
              <p>Understand when and how people search for music</p>
            </div>

            <div className="patterns-grid">
              <div className="pattern-card">
                <h4>📅 Weekly Search Patterns</h4>
                <div className="chart-container">
                  <div className="chart-bars">
                    {searchTrendsData.searchPatterns.weeklyTrends.map((day) => (
                      <div key={day.day} className="chart-bar">
                        <div 
                          className="bar-fill"
                          style={{ height: `${(day.searches / 80000) * 100}%` }}
                        />
                        <span className="bar-label">{day.day}</span>
                        <span className="bar-value">{formatNumber(day.searches)}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="chart-insight">
                  🎯 Peak search times: Friday-Sunday evenings
                </p>
              </div>

              <div className="pattern-card">
                <h4>🕐 Hourly Gap Detection</h4>
                <div className="chart-container">
                  <div className="hourly-chart">
                    {searchTrendsData.searchPatterns.hourlyData.slice(0, 12).map((hour) => (
                      <div key={hour.hour} className="hour-item">
                        <span className="hour-time">{hour.hour}</span>
                        <div className="hour-bars">
                          <div 
                            className="searches-bar"
                            style={{ width: `${(hour.searches / 4500) * 100}%` }}
                          />
                          <div 
                            className="gaps-bar"
                            style={{ width: `${(hour.gaps / 60) * 100}%` }}
                          />
                        </div>
                        <span className="hour-gaps">{hour.gaps} gaps</span>
                      </div>
                    ))}
                  </div>
                </div>
                <p className="chart-insight">
                  🎯 Most gaps detected: 6-9 PM (prime discovery time)
                </p>
              </div>

              <div className="pattern-card">
                <h4>🎵 Genre Gap Distribution</h4>
                <div className="genre-gaps">
                  {searchTrendsData.genreAnalysis.topGaps.map((genre) => (
                    <div key={genre.genre} className="genre-gap-item">
                      <div className="genre-info">
                        <h5>{genre.genre}</h5>
                        <p>Top: {genre.topOpportunity}</p>
                      </div>
                      
                      <div className="genre-stats">
                        <div className="stat">
                          <span className="stat-label">Gaps</span>
                          <span className="stat-value">{genre.totalGaps}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Avg Score</span>
                          <span className="stat-value">{genre.avgGapScore}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Growth</span>
                          <span className="stat-value positive">{genre.growth}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeView === 'alerts' && (
          <motion.div 
            className="alerts-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🔔 Smart Alert System</h3>
              <p>Get notified about opportunities before they become saturated</p>
            </div>

            <div className="alerts-config">
              <h4>⚙️ Alert Configuration</h4>
              <div className="config-grid">
                <div className="config-item">
                  <label>Gap Score Threshold</label>
                  <input type="range" min="100" max="2000" defaultValue="500" />
                  <span>500+</span>
                </div>
                
                <div className="config-item">
                  <label>Growth Rate Alert</label>
                  <input type="range" min="50" max="500" defaultValue="150" />
                  <span>150%+</span>
                </div>
                
                <div className="config-item">
                  <label>Competition Level</label>
                  <select defaultValue="low">
                    <option value="very_low">Very Low</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
                
                <div className="config-item">
                  <label>Your Expertise Match</label>
                  <select defaultValue="any">
                    <option value="any">Any Match</option>
                    <option value="partial">Partial Match</option>
                    <option value="strong">Strong Match</option>
                    <option value="perfect">Perfect Match</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="active-alerts">
              <h4>🚨 Active Alerts</h4>
              <div className="alerts-list">
                {searchTrendsData.alertSystem.criticalAlerts.map((alert) => (
                  <motion.div
                    key={alert.id}
                    className={`alert-card ${alert.urgency}`}
                    whileHover={{ scale: 1.02 }}
                    style={{ '--urgency-color': getUrgencyColor(alert.urgency) }}
                  >
                    <div className="alert-header">
                      <div className="alert-type">
                        {alert.type === 'gap_surge' && <TrendingUp size={20} />}
                        {alert.type === 'new_gap' && <Target size={20} />}
                        {alert.type === 'competitor_entry' && <Users size={20} />}
                        <span>{alert.type.replace('_', ' ')}</span>
                      </div>
                      
                      <div className={`urgency-badge ${alert.urgency}`}>
                        {alert.urgency}
                      </div>
                    </div>
                    
                    <p className="alert-message">{alert.message}</p>
                    
                    <div className="alert-details">
                      <div className="detail-item">
                        <Clock size={14} />
                        <span>Time to act: {alert.timeToAct}</span>
                      </div>
                      
                      {alert.potentialRevenue && (
                        <div className="detail-item">
                          <DollarSign size={14} />
                          <span>Potential: {alert.potentialRevenue}</span>
                        </div>
                      )}
                      
                      {alert.impact && (
                        <div className="detail-item">
                          <AlertTriangle size={14} />
                          <span>Impact: {alert.impact}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="alert-actions">
                      <button className="action-btn primary">
                        <Target size={14} />
                        <span>Take Action</span>
                      </button>
                      
                      <button className="action-btn">
                        <X size={14} />
                        <span>Dismiss</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Action Center */}
      <div className="action-center">
        <h3>🎯 Quick Actions</h3>
        <div className="action-buttons">
          <button className="action-btn large primary">
            <Download size={20} />
            <span>Export Gap Report</span>
          </button>
          
          <button className="action-btn large">
            <Bell size={20} />
            <span>Configure Alerts</span>
          </button>
          
          <button className="action-btn large">
            <Target size={20} />
            <span>Create Content Plan</span>
          </button>
          
          <button className="action-btn large">
            <Share2 size={20} />
            <span>Share Insights</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchTrendsAnalyzer;

