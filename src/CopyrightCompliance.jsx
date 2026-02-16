import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  XCircle, 
  Eye, 
  Upload, 
  Download, 
  FileText, 
  Music, 
  Video, 
  Image, 
  Mic, 
  Play, 
  Pause, 
  SkipForward, 
  Volume2, 
  Settings, 
  Info, 
  Bell, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  Globe, 
  Lock, 
  Unlock, 
  Key, 
  Search, 
  Filter, 
  BarChart3, 
  TrendingUp, 
  DollarSign, 
  Target, 
  Zap, 
  Star, 
  Award, 
  Crown, 
  Heart, 
  Share2, 
  Link, 
  Copy, 
  Save, 
  Edit3, 
  Trash2, 
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
  RefreshCw, 
  RotateCw, 
  Maximize, 
  Minimize, 
  ExternalLink, 
  Database, 
  Server, 
  Wifi, 
  Signal, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Speaker, 
  Headphones, 
  Radio, 
  Disc, 
  Vinyl, 
  Cassette, 
  Equalizer, 
  Shuffle, 
  Repeat, 
  FastForward, 
  Rewind, 
  Layers, 
  Focus, 
  Crosshair, 
  Telescope, 
  Compass, 
  Lightbulb, 
  Rocket, 
  Fire, 
  Sparkles, 
  Palette, 
  Camera, 
  Brain
} from 'lucide-react';

