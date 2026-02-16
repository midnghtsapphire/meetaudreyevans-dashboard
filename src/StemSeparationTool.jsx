import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Upload, Download, Play, Pause, Volume2, VolumeX, 
  Music, Mic, Drum, Guitar, Piano, Headphones,
  Loader, CheckCircle, AlertCircle, Info, Zap,
  Sliders, RotateCcw, Save, Share2, DollarSign,
  Star, Award, TrendingUp, Users, Clock, FileAudio
} from 'lucide-react';

const StemSeparationTool = () => {
  const [uploadedFile, setUploadedFile] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [separatedStems, setSeparatedStems] = useState(null);
  const [playingStems, setPlayingStems] = useState({});
  const [stemVolumes, setStemVolumes] = useState({
    vocals: 100,
    drums: 100,
    bass: 100,
    instruments: 100,
    other: 100
  });
  const [selectedQuality, setSelectedQuality] = useState('high');
  const [processingTime, setProcessingTime] = useState(0);
  const fileInputRef = useRef(null);
  const audioRefs = useRef({});

  // Simulate AI processing with realistic progress
  const processAudioFile = async (file) => {
    setIsProcessing(true);
    setProcessingProgress(0);
    setProcessingTime(0);
    
    const startTime = Date.now();
    const totalSteps = 100;
    const stepDuration = 50; // milliseconds per step
    
    for (let i = 0; i <= totalSteps; i++) {
      await new Promise(resolve => setTimeout(resolve, stepDuration));
      setProcessingProgress(i);
      setProcessingTime(Math.floor((Date.now() - startTime) / 1000));
      
      // Simulate different processing stages
      if (i === 25) {
        // AI analysis complete
      } else if (i === 50) {
        // Vocal extraction
      } else if (i === 75) {
        // Instrument separation
      }
    }
    
    // Simulate separated stems
    const mockStems = {
      vocals: {
        name: 'Vocals',
        url: '/demo-stems/vocals.mp3',
        icon: Mic,
        color: '#FF6B6B',
        description: 'Lead and backing vocals isolated'
      },
      drums: {
        name: 'Drums',
        url: '/demo-stems/drums.mp3',
        icon: Drum,
        color: '#4ECDC4',
        description: 'Kick, snare, hi-hats, and percussion'
      },
      bass: {
        name: 'Bass',
        url: '/demo-stems/bass.mp3',
        icon: Music,
        color: '#45B7D1',
        description: 'Bass guitar and low-end frequencies'
      },
      instruments: {
        name: 'Instruments',
        url: '/demo-stems/instruments.mp3',
        icon: Guitar,
        color: '#96CEB4',
        description: 'Guitars, keyboards, and melodic instruments'
      },
      other: {
        name: 'Other',
        url: '/demo-stems/other.mp3',
        icon: Piano,
        color: '#FFEAA7',
        description: 'Ambient sounds and effects'
      }
    };
    
    setSeparatedStems(mockStems);
    setIsProcessing(false);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.startsWith('audio/')) {
      setUploadedFile(file);
      setSeparatedStems(null);
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('audio/')) {
      setUploadedFile(file);
      setSeparatedStems(null);
    }
  };

  const toggleStemPlayback = (stemKey) => {
    const audio = audioRefs.current[stemKey];
    if (audio) {
      if (playingStems[stemKey]) {
        audio.pause();
      } else {
        // Pause all other stems
        Object.keys(audioRefs.current).forEach(key => {
          if (key !== stemKey && audioRefs.current[key]) {
            audioRefs.current[key].pause();
          }
        });
        audio.play();
      }
      setPlayingStems(prev => ({
        ...prev,
        [stemKey]: !prev[stemKey]
      }));
    }
  };

  const adjustStemVolume = (stemKey, volume) => {
    setStemVolumes(prev => ({
      ...prev,
      [stemKey]: volume
    }));
    
    const audio = audioRefs.current[stemKey];
    if (audio) {
      audio.volume = volume / 100;
    }
  };

  const downloadStem = (stemKey, stemData) => {
    // In a real implementation, this would download the actual separated audio file
    const link = document.createElement('a');
    link.href = stemData.url;
    link.download = `${uploadedFile?.name?.split('.')[0] || 'track'}_${stemKey}.wav`;
    link.click();
  };

  const downloadAllStems = () => {
    if (separatedStems) {
      Object.entries(separatedStems).forEach(([key, stem]) => {
        setTimeout(() => downloadStem(key, stem), 100 * Object.keys(separatedStems).indexOf(key));
      });
    }
  };

  return (
    <div className="stem-separation-tool">
      {/* Header Section */}
      <div className="tool-header">
        <div className="header-content">
          <div className="header-text">
            <h1>🎵 AI Stem Separation Tool</h1>
            <p className="header-subtitle">
              Extract vocals, drums, bass, and instruments from any song using advanced AI technology
            </p>
            <div className="feature-badges">
              <span className="badge pro">🤖 AI-Powered</span>
              <span className="badge quality">🎯 Studio Quality</span>
              <span className="badge speed">⚡ Fast Processing</span>
            </div>
          </div>
          <div className="header-stats">
            <div className="stat">
              <div className="stat-number">10,000+</div>
              <div className="stat-label">Songs Processed</div>
            </div>
            <div className="stat">
              <div className="stat-number">4.9★</div>
              <div className="stat-label">User Rating</div>
            </div>
            <div className="stat">
              <div className="stat-number">2 min</div>
              <div className="stat-label">Avg Processing</div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Banner */}
      <div className="pricing-banner">
        <div className="pricing-content">
          <div className="pricing-text">
            <h3>💰 Professional Stem Separation Service</h3>
            <p>Get studio-quality stems for your tracks</p>
          </div>
          <div className="pricing-options">
            <div className="price-option">
              <span className="price-label">Per Song</span>
              <span className="price">$9.99</span>
              <span className="comparison">Fiverr: $25-50</span>
            </div>
            <div className="price-option featured">
              <span className="price-label">5-Song Pack</span>
              <span className="price">$39.99</span>
              <span className="savings">Save $10</span>
            </div>
            <div className="price-option">
              <span className="price-label">Unlimited Monthly</span>
              <span className="price">$29.99</span>
              <span className="popular">Most Popular</span>
            </div>
          </div>
        </div>
      </div>

      {/* Upload Section */}
      <div className="upload-section">
        {!uploadedFile ? (
          <motion.div 
            className="upload-area"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="upload-content">
              <Upload size={48} className="upload-icon" />
              <h3>Upload Your Audio File</h3>
              <p>Drag and drop your audio file here, or click to browse</p>
              <div className="supported-formats">
                <span>Supported: MP3, WAV, FLAC, M4A</span>
              </div>
              <button 
                className="btn btn-primary btn-large"
                onClick={() => fileInputRef.current?.click()}
              >
                <Upload size={20} />
                Choose File
              </button>
              <input
                ref={fileInputRef}
                type="file"
                accept="audio/*"
                onChange={handleFileUpload}
                style={{ display: 'none' }}
              />
            </div>
          </motion.div>
        ) : (
          <div className="uploaded-file-info">
            <div className="file-details">
              <FileAudio size={24} className="file-icon" />
              <div className="file-info">
                <h4>{uploadedFile.name}</h4>
                <p>{(uploadedFile.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
            </div>
            <div className="file-actions">
              <button 
                className="btn btn-secondary"
                onClick={() => setUploadedFile(null)}
              >
                <RotateCcw size={16} />
                Change File
              </button>
              {!isProcessing && !separatedStems && (
                <button 
                  className="btn btn-primary"
                  onClick={() => processAudioFile(uploadedFile)}
                >
                  <Zap size={16} />
                  Separate Stems
                </button>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Quality Settings */}
      {uploadedFile && !isProcessing && !separatedStems && (
        <div className="quality-settings">
          <h3>Processing Options</h3>
          <div className="settings-grid">
            <div className="setting-group">
              <label>Quality Level</label>
              <select 
                value={selectedQuality} 
                onChange={(e) => setSelectedQuality(e.target.value)}
                className="quality-select"
              >
                <option value="standard">Standard (Faster)</option>
                <option value="high">High Quality (Recommended)</option>
                <option value="premium">Premium (Slowest, Best Quality)</option>
              </select>
            </div>
            <div className="setting-info">
              <Info size={16} />
              <span>Higher quality takes longer but produces better separation</span>
            </div>
          </div>
        </div>
      )}

      {/* Processing Section */}
      <AnimatePresence>
        {isProcessing && (
          <motion.div 
            className="processing-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="processing-content">
              <div className="processing-header">
                <Loader className="processing-spinner" size={32} />
                <h3>AI is Separating Your Stems...</h3>
                <p>This may take a few minutes depending on the song length and quality settings</p>
              </div>
              
              <div className="progress-container">
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ width: `${processingProgress}%` }}
                  />
                </div>
                <div className="progress-info">
                  <span>{processingProgress}% Complete</span>
                  <span>Elapsed: {processingTime}s</span>
                </div>
              </div>
              
              <div className="processing-stages">
                <div className={`stage ${processingProgress >= 25 ? 'completed' : processingProgress >= 0 ? 'active' : ''}`}>
                  <CheckCircle size={16} />
                  <span>Analyzing Audio Structure</span>
                </div>
                <div className={`stage ${processingProgress >= 50 ? 'completed' : processingProgress >= 25 ? 'active' : ''}`}>
                  <CheckCircle size={16} />
                  <span>Extracting Vocal Elements</span>
                </div>
                <div className={`stage ${processingProgress >= 75 ? 'completed' : processingProgress >= 50 ? 'active' : ''}`}>
                  <CheckCircle size={16} />
                  <span>Separating Instruments</span>
                </div>
                <div className={`stage ${processingProgress >= 100 ? 'completed' : processingProgress >= 75 ? 'active' : ''}`}>
                  <CheckCircle size={16} />
                  <span>Finalizing Stems</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Results Section */}
      <AnimatePresence>
        {separatedStems && (
          <motion.div 
            className="results-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="results-header">
              <div className="success-indicator">
                <CheckCircle size={32} className="success-icon" />
                <h3>Stems Successfully Separated!</h3>
                <p>Your audio has been split into {Object.keys(separatedStems).length} high-quality stems</p>
              </div>
              
              <div className="results-actions">
                <button 
                  className="btn btn-primary btn-large"
                  onClick={downloadAllStems}
                >
                  <Download size={20} />
                  Download All Stems
                </button>
                <button className="btn btn-secondary">
                  <Share2 size={16} />
                  Share Results
                </button>
              </div>
            </div>

            <div className="stems-grid">
              {Object.entries(separatedStems).map(([stemKey, stemData]) => {
                const IconComponent = stemData.icon;
                return (
                  <motion.div 
                    key={stemKey}
                    className="stem-card"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: Object.keys(separatedStems).indexOf(stemKey) * 0.1 }}
                  >
                    <div className="stem-header">
                      <div className="stem-icon" style={{ backgroundColor: stemData.color }}>
                        <IconComponent size={24} />
                      </div>
                      <div className="stem-info">
                        <h4>{stemData.name}</h4>
                        <p>{stemData.description}</p>
                      </div>
                    </div>
                    
                    <div className="stem-controls">
                      <div className="playback-controls">
                        <button 
                          className={`play-btn ${playingStems[stemKey] ? 'playing' : ''}`}
                          onClick={() => toggleStemPlayback(stemKey)}
                        >
                          {playingStems[stemKey] ? <Pause size={16} /> : <Play size={16} />}
                        </button>
                        
                        <div className="volume-control">
                          <Volume2 size={16} />
                          <input
                            type="range"
                            min="0"
                            max="100"
                            value={stemVolumes[stemKey]}
                            onChange={(e) => adjustStemVolume(stemKey, parseInt(e.target.value))}
                            className="volume-slider"
                          />
                          <span className="volume-value">{stemVolumes[stemKey]}%</span>
                        </div>
                      </div>
                      
                      <button 
                        className="download-stem-btn"
                        onClick={() => downloadStem(stemKey, stemData)}
                      >
                        <Download size={16} />
                        Download
                      </button>
                    </div>
                    
                    {/* Hidden audio element for playback */}
                    <audio
                      ref={(el) => audioRefs.current[stemKey] = el}
                      src={stemData.url}
                      onEnded={() => setPlayingStems(prev => ({ ...prev, [stemKey]: false }))}
                      volume={stemVolumes[stemKey] / 100}
                    />
                  </motion.div>
                );
              })}
            </div>

            {/* Business Opportunity Section */}
            <div className="business-opportunity">
              <div className="opportunity-content">
                <h3>💼 Turn This Into Your Business</h3>
                <div className="opportunity-grid">
                  <div className="opportunity-card">
                    <DollarSign size={32} className="opportunity-icon" />
                    <h4>Fiverr Service</h4>
                    <p>Offer stem separation services on Fiverr for $25-50 per song</p>
                    <div className="opportunity-stats">
                      <span>Average: $35/song</span>
                      <span>10 songs/week = $350</span>
                    </div>
                  </div>
                  
                  <div className="opportunity-card">
                    <Users size={32} className="opportunity-icon" />
                    <h4>Producer Services</h4>
                    <p>Help producers like Dereck with quick stem extraction</p>
                    <div className="opportunity-stats">
                      <span>B2B Rate: $15/song</span>
                      <span>Volume discounts available</span>
                    </div>
                  </div>
                  
                  <div className="opportunity-card">
                    <TrendingUp size={32} className="opportunity-icon" />
                    <h4>Subscription Model</h4>
                    <p>Monthly unlimited plans for regular users</p>
                    <div className="opportunity-stats">
                      <span>$29.99/month</span>
                      <span>100 subscribers = $3K/month</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default StemSeparationTool;

