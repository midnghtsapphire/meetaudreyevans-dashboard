import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Music, 
  Play, 
  Pause, 
  Volume2, 
  ExternalLink, 
  Heart, 
  Share2, 
  Download, 
  Eye, 
  Users, 
  Calendar, 
  MapPin, 
  Star, 
  Award, 
  Headphones, 
  Radio, 
  Mic, 
  Camera, 
  Instagram, 
  Youtube, 
  Spotify, 
  Apple, 
  SoundCloud, 
  Globe, 
  TrendingUp,
  BarChart3,
  Clock,
  Zap,
  Sparkles,
  Crown,
  Target,
  Waves,
  Disc,
  Vinyl,
  Cassette
} from 'lucide-react';

// Artist Profile Component
const ArtistProfile = () => {
  const [activeTab, setActiveTab] = useState('music');
  const [currentlyPlaying, setCurrentlyPlaying] = useState(null);
  const [musicData, setMusicData] = useState({
    artist: {
      name: 'Audrey Evans',
      stageName: 'Revvel Hail',
      bio: 'Multi-genre artist blending electronic, pop, and experimental sounds. Creator of innovative coffee blends and AI-powered business solutions.',
      location: 'Global',
      genres: ['Electronic', 'Pop', 'Experimental', 'Ambient'],
      yearsActive: '2020-Present',
      totalStreams: 847293,
      monthlyListeners: 23847,
      followers: {
        spotify: 12400,
        youtube: 8900,
        apple: 5600,
        soundcloud: 3200,
        instagram: 45600
      }
    },
    platforms: [
      {
        name: 'Spotify',
        icon: '🎵',
        color: '#1DB954',
        url: 'https://open.spotify.com/artist/audreyevans',
        followers: 12400,
        streams: 456789,
        verified: true
      },
      {
        name: 'Apple Music',
        icon: '🍎',
        color: '#FA243C',
        url: 'https://music.apple.com/artist/audrey-evans',
        followers: 5600,
        streams: 234567,
        verified: true
      },
      {
        name: 'YouTube Music',
        icon: '📺',
        color: '#FF0000',
        url: 'https://music.youtube.com/channel/audreyevans',
        followers: 8900,
        streams: 123456,
        verified: false
      },
      {
        name: 'SoundCloud',
        icon: '☁️',
        color: '#FF5500',
        url: 'https://soundcloud.com/revvelhail',
        followers: 3200,
        streams: 32101,
        verified: false
      },
      {
        name: 'Landr',
        icon: '🎛️',
        color: '#6C5CE7',
        url: 'https://landr.com/artist/audreyevans',
        followers: 890,
        streams: 15432,
        verified: false
      }
    ],
    songs: [
      {
        id: 1,
        title: 'Digital Dreams',
        album: 'Synthetic Emotions',
        duration: '3:42',
        releaseDate: '2024-01-15',
        genre: 'Electronic',
        streams: 89432,
        platforms: {
          spotify: 'https://open.spotify.com/track/digital-dreams',
          apple: 'https://music.apple.com/song/digital-dreams',
          youtube: 'https://youtube.com/watch?v=digital-dreams',
          soundcloud: 'https://soundcloud.com/revvelhail/digital-dreams'
        },
        artwork: '/api/placeholder/300/300',
        waveform: '/api/placeholder/600/100',
        isExplicit: false,
        mood: 'Energetic',
        bpm: 128,
        key: 'C Major'
      },
      {
        id: 2,
        title: 'Coffee Shop Serenade',
        album: 'Qahwa Sessions',
        duration: '4:18',
        releaseDate: '2024-02-20',
        genre: 'Ambient',
        streams: 67891,
        platforms: {
          spotify: 'https://open.spotify.com/track/coffee-shop-serenade',
          apple: 'https://music.apple.com/song/coffee-shop-serenade',
          youtube: 'https://youtube.com/watch?v=coffee-shop-serenade',
          soundcloud: 'https://soundcloud.com/revvelhail/coffee-shop-serenade'
        },
        artwork: '/api/placeholder/300/300',
        waveform: '/api/placeholder/600/100',
        isExplicit: false,
        mood: 'Relaxing',
        bpm: 85,
        key: 'G Major'
      },
      {
        id: 3,
        title: 'Neural Networks',
        album: 'AI Symphony',
        duration: '5:23',
        releaseDate: '2024-03-10',
        genre: 'Experimental',
        streams: 45678,
        platforms: {
          spotify: 'https://open.spotify.com/track/neural-networks',
          apple: 'https://music.apple.com/song/neural-networks',
          youtube: 'https://youtube.com/watch?v=neural-networks',
          soundcloud: 'https://soundcloud.com/revvelhail/neural-networks'
        },
        artwork: '/api/placeholder/300/300',
        waveform: '/api/placeholder/600/100',
        isExplicit: false,
        mood: 'Mysterious',
        bpm: 110,
        key: 'D Minor'
      },
      {
        id: 4,
        title: 'Midnight Automation',
        album: 'Digital Workflow',
        duration: '3:56',
        releaseDate: '2024-04-05',
        genre: 'Electronic',
        streams: 78234,
        platforms: {
          spotify: 'https://open.spotify.com/track/midnight-automation',
          apple: 'https://music.apple.com/song/midnight-automation',
          youtube: 'https://youtube.com/watch?v=midnight-automation',
          soundcloud: 'https://soundcloud.com/revvelhail/midnight-automation'
        },
        artwork: '/api/placeholder/300/300',
        waveform: '/api/placeholder/600/100',
        isExplicit: false,
        mood: 'Focused',
        bpm: 120,
        key: 'A Minor'
      },
      {
        id: 5,
        title: 'Entrepreneurial Spirit',
        album: 'Business Beats',
        duration: '4:12',
        releaseDate: '2024-05-12',
        genre: 'Pop',
        streams: 92156,
        platforms: {
          spotify: 'https://open.spotify.com/track/entrepreneurial-spirit',
          apple: 'https://music.apple.com/song/entrepreneurial-spirit',
          youtube: 'https://youtube.com/watch?v=entrepreneurial-spirit',
          soundcloud: 'https://soundcloud.com/revvelhail/entrepreneurial-spirit'
        },
        artwork: '/api/placeholder/300/300',
        waveform: '/api/placeholder/600/100',
        isExplicit: false,
        mood: 'Motivational',
        bpm: 132,
        key: 'E Major'
      }
    ],
    albums: [
      {
        id: 1,
        title: 'Synthetic Emotions',
        releaseDate: '2024-01-15',
        trackCount: 8,
        totalDuration: '32:45',
        genre: 'Electronic',
        artwork: '/api/placeholder/400/400',
        streams: 234567,
        description: 'An exploration of digital consciousness and artificial feelings through electronic soundscapes.'
      },
      {
        id: 2,
        title: 'Qahwa Sessions',
        releaseDate: '2024-02-20',
        trackCount: 6,
        totalDuration: '28:12',
        genre: 'Ambient',
        artwork: '/api/placeholder/400/400',
        streams: 156789,
        description: 'Ambient compositions inspired by coffee culture and entrepreneurial journeys.'
      },
      {
        id: 3,
        title: 'AI Symphony',
        releaseDate: '2024-03-10',
        trackCount: 10,
        totalDuration: '45:33',
        genre: 'Experimental',
        artwork: '/api/placeholder/400/400',
        streams: 189234,
        description: 'Experimental pieces exploring the intersection of artificial intelligence and human creativity.'
      }
    ],
    recentActivity: [
      { type: 'release', content: 'New single "Entrepreneurial Spirit" released', date: '2024-05-12' },
      { type: 'milestone', content: 'Reached 800K total streams', date: '2024-05-10' },
      { type: 'playlist', content: 'Added to "Electronic Vibes" playlist (50K followers)', date: '2024-05-08' },
      { type: 'collaboration', content: 'Featured on "Tech Entrepreneur Podcast"', date: '2024-05-05' },
      { type: 'performance', content: 'Live stream performance on Instagram', date: '2024-05-01' }
    ]
  });

  const tabs = [
    { id: 'music', label: 'Music', icon: Music },
    { id: 'about', label: 'About', icon: Users },
    { id: 'platforms', label: 'Platforms', icon: Globe },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 }
  ];

  const handlePlay = (songId) => {
    if (currentlyPlaying === songId) {
      setCurrentlyPlaying(null);
    } else {
      setCurrentlyPlaying(songId);
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

  return (
    <div className="artist-profile">
      {/* Artist Header */}
      <div className="artist-header">
        <div className="artist-hero">
          <div className="artist-image">
            <img src="/api/placeholder/200/200" alt="Audrey Evans" />
            <div className="verified-badge">
              <Crown size={16} />
              <span>Verified Artist</span>
            </div>
          </div>
          
          <div className="artist-info">
            <h1 className="artist-name">{musicData.artist.name}</h1>
            <h2 className="stage-name">aka {musicData.artist.stageName}</h2>
            
            <div className="artist-stats">
              <div className="stat-item">
                <Headphones size={20} />
                <span className="stat-value">{formatNumber(musicData.artist.totalStreams)}</span>
                <span className="stat-label">Total Streams</span>
              </div>
              
              <div className="stat-item">
                <Users size={20} />
                <span className="stat-value">{formatNumber(musicData.artist.monthlyListeners)}</span>
                <span className="stat-label">Monthly Listeners</span>
              </div>
              
              <div className="stat-item">
                <Calendar size={20} />
                <span className="stat-value">{musicData.artist.yearsActive}</span>
                <span className="stat-label">Years Active</span>
              </div>
            </div>
            
            <div className="artist-genres">
              {musicData.artist.genres.map((genre) => (
                <span key={genre} className="genre-tag">{genre}</span>
              ))}
            </div>
            
            <div className="artist-actions">
              <button className="action-btn primary">
                <Play size={20} />
                <span>Play All</span>
              </button>
              
              <button className="action-btn secondary">
                <Heart size={20} />
                <span>Follow</span>
              </button>
              
              <button className="action-btn secondary">
                <Share2 size={20} />
                <span>Share</span>
              </button>
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
        {activeTab === 'music' && (
          <motion.div 
            className="music-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* Latest Release */}
            <div className="latest-release">
              <h3>🎵 Latest Release</h3>
              <div className="featured-song">
                <div className="song-artwork">
                  <img src="/api/placeholder/150/150" alt="Latest Release" />
                  <button 
                    className="play-overlay"
                    onClick={() => handlePlay(musicData.songs[0].id)}
                  >
                    {currentlyPlaying === musicData.songs[0].id ? <Pause size={32} /> : <Play size={32} />}
                  </button>
                </div>
                
                <div className="song-details">
                  <h4>{musicData.songs[0].title}</h4>
                  <p>{musicData.songs[0].album}</p>
                  <div className="song-meta">
                    <span>{musicData.songs[0].duration}</span>
                    <span>•</span>
                    <span>{musicData.songs[0].genre}</span>
                    <span>•</span>
                    <span>{formatNumber(musicData.songs[0].streams)} streams</span>
                  </div>
                  
                  <div className="platform-links">
                    {Object.entries(musicData.songs[0].platforms).map(([platform, url]) => (
                      <a key={platform} href={url} target="_blank" rel="noopener noreferrer" className="platform-link">
                        <span className="platform-icon">
                          {platform === 'spotify' && '🎵'}
                          {platform === 'apple' && '🍎'}
                          {platform === 'youtube' && '📺'}
                          {platform === 'soundcloud' && '☁️'}
                        </span>
                        <span>{platform}</span>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* All Songs */}
            <div className="all-songs">
              <h3>🎶 All Songs</h3>
              <div className="songs-list">
                {musicData.songs.map((song, index) => (
                  <motion.div 
                    key={song.id}
                    className="song-item"
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                  >
                    <div className="song-number">{index + 1}</div>
                    
                    <button 
                      className="song-play-btn"
                      onClick={() => handlePlay(song.id)}
                    >
                      {currentlyPlaying === song.id ? <Pause size={16} /> : <Play size={16} />}
                    </button>
                    
                    <div className="song-artwork-small">
                      <img src="/api/placeholder/50/50" alt={song.title} />
                    </div>
                    
                    <div className="song-info">
                      <h5>{song.title}</h5>
                      <p>{song.album}</p>
                    </div>
                    
                    <div className="song-genre">
                      <span className="genre-badge">{song.genre}</span>
                    </div>
                    
                    <div className="song-mood">
                      <span className="mood-badge">{song.mood}</span>
                    </div>
                    
                    <div className="song-streams">
                      {formatNumber(song.streams)}
                    </div>
                    
                    <div className="song-duration">
                      {song.duration}
                    </div>
                    
                    <div className="song-actions">
                      <button className="action-btn-small">
                        <Heart size={14} />
                      </button>
                      
                      <button className="action-btn-small">
                        <Share2 size={14} />
                      </button>
                      
                      <div className="platform-dropdown">
                        <button className="action-btn-small">
                          <ExternalLink size={14} />
                        </button>
                        <div className="dropdown-content">
                          {Object.entries(song.platforms).map(([platform, url]) => (
                            <a key={platform} href={url} target="_blank" rel="noopener noreferrer">
                              Listen on {platform}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Albums */}
            <div className="albums-section">
              <h3>💿 Albums</h3>
              <div className="albums-grid">
                {musicData.albums.map((album) => (
                  <motion.div 
                    key={album.id}
                    className="album-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                  >
                    <div className="album-artwork">
                      <img src="/api/placeholder/200/200" alt={album.title} />
                      <div className="album-overlay">
                        <button className="album-play-btn">
                          <Play size={24} />
                        </button>
                      </div>
                    </div>
                    
                    <div className="album-info">
                      <h4>{album.title}</h4>
                      <p>{album.releaseDate}</p>
                      <div className="album-meta">
                        <span>{album.trackCount} tracks</span>
                        <span>•</span>
                        <span>{album.totalDuration}</span>
                      </div>
                      <div className="album-streams">
                        {formatNumber(album.streams)} streams
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'about' && (
          <motion.div 
            className="about-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="bio-section">
              <h3>👋 About Audrey Evans</h3>
              <p className="bio-text">{musicData.artist.bio}</p>
              
              <div className="bio-highlights">
                <div className="highlight-item">
                  <MapPin size={20} />
                  <span>{musicData.artist.location}</span>
                </div>
                
                <div className="highlight-item">
                  <Music size={20} />
                  <span>{musicData.artist.genres.join(', ')}</span>
                </div>
                
                <div className="highlight-item">
                  <Calendar size={20} />
                  <span>Active since {musicData.artist.yearsActive.split('-')[0]}</span>
                </div>
              </div>
            </div>

            <div className="recent-activity">
              <h3>📈 Recent Activity</h3>
              <div className="activity-timeline">
                {musicData.recentActivity.map((activity, index) => (
                  <div key={index} className="activity-item">
                    <div className="activity-icon">
                      {activity.type === 'release' && <Music size={16} />}
                      {activity.type === 'milestone' && <Award size={16} />}
                      {activity.type === 'playlist' && <Headphones size={16} />}
                      {activity.type === 'collaboration' && <Users size={16} />}
                      {activity.type === 'performance' && <Mic size={16} />}
                    </div>
                    
                    <div className="activity-content">
                      <p>{activity.content}</p>
                      <span className="activity-date">{activity.date}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="achievements">
              <h3>🏆 Achievements</h3>
              <div className="achievements-grid">
                <div className="achievement-item">
                  <Star size={24} />
                  <h4>800K+ Total Streams</h4>
                  <p>Reached across all platforms</p>
                </div>
                
                <div className="achievement-item">
                  <TrendingUp size={24} />
                  <h4>Top 10 Electronic</h4>
                  <p>Featured in trending playlists</p>
                </div>
                
                <div className="achievement-item">
                  <Users size={24} />
                  <h4>20K+ Followers</h4>
                  <p>Growing fanbase worldwide</p>
                </div>
                
                <div className="achievement-item">
                  <Award size={24} />
                  <h4>Independent Artist</h4>
                  <p>Self-produced and distributed</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'platforms' && (
          <motion.div 
            className="platforms-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3>🌍 Find Me On All Platforms</h3>
            
            <div className="platforms-grid">
              {musicData.platforms.map((platform) => (
                <motion.a
                  key={platform.name}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="platform-card"
                  whileHover={{ scale: 1.05, y: -5 }}
                  style={{ '--platform-color': platform.color }}
                >
                  <div className="platform-header">
                    <span className="platform-icon">{platform.icon}</span>
                    <h4>{platform.name}</h4>
                    {platform.verified && (
                      <div className="verified-badge">
                        <Crown size={14} />
                      </div>
                    )}
                  </div>
                  
                  <div className="platform-stats">
                    <div className="stat">
                      <span className="stat-value">{formatNumber(platform.followers)}</span>
                      <span className="stat-label">Followers</span>
                    </div>
                    
                    <div className="stat">
                      <span className="stat-value">{formatNumber(platform.streams)}</span>
                      <span className="stat-label">Streams</span>
                    </div>
                  </div>
                  
                  <div className="platform-action">
                    <ExternalLink size={16} />
                    <span>Listen Now</span>
                  </div>
                </motion.a>
              ))}
            </div>

            <div className="platform-aggregator">
              <h3>🔗 All Links in One Place</h3>
              <p>Use this universal link to share all my music platforms:</p>
              <div className="universal-link">
                <input 
                  type="text" 
                  value="meetaudreyevans.com/music" 
                  readOnly 
                  className="link-input"
                />
                <button className="copy-btn">
                  <Share2 size={16} />
                  Copy Link
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {activeTab === 'analytics' && (
          <motion.div 
            className="analytics-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3>📊 Music Analytics</h3>
            
            <div className="analytics-overview">
              <div className="analytics-card">
                <h4>Total Streams</h4>
                <div className="analytics-value">{formatNumber(musicData.artist.totalStreams)}</div>
                <div className="analytics-change positive">+23.4% this month</div>
              </div>
              
              <div className="analytics-card">
                <h4>Monthly Listeners</h4>
                <div className="analytics-value">{formatNumber(musicData.artist.monthlyListeners)}</div>
                <div className="analytics-change positive">+15.7% this month</div>
              </div>
              
              <div className="analytics-card">
                <h4>Top Platform</h4>
                <div className="analytics-value">Spotify</div>
                <div className="analytics-change">54% of streams</div>
              </div>
              
              <div className="analytics-card">
                <h4>Avg. Listen Time</h4>
                <div className="analytics-value">2:34</div>
                <div className="analytics-change positive">+12% retention</div>
              </div>
            </div>

            <div className="platform-breakdown">
              <h4>Platform Performance</h4>
              <div className="platform-analytics">
                {musicData.platforms.map((platform) => (
                  <div key={platform.name} className="platform-analytics-item">
                    <div className="platform-info">
                      <span className="platform-icon">{platform.icon}</span>
                      <span className="platform-name">{platform.name}</span>
                    </div>
                    
                    <div className="platform-metrics">
                      <div className="metric">
                        <span className="metric-value">{formatNumber(platform.streams)}</span>
                        <span className="metric-label">Streams</span>
                      </div>
                      
                      <div className="metric">
                        <span className="metric-value">{formatNumber(platform.followers)}</span>
                        <span className="metric-label">Followers</span>
                      </div>
                    </div>
                    
                    <div className="platform-percentage">
                      {Math.round((platform.streams / musicData.artist.totalStreams) * 100)}%
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="top-songs-analytics">
              <h4>Top Performing Songs</h4>
              <div className="top-songs-list">
                {musicData.songs
                  .sort((a, b) => b.streams - a.streams)
                  .slice(0, 3)
                  .map((song, index) => (
                    <div key={song.id} className="top-song-item">
                      <div className="song-rank">#{index + 1}</div>
                      <div className="song-info">
                        <h5>{song.title}</h5>
                        <p>{song.album}</p>
                      </div>
                      <div className="song-streams">
                        {formatNumber(song.streams)} streams
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ArtistProfile;