// Copyright Compliance Component
const CopyrightCompliance = () => {
  const [activeTab, setActiveTab] = useState('scanner');
  const [scanResults, setScanResults] = useState(null);
  const [isScanning, setIsScanning] = useState(false);
  const [uploadedFile, setUploadedFile] = useState(null);

  // Mock copyright scan results
  const mockScanResults = {
    overall_status: 'safe',
    confidence_score: 94.7,
    scan_duration: '2.3 seconds',
    platforms_checked: [
      'YouTube Content ID',
      'Facebook Rights Manager',
      'Instagram Audio Library',
      'TikTok Commercial Music Library',
      'Spotify Content Protection',
      'Apple Music Fingerprinting',
      'SoundCloud Copyright Detection',
      'Twitch Audio Recognition'
    ],
    detailed_results: [
      {
        platform: 'YouTube Content ID',
        status: 'safe',
        confidence: 98.2,
        matches_found: 0,
        risk_level: 'none',
        recommendation: 'Safe to upload',
        details: 'No matches found in Content ID database'
      },
      {
        platform: 'Facebook Rights Manager',
        status: 'safe',
        confidence: 96.8,
        matches_found: 0,
        risk_level: 'none',
        recommendation: 'Safe to upload',
        details: 'No copyright claims detected'
      },
      {
        platform: 'Instagram Audio Library',
        status: 'safe',
        confidence: 95.1,
        matches_found: 0,
        risk_level: 'none',
        recommendation: 'Safe to upload',
        details: 'Audio fingerprint clear'
      },
      {
        platform: 'TikTok Commercial Music Library',
        status: 'warning',
        confidence: 87.3,
        matches_found: 1,
        risk_level: 'low',
        recommendation: 'Review similarity',
        details: 'Partial melody similarity detected (12% match)',
        similar_track: {
          title: 'Classical Variations Op. 23',
          artist: 'Public Domain Collection',
          similarity: 12,
          type: 'Melodic pattern',
          action: 'Safe - Public domain source'
        }
      },
      {
        platform: 'Spotify Content Protection',
        status: 'safe',
        confidence: 99.1,
        matches_found: 0,
        risk_level: 'none',
        recommendation: 'Safe to upload',
        details: 'No matches in Spotify database'
      }
    ],
    originality_analysis: {
      composition_originality: 96.8,
      melody_uniqueness: 94.2,
      harmony_originality: 98.1,
      rhythm_uniqueness: 92.7,
      overall_creativity_score: 95.5
    },
    legal_protection: {
      copyright_registrable: true,
      trademark_potential: false,
      publishing_rights: 'Full ownership',
      sync_licensing_ready: true,
      commercial_use_cleared: true
    },
    monetization_opportunities: [
      {
        platform: 'YouTube',
        revenue_potential: 'High',
        requirements: 'None - fully cleared',
        estimated_cpm: '$2.50-$4.20'
      },
      {
        platform: 'Spotify',
        revenue_potential: 'High',
        requirements: 'Distribution deal',
        estimated_per_stream: '$0.003-$0.005'
      },
      {
        platform: 'TikTok Creator Fund',
        revenue_potential: 'Medium',
        requirements: 'Creator Fund eligibility',
        estimated_per_view: '$0.02-$0.04'
      },
      {
        platform: 'Facebook/Instagram Reels',
        revenue_potential: 'Medium',
        requirements: 'Creator Bonus Program',
        estimated_per_view: '$0.01-$0.03'
      }
    ]
  };

  const copyrightDatabase = {
    your_registered_works: [
      {
        id: 'reg_001',
        title: 'Falak Dreams (Clarinet Concerto)',
        registration_number: 'PAu004123456',
        registration_date: '2024-01-15',
        status: 'Active',
        protection_level: 'Full',
        territories: ['US', 'Canada', 'EU', 'UK', 'Australia'],
        revenue_generated: 2847.50,
        usage_tracking: {
          youtube_uses: 156,
          instagram_uses: 89,
          tiktok_uses: 234,
          commercial_licenses: 12
        }
      },
      {
        id: 'reg_002',
        title: 'Desert Wind Variations',
        registration_number: 'PAu004123457',
        registration_date: '2024-02-03',
        status: 'Active',
        protection_level: 'Full',
        territories: ['US', 'Canada', 'EU'],
        revenue_generated: 1923.75,
        usage_tracking: {
          youtube_uses: 98,
          instagram_uses: 67,
          tiktok_uses: 145,
          commercial_licenses: 8
        }
      }
    ],
    public_domain_sources: [
      {
        title: 'Bach Invention No. 1 in C Major',
        composer: 'Johann Sebastian Bach',
        year_composed: 1723,
        copyright_status: 'Public Domain',
        safe_for_adaptation: true,
        popular_adaptations: 234,
        revenue_potential: 'High'
      },
      {
        title: 'Mozart Clarinet Concerto K. 622',
        composer: 'Wolfgang Amadeus Mozart',
        year_composed: 1791,
        copyright_status: 'Public Domain',
        safe_for_adaptation: true,
        popular_adaptations: 567,
        revenue_potential: 'Very High'
      }
    ],
    risky_sources: [
      {
        title: 'Modern Pop Progression #1',
        description: 'I-V-vi-IV progression in C major',
        risk_level: 'Medium',
        reason: 'Commonly used in contemporary music',
        safe_variations: [
          'Add jazz extensions (7ths, 9ths)',
          'Use different voicings',
          'Change rhythm significantly',
          'Transpose to unusual key'
        ]
      }
    ]
  };

  const platformGuidelines = {
    youtube: {
      name: 'YouTube Content ID',
      strictness: 'Very High',
      detection_method: 'Audio fingerprinting + AI analysis',
      safe_practices: [
        'Use original compositions only',
        'Avoid popular chord progressions',
        'Create unique arrangements of public domain works',
        'Add significant original elements to covers'
      ],
      monetization_requirements: [
        'No copyright strikes',
        '1000+ subscribers',
        '4000+ watch hours',
        'Original content verification'
      ],
      revenue_sharing: {
        ad_revenue: '55% creator, 45% YouTube',
        super_chat: '70% creator, 30% YouTube',
        memberships: '70% creator, 30% YouTube'
      }
    },
    facebook: {
      name: 'Facebook Rights Manager',
      strictness: 'High',
      detection_method: 'Audio fingerprinting + Rights database',
      safe_practices: [
        'Use Facebook Sound Collection',
        'Original compositions preferred',
        'Avoid copyrighted background music',
        'Use royalty-free music libraries'
      ],
      monetization_requirements: [
        'Creator Bonus Program eligibility',
        'No copyright violations',
        'Consistent posting schedule',
        'High engagement rates'
      ]
    },
    instagram: {
      name: 'Instagram Audio Library',
      strictness: 'High',
      detection_method: 'Audio fingerprinting + Meta Rights Manager',
      safe_practices: [
        'Use Instagram music library for stories',
        'Original audio for reels',
        'Short clips (under 30 seconds) safer',
        'Avoid trending copyrighted songs'
      ],
      monetization_requirements: [
        'Creator Fund eligibility',
        'Professional account',
        'No copyright strikes',
        'Original content focus'
      ]
    },
    tiktok: {
      name: 'TikTok Commercial Music Library',
      strictness: 'Medium',
      detection_method: 'Audio fingerprinting + Commercial database',
      safe_practices: [
        'Use TikTok sound library',
        'Create original sounds',
        'Avoid full-length copyrighted songs',
        'Use trending sounds appropriately'
      ],
      monetization_requirements: [
        'Creator Fund eligibility',
        '10,000+ followers',
        'Consistent posting',
        'High engagement rates'
      ]
    }
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile(file);
    }
  };

  const runCopyrightScan = async () => {
    if (!uploadedFile) return;
    
    setIsScanning(true);
    
    // Simulate scanning process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    setScanResults(mockScanResults);
    setIsScanning(false);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'safe': return '#10B981';
      case 'warning': return '#F59E0B';
      case 'danger': return '#EF4444';
      default: return '#6B7280';
    }
  };

  const getRiskColor = (risk) => {
    switch (risk) {
      case 'none': return '#10B981';
      case 'low': return '#84CC16';
      case 'medium': return '#F59E0B';
      case 'high': return '#EF4444';
      case 'critical': return '#DC2626';
      default: return '#6B7280';
    }
  };

  const tabs = [
    { id: 'scanner', label: 'Copyright Scanner', icon: Shield },
    { id: 'database', label: 'Your Works', icon: Database },
    { id: 'guidelines', label: 'Platform Guidelines', icon: FileText },
    { id: 'protection', label: 'Legal Protection', icon: Lock },
    { id: 'monetization', label: 'Revenue Tracking', icon: DollarSign }
  ];

  return (
    <div className="copyright-compliance">
      <div className="compliance-header">
        <h2>🛡️ Copyright Compliance & Protection</h2>
        <p>Protect your music and maximize revenue across all platforms</p>
        
        <div className="protection-stats">
          <div className="stat-card">
            <Shield size={24} />
            <div>
              <h4>Protected Works</h4>
              <span className="stat-value">12</span>
            </div>
          </div>
          
          <div className="stat-card">
            <DollarSign size={24} />
            <div>
              <h4>Revenue Protected</h4>
              <span className="stat-value">$4,771</span>
            </div>
          </div>
          
          <div className="stat-card">
            <Eye size={24} />
            <div>
              <h4>Usage Tracked</h4>
              <span className="stat-value">789</span>
            </div>
          </div>
          
          <div className="stat-card">
            <CheckCircle size={24} />
            <div>
              <h4>Compliance Score</h4>
              <span className="stat-value">98.7%</span>
            </div>
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
        {activeTab === 'scanner' && (
          <motion.div 
            className="scanner-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🔍 AI-Powered Copyright Scanner</h3>
              <p>Scan your music against all major platform databases before upload</p>
            </div>

            <div className="upload-area">
              <div className="upload-zone">
                <input 
                  type="file" 
                  accept="audio/*,video/*"
                  onChange={handleFileUpload}
                  id="file-upload"
                  style={{ display: 'none' }}
                />
                <label htmlFor="file-upload" className="upload-label">
                  <Upload size={48} />
                  <h4>Upload Your Music</h4>
                  <p>Drag & drop or click to select audio/video files</p>
                  <span className="supported-formats">
                    Supports: MP3, WAV, FLAC, MP4, MOV, AVI
                  </span>
                </label>
              </div>

              {uploadedFile && (
                <div className="uploaded-file">
                  <div className="file-info">
                    <Music size={24} />
                    <div>
                      <h5>{uploadedFile.name}</h5>
                      <p>{(uploadedFile.size / 1024 / 1024).toFixed(2)} MB</p>
                    </div>
                  </div>
                  
                  <motion.button 
                    className="scan-btn"
                    onClick={runCopyrightScan}
                    disabled={isScanning}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {isScanning ? (
                      <>
                        <RefreshCw size={20} className="spinning" />
                        <span>Scanning...</span>
                      </>
                    ) : (
                      <>
                        <Shield size={20} />
                        <span>Run Copyright Scan</span>
                      </>
                    )}
                  </motion.button>
                </div>
              )}
            </div>

            {isScanning && (
              <div className="scanning-progress">
                <div className="progress-header">
                  <h4>🔍 Scanning Against Platform Databases</h4>
                  <p>Checking your content against copyright databases...</p>
                </div>
                
                <div className="scanning-platforms">
                  {mockScanResults.platforms_checked.map((platform, index) => (
                    <motion.div
                      key={platform}
                      className="scanning-platform"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <div className="platform-icon">
                        <Shield size={16} />
                      </div>
                      <span>{platform}</span>
                      <div className="scanning-indicator">
                        <div className="scanning-dot"></div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {scanResults && !isScanning && (
              <motion.div 
                className="scan-results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="results-header">
                  <div className="overall-status">
                    <div className={`status-indicator ${scanResults.overall_status}`}>
                      {scanResults.overall_status === 'safe' ? (
                        <CheckCircle size={32} />
                      ) : scanResults.overall_status === 'warning' ? (
                        <AlertTriangle size={32} />
                      ) : (
                        <XCircle size={32} />
                      )}
                    </div>
                    <div className="status-info">
                      <h3>
                        {scanResults.overall_status === 'safe' ? '✅ Safe to Upload' :
                         scanResults.overall_status === 'warning' ? '⚠️ Review Required' :
                         '❌ Copyright Issues Detected'}
                      </h3>
                      <p>Confidence Score: {scanResults.confidence_score}%</p>
                      <p>Scan completed in {scanResults.scan_duration}</p>
                    </div>
                  </div>
                  
                  <div className="quick-actions">
                    <button className="action-btn primary">
                      <Download size={16} />
                      <span>Download Report</span>
                    </button>
                    
                    <button className="action-btn">
                      <Share2 size={16} />
                      <span>Share Results</span>
                    </button>
                  </div>
                </div>

                <div className="platform-results">
                  <h4>📊 Platform-by-Platform Analysis</h4>
                  <div className="results-grid">
                    {scanResults.detailed_results.map((result, index) => (
                      <motion.div
                        key={result.platform}
                        className="platform-result"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        style={{ '--status-color': getStatusColor(result.status) }}
                      >
                        <div className="result-header">
                          <h5>{result.platform}</h5>
                          <div className={`status-badge ${result.status}`}>
                            {result.status}
                          </div>
                        </div>
                        
                        <div className="result-metrics">
                          <div className="metric">
                            <span className="metric-label">Confidence</span>
                            <span className="metric-value">{result.confidence}%</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Matches</span>
                            <span className="metric-value">{result.matches_found}</span>
                          </div>
                          <div className="metric">
                            <span className="metric-label">Risk Level</span>
                            <span className={`risk-badge ${result.risk_level}`}>
                              {result.risk_level}
                            </span>
                          </div>
                        </div>
                        
                        <div className="result-recommendation">
                          <h6>💡 Recommendation</h6>
                          <p>{result.recommendation}</p>
                        </div>
                        
                        <div className="result-details">
                          <p>{result.details}</p>
                        </div>
                        
                        {result.similar_track && (
                          <div className="similar-track">
                            <h6>🎵 Similar Content Detected</h6>
                            <div className="track-info">
                              <p><strong>{result.similar_track.title}</strong></p>
                              <p>by {result.similar_track.artist}</p>
                              <p>Similarity: {result.similar_track.similarity}% ({result.similar_track.type})</p>
                              <p className="action-note">{result.similar_track.action}</p>
                            </div>
                          </div>
                        )}
                      </motion.div>
                    ))}
                  </div>
                </div>

                <div className="originality-analysis">
                  <h4>🎨 Originality Analysis</h4>
                  <div className="originality-metrics">
                    <div className="originality-metric">
                      <span className="metric-label">Composition</span>
                      <div className="metric-bar">
                        <div 
                          className="metric-fill"
                          style={{ width: `${scanResults.originality_analysis.composition_originality}%` }}
                        />
                      </div>
                      <span className="metric-value">{scanResults.originality_analysis.composition_originality}%</span>
                    </div>
                    
                    <div className="originality-metric">
                      <span className="metric-label">Melody</span>
                      <div className="metric-bar">
                        <div 
                          className="metric-fill"
                          style={{ width: `${scanResults.originality_analysis.melody_uniqueness}%` }}
                        />
                      </div>
                      <span className="metric-value">{scanResults.originality_analysis.melody_uniqueness}%</span>
                    </div>
                    
                    <div className="originality-metric">
                      <span className="metric-label">Harmony</span>
                      <div className="metric-bar">
                        <div 
                          className="metric-fill"
                          style={{ width: `${scanResults.originality_analysis.harmony_originality}%` }}
                        />
                      </div>
                      <span className="metric-value">{scanResults.originality_analysis.harmony_originality}%</span>
                    </div>
                    
                    <div className="originality-metric">
                      <span className="metric-label">Rhythm</span>
                      <div className="metric-bar">
                        <div 
                          className="metric-fill"
                          style={{ width: `${scanResults.originality_analysis.rhythm_uniqueness}%` }}
                        />
                      </div>
                      <span className="metric-value">{scanResults.originality_analysis.rhythm_uniqueness}%</span>
                    </div>
                  </div>
                  
                  <div className="overall-creativity">
                    <h5>🌟 Overall Creativity Score</h5>
                    <div className="creativity-score">
                      <div className="score-circle">
                        <span className="score-value">{scanResults.originality_analysis.overall_creativity_score}</span>
                        <span className="score-label">/ 100</span>
                      </div>
                      <p>Your composition shows high originality and creative uniqueness!</p>
                    </div>
                  </div>
                </div>

                <div className="monetization-opportunities">
                  <h4>💰 Monetization Opportunities</h4>
                  <div className="opportunities-grid">
                    {scanResults.monetization_opportunities.map((opportunity, index) => (
                      <div key={opportunity.platform} className="opportunity-card">
                        <div className="opportunity-header">
                          <h5>{opportunity.platform}</h5>
                          <div className={`potential-badge ${opportunity.revenue_potential.toLowerCase()}`}>
                            {opportunity.revenue_potential}
                          </div>
                        </div>
                        
                        <div className="opportunity-details">
                          <p><strong>Requirements:</strong> {opportunity.requirements}</p>
                          <p><strong>Estimated Revenue:</strong> {opportunity.estimated_cpm || opportunity.estimated_per_stream || opportunity.estimated_per_view}</p>
                        </div>
                        
                        <button className="opportunity-action">
                          <Target size={14} />
                          <span>Setup Monetization</span>
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>
        )}

        {activeTab === 'database' && (
          <motion.div 
            className="database-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>📚 Your Copyright Database</h3>
              <p>Manage and track your registered works and their usage</p>
            </div>

            <div className="registered-works">
              <h4>🏆 Your Registered Works</h4>
              <div className="works-grid">
                {copyrightDatabase.your_registered_works.map((work) => (
                  <motion.div
                    key={work.id}
                    className="work-card"
                    whileHover={{ scale: 1.02, y: -3 }}
                  >
                    <div className="work-header">
                      <h5>{work.title}</h5>
                      <div className={`status-badge ${work.status.toLowerCase()}`}>
                        {work.status}
                      </div>
                    </div>
                    
                    <div className="work-details">
                      <p><strong>Registration:</strong> {work.registration_number}</p>
                      <p><strong>Date:</strong> {work.registration_date}</p>
                      <p><strong>Protection:</strong> {work.protection_level}</p>
                    </div>
                    
                    <div className="work-territories">
                      <h6>🌍 Protected Territories</h6>
                      <div className="territories-list">
                        {work.territories.map((territory) => (
                          <span key={territory} className="territory-tag">{territory}</span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="work-revenue">
                      <h6>💰 Revenue Generated</h6>
                      <div className="revenue-amount">${work.revenue_generated.toFixed(2)}</div>
                    </div>
                    
                    <div className="usage-tracking">
                      <h6>📊 Usage Tracking</h6>
                      <div className="usage-stats">
                        <div className="usage-stat">
                          <span>YouTube</span>
                          <span>{work.usage_tracking.youtube_uses}</span>
                        </div>
                        <div className="usage-stat">
                          <span>Instagram</span>
                          <span>{work.usage_tracking.instagram_uses}</span>
                        </div>
                        <div className="usage-stat">
                          <span>TikTok</span>
                          <span>{work.usage_tracking.tiktok_uses}</span>
                        </div>
                        <div className="usage-stat">
                          <span>Commercial</span>
                          <span>{work.usage_tracking.commercial_licenses}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="work-actions">
                      <button className="action-btn">
                        <Eye size={14} />
                        <span>View Details</span>
                      </button>
                      
                      <button className="action-btn">
                        <BarChart3 size={14} />
                        <span>Usage Report</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="public-domain-sources">
              <h4>🆓 Safe Public Domain Sources</h4>
              <div className="sources-grid">
                {copyrightDatabase.public_domain_sources.map((source, index) => (
                  <div key={index} className="source-card">
                    <div className="source-header">
                      <h5>{source.title}</h5>
                      <div className="safe-badge">
                        <CheckCircle size={16} />
                        <span>Safe</span>
                      </div>
                    </div>
                    
                    <div className="source-details">
                      <p><strong>Composer:</strong> {source.composer}</p>
                      <p><strong>Year:</strong> {source.year_composed}</p>
                      <p><strong>Status:</strong> {source.copyright_status}</p>
                    </div>
                    
                    <div className="source-stats">
                      <div className="stat">
                        <span>Adaptations</span>
                        <span>{source.popular_adaptations}</span>
                      </div>
                      <div className="stat">
                        <span>Revenue Potential</span>
                        <span className="potential-high">{source.revenue_potential}</span>
                      </div>
                    </div>
                    
                    <button className="action-btn primary">
                      <Plus size={14} />
                      <span>Create Adaptation</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'guidelines' && (
          <motion.div 
            className="guidelines-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>📋 Platform Guidelines & Best Practices</h3>
              <p>Stay compliant with each platform's copyright policies</p>
            </div>

            <div className="platforms-guidelines">
              {Object.entries(platformGuidelines).map(([key, platform]) => (
                <motion.div
                  key={key}
                  className="platform-guideline"
                  whileHover={{ scale: 1.01 }}
                >
                  <div className="platform-header">
                    <h4>{platform.name}</h4>
                    <div className={`strictness-badge ${platform.strictness.toLowerCase().replace(' ', '-')}`}>
                      {platform.strictness} Strictness
                    </div>
                  </div>
                  
                  <div className="detection-method">
                    <h5>🔍 Detection Method</h5>
                    <p>{platform.detection_method}</p>
                  </div>
                  
                  <div className="safe-practices">
                    <h5>✅ Safe Practices</h5>
                    <ul>
                      {platform.safe_practices.map((practice, index) => (
                        <li key={index}>{practice}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="monetization-requirements">
                    <h5>💰 Monetization Requirements</h5>
                    <ul>
                      {platform.monetization_requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </ul>
                  </div>
                  
                  {platform.revenue_sharing && (
                    <div className="revenue-sharing">
                      <h5>💵 Revenue Sharing</h5>
                      <div className="sharing-breakdown">
                        {Object.entries(platform.revenue_sharing).map(([type, split]) => (
                          <div key={type} className="sharing-item">
                            <span className="sharing-type">{type.replace('_', ' ')}</span>
                            <span className="sharing-split">{split}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Tips */}
      <div className="quick-tips">
        <h3>💡 Pro Tips for Copyright Safety</h3>
        <div className="tips-grid">
          <div className="tip-card">
            <Lightbulb size={24} />
            <h4>Original is Always Best</h4>
            <p>Create completely original compositions to avoid any copyright issues and maximize revenue potential.</p>
          </div>
          
          <div className="tip-card">
            <Shield size={24} />
            <h4>Register Your Works</h4>
            <p>Register your original compositions with the Copyright Office for maximum legal protection.</p>
          </div>
          
          <div className="tip-card">
            <Eye size={24} />
            <h4>Monitor Usage</h4>
            <p>Track how your music is being used across platforms to identify unauthorized usage and revenue opportunities.</p>
          </div>
          
          <div className="tip-card">
            <DollarSign size={24} />
            <h4>Maximize Revenue</h4>
            <p>Use our platform analysis to identify the best monetization strategies for each platform.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopyrightCompliance;

