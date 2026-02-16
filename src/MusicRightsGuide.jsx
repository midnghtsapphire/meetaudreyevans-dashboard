import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FileText, 
  DollarSign, 
  ExternalLink, 
  CheckCircle, 
  AlertTriangle, 
  Info, 
  Clock, 
  Calendar, 
  User, 
  Users, 
  Globe, 
  Music, 
  Radio, 
  Tv, 
  Smartphone, 
  Monitor, 
  Building, 
  Scale, 
  Shield, 
  Award, 
  Star, 
  Crown, 
  Heart, 
  Target, 
  Zap, 
  Lightbulb, 
  Book, 
  HelpCircle, 
  Search, 
  Filter, 
  Download, 
  Upload, 
  Save, 
  Edit3, 
  Plus, 
  Minus, 
  X, 
  Check, 
  ChevronUp, 
  ChevronDown, 
  ChevronRight, 
  ArrowRight, 
  ArrowLeft, 
  RefreshCw, 
  Link, 
  Copy, 
  Share2, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Banknote, 
  Calculator, 
  TrendingUp, 
  BarChart3, 
  PieChart, 
  Activity, 
  Pulse, 
  Eye, 
  EyeOff, 
  Lock, 
  Unlock, 
  Key, 
  Settings, 
  Cog, 
  Wrench, 
  Tool, 
  Hammer, 
  Briefcase, 
  Folder, 
  FolderOpen, 
  File, 
  FileCheck, 
  FilePlus, 
  FileX, 
  Archive, 
  Database, 
  Server, 
  Cloud, 
  CloudUpload, 
  CloudDownload
} from 'lucide-react';

