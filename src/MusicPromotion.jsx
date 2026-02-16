import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AutoMasteringEngine from './AutoMasteringEngine';
import DistributionTracker from './DistributionTracker';
import { 
  Music, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Users, 
  Play, 
  Pause, 
  Volume2, 
  Edit3, 
  Upload, 
  BarChart3,
  Zap,
  Star,
  Crown,
  Headphones,
  Radio,
  Mic,
  Award,
  Building,
  Globe,
  Smartphone,
  Heart,
  Share2,
  Eye,
  MessageCircle,
  ThumbsUp,
  Download,
  Calendar,
  Clock,
  MapPin,
  Sparkles
} from 'lucide-react';

// Music Promotion Dashboard Component
const MusicPromotion = () => {
  const [activeTab, setActiveTab] = useState('promotion');
  const [musicStats, setMusicStats] = useState({
    totalStreams: 45672,
    monthlyListeners: 8934,
    totalRevenue: 1247.89,
    fanbaseGrowth: 23.4,
    topPlatform: 'Spotify',
    engagement: 12.7
  });

  const [promotionBudget, setPromotionBudget] = useState({
    total: 500,
    allocated: {
      spotify: 150,
      youtube: 100,
      instagram: 80,
      tiktok: 70,
      facebook: 50,
      bandlab: 30,
      radio: 20
    }
  });

  const [platforms, setPlatforms] = useState([
    {
      name: 'Spotify',
      icon: '🎵',
      streams: 18234,
      revenue: 547.23,
      growth: '+15.2%',
      cost: '$150',
      roi: '365%',
      effectiveness: 'High',
      description: 'Best for discovery and playlist placement',
      tips: 'Focus on playlist pitching and Spotify for Artists promotion'
    },
    {
      name: 'YouTube Music',
      icon: '📺',
      streams: 12456,
      revenue: 234.56,
      growth: '+8.7%',
      cost: '$100',
      roi: '234%',
      effectiveness: 'Medium',
      description: 'Great for music videos and visual content',
      tips: 'Create engaging music videos and YouTube Shorts'
    },
    {
      name: 'Apple Music',
      icon: '🍎',
      streams: 8934,
      revenue: 298.45,
      growth: '+12.1%',
      cost: '$0',
      roi: 'Infinite',
      effectiveness: 'High',
      description: 'Higher payout per stream, quality audience',
      tips: 'Submit to Apple Music playlists and use Apple Music for Artists'
    },
    {
      name: 'TikTok',
      icon: '🎬',
      streams: 45678,
      revenue: 89.34,
      growth: '+45.6%',
      cost: '$70',
      roi: '127%',
      effectiveness: 'Very High',
      description: 'Viral potential, younger audience',
      tips: 'Create 15-30 second hooks, use trending sounds'
    },
    {
      name: 'Instagram',
      icon: '📷',
      streams: 6789,
      revenue: 45.67,
      growth: '+18.9%',
      cost: '$80',
      roi: '57%',
      effectiveness: 'Medium',
      description: 'Visual storytelling, behind-the-scenes content',
      tips: 'Use Reels with your music, Stories for engagement'
    },
    {
      name: 'BandLab',
      icon: '🎸',
      streams: 3456,
      revenue: 23.45,
      growth: '+25.3%',
      cost: '$30',
      roi: '78%',
      effectiveness: 'Medium',
      description: 'Music creation community, collaboration',
      tips: 'Collaborate with other artists, share creation process'
    }
  ]);

  const [labelStrategies, setLabelStrategies] = useState([
    {
      level: 'Independent',
      description: 'Self-release and build fanbase',
      requirements: '1K+ monthly listeners',
      platforms: ['DistroKid', 'CD Baby', 'TuneCore'],
      cost: '$20-50/year',
      pros: ['Full creative control', 'Keep 100% rights', 'Learn the business'],
      cons: ['Limited resources', 'Self-promotion required'],
      nextStep: 'Build to 10K monthly listeners'
    },
    {
      level: 'Independent Label',
      description: 'Small label partnership',
      requirements: '10K+ monthly listeners',
      platforms: ['Local indie labels', 'Genre-specific labels'],
      cost: 'Revenue split 50/50-70/30',
      pros: ['Some promotion support', 'Industry connections', 'Shared costs'],
      cons: ['Less control', 'Revenue sharing'],
      nextStep: 'Aim for 50K monthly listeners'
    },
    {
      level: 'Major Label',
      description: 'Warner Bros, Universal, Sony',
      requirements: '100K+ monthly listeners + viral moment',
      platforms: ['A&R scouts', 'Music conferences', 'Industry showcases'],
      cost: 'Revenue split 15/85-30/70 (artist/label)',
      pros: ['Massive promotion budget', 'Radio play', 'Global distribution'],
      cons: ['Limited creative control', 'Complex contracts'],
      nextStep: 'Maintain momentum and negotiate wisely'
    }
  ]);

  const tabs = [
    { id: 'promotion', label: 'Music Promotion', icon: TrendingUp },
    { id: 'platforms', label: 'Platform Analytics', icon: BarChart3 },
    { id: 'labels', label: 'Label Strategy', icon: Building },
    { id: 'distribution', label: 'Become Distributor', icon: Globe },
    { id: 'editor', label: 'Simple Editor', icon: Edit3 }
  ];

  return (
    <div className="music-promotion">
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

      <AnimatePresence mode="wait">
        {activeTab === 'promotion' && (
          <PromotionDashboard 
            musicStats={musicStats}
            promotionBudget={promotionBudget}
            platforms={platforms}
          />
        )}
        {activeTab === 'platforms' && (
          <PlatformAnalytics platforms={platforms} />
        )}
        {activeTab === 'labels' && (
          <LabelStrategy strategies={labelStrategies} />
        )}
        {activeTab === 'distribution' && (
          <DistributionGuide />
        )}
        {activeTab === 'editor' && (
          <div className="editor-tabs">
            <div className="editor-tab-nav">
              <button className="editor-tab-btn active">🤖 Auto-Mastering</button>
              <button className="editor-tab-btn">🎛️ Manual Editor</button>
            </div>
            <AutoMasteringEngine />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Promotion Dashboard Component
const PromotionDashboard = ({ musicStats, promotionBudget, platforms }) => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  return (
    <motion.div 
      className="promotion-dashboard"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      {/* Music Stats Overview */}
      <div className="music-stats-grid">
        <div className="stat-card streams">
          <div className="stat-icon">
            <Play size={32} />
          </div>
          <div className="stat-content">
            <h3>Total Streams</h3>
            <div className="stat-value">{musicStats.totalStreams.toLocaleString()}</div>
            <div className="stat-change positive">+{musicStats.fanbaseGrowth}% this month</div>
          </div>
        </div>

        <div className="stat-card listeners">
          <div className="stat-icon">
            <Users size={32} />
          </div>
          <div className="stat-content">
            <h3>Monthly Listeners</h3>
            <div className="stat-value">{musicStats.monthlyListeners.toLocaleString()}</div>
            <div className="stat-change positive">Growing steadily</div>
          </div>
        </div>

        <div className="stat-card revenue">
          <div className="stat-icon">
            <DollarSign size={32} />
          </div>
          <div className="stat-content">
            <h3>Music Revenue</h3>
            <div className="stat-value">${musicStats.totalRevenue}</div>
            <div className="stat-change positive">+{musicStats.engagement}% engagement</div>
          </div>
        </div>

        <div className="stat-card top-platform">
          <div className="stat-icon">
            <Crown size={32} />
          </div>
          <div className="stat-content">
            <h3>Top Platform</h3>
            <div className="stat-value">{musicStats.topPlatform}</div>
            <div className="stat-change positive">Best ROI</div>
          </div>
        </div>
      </div>

      {/* Promotion Budget Allocation */}
      <div className="budget-section">
        <h2>Smart Budget Allocation (${promotionBudget.total}/month)</h2>
        <div className="budget-grid">
          {Object.entries(promotionBudget.allocated).map(([platform, amount]) => {
            const platformData = platforms.find(p => p.name.toLowerCase().includes(platform));
            return (
              <div key={platform} className="budget-card">
                <div className="budget-header">
                  <span className="platform-icon">{platformData?.icon || '🎵'}</span>
                  <h4>{platform.charAt(0).toUpperCase() + platform.slice(1)}</h4>
                </div>
                <div className="budget-amount">${amount}</div>
                <div className="budget-roi">ROI: {platformData?.roi || 'TBD'}</div>
                <div className="budget-effectiveness">
                  <span className={`effectiveness ${platformData?.effectiveness?.toLowerCase()}`}>
                    {platformData?.effectiveness || 'Unknown'}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Where to Advertise Guide */}
      <div className="advertising-guide">
        <h2>🎯 Where to Advertise Your Music</h2>
        <div className="advertising-strategies">
          
          <div className="strategy-card high-priority">
            <h3>🔥 High Priority (Start Here)</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <strong>Spotify Ads</strong>
                <p>$0.50-2.00 per stream | Target similar artists' listeners</p>
                <span className="budget">Budget: $100-200/month</span>
              </div>
              <div className="strategy-item">
                <strong>TikTok Ads</strong>
                <p>$0.10-0.30 per view | Viral potential, younger audience</p>
                <span className="budget">Budget: $50-100/month</span>
              </div>
              <div className="strategy-item">
                <strong>Instagram/Facebook Ads</strong>
                <p>$0.20-1.00 per click | Visual content, broad reach</p>
                <span className="budget">Budget: $75-150/month</span>
              </div>
            </div>
          </div>

          <div className="strategy-card medium-priority">
            <h3>⚡ Medium Priority</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <strong>YouTube Ads</strong>
                <p>$0.05-0.20 per view | Music videos, longer content</p>
                <span className="budget">Budget: $50-100/month</span>
              </div>
              <div className="strategy-item">
                <strong>Playlist Pitching</strong>
                <p>$50-500 per playlist | Organic discovery</p>
                <span className="budget">Budget: $100-300/month</span>
              </div>
              <div className="strategy-item">
                <strong>Radio Promotion</strong>
                <p>$200-2000 per campaign | Traditional audience</p>
                <span className="budget">Budget: $200-500/month</span>
              </div>
            </div>
          </div>

          <div className="strategy-card low-priority">
            <h3>🎯 Advanced Strategies</h3>
            <div className="strategy-list">
              <div className="strategy-item">
                <strong>Influencer Collaborations</strong>
                <p>$100-5000 per post | Authentic endorsements</p>
                <span className="budget">Budget: $200-1000/month</span>
              </div>
              <div className="strategy-item">
                <strong>Music Blogs & Press</strong>
                <p>$50-500 per feature | Credibility building</p>
                <span className="budget">Budget: $100-300/month</span>
              </div>
              <div className="strategy-item">
                <strong>Live Performance Promotion</strong>
                <p>$100-1000 per show | Local fanbase building</p>
                <span className="budget">Budget: $200-500/month</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Platform Effectiveness Chart */}
      <div className="platform-effectiveness">
        <h2>Platform Effectiveness for Your Budget</h2>
        <div className="effectiveness-grid">
          {platforms.map((platform, index) => (
            <motion.div 
              key={platform.name}
              className="platform-card"
              whileHover={{ scale: 1.05, y: -5 }}
              onClick={() => setSelectedPlatform(platform)}
            >
              <div className="platform-header">
                <span className="platform-icon">{platform.icon}</span>
                <h4>{platform.name}</h4>
                <span className={`effectiveness-badge ${platform.effectiveness.toLowerCase()}`}>
                  {platform.effectiveness}
                </span>
              </div>
              
              <div className="platform-metrics">
                <div className="metric">
                  <span className="metric-label">Streams</span>
                  <span className="metric-value">{platform.streams.toLocaleString()}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Revenue</span>
                  <span className="metric-value">${platform.revenue}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Growth</span>
                  <span className="metric-value positive">{platform.growth}</span>
                </div>
                <div className="metric">
                  <span className="metric-label">ROI</span>
                  <span className="metric-value">{platform.roi}</span>
                </div>
              </div>
              
              <div className="platform-description">
                <p>{platform.description}</p>
              </div>
              
              <div className="platform-tip">
                <strong>💡 Tip:</strong> {platform.tips}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Quick Action Buttons */}
      <div className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="action-buttons">
          <motion.button 
            className="action-btn spotify"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Music size={24} />
            <span>Submit to Spotify Playlists</span>
          </motion.button>
          
          <motion.button 
            className="action-btn tiktok"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Smartphone size={24} />
            <span>Create TikTok Campaign</span>
          </motion.button>
          
          <motion.button 
            className="action-btn instagram"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Share2 size={24} />
            <span>Post to Instagram</span>
          </motion.button>
          
          <motion.button 
            className="action-btn analytics"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <BarChart3 size={24} />
            <span>View Detailed Analytics</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

// Platform Analytics Component
const PlatformAnalytics = ({ platforms }) => {
  return (
    <motion.div 
      className="platform-analytics"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h2>Platform Performance Analytics</h2>
      
      <div className="analytics-overview">
        <div className="overview-card total-streams">
          <h3>Total Streams</h3>
          <div className="overview-value">
            {platforms.reduce((sum, p) => sum + p.streams, 0).toLocaleString()}
          </div>
          <div className="overview-change">Across all platforms</div>
        </div>
        
        <div className="overview-card total-revenue">
          <h3>Total Revenue</h3>
          <div className="overview-value">
            ${platforms.reduce((sum, p) => sum + parseFloat(p.revenue), 0).toFixed(2)}
          </div>
          <div className="overview-change">This month</div>
        </div>
        
        <div className="overview-card best-roi">
          <h3>Best ROI Platform</h3>
          <div className="overview-value">
            {platforms.sort((a, b) => parseFloat(b.roi) - parseFloat(a.roi))[0]?.name}
          </div>
          <div className="overview-change">Highest return</div>
        </div>
      </div>

      <div className="detailed-analytics">
        {platforms.map((platform) => (
          <div key={platform.name} className="platform-analytics-card">
            <div className="analytics-header">
              <span className="platform-icon">{platform.icon}</span>
              <h3>{platform.name}</h3>
              <span className={`status ${platform.effectiveness.toLowerCase()}`}>
                {platform.effectiveness}
              </span>
            </div>
            
            <div className="analytics-metrics">
              <div className="metric-row">
                <div className="metric">
                  <span className="metric-icon">🎵</span>
                  <div className="metric-info">
                    <span className="metric-label">Streams</span>
                    <span className="metric-value">{platform.streams.toLocaleString()}</span>
                  </div>
                </div>
                
                <div className="metric">
                  <span className="metric-icon">💰</span>
                  <div className="metric-info">
                    <span className="metric-label">Revenue</span>
                    <span className="metric-value">${platform.revenue}</span>
                  </div>
                </div>
              </div>
              
              <div className="metric-row">
                <div className="metric">
                  <span className="metric-icon">📈</span>
                  <div className="metric-info">
                    <span className="metric-label">Growth</span>
                    <span className="metric-value positive">{platform.growth}</span>
                  </div>
                </div>
                
                <div className="metric">
                  <span className="metric-icon">🎯</span>
                  <div className="metric-info">
                    <span className="metric-label">ROI</span>
                    <span className="metric-value">{platform.roi}</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="analytics-insights">
              <h4>💡 Insights & Recommendations</h4>
              <p>{platform.tips}</p>
              
              <div className="action-suggestions">
                {platform.name === 'Spotify' && (
                  <div className="suggestion">
                    <strong>Next Action:</strong> Submit to 5 more playlists this week
                  </div>
                )}
                {platform.name === 'TikTok' && (
                  <div className="suggestion">
                    <strong>Next Action:</strong> Create 3 short clips from your latest song
                  </div>
                )}
                {platform.name === 'YouTube Music' && (
                  <div className="suggestion">
                    <strong>Next Action:</strong> Upload a music video or lyric video
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

// Label Strategy Component
const LabelStrategy = ({ strategies }) => {
  const [currentLevel, setCurrentLevel] = useState(0);

  return (
    <motion.div 
      className="label-strategy"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h2>🎵 Path to Record Label Success</h2>
      
      <div className="strategy-roadmap">
        {strategies.map((strategy, index) => (
          <motion.div 
            key={strategy.level}
            className={`strategy-level ${index === currentLevel ? 'active' : ''} ${index < currentLevel ? 'completed' : ''}`}
            onClick={() => setCurrentLevel(index)}
            whileHover={{ scale: 1.02 }}
          >
            <div className="level-header">
              <div className="level-number">{index + 1}</div>
              <h3>{strategy.level}</h3>
              <div className="level-status">
                {index < currentLevel && '✅'}
                {index === currentLevel && '🎯'}
                {index > currentLevel && '🔒'}
              </div>
            </div>
            
            <div className="level-content">
              <p className="level-description">{strategy.description}</p>
              
              <div className="level-requirements">
                <strong>Requirements:</strong> {strategy.requirements}
              </div>
              
              <div className="level-platforms">
                <strong>Platforms:</strong>
                <div className="platform-tags">
                  {strategy.platforms.map((platform) => (
                    <span key={platform} className="platform-tag">{platform}</span>
                  ))}
                </div>
              </div>
              
              <div className="level-cost">
                <strong>Cost:</strong> {strategy.cost}
              </div>
              
              <div className="pros-cons">
                <div className="pros">
                  <strong>✅ Pros:</strong>
                  <ul>
                    {strategy.pros.map((pro, i) => (
                      <li key={i}>{pro}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="cons">
                  <strong>❌ Cons:</strong>
                  <ul>
                    {strategy.cons.map((con, i) => (
                      <li key={i}>{con}</li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="next-step">
                <strong>🎯 Next Step:</strong> {strategy.nextStep}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* How to Get Noticed by Labels */}
      <div className="label-attention">
        <h2>🔥 How to Get Warner Bros, Universal, Sony to Notice You</h2>
        
        <div className="attention-strategies">
          <div className="attention-card viral">
            <h3>🚀 Create Viral Moments</h3>
            <ul>
              <li>TikTok viral song (1M+ views)</li>
              <li>Unique challenge or dance</li>
              <li>Collaborate with influencers</li>
              <li>Trending hashtag campaigns</li>
            </ul>
          </div>
          
          <div className="attention-card numbers">
            <h3>📊 Build Impressive Numbers</h3>
            <ul>
              <li>100K+ monthly Spotify listeners</li>
              <li>1M+ social media followers</li>
              <li>Consistent streaming growth</li>
              <li>High engagement rates</li>
            </ul>
          </div>
          
          <div className="attention-card industry">
            <h3>🤝 Industry Connections</h3>
            <ul>
              <li>Music conferences (SXSW, MIDEM)</li>
              <li>A&R showcases</li>
              <li>Producer collaborations</li>
              <li>Music industry networking</li>
            </ul>
          </div>
          
          <div className="attention-card press">
            <h3>📰 Media Coverage</h3>
            <ul>
              <li>Major music blog features</li>
              <li>Radio play on major stations</li>
              <li>Music award nominations</li>
              <li>Celebrity endorsements</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Action Plan */}
      <div className="action-plan">
        <h2>📋 Your 12-Month Action Plan</h2>
        
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-marker">1-3</div>
            <div className="timeline-content">
              <h4>Months 1-3: Foundation</h4>
              <ul>
                <li>Release 3-5 high-quality songs</li>
                <li>Build social media presence</li>
                <li>Start Spotify playlist pitching</li>
                <li>Create TikTok content consistently</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">4-6</div>
            <div className="timeline-content">
              <h4>Months 4-6: Growth</h4>
              <ul>
                <li>Reach 10K monthly listeners</li>
                <li>Collaborate with other artists</li>
                <li>Submit to indie labels</li>
                <li>Perform live shows</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">7-9</div>
            <div className="timeline-content">
              <h4>Months 7-9: Scaling</h4>
              <ul>
                <li>Aim for 50K monthly listeners</li>
                <li>Music video production</li>
                <li>Radio promotion campaign</li>
                <li>Industry showcase performances</li>
              </ul>
            </div>
          </div>
          
          <div className="timeline-item">
            <div className="timeline-marker">10-12</div>
            <div className="timeline-content">
              <h4>Months 10-12: Label Ready</h4>
              <ul>
                <li>100K+ monthly listeners</li>
                <li>Major label meetings</li>
                <li>Viral moment creation</li>
                <li>Contract negotiations</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Distribution Guide Component
const DistributionGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');

  const distributionSteps = [
    {
      step: 1,
      title: 'Legal Foundation',
      description: 'Set up your business structure',
      requirements: [
        'Register LLC or Corporation',
        'Get business license',
        'Obtain EIN (Tax ID)',
        'Set up business bank account',
        'Get business insurance'
      ],
      cost: '$500-2000',
      timeframe: '2-4 weeks'
    },
    {
      step: 2,
      title: 'Platform Agreements',
      description: 'Negotiate with streaming platforms',
      requirements: [
        'Direct deals with Spotify, Apple Music',
        'YouTube Content ID setup',
        'Amazon Music partnership',
        'TikTok/Instagram licensing',
        'International platform deals'
      ],
      cost: '$10,000-50,000',
      timeframe: '3-6 months'
    },
    {
      step: 3,
      title: 'Technology Infrastructure',
      description: 'Build the distribution platform',
      requirements: [
        'Audio processing system',
        'Metadata management',
        'Royalty calculation engine',
        'Artist dashboard',
        'Payment processing'
      ],
      cost: '$50,000-200,000',
      timeframe: '6-12 months'
    },
    {
      step: 4,
      title: 'Launch & Scale',
      description: 'Go to market and grow',
      requirements: [
        'Artist acquisition',
        'Customer support team',
        'Marketing campaigns',
        'Feature development',
        'International expansion'
      ],
      cost: '$100,000+/year',
      timeframe: 'Ongoing'
    }
  ];

  return (
    <motion.div 
      className="distribution-guide"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h2>🌍 How to Become a Music Distribution Company</h2>
      
      <div className="guide-navigation">
        <button 
          className={`guide-nav-btn ${activeSection === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveSection('overview')}
        >
          Overview
        </button>
        <button 
          className={`guide-nav-btn ${activeSection === 'steps' ? 'active' : ''}`}
          onClick={() => setActiveSection('steps')}
        >
          Step-by-Step
        </button>
        <button 
          className={`guide-nav-btn ${activeSection === 'competition' ? 'active' : ''}`}
          onClick={() => setActiveSection('competition')}
        >
          Competition
        </button>
        <button 
          className={`guide-nav-btn ${activeSection === 'revenue' ? 'active' : ''}`}
          onClick={() => setActiveSection('revenue')}
        >
          Revenue Model
        </button>
      </div>

      {activeSection === 'overview' && (
        <div className="overview-section">
          <div className="overview-card">
            <h3>🎯 What is Music Distribution?</h3>
            <p>Music distribution companies like DistroKid, CD Baby, and TuneCore help artists get their music on streaming platforms like Spotify, Apple Music, and YouTube. They handle the technical and business aspects of music delivery.</p>
          </div>
          
          <div className="market-opportunity">
            <h3>📈 Market Opportunity</h3>
            <div className="opportunity-stats">
              <div className="stat">
                <span className="stat-number">$23.1B</span>
                <span className="stat-label">Global music streaming market</span>
              </div>
              <div className="stat">
                <span className="stat-number">40M+</span>
                <span className="stat-label">Independent artists worldwide</span>
              </div>
              <div className="stat">
                <span className="stat-number">15-20%</span>
                <span className="stat-label">Typical distribution fee</span>
              </div>
            </div>
          </div>
          
          <div className="business-models">
            <h3>💼 Business Models</h3>
            <div className="model-grid">
              <div className="model-card">
                <h4>Subscription Model</h4>
                <p>Artists pay annual fee (DistroKid: $20-36/year)</p>
                <div className="pros-cons">
                  <div className="pros">✅ Predictable revenue</div>
                  <div className="cons">❌ Lower per-artist revenue</div>
                </div>
              </div>
              
              <div className="model-card">
                <h4>Commission Model</h4>
                <p>Take percentage of royalties (CD Baby: 9-15%)</p>
                <div className="pros-cons">
                  <div className="pros">✅ Scales with artist success</div>
                  <div className="cons">❌ Revenue depends on artist performance</div>
                </div>
              </div>
              
              <div className="model-card">
                <h4>Hybrid Model</h4>
                <p>Subscription + premium services</p>
                <div className="pros-cons">
                  <div className="pros">✅ Multiple revenue streams</div>
                  <div className="cons">❌ More complex pricing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'steps' && (
        <div className="steps-section">
          <div className="steps-timeline">
            {distributionSteps.map((step) => (
              <div key={step.step} className="step-card">
                <div className="step-header">
                  <div className="step-number">{step.step}</div>
                  <h3>{step.title}</h3>
                </div>
                
                <p className="step-description">{step.description}</p>
                
                <div className="step-requirements">
                  <h4>Requirements:</h4>
                  <ul>
                    {step.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="step-details">
                  <div className="step-cost">
                    <strong>Cost:</strong> {step.cost}
                  </div>
                  <div className="step-time">
                    <strong>Timeframe:</strong> {step.timeframe}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="technical-requirements">
            <h3>🔧 Technical Requirements</h3>
            <div className="tech-grid">
              <div className="tech-card">
                <h4>Audio Processing</h4>
                <ul>
                  <li>Format conversion (WAV, MP3, FLAC)</li>
                  <li>Quality validation</li>
                  <li>Loudness normalization</li>
                  <li>Metadata embedding</li>
                </ul>
              </div>
              
              <div className="tech-card">
                <h4>Platform Integration</h4>
                <ul>
                  <li>Spotify API integration</li>
                  <li>Apple Music Connect</li>
                  <li>YouTube Content ID</li>
                  <li>Amazon Music API</li>
                </ul>
              </div>
              
              <div className="tech-card">
                <h4>Business Systems</h4>
                <ul>
                  <li>Royalty calculation engine</li>
                  <li>Payment processing</li>
                  <li>Artist dashboard</li>
                  <li>Analytics reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'competition' && (
        <div className="competition-section">
          <h3>🏆 Competitive Landscape</h3>
          
          <div className="competitor-grid">
            <div className="competitor-card market-leader">
              <h4>DistroKid</h4>
              <div className="competitor-stats">
                <span className="market-share">Market Leader</span>
                <span className="pricing">$20-36/year</span>
              </div>
              <div className="strengths">
                <strong>Strengths:</strong>
                <ul>
                  <li>Fast distribution (1-2 days)</li>
                  <li>Keep 100% royalties</li>
                  <li>Unlimited uploads</li>
                  <li>Strong brand recognition</li>
                </ul>
              </div>
              <div className="weaknesses">
                <strong>Weaknesses:</strong>
                <ul>
                  <li>Limited customer support</li>
                  <li>Basic analytics</li>
                  <li>No physical distribution</li>
                </ul>
              </div>
            </div>
            
            <div className="competitor-card established">
              <h4>CD Baby</h4>
              <div className="competitor-stats">
                <span className="market-share">Established Player</span>
                <span className="pricing">9-15% commission</span>
              </div>
              <div className="strengths">
                <strong>Strengths:</strong>
                <ul>
                  <li>Physical distribution</li>
                  <li>Better customer support</li>
                  <li>Sync licensing opportunities</li>
                  <li>Educational resources</li>
                </ul>
              </div>
              <div className="weaknesses">
                <strong>Weaknesses:</strong>
                <ul>
                  <li>Takes percentage of royalties</li>
                  <li>Slower distribution</li>
                  <li>Higher costs for some services</li>
                </ul>
              </div>
            </div>
            
            <div className="competitor-card growing">
              <h4>TuneCore</h4>
              <div className="competitor-stats">
                <span className="market-share">Growing</span>
                <span className="pricing">$10-50/year</span>
              </div>
              <div className="strengths">
                <strong>Strengths:</strong>
                <ul>
                  <li>Detailed analytics</li>
                  <li>Global reach</li>
                  <li>Music publishing services</li>
                  <li>Artist development tools</li>
                </ul>
              </div>
              <div className="weaknesses">
                <strong>Weaknesses:</strong>
                <ul>
                  <li>Per-release pricing</li>
                  <li>Complex pricing structure</li>
                  <li>Slower customer support</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="opportunity-gaps">
            <h3>🎯 Market Opportunities</h3>
            <div className="gap-grid">
              <div className="gap-card">
                <h4>Better Artist Support</h4>
                <p>Most distributors have poor customer service. Opportunity for white-glove support.</p>
              </div>
              
              <div className="gap-card">
                <h4>Advanced Analytics</h4>
                <p>Artists want deeper insights into their audience and performance data.</p>
              </div>
              
              <div className="gap-card">
                <h4>Marketing Tools</h4>
                <p>Integration with social media, playlist pitching, and promotion tools.</p>
              </div>
              
              <div className="gap-card">
                <h4>Niche Markets</h4>
                <p>Specialized distribution for specific genres or regions.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeSection === 'revenue' && (
        <div className="revenue-section">
          <h3>💰 Revenue Model & Projections</h3>
          
          <div className="revenue-calculator">
            <h4>Revenue Calculator</h4>
            <div className="calculator-inputs">
              <div className="input-group">
                <label>Number of Artists</label>
                <input type="number" defaultValue="1000" />
              </div>
              <div className="input-group">
                <label>Average Annual Fee</label>
                <input type="number" defaultValue="25" />
              </div>
              <div className="input-group">
                <label>Commission Rate (%)</label>
                <input type="number" defaultValue="10" />
              </div>
            </div>
            
            <div className="revenue-projection">
              <div className="projection-item">
                <span className="projection-label">Annual Subscription Revenue</span>
                <span className="projection-value">$25,000</span>
              </div>
              <div className="projection-item">
                <span className="projection-label">Commission Revenue</span>
                <span className="projection-value">$50,000</span>
              </div>
              <div className="projection-item total">
                <span className="projection-label">Total Annual Revenue</span>
                <span className="projection-value">$75,000</span>
              </div>
            </div>
          </div>
          
          <div className="scaling-projections">
            <h4>📈 Scaling Projections</h4>
            <div className="scaling-timeline">
              <div className="scaling-year">
                <h5>Year 1</h5>
                <div className="scaling-stats">
                  <span>500 artists</span>
                  <span>$37,500 revenue</span>
                  <span>Break-even</span>
                </div>
              </div>
              
              <div className="scaling-year">
                <h5>Year 2</h5>
                <div className="scaling-stats">
                  <span>2,000 artists</span>
                  <span>$150,000 revenue</span>
                  <span>$50,000 profit</span>
                </div>
              </div>
              
              <div className="scaling-year">
                <h5>Year 3</h5>
                <div className="scaling-stats">
                  <span>5,000 artists</span>
                  <span>$375,000 revenue</span>
                  <span>$200,000 profit</span>
                </div>
              </div>
              
              <div className="scaling-year">
                <h5>Year 5</h5>
                <div className="scaling-stats">
                  <span>20,000 artists</span>
                  <span>$1,500,000 revenue</span>
                  <span>$800,000 profit</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="startup-costs">
            <h4>💸 Startup Costs Breakdown</h4>
            <div className="cost-breakdown">
              <div className="cost-item">
                <span className="cost-category">Legal & Business Setup</span>
                <span className="cost-amount">$5,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-category">Technology Development</span>
                <span className="cost-amount">$100,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-category">Platform Agreements</span>
                <span className="cost-amount">$25,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-category">Marketing & Launch</span>
                <span className="cost-amount">$20,000</span>
              </div>
              <div className="cost-item">
                <span className="cost-category">Working Capital</span>
                <span className="cost-amount">$50,000</span>
              </div>
              <div className="cost-item total">
                <span className="cost-category">Total Startup Investment</span>
                <span className="cost-amount">$200,000</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </motion.div>
  );
};

// Simple Audio Editor Component
const SimpleAudioEditor = () => {
  const [audioFile, setAudioFile] = useState(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedIssue, setSelectedIssue] = useState('');
  const [issueTime, setIssueTime] = useState('');

  const issueTypes = [
    { id: 'wrong_word', label: 'Wrong Word', description: 'Replace a mispronounced or wrong word' },
    { id: 'popping', label: 'Popping/Clicking', description: 'Remove pops, clicks, or mouth sounds' },
    { id: 'buzzing', label: 'Buzzing/Humming', description: 'Remove electrical interference or buzzing' },
    { id: 'volume_spike', label: 'Volume Spike', description: 'Reduce sudden loud parts' },
    { id: 'background_noise', label: 'Background Noise', description: 'Remove unwanted background sounds' }
  ];

  const instrumentOptions = [
    { id: 'piano', label: '🎹 Piano', range: 'A0-C8' },
    { id: 'guitar', label: '🎸 Guitar', range: 'E2-E6' },
    { id: 'trumpet', label: '🎺 Trumpet', range: 'F#3-D6' },
    { id: 'violin', label: '🎻 Violin', range: 'G3-E7' },
    { id: 'flute', label: '🪈 Flute', range: 'C4-D7' },
    { id: 'saxophone', label: '🎷 Saxophone', range: 'Bb3-F#6' }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAudioFile(file);
      // In a real implementation, you'd load the audio and get its duration
      setDuration(180); // Mock 3-minute duration
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleTimeInput = (value) => {
    const [minutes, seconds] = value.split(':').map(Number);
    const totalSeconds = (minutes || 0) * 60 + (seconds || 0);
    setCurrentTime(totalSeconds);
    setIssueTime(value);
  };

  return (
    <motion.div 
      className="simple-audio-editor"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h2>🎵 Simple Audio Editor</h2>
      <p className="editor-description">
        Quick and easy audio fixes for your music. Upload your song and fix specific issues like wrong words, pops, or buzzing sounds.
      </p>

      {/* File Upload */}
      <div className="file-upload-section">
        <div className="upload-area">
          <input 
            type="file" 
            accept="audio/*" 
            onChange={handleFileUpload}
            className="file-input"
            id="audio-upload"
          />
          <label htmlFor="audio-upload" className="upload-label">
            <Upload size={48} />
            <span>Upload Your Audio File</span>
            <small>Supports MP3, WAV, M4A, FLAC</small>
          </label>
        </div>
      </div>

      {audioFile && (
        <>
          {/* Audio Player */}
          <div className="audio-player">
            <div className="player-header">
              <h3>🎵 {audioFile.name}</h3>
              <span className="duration">{formatTime(duration)}</span>
            </div>
            
            <div className="player-controls">
              <button 
                className="play-btn"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
              </button>
              
              <div className="progress-container">
                <input 
                  type="range"
                  min="0"
                  max={duration}
                  value={currentTime}
                  onChange={(e) => setCurrentTime(Number(e.target.value))}
                  className="progress-slider"
                />
                <div className="time-display">
                  <span>{formatTime(currentTime)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>
              
              <div className="volume-control">
                <Volume2 size={20} />
                <input type="range" min="0" max="100" defaultValue="80" className="volume-slider" />
              </div>
            </div>
          </div>

          {/* Issue Detection & Fixing */}
          <div className="issue-fixing">
            <h3>🔧 Fix Audio Issues</h3>
            
            <div className="issue-selector">
              <h4>What needs fixing?</h4>
              <div className="issue-grid">
                {issueTypes.map((issue) => (
                  <div 
                    key={issue.id}
                    className={`issue-card ${selectedIssue === issue.id ? 'selected' : ''}`}
                    onClick={() => setSelectedIssue(issue.id)}
                  >
                    <h5>{issue.label}</h5>
                    <p>{issue.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {selectedIssue && (
              <div className="issue-details">
                <h4>📍 Where is the issue?</h4>
                
                <div className="time-input-methods">
                  <div className="method">
                    <label>Time (MM:SS)</label>
                    <input 
                      type="text"
                      placeholder="1:23"
                      value={issueTime}
                      onChange={(e) => handleTimeInput(e.target.value)}
                      className="time-input"
                    />
                  </div>
                  
                  <div className="method">
                    <label>Or click on timeline</label>
                    <button 
                      className="current-time-btn"
                      onClick={() => setIssueTime(formatTime(currentTime))}
                    >
                      Use Current Time ({formatTime(currentTime)})
                    </button>
                  </div>
                </div>

                {selectedIssue === 'wrong_word' && (
                  <div className="word-replacement">
                    <h4>🎤 Word Replacement Options</h4>
                    
                    <div className="replacement-methods">
                      <div className="method-card">
                        <h5>🎹 Generate from Instrument</h5>
                        <select className="instrument-select">
                          <option value="">Choose instrument</option>
                          {instrumentOptions.map((instrument) => (
                            <option key={instrument.id} value={instrument.id}>
                              {instrument.label} ({instrument.range})
                            </option>
                          ))}
                        </select>
                        <input 
                          type="text" 
                          placeholder="Enter the word to sing"
                          className="word-input"
                        />
                        <button className="generate-btn">
                          <Sparkles size={16} />
                          Generate Word
                        </button>
                      </div>
                      
                      <div className="method-card">
                        <h5>🎤 Record New Word</h5>
                        <button className="record-btn">
                          <Mic size={16} />
                          Start Recording
                        </button>
                        <p className="method-description">
                          Record the word in the same tone and style
                        </p>
                      </div>
                      
                      <div className="method-card">
                        <h5>📁 Upload Replacement</h5>
                        <input type="file" accept="audio/*" className="file-input-small" />
                        <p className="method-description">
                          Upload a pre-recorded word or sound
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {(selectedIssue === 'popping' || selectedIssue === 'buzzing') && (
                  <div className="noise-removal">
                    <h4>🔧 Noise Removal Settings</h4>
                    
                    <div className="removal-options">
                      <div className="option">
                        <label>Intensity</label>
                        <select>
                          <option value="light">Light - Preserve natural sound</option>
                          <option value="medium">Medium - Balanced removal</option>
                          <option value="heavy">Heavy - Aggressive removal</option>
                        </select>
                      </div>
                      
                      <div className="option">
                        <label>Duration (seconds)</label>
                        <input type="number" min="0.1" max="10" step="0.1" defaultValue="0.5" />
                      </div>
                    </div>
                  </div>
                )}

                <div className="fix-actions">
                  <button className="preview-btn">
                    <Eye size={16} />
                    Preview Fix
                  </button>
                  
                  <button className="apply-btn">
                    <Zap size={16} />
                    Apply Fix
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Export Options */}
          <div className="export-section">
            <h3>💾 Export Your Fixed Audio</h3>
            
            <div className="export-options">
              <div className="format-selection">
                <h4>Choose Format</h4>
                <div className="format-grid">
                  <label className="format-option">
                    <input type="radio" name="format" value="mp3" defaultChecked />
                    <span>MP3 (Compressed)</span>
                  </label>
                  <label className="format-option">
                    <input type="radio" name="format" value="wav" />
                    <span>WAV (Uncompressed)</span>
                  </label>
                  <label className="format-option">
                    <input type="radio" name="format" value="flac" />
                    <span>FLAC (Lossless)</span>
                  </label>
                </div>
              </div>
              
              <div className="quality-selection">
                <h4>Quality</h4>
                <select>
                  <option value="320">320 kbps (Highest)</option>
                  <option value="256">256 kbps (High)</option>
                  <option value="192">192 kbps (Medium)</option>
                  <option value="128">128 kbps (Standard)</option>
                </select>
              </div>
            </div>
            
            <button className="export-btn">
              <Download size={20} />
              Export Fixed Audio
            </button>
          </div>
        </>
      )}

      {/* Tips & Tutorials */}
      <div className="editor-tips">
        <h3>💡 Quick Tips</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <h4>🎤 Recording Quality</h4>
            <p>For best results, record in a quiet room with minimal echo. Use a pop filter to prevent plosive sounds.</p>
          </div>
          
          <div className="tip-card">
            <h4>🔧 Common Fixes</h4>
            <p>Most issues occur in the first few seconds or during loud parts. Listen carefully for pops, clicks, or distortion.</p>
          </div>
          
          <div className="tip-card">
            <h4>⚡ Quick Workflow</h4>
            <p>1. Upload audio → 2. Play and identify issues → 3. Select issue type → 4. Mark time → 5. Apply fix → 6. Export</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default MusicPromotion;

