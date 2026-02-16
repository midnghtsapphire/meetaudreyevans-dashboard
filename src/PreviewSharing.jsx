import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, 
  Play, 
  Pause, 
  Share2, 
  Instagram, 
  Facebook, 
  Twitter, 
  Music, 
  Video, 
  Camera, 
  Mic, 
  Edit3, 
  Download, 
  Eye, 
  Clock, 
  Calendar, 
  Users, 
  Heart, 
  MessageCircle, 
  TrendingUp, 
  Zap, 
  Sparkles, 
  Target, 
  Settings, 
  Volume2, 
  Headphones, 
  Radio, 
  Globe, 
  Link, 
  Copy, 
  Check, 
  Plus, 
  X, 
  ChevronDown, 
  ChevronUp, 
  BarChart3, 
  Layers, 
  Scissors, 
  Wand2, 
  Image, 
  FileAudio, 
  FileVideo, 
  Smartphone, 
  Monitor, 
  Tablet, 
  Speaker, 
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
  Award, 
  Star, 
  Crown, 
  Palette, 
  Brush, 
  Type, 
  AlignCenter, 
  Bold, 
  Italic, 
  Underline
} from 'lucide-react';

// Preview Sharing Component
const PreviewSharing = () => {
  const [activeTab, setActiveTab] = useState('upload');
  const [uploadedFile, setUploadedFile] = useState(null);
  const [previewSettings, setPreviewSettings] = useState({
    duration: 30,
    startTime: 0,
    fadeIn: true,
    fadeOut: true,
    volume: 80,
    quality: 'high'
  });
  const [socialPosts, setSocialPosts] = useState([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedPlatforms, setSelectedPlatforms] = useState({
    instagram: true,
    facebook: true,
    twitter: true,
    tiktok: true,
    youtube: false,
    linkedin: false
  });

  // Mock data for existing previews
  const existingPreviews = [
    {
      id: 'preview_1',
      title: 'Midnight Automation (Demo)',
      originalFile: 'midnight_automation_full.wav',
      previewFile: 'midnight_automation_preview.mp3',
      duration: 30,
      uploadDate: '2024-05-20',
      status: 'shared',
      platforms: ['instagram', 'facebook', 'twitter'],
      engagement: {
        views: 2847,
        likes: 234,
        comments: 45,
        shares: 67
      },
      artwork: '/api/placeholder/150/150'
    },
    {
      id: 'preview_2',
      title: 'Coffee Vibes (Work in Progress)',
      originalFile: 'coffee_vibes_wip.wav',
      previewFile: 'coffee_vibes_preview.mp3',
      duration: 45,
      uploadDate: '2024-05-18',
      status: 'draft',
      platforms: [],
      engagement: {
        views: 0,
        likes: 0,
        comments: 0,
        shares: 0
      },
      artwork: '/api/placeholder/150/150'
    },
    {
      id: 'preview_3',
      title: 'Neural Beat Drop (Snippet)',
      originalFile: 'neural_beat_full.wav',
      previewFile: 'neural_beat_preview.mp3',
      duration: 15,
      uploadDate: '2024-05-15',
      status: 'shared',
      platforms: ['instagram', 'tiktok'],
      engagement: {
        views: 5632,
        likes: 489,
        comments: 78,
        shares: 123
      },
      artwork: '/api/placeholder/150/150'
    }
  ];

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      icon: '📷',
      color: '#E4405F',
      formats: ['Stories', 'Reels', 'Posts'],
      maxDuration: 60,
      aspectRatio: '9:16',
      features: ['Auto-captions', 'Music stickers', 'Behind-the-scenes']
    },
    {
      id: 'facebook',
      name: 'Facebook',
      icon: '👥',
      color: '#1877F2',
      formats: ['Posts', 'Stories', 'Videos'],
      maxDuration: 120,
      aspectRatio: '16:9',
      features: ['Auto-scheduling', 'Audience targeting', 'Engagement tracking']
    },
    {
      id: 'twitter',
      name: 'Twitter/X',
      icon: '🐦',
      color: '#1DA1F2',
      formats: ['Posts', 'Threads', 'Spaces'],
      maxDuration: 140,
      aspectRatio: '16:9',
      features: ['Thread creation', 'Hashtag optimization', 'Trending topics']
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      icon: '🎬',
      color: '#FF0050',
      formats: ['Videos', 'Sounds'],
      maxDuration: 60,
      aspectRatio: '9:16',
      features: ['Viral hooks', 'Trending sounds', 'Duet-ready']
    },
    {
      id: 'youtube',
      name: 'YouTube',
      icon: '📺',
      color: '#FF0000',
      formats: ['Shorts', 'Videos', 'Community'],
      maxDuration: 60,
      aspectRatio: '9:16',
      features: ['YouTube Shorts', 'Community posts', 'Premiere scheduling']
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: '💼',
      color: '#0A66C2',
      formats: ['Posts', 'Articles', 'Videos'],
      maxDuration: 120,
      aspectRatio: '16:9',
      features: ['Professional audience', 'Industry targeting', 'Thought leadership']
    }
  ];

  const postTemplates = [
    {
      id: 'wip',
      name: 'Work in Progress',
      description: 'Share your creative process',
      template: '🎵 Working on something new... What do you think of this snippet? 🤔\n\n#WorkInProgress #NewMusic #StudioLife #ComingSoon',
      hashtags: ['#WorkInProgress', '#NewMusic', '#StudioLife', '#ComingSoon'],
      style: 'casual'
    },
    {
      id: 'teaser',
      name: 'Release Teaser',
      description: 'Build anticipation for upcoming release',
      template: '🔥 New track dropping soon! Here\'s a little taste... 👀\n\nRelease date: [DATE]\n\n#NewRelease #ComingSoon #MusicTeaser #ExclusivePreview',
      hashtags: ['#NewRelease', '#ComingSoon', '#MusicTeaser', '#ExclusivePreview'],
      style: 'promotional'
    },
    {
      id: 'behind_scenes',
      name: 'Behind the Scenes',
      description: 'Show your creative process',
      template: '🎛️ Behind the scenes in the studio! This is how "[TRACK_NAME]" came to life... ✨\n\n#BehindTheScenes #StudioLife #MusicProduction #CreativeProcess',
      hashtags: ['#BehindTheScenes', '#StudioLife', '#MusicProduction', '#CreativeProcess'],
      style: 'storytelling'
    },
    {
      id: 'feedback',
      name: 'Ask for Feedback',
      description: 'Engage your audience for input',
      template: '🎧 I need your ears! What do you think of this new direction? Drop your thoughts below! 💭\n\n#Feedback #NewSound #MusicCommunity #YourThoughts',
      hashtags: ['#Feedback', '#NewSound', '#MusicCommunity', '#YourThoughts'],
      style: 'interactive'
    },
    {
      id: 'collaboration',
      name: 'Collaboration Tease',
      description: 'Hint at upcoming collaborations',
      template: '🤝 Something special brewing with an amazing artist... Can you guess who? 🤔\n\n#Collaboration #Mystery #NewMusic #ComingSoon',
      hashtags: ['#Collaboration', '#Mystery', '#NewMusic', '#ComingSoon'],
      style: 'mysterious'
    }
  ];

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setUploadedFile({
        name: file.name,
        size: file.size,
        type: file.type,
        duration: 180, // Mock duration in seconds
        url: URL.createObjectURL(file)
      });
    }
  };

  const generatePreviews = async () => {
    setIsGenerating(true);
    
    // Simulate preview generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    const newPosts = Object.keys(selectedPlatforms)
      .filter(platform => selectedPlatforms[platform])
      .map(platformId => {
        const platform = socialPlatforms.find(p => p.id === platformId);
        const template = postTemplates[Math.floor(Math.random() * postTemplates.length)];
        
        return {
          id: `post_${Date.now()}_${platformId}`,
          platform: platform,
          template: template,
          content: template.template.replace('[TRACK_NAME]', uploadedFile?.name || 'New Track'),
          previewUrl: '/api/placeholder/400/400',
          audioUrl: uploadedFile?.url,
          status: 'draft',
          scheduledTime: null,
          engagement: {
            estimatedReach: Math.floor(Math.random() * 5000) + 1000,
            estimatedEngagement: Math.floor(Math.random() * 500) + 100
          }
        };
      });
    
    setSocialPosts(newPosts);
    setIsGenerating(false);
    setActiveTab('preview');
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const formatDuration = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const tabs = [
    { id: 'upload', label: 'Upload', icon: Upload },
    { id: 'preview', label: 'Generate Posts', icon: Wand2 },
    { id: 'schedule', label: 'Schedule & Share', icon: Calendar },
    { id: 'analytics', label: 'Track Performance', icon: BarChart3 }
  ];

  return (
    <div className="preview-sharing">
      <div className="sharing-header">
        <h2>🎵 Preview Sharing Studio</h2>
        <p>Share your work-in-progress tracks and build anticipation before release</p>
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
        {activeTab === 'upload' && (
          <motion.div 
            className="upload-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {/* File Upload */}
            <div className="file-upload-area">
              <input 
                type="file" 
                accept="audio/*" 
                onChange={handleFileUpload}
                className="file-input"
                id="preview-upload"
              />
              <label htmlFor="preview-upload" className="upload-label">
                {uploadedFile ? (
                  <div className="uploaded-file">
                    <FileAudio size={48} />
                    <h3>{uploadedFile.name}</h3>
                    <p>{formatFileSize(uploadedFile.size)} • {formatDuration(uploadedFile.duration)}</p>
                    <div className="file-actions">
                      <button className="action-btn">
                        <Play size={16} />
                        <span>Preview</span>
                      </button>
                      <button className="action-btn">
                        <Edit3 size={16} />
                        <span>Edit</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <div className="upload-prompt">
                    <Upload size={64} />
                    <h3>Upload Your Track</h3>
                    <p>Drop your audio file here or click to browse</p>
                    <small>Supports MP3, WAV, FLAC, M4A up to 100MB</small>
                  </div>
                )}
              </label>
            </div>

            {/* Preview Settings */}
            {uploadedFile && (
              <div className="preview-settings">
                <h3>🎛️ Preview Settings</h3>
                
                <div className="settings-grid">
                  <div className="setting-group">
                    <label>Preview Duration</label>
                    <div className="duration-options">
                      {[15, 30, 45, 60].map(duration => (
                        <button
                          key={duration}
                          className={`duration-btn ${previewSettings.duration === duration ? 'active' : ''}`}
                          onClick={() => setPreviewSettings(prev => ({ ...prev, duration }))}
                        >
                          {duration}s
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="setting-group">
                    <label>Start Time</label>
                    <input 
                      type="range" 
                      min="0" 
                      max={uploadedFile.duration - previewSettings.duration}
                      value={previewSettings.startTime}
                      onChange={(e) => setPreviewSettings(prev => ({ 
                        ...prev, 
                        startTime: parseInt(e.target.value) 
                      }))}
                      className="time-slider"
                    />
                    <span className="time-display">
                      {formatDuration(previewSettings.startTime)} - {formatDuration(previewSettings.startTime + previewSettings.duration)}
                    </span>
                  </div>

                  <div className="setting-group">
                    <label>Audio Effects</label>
                    <div className="effects-options">
                      <label className="checkbox-option">
                        <input 
                          type="checkbox" 
                          checked={previewSettings.fadeIn}
                          onChange={(e) => setPreviewSettings(prev => ({ 
                            ...prev, 
                            fadeIn: e.target.checked 
                          }))}
                        />
                        <span>Fade In</span>
                      </label>
                      
                      <label className="checkbox-option">
                        <input 
                          type="checkbox" 
                          checked={previewSettings.fadeOut}
                          onChange={(e) => setPreviewSettings(prev => ({ 
                            ...prev, 
                            fadeOut: e.target.checked 
                          }))}
                        />
                        <span>Fade Out</span>
                      </label>
                    </div>
                  </div>

                  <div className="setting-group">
                    <label>Volume Level</label>
                    <input 
                      type="range" 
                      min="0" 
                      max="100"
                      value={previewSettings.volume}
                      onChange={(e) => setPreviewSettings(prev => ({ 
                        ...prev, 
                        volume: parseInt(e.target.value) 
                      }))}
                      className="volume-slider"
                    />
                    <span className="volume-display">{previewSettings.volume}%</span>
                  </div>
                </div>

                {/* Platform Selection */}
                <div className="platform-selection">
                  <h4>📱 Select Platforms</h4>
                  <div className="platforms-grid">
                    {socialPlatforms.map((platform) => (
                      <motion.div
                        key={platform.id}
                        className={`platform-card ${selectedPlatforms[platform.id] ? 'selected' : ''}`}
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
                          <h5>{platform.name}</h5>
                        </div>
                        
                        <div className="platform-specs">
                          <div className="spec-item">
                            <span>Max Duration:</span>
                            <span>{platform.maxDuration}s</span>
                          </div>
                          <div className="spec-item">
                            <span>Aspect Ratio:</span>
                            <span>{platform.aspectRatio}</span>
                          </div>
                        </div>
                        
                        <div className="platform-features">
                          {platform.features.slice(0, 2).map((feature, index) => (
                            <span key={index} className="feature-tag">{feature}</span>
                          ))}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <motion.button
                  className="generate-btn"
                  onClick={generatePreviews}
                  disabled={!uploadedFile || Object.values(selectedPlatforms).every(v => !v)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Wand2 size={20} />
                  <span>Generate Social Media Posts</span>
                </motion.button>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'preview' && (
          <motion.div 
            className="preview-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            {isGenerating ? (
              <div className="generating-preview">
                <div className="loading-animation">
                  <Wand2 size={48} className="spinning" />
                </div>
                <h3>🎨 Generating Your Social Media Posts...</h3>
                <p>Creating optimized content for each platform</p>
              </div>
            ) : socialPosts.length > 0 ? (
              <div className="generated-posts">
                <h3>📱 Generated Social Media Posts</h3>
                
                <div className="posts-grid">
                  {socialPosts.map((post) => (
                    <motion.div
                      key={post.id}
                      className="post-preview"
                      whileHover={{ scale: 1.02, y: -2 }}
                      style={{ '--platform-color': post.platform.color }}
                    >
                      <div className="post-header">
                        <div className="platform-info">
                          <span className="platform-icon">{post.platform.icon}</span>
                          <h4>{post.platform.name}</h4>
                        </div>
                        
                        <div className="post-status">
                          <span className={`status-badge ${post.status}`}>{post.status}</span>
                        </div>
                      </div>

                      <div className="post-content">
                        <div className="content-preview">
                          <img src="/api/placeholder/300/300" alt="Post preview" />
                          <div className="audio-overlay">
                            <button className="play-btn">
                              <Play size={24} />
                            </button>
                            <div className="audio-info">
                              <span className="track-name">{uploadedFile?.name}</span>
                              <span className="duration">{previewSettings.duration}s preview</span>
                            </div>
                          </div>
                        </div>
                        
                        <div className="post-text">
                          <textarea 
                            value={post.content}
                            onChange={(e) => {
                              const updatedPosts = socialPosts.map(p => 
                                p.id === post.id ? { ...p, content: e.target.value } : p
                              );
                              setSocialPosts(updatedPosts);
                            }}
                            rows={4}
                          />
                        </div>
                        
                        <div className="post-hashtags">
                          {post.template.hashtags.map((hashtag, index) => (
                            <span key={index} className="hashtag">{hashtag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="post-metrics">
                        <div className="metric">
                          <Eye size={16} />
                          <span>Est. Reach: {post.engagement.estimatedReach.toLocaleString()}</span>
                        </div>
                        <div className="metric">
                          <Heart size={16} />
                          <span>Est. Engagement: {post.engagement.estimatedEngagement}</span>
                        </div>
                      </div>

                      <div className="post-actions">
                        <button className="action-btn">
                          <Edit3 size={16} />
                          <span>Edit</span>
                        </button>
                        
                        <button className="action-btn">
                          <Calendar size={16} />
                          <span>Schedule</span>
                        </button>
                        
                        <button className="action-btn primary">
                          <Share2 size={16} />
                          <span>Post Now</span>
                        </button>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="bulk-actions">
                  <button className="bulk-btn">
                    <Calendar size={16} />
                    <span>Schedule All</span>
                  </button>
                  
                  <button className="bulk-btn">
                    <Share2 size={16} />
                    <span>Post All Now</span>
                  </button>
                  
                  <button className="bulk-btn">
                    <Download size={16} />
                    <span>Export Posts</span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="no-posts">
                <Music size={64} />
                <h3>No Posts Generated Yet</h3>
                <p>Upload a track and generate social media posts to get started</p>
                <button 
                  className="back-btn"
                  onClick={() => setActiveTab('upload')}
                >
                  <Upload size={16} />
                  <span>Upload Track</span>
                </button>
              </div>
            )}
          </motion.div>
        )}

        {activeTab === 'schedule' && (
          <motion.div 
            className="schedule-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <h3>📅 Schedule Your Posts</h3>
            
            <div className="scheduling-calendar">
              <div className="calendar-header">
                <h4>Optimal Posting Times</h4>
                <p>Based on your audience engagement patterns</p>
              </div>
              
              <div className="time-slots">
                <div className="platform-times">
                  <div className="platform-time">
                    <span className="platform-icon">📷</span>
                    <span className="platform-name">Instagram</span>
                    <span className="best-time">6:00 PM - 8:00 PM</span>
                    <span className="engagement">+34% engagement</span>
                  </div>
                  
                  <div className="platform-time">
                    <span className="platform-icon">🐦</span>
                    <span className="platform-name">Twitter</span>
                    <span className="best-time">12:00 PM - 1:00 PM</span>
                    <span className="engagement">+28% engagement</span>
                  </div>
                  
                  <div className="platform-time">
                    <span className="platform-icon">🎬</span>
                    <span className="platform-name">TikTok</span>
                    <span className="best-time">7:00 PM - 9:00 PM</span>
                    <span className="engagement">+45% engagement</span>
                  </div>
                </div>
              </div>
              
              <div className="auto-schedule">
                <button className="auto-schedule-btn">
                  <Zap size={16} />
                  <span>Auto-Schedule for Optimal Times</span>
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
            <h3>📊 Preview Performance Analytics</h3>
            
            <div className="existing-previews">
              <h4>🎵 Your Previous Previews</h4>
              
              <div className="previews-list">
                {existingPreviews.map((preview) => (
                  <motion.div
                    key={preview.id}
                    className="preview-analytics-card"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="preview-info">
                      <div className="preview-artwork">
                        <img src="/api/placeholder/80/80" alt={preview.title} />
                        <div className="preview-duration">{preview.duration}s</div>
                      </div>
                      
                      <div className="preview-details">
                        <h5>{preview.title}</h5>
                        <p>Uploaded {preview.uploadDate}</p>
                        <div className="preview-platforms">
                          {preview.platforms.map((platformId) => {
                            const platform = socialPlatforms.find(p => p.id === platformId);
                            return platform ? (
                              <span key={platformId} className="platform-badge">
                                {platform.icon} {platform.name}
                              </span>
                            ) : null;
                          })}
                        </div>
                      </div>
                    </div>
                    
                    <div className="preview-metrics">
                      <div className="metric-item">
                        <Eye size={16} />
                        <span>{preview.engagement.views.toLocaleString()} views</span>
                      </div>
                      
                      <div className="metric-item">
                        <Heart size={16} />
                        <span>{preview.engagement.likes} likes</span>
                      </div>
                      
                      <div className="metric-item">
                        <MessageCircle size={16} />
                        <span>{preview.engagement.comments} comments</span>
                      </div>
                      
                      <div className="metric-item">
                        <Share2 size={16} />
                        <span>{preview.engagement.shares} shares</span>
                      </div>
                    </div>
                    
                    <div className="preview-actions">
                      <button className="action-btn">
                        <BarChart3 size={14} />
                        <span>Details</span>
                      </button>
                      
                      <button className="action-btn">
                        <Share2 size={14} />
                        <span>Reshare</span>
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="analytics-summary">
              <h4>📈 Overall Performance</h4>
              
              <div className="summary-stats">
                <div className="summary-stat">
                  <h5>Total Preview Views</h5>
                  <div className="stat-value">8,479</div>
                  <div className="stat-change positive">+23.4% this month</div>
                </div>
                
                <div className="summary-stat">
                  <h5>Average Engagement Rate</h5>
                  <div className="stat-value">12.7%</div>
                  <div className="stat-change positive">+2.1% vs last month</div>
                </div>
                
                <div className="summary-stat">
                  <h5>Best Performing Platform</h5>
                  <div className="stat-value">TikTok</div>
                  <div className="stat-change">45% higher engagement</div>
                </div>
                
                <div className="summary-stat">
                  <h5>Conversion to Full Streams</h5>
                  <div className="stat-value">34.2%</div>
                  <div className="stat-change positive">+5.8% improvement</div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PreviewSharing;

