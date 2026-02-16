import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Music, 
  Target, 
  Lightbulb, 
  Zap, 
  Star, 
  Fire, 
  Eye, 
  Users, 
  DollarSign, 
  Clock, 
  MapPin, 
  Filter, 
  RefreshCw, 
  Download, 
  ExternalLink, 
  AlertTriangle, 
  CheckCircle, 
  Info, 
  Rocket, 
  Compass, 
  Telescope, 
  Crosshair, 
  Focus, 
  Layers, 
  BarChart3, 
  PieChart, 
  LineChart, 
  Activity, 
  Pulse, 
  Waves, 
  Volume2, 
  Headphones, 
  Radio, 
  Mic, 
  Calendar, 
  Plus, 
  Minus, 
  X, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  ArrowUp, 
  ArrowDown, 
  Award, 
  Crown, 
  Heart, 
  Share2, 
  Link, 
  Copy, 
  Save, 
  Edit3, 
  Settings, 
  Bell, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Speaker, 
  Disc, 
  Vinyl, 
  Cassette, 
  Equalizer, 
  Shuffle, 
  Repeat, 
  Play, 
  Pause, 
  SkipBack, 
  SkipForward, 
  FastForward, 
  Rewind
} from 'lucide-react';

// Music Search Gaps Component
const MusicSearchGaps = () => {
  const [activeTab, setActiveTab] = useState('search_gaps');
  const [selectedCountry, setSelectedCountry] = useState('global');
  const [selectedGenre, setSelectedGenre] = useState('all');
  const [timeframe, setTimeframe] = useState('30d');

  // Your musical expertise areas
  const yourExpertise = [
    'Clarinet', 'Opera', 'Country', 'Rock', 'Pop', 'Afrosambaswing', 
    'Classical', 'Jazz', 'Fusion', 'World Music'
  ];

  // Mock search gap data
  const searchGapData = {
    highDemandLowSupply: [
      {
        id: 'opera_country_fusion',
        searchTerm: 'Opera Country Fusion',
        monthlySearches: 45600,
        availableContent: 23,
        demandSupplyRatio: 1982,
        countries: ['US', 'Canada', 'Australia', 'UK'],
        yourMatch: ['Opera', 'Country'],
        opportunity: 'very_high',
        description: 'People searching for country music with operatic vocals',
        suggestedApproach: 'Country ballads with operatic vocal techniques',
        estimatedRevenue: '$12,400/month',
        competitionLevel: 'very_low',
        trendDirection: 'up',
        searchGrowth: '+234%',
        relatedSearches: ['Country opera singer', 'Classical country music', 'Operatic country ballads']
      },
      {
        id: 'clarinet_afrobeat',
        searchTerm: 'Clarinet Afrobeat',
        monthlySearches: 28900,
        availableContent: 8,
        demandSupplyRatio: 3612,
        countries: ['Nigeria', 'Ghana', 'UK', 'US', 'France'],
        yourMatch: ['Clarinet', 'Afrosambaswing'],
        opportunity: 'very_high',
        description: 'Afrobeat music featuring clarinet as lead instrument',
        suggestedApproach: 'Traditional Afrobeat rhythms with clarinet melodies',
        estimatedRevenue: '$8,900/month',
        competitionLevel: 'very_low',
        trendDirection: 'explosive',
        searchGrowth: '+456%',
        relatedSearches: ['African clarinet music', 'Woodwind Afrobeat', 'Clarinet world music']
      },
      {
        id: 'jazz_country_clarinet',
        searchTerm: 'Jazz Country Clarinet',
        monthlySearches: 19800,
        availableContent: 12,
        demandSupplyRatio: 1650,
        countries: ['US', 'Canada', 'Australia'],
        yourMatch: ['Clarinet', 'Jazz', 'Country'],
        opportunity: 'high',
        description: 'Country music with jazz clarinet solos',
        suggestedApproach: 'Country songs featuring jazz-style clarinet improvisations',
        estimatedRevenue: '$6,200/month',
        competitionLevel: 'low',
        trendDirection: 'up',
        searchGrowth: '+167%',
        relatedSearches: ['Country jazz fusion', 'Clarinet country solos', 'Western swing clarinet']
      },
      {
        id: 'pop_opera_crossover',
        searchTerm: 'Pop Opera Crossover',
        monthlySearches: 67800,
        availableContent: 45,
        demandSupplyRatio: 1507,
        countries: ['US', 'UK', 'Germany', 'Italy', 'Australia'],
        yourMatch: ['Opera', 'Pop'],
        opportunity: 'high',
        description: 'Pop songs with operatic vocal techniques',
        suggestedApproach: 'Modern pop production with operatic vocal delivery',
        estimatedRevenue: '$18,900/month',
        competitionLevel: 'medium',
        trendDirection: 'up',
        searchGrowth: '+89%',
        relatedSearches: ['Operatic pop singer', 'Classical pop fusion', 'Pop aria']
      },
      {
        id: 'rock_clarinet_solos',
        searchTerm: 'Rock Clarinet Solos',
        monthlySearches: 15600,
        availableContent: 6,
        demandSupplyRatio: 2600,
        countries: ['US', 'UK', 'Germany', 'Canada'],
        yourMatch: ['Clarinet', 'Rock'],
        opportunity: 'high',
        description: 'Rock music featuring clarinet solos instead of guitar',
        suggestedApproach: 'Rock songs with clarinet replacing traditional guitar solos',
        estimatedRevenue: '$4,800/month',
        competitionLevel: 'very_low',
        trendDirection: 'up',
        searchGrowth: '+203%',
        relatedSearches: ['Clarinet rock band', 'Alternative rock clarinet', 'Prog rock clarinet']
      },
      {
        id: 'samba_opera_fusion',
        searchTerm: 'Samba Opera Fusion',
        monthlySearches: 12400,
        availableContent: 3,
        demandSupplyRatio: 4133,
        countries: ['Brazil', 'US', 'Portugal', 'Spain'],
        yourMatch: ['Opera', 'Afrosambaswing'],
        opportunity: 'very_high',
        description: 'Brazilian samba rhythms with operatic vocals',
        suggestedApproach: 'Traditional samba with operatic vocal arrangements',
        estimatedRevenue: '$3,900/month',
        competitionLevel: 'very_low',
        trendDirection: 'explosive',
        searchGrowth: '+389%',
        relatedSearches: ['Brazilian opera', 'Classical samba', 'Opera latina']
      }
    ],
    countrySpecificGaps: [
      {
        country: 'Japan',
        gaps: [
          {
            searchTerm: 'Western Classical Clarinet J-Pop',
            monthlySearches: 23400,
            availableContent: 2,
            yourMatch: ['Clarinet', 'Pop'],
            opportunity: 'very_high',
            description: 'J-Pop with Western classical clarinet arrangements'
          },
          {
            searchTerm: 'Opera Anime Songs',
            monthlySearches: 45600,
            availableContent: 8,
            yourMatch: ['Opera'],
            opportunity: 'very_high',
            description: 'Anime theme songs performed in operatic style'
          }
        ]
      },
      {
        country: 'Germany',
        gaps: [
          {
            searchTerm: 'Oktoberfest Clarinet Rock',
            monthlySearches: 18900,
            availableContent: 4,
            yourMatch: ['Clarinet', 'Rock'],
            opportunity: 'high',
            description: 'Traditional German folk with rock clarinet'
          },
          {
            searchTerm: 'Deutsche Opera Pop',
            monthlySearches: 34500,
            availableContent: 12,
            yourMatch: ['Opera', 'Pop'],
            opportunity: 'high',
            description: 'German pop music with operatic vocals'
          }
        ]
      },
      {
        country: 'Brazil',
        gaps: [
          {
            searchTerm: 'Bossa Nova Clarinet',
            monthlySearches: 28700,
            availableContent: 7,
            yourMatch: ['Clarinet', 'Afrosambaswing'],
            opportunity: 'very_high',
            description: 'Bossa Nova featuring clarinet as lead instrument'
          },
          {
            searchTerm: 'Sertanejo Opera',
            monthlySearches: 15600,
            availableContent: 1,
            yourMatch: ['Opera', 'Country'],
            opportunity: 'very_high',
            description: 'Brazilian country music with operatic vocals'
          }
        ]
      },
      {
        country: 'India',
        gaps: [
          {
            searchTerm: 'Bollywood Clarinet Fusion',
            monthlySearches: 56700,
            availableContent: 15,
            yourMatch: ['Clarinet'],
            opportunity: 'high',
            description: 'Bollywood music featuring Western clarinet'
          },
          {
            searchTerm: 'Classical Indian Opera',
            monthlySearches: 23400,
            availableContent: 3,
            yourMatch: ['Opera'],
            opportunity: 'very_high',
            description: 'Indian classical music with Western operatic techniques'
          }
        ]
      },
      {
        country: 'South Korea',
        gaps: [
          {
            searchTerm: 'K-Pop Clarinet',
            monthlySearches: 67800,
            availableContent: 9,
            yourMatch: ['Clarinet', 'Pop'],
            opportunity: 'very_high',
            description: 'K-Pop songs featuring clarinet arrangements'
          },
          {
            searchTerm: 'Korean Opera Ballads',
            monthlySearches: 34500,
            availableContent: 6,
            yourMatch: ['Opera'],
            opportunity: 'high',
            description: 'Korean ballads with operatic vocal style'
          }
        ]
      }
    ],
    emergingFusionTrends: [
      {
        id: 'classical_trap',
        name: 'Classical Trap',
        description: 'Trap beats with classical instruments',
        searchGrowth: '+567%',
        yourMatch: ['Clarinet', 'Classical'],
        opportunity: 'very_high',
        estimatedAudience: '2.3M',
        avgAge: '16-25',
        platforms: ['TikTok', 'YouTube', 'Spotify']
      },
      {
        id: 'opera_edm',
        name: 'Opera EDM',
        description: 'Electronic dance music with operatic vocals',
        searchGrowth: '+234%',
        yourMatch: ['Opera'],
        opportunity: 'high',
        estimatedAudience: '1.8M',
        avgAge: '18-30',
        platforms: ['Spotify', 'SoundCloud', 'YouTube']
      },
      {
        id: 'country_reggaeton',
        name: 'Country Reggaeton',
        description: 'Latin reggaeton rhythms with country themes',
        searchGrowth: '+189%',
        yourMatch: ['Country'],
        opportunity: 'high',
        estimatedAudience: '3.1M',
        avgAge: '20-35',
        platforms: ['Spotify', 'YouTube', 'Apple Music']
      },
      {
        id: 'afrobeat_jazz',
        name: 'Afrobeat Jazz',
        description: 'Jazz improvisation over Afrobeat rhythms',
        searchGrowth: '+298%',
        yourMatch: ['Jazz', 'Afrosambaswing'],
        opportunity: 'very_high',
        estimatedAudience: '1.2M',
        avgAge: '25-45',
        platforms: ['Spotify', 'Bandcamp', 'YouTube']
      }
    ],
    seasonalOpportunities: [
      {
        season: 'Holiday Season',
        opportunities: [
          {
            searchTerm: 'Opera Christmas Carols',
            monthlySearches: 89000,
            availableContent: 23,
            yourMatch: ['Opera'],
            peakMonths: ['November', 'December']
          },
          {
            searchTerm: 'Jazz Christmas Clarinet',
            monthlySearches: 34500,
            availableContent: 8,
            yourMatch: ['Clarinet', 'Jazz'],
            peakMonths: ['November', 'December']
          }
        ]
      },
      {
        season: 'Summer Festival',
        opportunities: [
          {
            searchTerm: 'Festival Clarinet Rock',
            monthlySearches: 45600,
            availableContent: 12,
            yourMatch: ['Clarinet', 'Rock'],
            peakMonths: ['May', 'June', 'July', 'August']
          },
          {
            searchTerm: 'Summer Opera Pop',
            monthlySearches: 67800,
            availableContent: 18,
            yourMatch: ['Opera', 'Pop'],
            peakMonths: ['June', 'July', 'August']
          }
        ]
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
      case 'explosive': return Rocket;
      default: return Activity;
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

  const calculateMatchScore = (yourMatch) => {
    return Math.min((yourMatch.length / yourExpertise.length) * 100, 100);
  };

  const tabs = [
    { id: 'search_gaps', label: 'Search Gaps', icon: Search },
    { id: 'country_gaps', label: 'Country Opportunities', icon: Globe },
    { id: 'fusion_trends', label: 'Fusion Trends', icon: Zap },
    { id: 'seasonal', label: 'Seasonal Opportunities', icon: Calendar }
  ];

  return (
    <div className="music-search-gaps">
      <div className="gaps-header">
        <h2>🔍 Music Search Gaps & Opportunities</h2>
        <p>Discover what people are searching for but can't find - your unique fusion opportunities</p>
        
        <div className="your-expertise">
          <h3>🎵 Your Musical Expertise</h3>
          <div className="expertise-tags">
            {yourExpertise.map((skill, index) => (
              <span key={index} className="expertise-tag">{skill}</span>
            ))}
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
        {activeTab === 'search_gaps' && (
          <motion.div 
            className="search-gaps-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🎯 High Demand, Low Supply Opportunities</h3>
              <p>Perfect matches for your musical expertise</p>
            </div>

            <div className="gaps-grid">
              {searchGapData.highDemandLowSupply.map((gap) => {
                const TrendIcon = getTrendIcon(gap.trendDirection);
                const matchScore = calculateMatchScore(gap.yourMatch);
                
                return (
                  <motion.div
                    key={gap.id}
                    className="gap-card"
                    whileHover={{ scale: 1.02, y: -5 }}
                    style={{ '--opportunity-color': getOpportunityColor(gap.opportunity) }}
                  >
                    <div className="gap-header">
                      <div className="gap-info">
                        <h4>{gap.searchTerm}</h4>
                        <div className="gap-growth">
                          <TrendIcon size={16} />
                          <span className="growth-value">{gap.searchGrowth}</span>
                        </div>
                      </div>
                      
                      <div className={`opportunity-badge ${gap.opportunity}`}>
                        {gap.opportunity.replace('_', ' ')}
                      </div>
                    </div>

                    <div className="gap-stats">
                      <div className="stat-row">
                        <div className="stat">
                          <span className="stat-label">Monthly Searches</span>
                          <span className="stat-value">{formatNumber(gap.monthlySearches)}</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Available Content</span>
                          <span className="stat-value low">{gap.availableContent}</span>
                        </div>
                      </div>
                      
                      <div className="stat-row">
                        <div className="stat">
                          <span className="stat-label">Demand/Supply Ratio</span>
                          <span className="stat-value high">{gap.demandSupplyRatio}:1</span>
                        </div>
                        <div className="stat">
                          <span className="stat-label">Est. Revenue</span>
                          <span className="stat-value">{gap.estimatedRevenue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="your-match">
                      <h5>🎯 Your Match ({matchScore.toFixed(0)}%)</h5>
                      <div className="match-tags">
                        {gap.yourMatch.map((skill, index) => (
                          <span key={index} className="match-tag">{skill}</span>
                        ))}
                      </div>
                    </div>

                    <div className="gap-description">
                      <p>{gap.description}</p>
                    </div>

                    <div className="suggested-approach">
                      <h5>💡 Suggested Approach</h5>
                      <p>{gap.suggestedApproach}</p>
                    </div>

                    <div className="key-markets">
                      <h5>🌍 Key Markets</h5>
                      <div className="markets-list">
                        {gap.countries.slice(0, 4).map((country, index) => (
                          <span key={index} className="market-tag">{country}</span>
                        ))}
                      </div>
                    </div>

                    <div className="related-searches">
                      <h5>🔍 Related Searches</h5>
                      <div className="searches-list">
                        {gap.relatedSearches.slice(0, 2).map((search, index) => (
                          <span key={index} className="search-tag">{search}</span>
                        ))}
                      </div>
                    </div>

                    <div className="competition-analysis">
                      <div className="competition-item">
                        <span className="competition-label">Competition:</span>
                        <span className={`competition-value ${gap.competitionLevel.replace(' ', '_')}`}>
                          {gap.competitionLevel}
                        </span>
                      </div>
                    </div>

                    <div className="gap-actions">
                      <button className="action-btn primary">
                        <Target size={14} />
                        <span>Create Content Plan</span>
                      </button>
                      
                      <button className="action-btn">
                        <BarChart3 size={14} />
                        <span>Deep Analysis</span>
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        )}

        {activeTab === 'country_gaps' && (
          <motion.div 
            className="country-gaps-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🌍 Country-Specific Opportunities</h3>
              <p>Untapped niches in different markets</p>
            </div>

            <div className="countries-grid">
              {searchGapData.countrySpecificGaps.map((countryData) => (
                <motion.div
                  key={countryData.country}
                  className="country-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="country-header">
                    <h4>{countryData.country}</h4>
                    <div className="gaps-count">
                      {countryData.gaps.length} opportunities
                    </div>
                  </div>

                  <div className="country-gaps">
                    {countryData.gaps.map((gap, index) => (
                      <div key={index} className="country-gap">
                        <div className="gap-title">
                          <h5>{gap.searchTerm}</h5>
                          <div className={`opportunity-badge ${gap.opportunity}`}>
                            {gap.opportunity.replace('_', ' ')}
                          </div>
                        </div>
                        
                        <p className="gap-desc">{gap.description}</p>
                        
                        <div className="gap-metrics">
                          <div className="metric">
                            <span className="metric-label">Searches</span>
                            <span className="metric-value">{formatNumber(gap.monthlySearches)}</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Content</span>
                            <span className="metric-value low">{gap.availableContent}</span>
                          </div>
                        </div>
                        
                        <div className="your-match-mini">
                          <span className="match-label">Your Match:</span>
                          <div className="match-tags-mini">
                            {gap.yourMatch.map((skill, skillIndex) => (
                              <span key={skillIndex} className="match-tag-mini">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="country-actions">
                    <button className="action-btn">
                      <Target size={14} />
                      <span>Target {countryData.country}</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'fusion_trends' && (
          <motion.div 
            className="fusion-trends-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>⚡ Emerging Fusion Trends</h3>
              <p>New genre combinations gaining momentum</p>
            </div>

            <div className="fusion-grid">
              {searchGapData.emergingFusionTrends.map((trend) => (
                <motion.div
                  key={trend.id}
                  className="fusion-card"
                  whileHover={{ scale: 1.02, y: -3 }}
                  style={{ '--opportunity-color': getOpportunityColor(trend.opportunity) }}
                >
                  <div className="fusion-header">
                    <div className="fusion-info">
                      <h4>{trend.name}</h4>
                      <div className="fusion-growth">
                        <Rocket size={16} />
                        <span>{trend.searchGrowth}</span>
                      </div>
                    </div>
                    
                    <div className={`opportunity-badge ${trend.opportunity}`}>
                      {trend.opportunity.replace('_', ' ')}
                    </div>
                  </div>

                  <p className="fusion-description">{trend.description}</p>

                  <div className="fusion-stats">
                    <div className="stat">
                      <Users size={16} />
                      <div>
                        <span className="stat-label">Est. Audience</span>
                        <span className="stat-value">{trend.estimatedAudience}</span>
                      </div>
                    </div>
                    
                    <div className="stat">
                      <Clock size={16} />
                      <div>
                        <span className="stat-label">Avg Age</span>
                        <span className="stat-value">{trend.avgAge}</span>
                      </div>
                    </div>
                  </div>

                  <div className="your-match">
                    <h5>🎯 Your Match</h5>
                    <div className="match-tags">
                      {trend.yourMatch.map((skill, index) => (
                        <span key={index} className="match-tag">{skill}</span>
                      ))}
                    </div>
                  </div>

                  <div className="top-platforms">
                    <h5>📱 Top Platforms</h5>
                    <div className="platforms-list">
                      {trend.platforms.map((platform, index) => (
                        <span key={index} className="platform-tag">{platform}</span>
                      ))}
                    </div>
                  </div>

                  <div className="fusion-actions">
                    <button className="action-btn primary">
                      <Zap size={14} />
                      <span>Explore Fusion</span>
                    </button>
                    
                    <button className="action-btn">
                      <BarChart3 size={14} />
                      <span>Trend Analysis</span>
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {activeTab === 'seasonal' && (
          <motion.div 
            className="seasonal-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>📅 Seasonal Opportunities</h3>
              <p>Time-sensitive opportunities throughout the year</p>
            </div>

            <div className="seasonal-grid">
              {searchGapData.seasonalOpportunities.map((season) => (
                <motion.div
                  key={season.season}
                  className="seasonal-card"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="seasonal-header">
                    <h4>{season.season}</h4>
                    <Calendar size={20} />
                  </div>

                  <div className="seasonal-opportunities">
                    {season.opportunities.map((opp, index) => (
                      <div key={index} className="seasonal-opportunity">
                        <div className="opp-title">
                          <h5>{opp.searchTerm}</h5>
                        </div>
                        
                        <div className="opp-metrics">
                          <div className="metric">
                            <span className="metric-label">Searches</span>
                            <span className="metric-value">{formatNumber(opp.monthlySearches)}</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Content</span>
                            <span className="metric-value low">{opp.availableContent}</span>
                          </div>
                        </div>
                        
                        <div className="peak-months">
                          <span className="months-label">Peak Months:</span>
                          <div className="months-list">
                            {opp.peakMonths.map((month, monthIndex) => (
                              <span key={monthIndex} className="month-tag">{month}</span>
                            ))}
                          </div>
                        </div>
                        
                        <div className="your-match-mini">
                          <span className="match-label">Your Match:</span>
                          <div className="match-tags-mini">
                            {opp.yourMatch.map((skill, skillIndex) => (
                              <span key={skillIndex} className="match-tag-mini">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="seasonal-actions">
                    <button className="action-btn">
                      <Calendar size={14} />
                      <span>Plan Campaign</span>
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
        <h3>💡 Your Biggest Opportunities</h3>
        <div className="insights-grid">
          <div className="insight-card">
            <Fire size={24} />
            <h4>Hottest Gap</h4>
            <p>Opera Country Fusion - 45.6K searches, only 23 songs available</p>
          </div>
          
          <div className="insight-card">
            <Globe size={24} />
            <h4>Best Market</h4>
            <p>Japan - K-Pop Clarinet has 67.8K searches with minimal competition</p>
          </div>
          
          <div className="insight-card">
            <Zap size={24} />
            <h4>Trending Fusion</h4>
            <p>Classical Trap growing +567% - perfect for your clarinet skills</p>
          </div>
          
          <div className="insight-card">
            <Calendar size={24} />
            <h4>Seasonal Winner</h4>
            <p>Opera Christmas Carols - 89K searches in holiday season</p>
          </div>
        </div>
      </div>

      {/* Action Center */}
      <div className="action-center">
        <h3>🎯 Take Action on Your Opportunities</h3>
        <div className="action-buttons">
          <button className="action-btn large primary">
            <Target size={20} />
            <span>Create My Content Strategy</span>
          </button>
          
          <button className="action-btn large">
            <Calendar size={20} />
            <span>Plan Release Calendar</span>
          </button>
          
          <button className="action-btn large">
            <Download size={20} />
            <span>Export Opportunity Report</span>
          </button>
          
          <button className="action-btn large">
            <Bell size={20} />
            <span>Set Trend Alerts</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicSearchGaps;

