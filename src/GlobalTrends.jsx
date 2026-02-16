import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  DollarSign, 
  Users, 
  Music, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Target, 
  Zap, 
  Star, 
  Award, 
  Crown, 
  Fire, 
  Eye, 
  Heart, 
  Play, 
  Volume2, 
  Headphones, 
  Radio, 
  Mic, 
  Calendar, 
  Clock, 
  MapPin, 
  Filter, 
  Search, 
  RefreshCw, 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Lightbulb, 
  Rocket, 
  Compass, 
  Map, 
  Navigation, 
  Telescope, 
  Binoculars, 
  Crosshair, 
  Focus, 
  Layers, 
  Database, 
  Server, 
  Wifi, 
  Signal, 
  Activity, 
  Pulse, 
  Waves, 
  Equalizer, 
  Shuffle, 
  Repeat, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind, 
  Maximize, 
  Minimize, 
  RotateCw, 
  Save, 
  Share2, 
  Link, 
  Copy, 
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
  ArrowRight
} from 'lucide-react';

// Global Trends Component
const GlobalTrends = () => {
  const [activeTab, setActiveTab] = useState('genres');
  const [selectedRegion, setSelectedRegion] = useState('global');
  const [timeframe, setTimeframe] = useState('7d');
  const [lastUpdated, setLastUpdated] = useState(new Date());

  // Mock trending data
  const trendingData = {
    genres: [
      {
        id: 'afrobeats',
        name: 'Afrobeats',
        growth: '+347%',
        streams: '2.8B',
        revenue: '$45.2M',
        regions: ['Global', 'Africa', 'Europe', 'North America'],
        topArtists: ['Burna Boy', 'Wizkid', 'Davido'],
        opportunity: 'high',
        description: 'Explosive global growth, especially in Western markets',
        keyMarkets: ['Nigeria', 'UK', 'US', 'Canada'],
        avgStreamPayout: '$0.0032',
        competitionLevel: 'medium',
        entryBarrier: 'low',
        trendDirection: 'up',
        peakTime: 'Evening (6-9 PM)',
        demographics: '18-34 years, 60% male',
        platforms: {
          spotify: 45,
          apple: 25,
          youtube: 20,
          others: 10
        }
      },
      {
        id: 'hyperpop',
        name: 'Hyperpop',
        growth: '+289%',
        streams: '1.2B',
        revenue: '$18.7M',
        regions: ['North America', 'Europe', 'Asia'],
        topArtists: ['100 gecs', 'SOPHIE', 'Charli XCX'],
        opportunity: 'high',
        description: 'Emerging genre with strong Gen Z following',
        keyMarkets: ['US', 'UK', 'Japan', 'South Korea'],
        avgStreamPayout: '$0.0028',
        competitionLevel: 'low',
        entryBarrier: 'medium',
        trendDirection: 'up',
        peakTime: 'Late Night (10 PM - 2 AM)',
        demographics: '16-25 years, 55% female',
        platforms: {
          tiktok: 40,
          spotify: 30,
          soundcloud: 20,
          others: 10
        }
      },
      {
        id: 'latin_trap',
        name: 'Latin Trap',
        growth: '+156%',
        streams: '4.1B',
        revenue: '$67.3M',
        regions: ['Latin America', 'North America', 'Europe'],
        topArtists: ['Bad Bunny', 'Anuel AA', 'Ozuna'],
        opportunity: 'medium',
        description: 'Continued strong performance in Latin markets',
        keyMarkets: ['Mexico', 'Colombia', 'US', 'Spain'],
        avgStreamPayout: '$0.0035',
        competitionLevel: 'high',
        entryBarrier: 'high',
        trendDirection: 'stable',
        peakTime: 'Evening (7-10 PM)',
        demographics: '18-35 years, 65% male',
        platforms: {
          spotify: 50,
          youtube: 30,
          apple: 15,
          others: 5
        }
      },
      {
        id: 'drill',
        name: 'Drill',
        growth: '+234%',
        streams: '1.8B',
        revenue: '$28.9M',
        regions: ['Europe', 'North America', 'Australia'],
        topArtists: ['Central Cee', 'Pop Smoke', 'Headie One'],
        opportunity: 'high',
        description: 'UK Drill leading global expansion',
        keyMarkets: ['UK', 'US', 'Australia', 'Canada'],
        avgStreamPayout: '$0.0031',
        competitionLevel: 'medium',
        entryBarrier: 'medium',
        trendDirection: 'up',
        peakTime: 'Night (8 PM - 12 AM)',
        demographics: '16-28 years, 70% male',
        platforms: {
          youtube: 45,
          spotify: 35,
          apple: 15,
          others: 5
        }
      },
      {
        id: 'bedroom_pop',
        name: 'Bedroom Pop',
        growth: '+178%',
        streams: '890M',
        revenue: '$12.4M',
        regions: ['North America', 'Europe', 'Asia'],
        topArtists: ['Clairo', 'Rex Orange County', 'Boy Pablo'],
        opportunity: 'medium',
        description: 'Indie genre with strong streaming presence',
        keyMarkets: ['US', 'Canada', 'UK', 'Japan'],
        avgStreamPayout: '$0.0029',
        competitionLevel: 'low',
        entryBarrier: 'low',
        trendDirection: 'up',
        peakTime: 'Afternoon (2-6 PM)',
        demographics: '18-30 years, 52% female',
        platforms: {
          spotify: 55,
          apple: 25,
          bandcamp: 15,
          others: 5
        }
      },
      {
        id: 'phonk',
        name: 'Phonk',
        growth: '+412%',
        streams: '650M',
        revenue: '$8.9M',
        regions: ['Global', 'Eastern Europe', 'North America'],
        topArtists: ['KORDHELL', 'Ghostface Playa', 'MUPP'],
        opportunity: 'very_high',
        description: 'Viral TikTok-driven genre with massive growth',
        keyMarkets: ['Russia', 'US', 'Brazil', 'Germany'],
        avgStreamPayout: '$0.0027',
        competitionLevel: 'low',
        entryBarrier: 'very_low',
        trendDirection: 'explosive',
        peakTime: 'Late Night (11 PM - 3 AM)',
        demographics: '14-25 years, 68% male',
        platforms: {
          tiktok: 60,
          youtube: 25,
          spotify: 10,
          others: 5
        }
      }
    ],
    regions: [
      {
        id: 'north_america',
        name: 'North America',
        growth: '+23%',
        marketSize: '$7.2B',
        topGenres: ['Hip Hop', 'Pop', 'Rock'],
        streamingPenetration: '78%',
        avgRevenuePer1000Streams: '$3.20',
        opportunities: [
          'Country music crossover potential',
          'Latin music expansion',
          'Podcast integration opportunities'
        ],
        challenges: [
          'High competition',
          'Market saturation',
          'Platform dependency'
        ]
      },
      {
        id: 'europe',
        name: 'Europe',
        growth: '+31%',
        marketSize: '$4.8B',
        topGenres: ['Electronic', 'Pop', 'Hip Hop'],
        streamingPenetration: '65%',
        avgRevenuePer1000Streams: '$2.80',
        opportunities: [
          'Eastern European market expansion',
          'Festival circuit integration',
          'Multi-language content'
        ],
        challenges: [
          'Fragmented markets',
          'Language barriers',
          'Regulatory complexity'
        ]
      },
      {
        id: 'asia_pacific',
        name: 'Asia Pacific',
        growth: '+67%',
        marketSize: '$3.1B',
        topGenres: ['K-Pop', 'J-Pop', 'Electronic'],
        streamingPenetration: '45%',
        avgRevenuePer1000Streams: '$1.90',
        opportunities: [
          'Massive untapped audience',
          'Mobile-first consumption',
          'Cross-cultural collaborations'
        ],
        challenges: [
          'Platform fragmentation',
          'Cultural adaptation needed',
          'Lower monetization rates'
        ]
      },
      {
        id: 'latin_america',
        name: 'Latin America',
        growth: '+89%',
        marketSize: '$1.9B',
        topGenres: ['Reggaeton', 'Latin Pop', 'Regional Mexican'],
        streamingPenetration: '52%',
        avgRevenuePer1000Streams: '$1.60',
        opportunities: [
          'Fastest growing market',
          'Strong mobile adoption',
          'Genre innovation hub'
        ],
        challenges: [
          'Economic instability',
          'Piracy concerns',
          'Infrastructure limitations'
        ]
      },
      {
        id: 'africa',
        name: 'Africa',
        growth: '+156%',
        marketSize: '$890M',
        topGenres: ['Afrobeats', 'Amapiano', 'Hip Hop'],
        streamingPenetration: '28%',
        avgRevenuePer1000Streams: '$0.80',
        opportunities: [
          'Explosive growth potential',
          'Cultural export power',
          'Young demographic'
        ],
        challenges: [
          'Infrastructure development',
          'Payment system limitations',
          'Data costs'
        ]
      }
    ],
    opportunities: [
      {
        id: 'ai_music_tools',
        title: 'AI Music Production Tools',
        category: 'Technology',
        potential: 'very_high',
        timeframe: '6-12 months',
        investment: '$5K - $50K',
        description: 'AI-powered composition and production tools are revolutionizing music creation',
        marketSize: '$2.8B by 2025',
        keyPlayers: ['AIVA', 'Amper Music', 'Soundraw'],
        entryStrategy: 'Develop niche AI tools for specific genres or use cases',
        riskLevel: 'medium',
        expectedROI: '300-500%'
      },
      {
        id: 'virtual_concerts',
        title: 'Virtual Concert Platforms',
        category: 'Live Events',
        potential: 'high',
        timeframe: '3-6 months',
        investment: '$10K - $100K',
        description: 'Virtual and hybrid concert experiences gaining mainstream adoption',
        marketSize: '$4.2B by 2026',
        keyPlayers: ['Fortnite', 'Roblox', 'Wave'],
        entryStrategy: 'Partner with existing platforms or create specialized experiences',
        riskLevel: 'medium',
        expectedROI: '200-400%'
      },
      {
        id: 'nft_music',
        title: 'Music NFTs & Web3',
        category: 'Blockchain',
        potential: 'medium',
        timeframe: '12-18 months',
        investment: '$2K - $25K',
        description: 'Blockchain-based music ownership and royalty distribution',
        marketSize: '$1.2B by 2025',
        keyPlayers: ['Audius', 'Royal', 'Sound.xyz'],
        entryStrategy: 'Create utility-focused NFTs with real fan benefits',
        riskLevel: 'high',
        expectedROI: '100-300%'
      },
      {
        id: 'social_audio',
        title: 'Social Audio Platforms',
        category: 'Social Media',
        potential: 'high',
        timeframe: '1-3 months',
        investment: '$1K - $10K',
        description: 'Audio-first social platforms creating new discovery channels',
        marketSize: '$3.5B by 2025',
        keyPlayers: ['Clubhouse', 'Twitter Spaces', 'Discord'],
        entryStrategy: 'Build audience through regular audio content and collaborations',
        riskLevel: 'low',
        expectedROI: '150-250%'
      },
      {
        id: 'gaming_music',
        title: 'Gaming Music Integration',
        category: 'Gaming',
        potential: 'very_high',
        timeframe: '6-12 months',
        investment: '$5K - $75K',
        description: 'Music integration in games and gaming platforms',
        marketSize: '$6.1B by 2026',
        keyPlayers: ['Epic Games', 'Roblox', 'Twitch'],
        entryStrategy: 'Create game-specific music or partner with game developers',
        riskLevel: 'medium',
        expectedROI: '250-450%'
      }
    ],
    emergingMarkets: [
      {
        country: 'Nigeria',
        growth: '+234%',
        population: '218M',
        internetPenetration: '51%',
        streamingGrowth: '+456%',
        topGenres: ['Afrobeats', 'Hip Hop', 'Gospel'],
        opportunity: 'very_high',
        challenges: ['Infrastructure', 'Payment systems'],
        entryBarrier: 'low'
      },
      {
        country: 'India',
        growth: '+89%',
        population: '1.4B',
        internetPenetration: '45%',
        streamingGrowth: '+123%',
        topGenres: ['Bollywood', 'Regional', 'Hip Hop'],
        opportunity: 'high',
        challenges: ['Language diversity', 'Price sensitivity'],
        entryBarrier: 'medium'
      },
      {
        country: 'Brazil',
        growth: '+67%',
        population: '215M',
        internetPenetration: '74%',
        streamingGrowth: '+98%',
        topGenres: ['Funk', 'Sertanejo', 'Hip Hop'],
        opportunity: 'high',
        challenges: ['Economic volatility', 'Platform competition'],
        entryBarrier: 'medium'
      },
      {
        country: 'Indonesia',
        growth: '+156%',
        population: '273M',
        internetPenetration: '64%',
        streamingGrowth: '+234%',
        topGenres: ['Pop', 'Dangdut', 'Hip Hop'],
        opportunity: 'very_high',
        challenges: ['Island geography', 'Cultural diversity'],
        entryBarrier: 'low'
      }
    ]
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

  const getTrendIcon = (direction) => {
    switch (direction) {
      case 'up': return TrendingUp;
      case 'down': return TrendingDown;
      case 'stable': return Activity;
      case 'explosive': return Rocket;
      default: return Activity;
    }
  };

  const formatNumber = (num) => {
    if (typeof num === 'string') return num;
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1) + 'B';
    } else if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const tabs = [
    { id: 'genres', label: 'Trending Genres', icon: Music },
    { id: 'regions', label: 'Global Markets', icon: Globe },
    { id: 'opportunities', label: 'Opportunities', icon: Target },
    { id: 'emerging', label: 'Emerging Markets', icon: Rocket }
  ];

  const timeframes = [
    { id: '24h', label: '24 Hours' },
    { id: '7d', label: '7 Days' },
    { id: '30d', label: '30 Days' },
    { id: '90d', label: '90 Days' }
  ];

  return (
    <div className="global-trends">
      <div className="trends-header">
        <h2>🌍 Global Music Trends & Opportunities</h2>
        <p>Real-time insights into worldwide music markets and emerging opportunities</p>
        
        <div className="header-controls">
          <div className="timeframe-selector">
            {timeframes.map((tf) => (
              <button
                key={tf.id}
                className={`timeframe-btn ${timeframe === tf.id ? 'active' : ''}`}
                onClick={() => setTimeframe(tf.id)}
              >
                {tf.label}
              </button>
            ))}
          </div>
          
          <div className="last-updated">
            <RefreshCw size={16} />
            <span>Updated {lastUpdated.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="tab-navigation">
        {tabs.map((tab) => (
          <motion.button
            key={tab.id}
            className={`tab-btn ${activeTab === tab.id ? 'active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <tab.icon size={20} />
            <span>{tab.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'genres' && (
          <motion.div 
            className="genres-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🎵 Trending Genres Worldwide</h3>
              <p>Discover the hottest genres and their growth potential</p>
            </div>

            <div className="genres-grid">
              {trendingData.genres.map((genre) => {
                const TrendIcon = getTrendIcon(genre.trendDirection);
                
                return (
                  <motion.div
                    key={genre.id}
                    className="genre-card"
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ '--opportunity-color': getOpportunityColor(genre.opportunity) }}
                  >
                    <div className="genre-header">
                      <div className="genre-info">
                        <h4>{genre.name}</h4>
                        <div className="genre-growth">
                          <TrendIcon size={16} />
                          <span className="growth-value">{genre.growth}</span>
                        </div>
                      </div>
                      
                      <div className={`opportunity-badge ${genre.opportunity}`}>
                        {genre.opportunity.replace('_', ' ')}
                      </div>
                    </div>

                    <div className="genre-stats">
                      <div className="stat-row">
                        <div className="stat">
                          <span className="stat-label">Streams</span>
                          <span className="stat-value">{genre.streams}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Revenue</span>
                          <span className="stat-value">{genre.revenue}</span>
                        </div>
                      </div>
                      
                      <div className="stat-row">
                        <div className="stat">
                          <span className="stat-label">Avg Payout</span>
                          <span className="stat-value">{genre.avgStreamPayout}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Competition</span>
                          <span className={`stat-value ${genre.competitionLevel}`}>
                            {genre.competitionLevel}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="genre-details">
                      <p className="genre-description">{genre.description}</p>
                      
                      <div className="genre-meta">
                        <div className="meta-item">
                          <Clock size={14} />
                          <span>Peak: {genre.peakTime}</span>
                        </div>
                        <div className="meta-item">
                          <Users size={14} />
                          <span>{genre.demographics}</span>
                        </div>
                      </div>
                      
                      <div className="key-markets">
                        <span className="markets-label">Key Markets:</span>
                        <div className="markets-list">
                          {genre.keyMarkets.slice(0, 3).map((market, index) => (
                            <span key={index} className="market-tag">{market}</span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="top-artists">
                        <span className="artists-label">Top Artists:</span>
                        <div className="artists-list">
                          {genre.topArtists.slice(0, 2).map((artist, index) => (
                            <span key={index} className="artist-tag">{artist}</span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="platform-distribution">
                      <h5>Platform Distribution</h5>
                      <div className="platform-bars">
                        {Object.entries(genre.platforms).map(([platform, percentage]) => (
                          <div key={platform} className="platform-bar">
                            <span className="platform-name">{platform}</span>
                            <div className="bar-container">
                              <div 
                                className="bar-fill"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                            <span className="platform-percentage">{percentage}%</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="genre-actions">
                      <button className="action-btn">
                        <Target size={14} />
                        <span>Target This Genre</span>
                      </button>
                      
                      <button className="action-btn">
                        <BarChart3 size={14} />
                        <span>Deep Analytics</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'regions' && (
          <motion.div 
            className="regions-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🌍 Global Market Analysis</h3>
              <p>Explore regional music markets and their potential</p>
            </div>

            <div className="regions-grid">
              {trendingData.regions.map((region) => (
                <motion.div
                  key={region.id}
                  className="region-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="region-header">
                    <h4>{region.name}</h4>
                    <div className="region-growth">
                      <TrendingUp size={16} />
                      <span>{region.growth}</span>
                    </div>
                  </div>

                  <div className="region-stats">
                    <div className="stat-item">
                      <DollarSign size={16} />
                      <div>
                        <span className="stat-label">Market Size</span>
                        <span className="stat-value">{region.marketSize}</span>
                      </div>
                    </div>
                    
                    <div className="stat-item">
                      <Users size={16} />
                      <div>
                        <span className="stat-label">Streaming Penetration</span>
                        <span className="stat-value">{region.streamingPenetration}</span>
                      </div>
                    </div>
                    
                    <div className="stat-item">
                      <Music size={16} />
                      <div>
                        <span className="stat-label">Revenue per 1K Streams</span>
                        <span className="stat-value">{region.avgRevenuePer1000Streams}</span>
                      </div>
                    </div>
                  </div>

                  <div className="top-genres">
                    <h5>Top Genres</h5>
                    <div className="genres-list">
                      {region.topGenres.map((genre, index) => (
                        <span key={index} className="genre-badge">{genre}</span>
                      ))}
                    </div>
                  </div>

                  <div className="opportunities-challenges">
                    <div className="opportunities">
                      <h5>🚀 Opportunities</h5>
                      <ul>
                        {region.opportunities.slice(0, 2).map((opp, index) => (
                          <li key={index}>{opp}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="challenges">
                      <h5>⚠️ Challenges</h5>
                      <ul>
                        {region.challenges.slice(0, 2).map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="region-actions">
                    <button className="action-btn">
                      <Target size={14} />
                      <span>Target Market</span>
                    </button>
                    
                    <button className="action-btn">
                      <ExternalLink size={14} />
                      <span>Market Report</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'opportunities' && (
          <motion.div 
            className="opportunities-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🎯 Business Opportunities</h3>
              <p>Discover emerging opportunities in the music industry</p>
            </div>

            <div className="opportunities-grid">
              {trendingData.opportunities.map((opportunity) => (
                <motion.div
                  key={opportunity.id}
                  className="opportunity-card"
                  whileHover={{ scale: 1.02, y: -3 }}
                  style={{ '--potential-color': getOpportunityColor(opportunity.potential) }}
                >
                  <div className="opportunity-header">
                    <div className="opportunity-info">
                      <h4>{opportunity.title}</h4>
                      <span className="opportunity-category">{opportunity.category}</span>
                    </div>
                    
                    <div className={`potential-badge ${opportunity.potential}`}>
                      {opportunity.potential.replace('_', ' ')}
                    </div>
                  </div>

                  <p className="opportunity-description">{opportunity.description}</p>

                  <div className="opportunity-metrics">
                    <div className="metric-row">
                      <div className="metric">
                        <span className="metric-label">Market Size</span>
                        <span className="metric-value">{opportunity.marketSize}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Expected ROI</span>
                        <span className="metric-value">{opportunity.expectedROI}</span>
                      </div>
                    </div>
                    
                    <div className="metric-row">
                      <div className="metric">
                        <span className="metric-label">Investment</span>
                        <span className="metric-value">{opportunity.investment}</span>
                      </div>
                      <div className="metric">
                        <span className="metric-label">Timeframe</span>
                        <span className="metric-value">{opportunity.timeframe}</span>
                      </div>
                    </div>
                  </div>

                  <div className="key-players">
                    <h5>Key Players</h5>
                    <div className="players-list">
                      {opportunity.keyPlayers.map((player, index) => (
                        <span key={index} className="player-tag">{player}</span>
                      ))}
                    </div>
                  </div>

                  <div className="entry-strategy">
                    <h5>Entry Strategy</h5>
                    <p>{opportunity.entryStrategy}</p>
                  </div>

                  <div className="risk-assessment">
                    <div className="risk-item">
                      <span className="risk-label">Risk Level:</span>
                      <span className={`risk-value ${opportunity.riskLevel}`}>
                        {opportunity.riskLevel}
                      </span>
                    </div>
                  </div>

                  <div className="opportunity-actions">
                    <button className="action-btn primary">
                      <Rocket size={14} />
                      <span>Explore Opportunity</span>
                    </button>
                    
                    <button className="action-btn">
                      <Download size={14} />
                      <span>Get Report</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'emerging' && (
          <motion.div 
            className="emerging-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🚀 Emerging Markets</h3>
              <p>High-growth markets with untapped potential</p>
            </div>

            <div className="emerging-grid">
              {trendingData.emergingMarkets.map((market) => (
                <motion.div
                  key={market.country}
                  className="emerging-card"
                  whileHover={{ scale: 1.02 }}
                  style={{ '--opportunity-color': getOpportunityColor(market.opportunity) }}
                >
                  <div className="market-header">
                    <h4>{market.country}</h4>
                    <div className="market-growth">
                      <TrendingUp size={16} />
                      <span>{market.growth}</span>
                    </div>
                  </div>

                  <div className="market-stats">
                    <div className="stat-grid">
                      <div className="stat">
                        <span className="stat-label">Population</span>
                        <span className="stat-value">{market.population}</span>
                      </div>
                      
                      <div className="stat">
                        <span className="stat-label">Internet</span>
                        <span className="stat-value">{market.internetPenetration}</span>
                      </div>
                      
                      <div className="stat">
                        <span className="stat-label">Streaming Growth</span>
                        <span className="stat-value">{market.streamingGrowth}</span>
                      </div>
                      
                      <div className="stat">
                        <span className="stat-label">Entry Barrier</span>
                        <span className={`stat-value ${market.entryBarrier}`}>
                          {market.entryBarrier}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="market-genres">
                    <h5>Popular Genres</h5>
                    <div className="genres-list">
                      {market.topGenres.map((genre, index) => (
                        <span key={index} className="genre-tag">{genre}</span>
                      ))}
                    </div>
                  </div>

                  <div className="market-analysis">
                    <div className="challenges">
                      <h5>Challenges</h5>
                      <ul>
                        {market.challenges.map((challenge, index) => (
                          <li key={index}>{challenge}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className={`opportunity-level ${market.opportunity}`}>
                    <Star size={16} />
                    <span>{market.opportunity.replace('_', ' ')} opportunity</span>
                  </div>

                  <div className="market-actions">
                    <button className="action-btn">
                      <Target size={14} />
                      <span>Market Entry Plan</span>
                    </button>
                    
                    <button className="action-btn">
                      <BarChart3 size={14} />
                      <span>Market Analysis</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Insights */}
      <div className="quick-insights">
        <h3>💡 Quick Insights</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <Fire size={24} />
            <h4>Hottest Trend</h4>
            <p>Phonk music is exploding with +412% growth, driven by TikTok viral content</p>
          </div>
          
          <div className="insight-card">
            <Globe size={24} />
            <h4>Fastest Growing Market</h4>
            <p>Africa leads with +156% growth, particularly Nigeria and South Africa</p>
          </div>
          
          <div className="insight-card">
            <DollarSign size={24} />
            <h4>Best Revenue Opportunity</h4>
            <p>Latin Trap offers highest per-stream payouts at $0.0035 average</p>
          </div>
          
          <div className="insight-card">
            <Target size={24} />
            <h4>Low Competition Genre</h4>
            <p>Bedroom Pop has low competition with growing streaming numbers</p>
          </div>
        </div>
      </div>

      {/* Action Center */}
      <div className="action-center">
        <h3>🎯 Take Action</h3>
        <div className="action-buttons">
          <button className="action-btn large">
            <Download size={20} />
            <span>Download Full Report</span>
          </button>
          
          <button className="action-btn large">
            <Bell size={20} />
            <span>Set Trend Alerts</span>
          </button>
          
          <button className="action-btn large">
            <Target size={20} />
            <span>Create Strategy Plan</span>
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

export default GlobalTrends;

