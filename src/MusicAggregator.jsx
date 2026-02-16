import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  RefreshCw, 
  Download, 
  ExternalLink, 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  Settings, 
  CheckCircle, 
  AlertCircle, 
  Clock, 
  Zap,
  Globe,
  Database,
  Sync,
  Target,
  Eye,
  BarChart3
} from 'lucide-react';

// Music Aggregator Component
const MusicAggregator = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState(0);
  const [foundTracks, setFoundTracks] = useState([]);
  const [scanResults, setScanResults] = useState(null);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    spotify: true,
    apple: true,
    youtube: true,
    soundcloud: true,
    landr: true,
    bandcamp: true,
    tidal: true,
    deezer: true
  });

  const platforms = [
    {
      id: 'spotify',
      name: 'Spotify',
      icon: '🎵',
      color: '#1DB954',
      searchTerms: ['audrey evans', 'revvel hail', 'meetaudreyevans'],
      apiEndpoint: 'https://api.spotify.com/v1/search',
      status: 'connected'
    },
    {
      id: 'apple',
      name: 'Apple Music',
      icon: '🍎',
      color: '#FA243C',
      searchTerms: ['audrey evans', 'revvel hail'],
      apiEndpoint: 'https://itunes.apple.com/search',
      status: 'connected'
    },
    {
      id: 'youtube',
      name: 'YouTube Music',
      icon: '📺',
      color: '#FF0000',
      searchTerms: ['audrey evans music', 'revvel hail', 'meetaudreyevans'],
      apiEndpoint: 'https://www.googleapis.com/youtube/v3/search',
      status: 'connected'
    },
    {
      id: 'soundcloud',
      name: 'SoundCloud',
      icon: '☁️',
      color: '#FF5500',
      searchTerms: ['revvel hail', 'audrey evans', 'meetaudreyevans'],
      apiEndpoint: 'https://api.soundcloud.com/tracks',
      status: 'connected'
    },
    {
      id: 'landr',
      name: 'Landr',
      icon: '🎛️',
      color: '#6C5CE7',
      searchTerms: ['audrey evans', 'meetaudreyevans'],
      apiEndpoint: 'https://api.landr.com/search',
      status: 'connected'
    },
    {
      id: 'bandcamp',
      name: 'Bandcamp',
      icon: '🎪',
      color: '#629AA0',
      searchTerms: ['audrey evans', 'revvel hail'],
      apiEndpoint: 'https://bandcamp.com/api/search',
      status: 'available'
    },
    {
      id: 'tidal',
      name: 'Tidal',
      icon: '🌊',
      color: '#000000',
      searchTerms: ['audrey evans', 'revvel hail'],
      apiEndpoint: 'https://api.tidal.com/v1/search',
      status: 'available'
    },
    {
      id: 'deezer',
      name: 'Deezer',
      icon: '🎶',
      color: '#FF6600',
      searchTerms: ['audrey evans', 'revvel hail'],
      apiEndpoint: 'https://api.deezer.com/search',
      status: 'available'
    }
  ];

  // Mock scan results
  const mockScanResults = {
    totalTracks: 23,
    newTracks: 5,
    updatedTracks: 3,
    platforms: {
      spotify: { tracks: 8, status: 'success' },
      apple: { tracks: 6, status: 'success' },
      youtube: { tracks: 12, status: 'success' },
      soundcloud: { tracks: 4, status: 'success' },
      landr: { tracks: 3, status: 'success' },
      bandcamp: { tracks: 0, status: 'no_results' },
      tidal: { tracks: 2, status: 'success' },
      deezer: { tracks: 1, status: 'success' }
    },
    tracks: [
      {
        id: 'track_1',
        title: 'Digital Dreams',
        artist: 'Audrey Evans',
        album: 'Synthetic Emotions',
        duration: '3:42',
        releaseDate: '2024-01-15',
        platforms: {
          spotify: { url: 'https://open.spotify.com/track/digital-dreams', streams: 89432 },
          apple: { url: 'https://music.apple.com/song/digital-dreams', streams: 45678 },
          youtube: { url: 'https://youtube.com/watch?v=digital-dreams', views: 123456 },
          soundcloud: { url: 'https://soundcloud.com/revvelhail/digital-dreams', plays: 23456 }
        },
        artwork: '/api/placeholder/100/100',
        isNew: false
      },
      {
        id: 'track_2',
        title: 'Coffee Shop Serenade',
        artist: 'Revvel Hail',
        album: 'Qahwa Sessions',
        duration: '4:18',
        releaseDate: '2024-02-20',
        platforms: {
          spotify: { url: 'https://open.spotify.com/track/coffee-shop-serenade', streams: 67891 },
          apple: { url: 'https://music.apple.com/song/coffee-shop-serenade', streams: 34567 },
          youtube: { url: 'https://youtube.com/watch?v=coffee-shop-serenade', views: 87654 },
          landr: { url: 'https://landr.com/track/coffee-shop-serenade', plays: 12345 }
        },
        artwork: '/api/placeholder/100/100',
        isNew: true
      },
      {
        id: 'track_3',
        title: 'Neural Networks',
        artist: 'Audrey Evans',
        album: 'AI Symphony',
        duration: '5:23',
        releaseDate: '2024-03-10',
        platforms: {
          spotify: { url: 'https://open.spotify.com/track/neural-networks', streams: 45678 },
          apple: { url: 'https://music.apple.com/song/neural-networks', streams: 23456 },
          youtube: { url: 'https://youtube.com/watch?v=neural-networks', views: 65432 },
          soundcloud: { url: 'https://soundcloud.com/revvelhail/neural-networks', plays: 15678 },
          tidal: { url: 'https://tidal.com/track/neural-networks', streams: 8901 }
        },
        artwork: '/api/placeholder/100/100',
        isNew: false
      },
      {
        id: 'track_4',
        title: 'Midnight Automation',
        artist: 'Audrey Evans',
        album: 'Digital Workflow',
        duration: '3:56',
        releaseDate: '2024-04-05',
        platforms: {
          spotify: { url: 'https://open.spotify.com/track/midnight-automation', streams: 78234 },
          apple: { url: 'https://music.apple.com/song/midnight-automation', streams: 39123 },
          youtube: { url: 'https://youtube.com/watch?v=midnight-automation', views: 98765 },
          deezer: { url: 'https://deezer.com/track/midnight-automation', streams: 5432 }
        },
        artwork: '/api/placeholder/100/100',
        isNew: true
      },
      {
        id: 'track_5',
        title: 'Entrepreneurial Spirit',
        artist: 'Revvel Hail',
        album: 'Business Beats',
        duration: '4:12',
        releaseDate: '2024-05-12',
        platforms: {
          spotify: { url: 'https://open.spotify.com/track/entrepreneurial-spirit', streams: 92156 },
          apple: { url: 'https://music.apple.com/song/entrepreneurial-spirit', streams: 46078 },
          youtube: { url: 'https://youtube.com/watch?v=entrepreneurial-spirit', views: 134567 },
          soundcloud: { url: 'https://soundcloud.com/revvelhail/entrepreneurial-spirit', plays: 28901 },
          landr: { url: 'https://landr.com/track/entrepreneurial-spirit', plays: 15432 }
        },
        artwork: '/api/placeholder/100/100',
        isNew: true
      }
    ]
  };

  const startScan = async () => {
    setIsScanning(true);
    setScanProgress(0);
    
    // Simulate scanning process
    const totalSteps = Object.keys(selectedPlatforms).filter(p => selectedPlatforms[p]).length;
    let currentStep = 0;
    
    for (const platform of platforms) {
      if (selectedPlatforms[platform.id]) {
        currentStep++;
        setScanProgress((currentStep / totalSteps) * 100);
        await new Promise(resolve => setTimeout(resolve, 800)); // Simulate API call
      }
    }
    
    setIsScanning(false);
    setScanResults(mockScanResults);
    setFoundTracks(mockScanResults.tracks);
  };

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const getTotalStreams = (track) => {
    let total = 0;
    Object.values(track.platforms).forEach(platform => {
      total += platform.streams || platform.plays || platform.views || 0;
    });
    return total;
  };

  return (
    <div className="music-aggregator">
      <div className="aggregator-header">
        <h2>🎵 Music Platform Aggregator</h2>
        <p>Automatically find and sync your music across all streaming platforms</p>
      </div>

      {/* Platform Selection */}
      <div className="platform-selection">
        <h3>🌍 Select Platforms to Scan</h3>
        <div className="platforms-grid">
          {platforms.map((platform) => (
            <motion.div
              key={platform.id}
              className={`platform-selector ${selectedPlatforms[platform.id] ? 'selected' : ''} ${platform.status}`}
              onClick={() => setSelectedPlatforms(prev => ({
                ...prev,
                [platform.id]: !prev[platform.id]
              }))}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{ '--platform-color': platform.color }}
            >
              <div className="platform-header">
                <span className="platform-icon">{platform.icon}</span>
                <h4>{platform.name}</h4>
                <div className={`status-indicator ${platform.status}`}>
                  {platform.status === 'connected' && <CheckCircle size={16} />}
                  {platform.status === 'available' && <Clock size={16} />}
                </div>
              </div>
              
              <div className="search-terms">
                <strong>Search terms:</strong>
                <div className="terms-list">
                  {platform.searchTerms.map((term, index) => (
                    <span key={index} className="search-term">{term}</span>
                  ))}
                </div>
              </div>
              
              <div className="platform-status">
                {platform.status === 'connected' ? 'Ready to scan' : 'Available for setup'}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scan Controls */}
      <div className="scan-controls">
        <div className="scan-options">
          <h3>🔍 Scan Options</h3>
          <div className="options-grid">
            <label className="option-item">
              <input type="checkbox" defaultChecked />
              <span>Include variations of artist name</span>
            </label>
            <label className="option-item">
              <input type="checkbox" defaultChecked />
              <span>Search for collaborations</span>
            </label>
            <label className="option-item">
              <input type="checkbox" defaultChecked />
              <span>Find remixes and covers</span>
            </label>
            <label className="option-item">
              <input type="checkbox" defaultChecked />
              <span>Update existing track data</span>
            </label>
          </div>
        </div>

        <motion.button
          className="scan-btn"
          onClick={startScan}
          disabled={isScanning || Object.values(selectedPlatforms).every(v => !v)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {isScanning ? (
            <>
              <RefreshCw size={20} className="spinning" />
              <span>Scanning... {Math.round(scanProgress)}%</span>
            </>
          ) : (
            <>
              <Search size={20} />
              <span>Start Platform Scan</span>
            </>
          )}
        </motion.button>
      </div>

      {/* Scanning Progress */}
      {isScanning && (
        <motion.div 
          className="scanning-progress"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="progress-header">
            <h3>🔍 Scanning Platforms...</h3>
            <span>{Math.round(scanProgress)}% Complete</span>
          </div>
          
          <div className="progress-bar">
            <div 
              className="progress-fill"
              style={{ width: `${scanProgress}%` }}
            />
          </div>
          
          <div className="scanning-platforms">
            {platforms.map((platform) => {
              if (!selectedPlatforms[platform.id]) return null;
              
              const isScanned = scanProgress > (platforms.indexOf(platform) / platforms.length) * 100;
              
              return (
                <div key={platform.id} className={`scanning-platform ${isScanned ? 'scanned' : ''}`}>
                  <span className="platform-icon">{platform.icon}</span>
                  <span className="platform-name">{platform.name}</span>
                  {isScanned && <CheckCircle size={16} className="scan-check" />}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}

      {/* Scan Results */}
      {scanResults && (
        <motion.div 
          className="scan-results"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="results-header">
            <h3>✅ Scan Complete!</h3>
            <div className="results-summary">
              <div className="summary-item">
                <span className="summary-value">{scanResults.totalTracks}</span>
                <span className="summary-label">Total Tracks Found</span>
              </div>
              <div className="summary-item">
                <span className="summary-value">{scanResults.newTracks}</span>
                <span className="summary-label">New Tracks</span>
              </div>
              <div className="summary-item">
                <span className="summary-value">{scanResults.updatedTracks}</span>
                <span className="summary-label">Updated</span>
              </div>
            </div>
          </div>

          {/* Platform Results */}
          <div className="platform-results">
            <h4>📊 Platform Breakdown</h4>
            <div className="platform-results-grid">
              {Object.entries(scanResults.platforms).map(([platformId, result]) => {
                const platform = platforms.find(p => p.id === platformId);
                if (!platform) return null;
                
                return (
                  <div key={platformId} className="platform-result">
                    <div className="platform-info">
                      <span className="platform-icon">{platform.icon}</span>
                      <span className="platform-name">{platform.name}</span>
                    </div>
                    
                    <div className="platform-tracks">
                      <span className="tracks-count">{result.tracks}</span>
                      <span className="tracks-label">tracks</span>
                    </div>
                    
                    <div className={`platform-status ${result.status}`}>
                      {result.status === 'success' && <CheckCircle size={16} />}
                      {result.status === 'no_results' && <AlertCircle size={16} />}
                      <span>{result.status === 'success' ? 'Found' : 'No results'}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Found Tracks */}
          <div className="found-tracks">
            <h4>🎶 Found Tracks</h4>
            <div className="tracks-list">
              {foundTracks.map((track) => (
                <motion.div 
                  key={track.id}
                  className="track-item"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="track-artwork">
                    <img src="/api/placeholder/80/80" alt={track.title} />
                    {track.isNew && <div className="new-badge">NEW</div>}
                  </div>
                  
                  <div className="track-info">
                    <h5>{track.title}</h5>
                    <p>{track.artist} • {track.album}</p>
                    <div className="track-meta">
                      <span>{track.duration}</span>
                      <span>•</span>
                      <span>{track.releaseDate}</span>
                      <span>•</span>
                      <span>{formatNumber(getTotalStreams(track))} total plays</span>
                    </div>
                  </div>
                  
                  <div className="track-platforms">
                    <div className="platforms-found">
                      <span className="platforms-label">Found on:</span>
                      <div className="platform-icons">
                        {Object.keys(track.platforms).map((platformId) => {
                          const platform = platforms.find(p => p.id === platformId);
                          return platform ? (
                            <span key={platformId} className="platform-icon-small" title={platform.name}>
                              {platform.icon}
                            </span>
                          ) : null;
                        })}
                      </div>
                    </div>
                    
                    <div className="platform-links">
                      {Object.entries(track.platforms).map(([platformId, data]) => {
                        const platform = platforms.find(p => p.id === platformId);
                        return platform ? (
                          <a 
                            key={platformId}
                            href={data.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="platform-link"
                            title={`Listen on ${platform.name}`}
                          >
                            <span className="platform-icon">{platform.icon}</span>
                            <span className="platform-stats">
                              {formatNumber(data.streams || data.plays || data.views)}
                            </span>
                          </a>
                        ) : null;
                      })}
                    </div>
                  </div>
                  
                  <div className="track-actions">
                    <button className="action-btn">
                      <Play size={16} />
                    </button>
                    <button className="action-btn">
                      <ExternalLink size={16} />
                    </button>
                    <button className="action-btn">
                      <Download size={16} />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Export Options */}
          <div className="export-options">
            <h4>💾 Export Your Music Data</h4>
            <div className="export-buttons">
              <button className="export-btn">
                <Download size={16} />
                <span>Export to CSV</span>
              </button>
              
              <button className="export-btn">
                <Database size={16} />
                <span>Save to Database</span>
              </button>
              
              <button className="export-btn">
                <Sync size={16} />
                <span>Sync with Website</span>
              </button>
              
              <button className="export-btn">
                <Globe size={16} />
                <span>Generate Embed Code</span>
              </button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Auto-Sync Settings */}
      <div className="auto-sync-settings">
        <h3>⚡ Auto-Sync Settings</h3>
        <div className="sync-options">
          <div className="sync-option">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Auto-scan for new releases weekly</span>
            </label>
          </div>
          
          <div className="sync-option">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Update stream counts daily</span>
            </label>
          </div>
          
          <div className="sync-option">
            <label>
              <input type="checkbox" />
              <span>Send notifications for new discoveries</span>
            </label>
          </div>
          
          <div className="sync-option">
            <label>
              <input type="checkbox" defaultChecked />
              <span>Automatically update website music section</span>
            </label>
          </div>
        </div>
      </div>

      {/* Integration Code */}
      <div className="integration-code">
        <h3>🔗 Website Integration</h3>
        <p>Add this code to automatically display your music on meetaudreyevans.com:</p>
        
        <div className="code-block">
          <pre>
{`<!-- Audrey Evans Music Widget -->
<div id="audrey-music-widget"></div>
<script src="https://meetaudreyevans.com/js/music-widget.js"></script>
<script>
  AudreyMusicWidget.init({
    container: '#audrey-music-widget',
    artist: 'audrey-evans',
    autoUpdate: true,
    platforms: ['spotify', 'apple', 'youtube', 'soundcloud'],
    theme: 'modern'
  });
</script>`}
          </pre>
        </div>
        
        <button className="copy-code-btn">
          <Download size={16} />
          <span>Copy Integration Code</span>
        </button>
      </div>
    </div>
  );
};

export default MusicAggregator;