// Music Rights Guide Component
const MusicRightsGuide = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [selectedPRO, setSelectedPRO] = useState(null);

  // Copyright Registration Information
  const copyrightInfo = {
    automatic_copyright: {
      title: "Automatic Copyright Protection",
      description: "Copyright protection begins automatically when you create and fix your musical work in a tangible form (recording, sheet music, etc.)",
      protection_level: "Basic",
      cost: "$0",
      duration: "Life + 70 years",
      benefits: [
        "Immediate protection upon creation",
        "Exclusive right to reproduce your work",
        "Right to distribute copies",
        "Right to perform publicly",
        "Right to create derivative works"
      ],
      limitations: [
        "Harder to prove ownership in court",
        "Cannot sue for statutory damages",
        "Cannot recover attorney fees",
        "Limited enforcement options",
        "No public record of ownership"
      ]
    },
    formal_registration: {
      title: "Formal Copyright Registration",
      description: "Official registration with the U.S. Copyright Office provides enhanced legal protection and enforcement rights",
      protection_level: "Full Legal Protection",
      cost: "$45-$125 per work",
      duration: "Life + 70 years",
      processing_time: "3-8 months",
      benefits: [
        "Legal presumption of ownership",
        "Right to sue for infringement",
        "Statutory damages up to $150,000",
        "Attorney fees recovery",
        "Public record of ownership",
        "Enhanced enforcement options",
        "Required for lawsuits in federal court"
      ],
      requirements: [
        "Original work of authorship",
        "Fixed in tangible medium",
        "Minimal creativity threshold",
        "Completed application form",
        "Filing fee payment",
        "Deposit copy of work"
      ]
    }
  };

  // Performance Rights Organizations
  const proOrganizations = {
    bmi: {
      name: "BMI (Broadcast Music, Inc.)",
      type: "Performance Rights Organization",
      membership_fee: "Free for songwriters/composers",
      publisher_fee: "$150 one-time",
      website: "https://www.bmi.com",
      phone: "1-800-925-8451",
      founded: 1939,
      members: "1.3 million+",
      description: "BMI represents songwriters, composers, and music publishers by collecting and distributing performance royalties",
      services: [
        "Performance royalty collection",
        "Radio/TV airplay monitoring",
        "Digital streaming royalties",
        "Live performance royalties",
        "International royalty collection",
        "Music career resources",
        "Networking events",
        "Educational workshops"
      ],
      how_to_join: [
        "Visit bmi.com/join",
        "Complete online application",
        "Provide identification",
        "Submit 1-3 musical works",
        "No membership fee for writers",
        "Instant approval process"
      ],
      payment_schedule: "Quarterly distributions",
      international_reach: "90+ countries",
      pros: [
        "Free membership for songwriters",
        "Large repertoire",
        "Strong digital tracking",
        "Good international collection",
        "User-friendly online portal"
      ],
      cons: [
        "Publisher membership fee",
        "Quarterly payments only",
        "Complex royalty calculations"
      ]
    },
    ascap: {
      name: "ASCAP (American Society of Composers, Authors and Publishers)",
      type: "Performance Rights Organization",
      membership_fee: "$50 for songwriters",
      publisher_fee: "$50",
      website: "https://www.ascap.com",
      phone: "1-800-952-7227",
      founded: 1914,
      members: "900,000+",
      description: "ASCAP is a membership association that protects the rights of its members by licensing and distributing royalties",
      services: [
        "Performance royalty collection",
        "Licensing to businesses",
        "International royalty collection",
        "Music career development",
        "Awards and grants programs",
        "Advocacy and lobbying",
        "Educational resources",
        "Networking opportunities"
      ],
      how_to_join: [
        "Visit ascap.com/join",
        "Complete membership application",
        "Pay $50 membership fee",
        "Provide work samples",
        "Submit identification",
        "Review and approval process"
      ],
      payment_schedule: "Quarterly distributions",
      international_reach: "100+ countries",
      pros: [
        "Oldest PRO in the US",
        "Strong advocacy efforts",
        "Comprehensive services",
        "Good international network",
        "Awards and grants programs"
      ],
      cons: [
        "Membership fees required",
        "More complex application process",
        "Traditional approach"
      ]
    },
    sesac: {
      name: "SESAC (Society of European Stage Authors and Composers)",
      type: "Performance Rights Organization",
      membership_fee: "Invitation only",
      publisher_fee: "Invitation only",
      website: "https://www.sesac.com",
      phone: "1-615-320-0055",
      founded: 1930,
      members: "30,000+",
      description: "SESAC is a selective, invitation-only PRO known for personalized service and higher per-play rates",
      services: [
        "Performance royalty collection",
        "Personalized account management",
        "Advanced technology platforms",
        "International collection",
        "Music licensing services",
        "Career development support",
        "Exclusive member events",
        "Higher per-play rates"
      ],
      how_to_join: [
        "Invitation only membership",
        "Submit music for review",
        "Demonstrate commercial potential",
        "Professional recommendation helpful",
        "No application fees",
        "Selective approval process"
      ],
      payment_schedule: "Monthly distributions",
      international_reach: "60+ countries",
      pros: [
        "Higher per-play rates",
        "Personalized service",
        "Monthly payments",
        "Selective membership",
        "Advanced technology"
      ],
      cons: [
        "Invitation only",
        "Smaller repertoire",
        "Harder to get accepted",
        "Less transparency"
      ]
    }
  };

  // Other Important Organizations
  const otherOrganizations = {
    soundexchange: {
      name: "SoundExchange",
      type: "Digital Performance Rights Organization",
      purpose: "Collects digital performance royalties for sound recordings",
      membership_fee: "Free",
      website: "https://www.soundexchange.com",
      description: "SoundExchange collects and distributes digital performance royalties from satellite radio, internet radio, and cable TV music channels",
      who_gets_paid: [
        "Featured artists (45%)",
        "Record labels (50%)",
        "Non-featured musicians (2.5%)",
        "Non-featured vocalists (2.5%)"
      ],
      how_to_register: [
        "Visit soundexchange.com",
        "Create account",
        "Register your recordings",
        "Provide banking information",
        "Submit required documentation"
      ]
    },
    harry_fox: {
      name: "Harry Fox Agency (HFA)",
      type: "Mechanical Rights Organization",
      purpose: "Handles mechanical licensing and royalties",
      website: "https://www.harryfox.com",
      description: "HFA issues mechanical licenses and collects mechanical royalties for physical and digital sales",
      services: [
        "Mechanical licensing",
        "Royalty collection",
        "Rights administration",
        "Sync licensing assistance"
      ]
    },
    music_reports: {
      name: "Music Reports Inc. (MRI)",
      type: "Rights Administration",
      purpose: "Processes mechanical royalties for streaming services",
      website: "https://www.musicreports.com",
      description: "MRI administers mechanical royalties for major streaming platforms like Spotify, Apple Music, and Amazon Music"
    }
  };

  // Step-by-step registration guides
  const registrationGuides = {
    copyright_registration: {
      title: "How to Register Your Copyright",
      estimated_time: "30-45 minutes",
      cost: "$45-$125",
      steps: [
        {
          step: 1,
          title: "Prepare Your Materials",
          description: "Gather all necessary documents and files",
          requirements: [
            "Completed musical work (audio file or sheet music)",
            "Government-issued ID",
            "Credit card for payment",
            "Work title and creation date",
            "Author/composer information"
          ],
          tips: [
            "Use high-quality audio files (WAV or FLAC preferred)",
            "Include lyrics if applicable",
            "Have sheet music if available"
          ]
        },
        {
          step: 2,
          title: "Visit the Copyright Office Website",
          description: "Go to the official U.S. Copyright Office electronic registration system",
          url: "https://www.copyright.gov/registration/",
          action: "Click 'Register a Copyright' → 'Literary Works' or 'Performing Arts'"
        },
        {
          step: 3,
          title: "Create an Account",
          description: "Set up your eCO (electronic Copyright Office) account",
          requirements: [
            "Valid email address",
            "Secure password",
            "Personal information verification"
          ]
        },
        {
          step: 4,
          title: "Complete Form PA or SR",
          description: "Fill out the appropriate form for your musical work",
          form_types: [
            "Form PA: For musical compositions (songs, lyrics, sheet music)",
            "Form SR: For sound recordings (the actual recorded performance)"
          ],
          key_fields: [
            "Title of work",
            "Author(s) information",
            "Copyright claimant",
            "Year of creation",
            "Year of publication (if applicable)",
            "Rights and permissions contact"
          ]
        },
        {
          step: 5,
          title: "Pay the Filing Fee",
          description: "Submit payment for your copyright registration",
          fee_structure: [
            "Single work by one author: $45",
            "Standard application: $65",
            "Paper filing: $125 (not recommended)"
          ],
          payment_methods: [
            "Credit card",
            "Debit card",
            "Electronic check",
            "Copyright Office deposit account"
          ]
        },
        {
          step: 6,
          title: "Upload Your Work",
          description: "Submit a digital copy of your musical work",
          file_requirements: [
            "Audio files: MP3, WAV, FLAC, or other standard formats",
            "Sheet music: PDF format preferred",
            "Maximum file size: 500MB",
            "Multiple files allowed for complete works"
          ]
        },
        {
          step: 7,
          title: "Review and Submit",
          description: "Double-check all information before final submission",
          checklist: [
            "Verify all personal information",
            "Confirm work title and details",
            "Check file uploads",
            "Review payment information",
            "Save confirmation number"
          ]
        },
        {
          step: 8,
          title: "Track Your Application",
          description: "Monitor the status of your copyright registration",
          timeline: [
            "Immediate: Confirmation email with case number",
            "1-2 weeks: Initial processing begins",
            "3-8 months: Registration certificate issued",
            "Updates available online via eCO account"
          ]
        }
      ]
    },
    bmi_registration: {
      title: "How to Join BMI",
      estimated_time: "15-20 minutes",
      cost: "Free for songwriters",
      steps: [
        {
          step: 1,
          title: "Visit BMI Website",
          description: "Go to the BMI membership page",
          url: "https://www.bmi.com/join",
          action: "Click 'Join BMI' and select 'Songwriter/Composer'"
        },
        {
          step: 2,
          title: "Complete Application",
          description: "Fill out the online membership form",
          required_info: [
            "Personal information (name, address, phone)",
            "Social Security Number or Tax ID",
            "Email address",
            "Musical background information",
            "1-3 original musical works"
          ]
        },
        {
          step: 3,
          title: "Submit Musical Works",
          description: "Provide examples of your original compositions",
          requirements: [
            "Song titles",
            "Completion dates",
            "Brief description of each work",
            "Co-writer information (if applicable)"
          ]
        },
        {
          step: 4,
          title: "Verification",
          description: "BMI reviews your application and works",
          process: [
            "Automatic approval for most applications",
            "Email confirmation within 24-48 hours",
            "Member number assigned",
            "Access to BMI online portal"
          ]
        }
      ]
    }
  };

  // Comprehensive FAQ
  const faqData = [
    {
      category: "Copyright Basics",
      questions: [
        {
          q: "What's the difference between automatic copyright and formal registration?",
          a: "Automatic copyright protection begins the moment you create and fix your musical work in a tangible form (like recording it or writing it down). This gives you basic ownership rights for free. Formal copyright registration with the U.S. Copyright Office costs $45-$125 but provides much stronger legal protection, including the right to sue for infringement, statutory damages up to $150,000, and attorney fee recovery. Think of automatic copyright as a basic lock on your door, while formal registration is a full security system."
        },
        {
          q: "Do I need to register every song I write?",
          a: "Not necessarily. You can register multiple songs together as a 'collection' for one fee if they're unpublished. For published works, each song typically needs separate registration. Many artists register their most commercial or important works first, then register others as budget allows."
        },
        {
          q: "How long does copyright protection last?",
          a: "For works created after 1978, copyright lasts for the life of the author plus 70 years. For works made for hire or anonymous works, it's 95 years from publication or 120 years from creation, whichever is shorter."
        },
        {
          q: "Can I copyright a song title or chord progression?",
          a: "No, you cannot copyright song titles, chord progressions, or basic musical elements. Copyright protects the specific expression of an idea, not the idea itself. However, a unique and substantial melody, lyrics, and arrangement can be copyrighted."
        }
      ]
    },
    {
      category: "Performance Rights Organizations (PROs)",
      questions: [
        {
          q: "What's the difference between BMI, ASCAP, and SESAC?",
          a: "BMI is free for songwriters with a $150 publisher fee, has 1.3M+ members, and pays quarterly. ASCAP charges $50 for both songwriters and publishers, has 900K+ members, and also pays quarterly. SESAC is invitation-only, selective with 30K+ members, but pays monthly and often has higher per-play rates. You can only join one PRO at a time."
        },
        {
          q: "Do I need to join a PRO if I'm just starting out?",
          a: "Yes, absolutely! Even if your music isn't being played much yet, joining a PRO (especially BMI since it's free) ensures you'll collect performance royalties when your music does get played. It's better to have the infrastructure in place early."
        },
        {
          q: "What's the difference between a PRO and SoundExchange?",
          a: "PROs (BMI, ASCAP, SESAC) collect performance royalties for the musical composition (the song itself) when it's played on radio, TV, streaming, etc. SoundExchange collects digital performance royalties for the sound recording (the actual recorded version) from satellite radio, internet radio, and cable TV music channels. You need both!"
        },
        {
          q: "Can I switch PROs later?",
          a: "Yes, but there are restrictions. You typically need to give notice during specific windows (usually 3-6 months before your membership expires) and may need to wait until your current term ends. Each PRO has different rules for switching."
        }
      ]
    },
    {
      category: "Royalties and Revenue",
      questions: [
        {
          q: "What are the different types of music royalties?",
          a: "There are four main types: 1) Performance royalties (when your song is played publicly - collected by PROs), 2) Mechanical royalties (when your song is reproduced/sold - collected by HFA or MRI), 3) Synchronization royalties (when your song is used in TV/film/ads), and 4) Digital performance royalties for sound recordings (collected by SoundExchange)."
        },
        {
          q: "How much money can I expect from royalties?",
          a: "Royalty amounts vary wildly. A radio play might earn $0.01-$0.50 depending on the station size and time of day. Streaming pays much less - Spotify pays about $0.003-$0.005 per stream. A song with 1 million streams might earn $3,000-$5,000 total across all royalty types."
        },
        {
          q: "When do I get paid?",
          a: "BMI and ASCAP pay quarterly (every 3 months), SESAC pays monthly, and SoundExchange pays monthly. However, there's typically a 3-6 month delay between when your music is played and when you receive payment due to reporting and processing time."
        },
        {
          q: "Do I need a publisher?",
          a: "Not necessarily when starting out. You can self-publish and keep 100% of your publishing royalties. However, a good publisher can help with licensing opportunities, sync placements, and international collection. Many artists start as self-published and later sign with publishers as their careers grow."
        }
      ]
    },
    {
      category: "International Rights",
      questions: [
        {
          q: "How do I collect royalties from other countries?",
          a: "Your PRO (BMI, ASCAP, or SESAC) has reciprocal agreements with PROs in other countries and will collect international performance royalties for you. For mechanical royalties, you may need to register with organizations in specific countries or use a service like Songtrust or CD Baby Pro."
        },
        {
          q: "Do I need to register my copyright in other countries?",
          a: "No, thanks to international copyright treaties like the Berne Convention, your U.S. copyright registration is recognized in 170+ countries. However, some countries have additional registration systems that can provide extra benefits."
        }
      ]
    },
    {
      category: "Digital Age Issues",
      questions: [
        {
          q: "How do streaming services handle royalties?",
          a: "Streaming services pay both mechanical royalties (for the composition) and digital performance royalties (for the recording). They report usage to organizations like Music Reports Inc. (MRI) for mechanical royalties and SoundExchange for digital performance royalties. Your PRO also collects performance royalties from streaming."
        },
        {
          q: "What about YouTube and social media?",
          a: "YouTube has agreements with PROs and pays performance royalties when your music is used. They also have Content ID which can monetize videos using your music. Other social media platforms are increasingly licensing music and paying royalties, but coverage varies by platform."
        },
        {
          q: "How do I protect my music from being stolen online?",
          a: "Register your copyright formally, join a PRO, register with SoundExchange, and consider using digital fingerprinting services. Many platforms now have automated systems to detect and monetize unauthorized use of your music rather than just removing it."
        }
      ]
    }
  ];

  // Cost calculator
  const [costCalculator, setCostCalculator] = useState({
    songs: 1,
    registration_type: 'single',
    pro_choice: 'bmi',
    publisher: false,
    soundexchange: true
  });

  const calculateCosts = () => {
    let total = 0;
    let breakdown = [];

    // Copyright registration
    if (costCalculator.registration_type === 'single') {
      total += costCalculator.songs * 45;
      breakdown.push({
        item: `Copyright Registration (${costCalculator.songs} song${costCalculator.songs > 1 ? 's' : ''})`,
        cost: costCalculator.songs * 45
      });
    } else {
      total += 45;
      breakdown.push({
        item: `Copyright Registration (Collection of ${costCalculator.songs} songs)`,
        cost: 45
      });
    }

    // PRO membership
    if (costCalculator.pro_choice === 'bmi') {
      breakdown.push({
        item: 'BMI Songwriter Membership',
        cost: 0
      });
      if (costCalculator.publisher) {
        total += 150;
        breakdown.push({
          item: 'BMI Publisher Membership',
          cost: 150
        });
      }
    } else if (costCalculator.pro_choice === 'ascap') {
      total += 50;
      breakdown.push({
        item: 'ASCAP Songwriter Membership',
        cost: 50
      });
      if (costCalculator.publisher) {
        total += 50;
        breakdown.push({
          item: 'ASCAP Publisher Membership',
          cost: 50
        });
      }
    } else {
      breakdown.push({
        item: 'SESAC Membership (Invitation Only)',
        cost: 0
      });
    }

    // SoundExchange
    if (costCalculator.soundexchange) {
      breakdown.push({
        item: 'SoundExchange Registration',
        cost: 0
      });
    }

    return { total, breakdown };
  };

  const sections = [
    { id: 'overview', label: 'Overview', icon: Info },
    { id: 'copyright', label: 'Copyright Registration', icon: Shield },
    { id: 'pros', label: 'Performance Rights', icon: Music },
    { id: 'other-orgs', label: 'Other Organizations', icon: Building },
    { id: 'guides', label: 'Step-by-Step Guides', icon: Book },
    { id: 'calculator', label: 'Cost Calculator', icon: Calculator },
    { id: 'faq', label: 'FAQ', icon: HelpCircle }
  ];

  return (
    <div className="music-rights-guide">
      <div className="guide-header">
        <h2>📚 Complete Music Rights & Copyright Guide</h2>
        <p>Everything you need to know about protecting and monetizing your music</p>
      </div>

      {/* Navigation */}
      <div className="guide-navigation">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            className={`nav-btn ${activeSection === section.id ? 'active' : ''}`}
            onClick={() => setActiveSection(section.id)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <section.icon size={20} />
            <span>{section.label}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Sections */}
      <AnimatePresence mode="wait">
        {activeSection === 'overview' && (
          <motion.div 
            className="overview-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🎯 Music Rights Overview</h3>
              <p>Understanding the landscape of music rights and royalties</p>
            </div>

            <div className="rights-comparison">
              <div className="comparison-card automatic">
                <div className="card-header">
                  <h4>Automatic Copyright</h4>
                  <div className="cost-badge free">FREE</div>
                </div>
                
                <div className="protection-level">
                  <span className="level-label">Protection Level:</span>
                  <span className="level-value basic">Basic</span>
                </div>
                
                <div className="benefits-list">
                  <h5>✅ What You Get:</h5>
                  <ul>
                    {copyrightInfo.automatic_copyright.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="limitations-list">
                  <h5>❌ Limitations:</h5>
                  <ul>
                    {copyrightInfo.automatic_copyright.limitations.map((limitation, index) => (
                      <li key={index}>{limitation}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="comparison-card formal">
                <div className="card-header">
                  <h4>Formal Registration</h4>
                  <div className="cost-badge paid">$45-$125</div>
                </div>
                
                <div className="protection-level">
                  <span className="level-label">Protection Level:</span>
                  <span className="level-value full">Full Legal Protection</span>
                </div>
                
                <div className="benefits-list">
                  <h5>✅ What You Get:</h5>
                  <ul>
                    {copyrightInfo.formal_registration.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="requirements-list">
                  <h5>📋 Requirements:</h5>
                  <ul>
                    {copyrightInfo.formal_registration.requirements.map((requirement, index) => (
                      <li key={index}>{requirement}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div className="quick-start-guide">
              <h3>🚀 Quick Start Checklist</h3>
              <div className="checklist">
                <div className="checklist-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>1. Create Your Music</h4>
                    <p>Record or write down your original composition (automatic copyright begins)</p>
                  </div>
                </div>
                
                <div className="checklist-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>2. Join a PRO</h4>
                    <p>Register with BMI (free), ASCAP ($50), or apply to SESAC (invitation only)</p>
                  </div>
                </div>
                
                <div className="checklist-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>3. Register with SoundExchange</h4>
                    <p>Free registration to collect digital performance royalties</p>
                  </div>
                </div>
                
                <div className="checklist-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>4. Formally Register Copyright</h4>
                    <p>$45-$125 for enhanced legal protection and enforcement rights</p>
                  </div>
                </div>
                
                <div className="checklist-item">
                  <CheckCircle size={20} />
                  <div>
                    <h4>5. Set Up Publishing</h4>
                    <p>Self-publish or find a publisher to maximize royalty collection</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'pros' && (
          <motion.div 
            className="pros-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🎵 Performance Rights Organizations (PROs)</h3>
              <p>Choose the right PRO to collect your performance royalties</p>
            </div>

            <div className="pro-comparison">
              {Object.entries(proOrganizations).map(([key, pro]) => (
                <motion.div
                  key={key}
                  className={`pro-card ${selectedPRO === key ? 'selected' : ''}`}
                  onClick={() => setSelectedPRO(selectedPRO === key ? null : key)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="pro-header">
                    <h4>{pro.name}</h4>
                    <div className="membership-info">
                      <span className="membership-fee">
                        Songwriter: {pro.membership_fee}
                      </span>
                      <span className="publisher-fee">
                        Publisher: {pro.publisher_fee}
                      </span>
                    </div>
                  </div>
                  
                  <div className="pro-stats">
                    <div className="stat">
                      <span className="stat-label">Founded</span>
                      <span className="stat-value">{pro.founded}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Members</span>
                      <span className="stat-value">{pro.members}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Payments</span>
                      <span className="stat-value">{pro.payment_schedule}</span>
                    </div>
                    <div className="stat">
                      <span className="stat-label">Countries</span>
                      <span className="stat-value">{pro.international_reach}</span>
                    </div>
                  </div>
                  
                  <p className="pro-description">{pro.description}</p>
                  
                  <div className="contact-info">
                    <a href={pro.website} target="_blank" rel="noopener noreferrer" className="website-link">
                      <ExternalLink size={16} />
                      <span>Visit Website</span>
                    </a>
                    <span className="phone-number">
                      <Phone size={16} />
                      <span>{pro.phone}</span>
                    </span>
                  </div>
                  
                  {selectedPRO === key && (
                    <motion.div 
                      className="pro-details"
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                    >
                      <div className="services-section">
                        <h5>🛠️ Services</h5>
                        <ul>
                          {pro.services.map((service, index) => (
                            <li key={index}>{service}</li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="how-to-join">
                        <h5>📝 How to Join</h5>
                        <ol>
                          {pro.how_to_join.map((step, index) => (
                            <li key={index}>{step}</li>
                          ))}
                        </ol>
                      </div>
                      
                      <div className="pros-cons">
                        <div className="pros-list">
                          <h6>✅ Pros</h6>
                          <ul>
                            {pro.pros.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                        
                        <div className="cons-list">
                          <h6>❌ Cons</h6>
                          <ul>
                            {pro.cons.map((item, index) => (
                              <li key={index}>{item}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="pro-recommendation">
              <h3>💡 Our Recommendation</h3>
              <div className="recommendation-card">
                <h4>For New Artists: Start with BMI</h4>
                <ul>
                  <li>✅ Free membership for songwriters</li>
                  <li>✅ Easy online application process</li>
                  <li>✅ Large repertoire and good digital tracking</li>
                  <li>✅ Strong international collection network</li>
                  <li>✅ You can always switch later if needed</li>
                </ul>
                
                <a 
                  href="https://www.bmi.com/join" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="join-button"
                >
                  <ExternalLink size={16} />
                  <span>Join BMI Now (Free)</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}

        {activeSection === 'calculator' && (
          <motion.div 
            className="calculator-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>🧮 Music Rights Cost Calculator</h3>
              <p>Calculate the total cost to properly protect and register your music</p>
            </div>

            <div className="calculator-form">
              <div className="form-group">
                <label>Number of Songs</label>
                <input 
                  type="number" 
                  min="1" 
                  max="100"
                  value={costCalculator.songs}
                  onChange={(e) => setCostCalculator({...costCalculator, songs: parseInt(e.target.value) || 1})}
                />
              </div>
              
              <div className="form-group">
                <label>Copyright Registration Type</label>
                <select 
                  value={costCalculator.registration_type}
                  onChange={(e) => setCostCalculator({...costCalculator, registration_type: e.target.value})}
                >
                  <option value="single">Individual Registration ($45 per song)</option>
                  <option value="collection">Collection Registration ($45 for all unpublished songs)</option>
                </select>
              </div>
              
              <div className="form-group">
                <label>Performance Rights Organization</label>
                <select 
                  value={costCalculator.pro_choice}
                  onChange={(e) => setCostCalculator({...costCalculator, pro_choice: e.target.value})}
                >
                  <option value="bmi">BMI (Free for songwriters)</option>
                  <option value="ascap">ASCAP ($50 for songwriters)</option>
                  <option value="sesac">SESAC (Invitation only)</option>
                </select>
              </div>
              
              <div className="form-group checkbox">
                <label>
                  <input 
                    type="checkbox"
                    checked={costCalculator.publisher}
                    onChange={(e) => setCostCalculator({...costCalculator, publisher: e.target.checked})}
                  />
                  <span>Set up as publisher (additional fees apply)</span>
                </label>
              </div>
              
              <div className="form-group checkbox">
                <label>
                  <input 
                    type="checkbox"
                    checked={costCalculator.soundexchange}
                    onChange={(e) => setCostCalculator({...costCalculator, soundexchange: e.target.checked})}
                  />
                  <span>Register with SoundExchange (Free)</span>
                </label>
              </div>
            </div>

            <div className="cost-breakdown">
              <h4>💰 Cost Breakdown</h4>
              {calculateCosts().breakdown.map((item, index) => (
                <div key={index} className="cost-item">
                  <span className="cost-description">{item.item}</span>
                  <span className="cost-amount">${item.cost}</span>
                </div>
              ))}
              
              <div className="total-cost">
                <span className="total-label">Total Cost:</span>
                <span className="total-amount">${calculateCosts().total}</span>
              </div>
            </div>

            <div className="calculator-notes">
              <h5>📝 Important Notes</h5>
              <ul>
                <li>Copyright registration fees are one-time costs per work or collection</li>
                <li>PRO memberships are typically annual (though BMI songwriter membership is free)</li>
                <li>SoundExchange registration is always free</li>
                <li>Collection registration only works for unpublished songs by the same author</li>
                <li>Publisher setup allows you to collect both writer and publisher shares of royalties</li>
              </ul>
            </div>
          </motion.div>
        )}

        {activeSection === 'faq' && (
          <motion.div 
            className="faq-section"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="section-header">
              <h3>❓ Frequently Asked Questions</h3>
              <p>Get answers to the most common music rights questions</p>
            </div>

            <div className="faq-categories">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="faq-category">
                  <h4>{category.category}</h4>
                  <div className="faq-questions">
                    {category.questions.map((faq, questionIndex) => {
                      const faqId = `${categoryIndex}-${questionIndex}`;
                      return (
                        <motion.div
                          key={faqId}
                          className="faq-item"
                          whileHover={{ scale: 1.01 }}
                        >
                          <button
                            className={`faq-question ${expandedFAQ === faqId ? 'expanded' : ''}`}
                            onClick={() => setExpandedFAQ(expandedFAQ === faqId ? null : faqId)}
                          >
                            <span>{faq.q}</span>
                            <ChevronDown 
                              size={20} 
                              className={`chevron ${expandedFAQ === faqId ? 'rotated' : ''}`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {expandedFAQ === faqId && (
                              <motion.div
                                className="faq-answer"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.3 }}
                              >
                                <p>{faq.a}</p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Quick Action Bar */}
      <div className="quick-actions">
        <h3>🚀 Quick Actions</h3>
        <div className="action-buttons">
          <a 
            href="https://www.copyright.gov/registration/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-btn primary"
          >
            <Shield size={20} />
            <span>Register Copyright</span>
          </a>
          
          <a 
            href="https://www.bmi.com/join" 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-btn"
          >
            <Music size={20} />
            <span>Join BMI (Free)</span>
          </a>
          
          <a 
            href="https://www.soundexchange.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="action-btn"
          >
            <Radio size={20} />
            <span>Register SoundExchange</span>
          </a>
          
          <button className="action-btn">
            <Download size={20} />
            <span>Download Guide PDF</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MusicRightsGuide;

