import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ExternalLink, Github, Check, X, AlertCircle, Zap, Moon, Brain,
  Leaf, Eye, FileText, GitBranch, TestTube, Code
} from 'lucide-react';

// ============================================================================
// APPS & REPOSITORIES PAGE - REVVEL MASTER STANDARDS COMPLIANCE HUB
// ============================================================================

const AppsRepository = () => {
  const [accessibilityMode, setAccessibilityMode] = useState('default');
  const [selectedApp, setSelectedApp] = useState(null);

  // Comprehensive apps database with REVVEL compliance data
  const apps = [
    {
      id: 'pawsitting',
      name: 'PawSitting',
      tagline: "Reese's Northern Colorado pet & farm animal sitting business",
      description: 'Purple-themed pet sitting platform for booking and managing animal care services',
      color: '#9333EA', // Purple
      icon: '🐾',
      github: 'https://github.com/MIDNGHTSAPPHIRE/Pawsitting',
      deployed: 'https://replit.com/t/risingaloha/repls/Pawfectpetsitting',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'thealttext',
      name: 'TheAltText',
      tagline: 'E-commerce SEO & WCAG AAA Compliance',
      description: 'AI-powered alt text generation for e-commerce SEO optimization and accessibility',
      color: '#3B82F6', // Blue
      icon: '⚡',
      github: 'https://github.com/MIDNGHTSAPPHIRE/thealttext',
      deployed: 'https://3001-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: true,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'inthewild',
      name: 'InTheWild',
      tagline: 'AI Micro-App Generation Engine',
      description: 'Generative AI platform for creating micro-applications and automation workflows',
      color: '#10B981', // Green
      icon: '🌍',
      github: 'https://github.com/MIDNGHTSAPPHIRE/in-the-wild',
      deployed: 'https://3000-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'forensicstudio',
      name: 'Forensic Studio',
      tagline: 'Batch Analysis & AI Reconstruction',
      description: 'Advanced image analysis and AI-powered forensic reconstruction tool',
      color: '#3498DB', // Cyan
      icon: '🔬',
      github: 'https://github.com/MIDNGHTSAPPHIRE/revvel-forensic-studio',
      deployed: 'https://8004-i97542eaxaub6sbc4d71a-aba7ea15.us2.manus.computer/docs',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'godsoinsurance',
      name: 'GodsofInsurance',
      tagline: 'Insurance Lead Generation & Management',
      description: 'AI-powered insurance lead generation and client management platform',
      color: '#E74C3C', // Red
      icon: '🛡️',
      github: 'https://github.com/MIDNGHTSAPPHIRE/GodsofInsurance',
      deployed: 'https://replit.com/@angelreporters/InsuranceLeadPro',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'datascope',
      name: 'DataScope',
      tagline: 'Universal Data Intelligence Platform',
      description: 'Filter-based data intelligence platform with Zillow-like search and analytics',
      color: '#9B59B6', // Purple
      icon: '📊',
      github: 'https://github.com/MIDNGHTSAPPHIRE/datascope-standalone',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'marketingautomation',
      name: 'Marketing Automation',
      tagline: 'Social Media & Affiliate Link Automation',
      description: 'Automated affiliate link generation and multi-platform social media posting',
      color: '#F39C12', // Orange
      icon: '📱',
      github: 'https://github.com/MIDNGHTSAPPHIRE/marketing-automation-standalone',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'projectface',
      name: 'Project Face',
      tagline: 'AI Skin Analysis & Climate Integration',
      description: 'Advanced skin analysis with weather and climate data integration',
      color: '#E67E22', // Dark Orange
      icon: '🎭',
      github: 'https://github.com/MIDNGHTSAPPHIRE/project-face',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'dataroutor',
      name: 'Data Router',
      tagline: 'Universal Data Routing Engine',
      description: 'Plugin-driven data staging and routing engine for multi-source integration',
      color: '#16A34A', // Green
      icon: '🔀',
      github: 'https://github.com/MIDNGHTSAPPHIRE/universal-data-router',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'aibenchmarking',
      name: 'AI Benchmarking',
      tagline: 'LLM Performance Analysis & Comparison',
      description: 'Comprehensive AI model benchmarking and performance comparison tool',
      color: '#0891B2', // Cyan
      icon: '⚙️',
      github: 'https://github.com/MIDNGHTSAPPHIRE/ai-benchmarking-tool',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'instantcertificates',
      name: 'Instant Certificates',
      tagline: 'Automated Ordination & Certification',
      description: 'Fast-track ordination and professional certification generation',
      color: '#DC2626', // Red
      icon: '📜',
      github: 'https://github.com/MIDNGHTSAPPHIRE/instant-ordain-certificate-pro',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'animeascendwellness',
      name: 'Anime Ascend Wellness',
      tagline: 'Wellness & Anime Community Platform',
      description: 'Wellness tracking and community engagement for anime enthusiasts',
      color: '#EC4899', // Pink
      icon: '✨',
      github: 'https://github.com/MIDNGHTSAPPHIRE/anime-ascend-wellness',
      deployed: null,
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'curlcare',
      name: 'CurlCare',
      tagline: 'Hair Care & Curl Management',
      description: 'Personalized hair care recommendations and curl pattern tracking',
      color: '#D97706', // Amber
      icon: '💇',
      github: 'https://github.com/MIDNGHTSAPPHIRE/curlcare',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'mindmappr',
      name: 'MindMappr',
      tagline: 'AI-Powered Mind Mapping & Planning',
      description: 'Intelligent mind mapping tool for brainstorming and project planning',
      color: '#6366F1', // Indigo
      icon: '🧠',
      github: 'https://github.com/MIDNGHTSAPPHIRE/mindmappr-setup',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
    {
      id: 'sips',
      name: 'Starbucks Secret Sips',
      tagline: 'Secret Menu & Drink Recipes',
      description: 'Curated collection of secret Starbucks menu items and custom drink recipes',
      color: '#00704A', // Starbucks Green
      icon: '☕',
      github: 'https://github.com/MIDNGHTSAPPHIRE/StarbucksSecretSips',
      deployed: 'https://replit.com/t/risingaloha/repls/StarbucksSecretMenu',
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'rentable',
      name: 'Rentable',
      tagline: 'Universal Rental Marketplace',
      description: 'Peer-to-peer rental platform for any item or service',
      color: '#059669', // Emerald
      icon: '🏠',
      github: 'https://github.com/MIDNGHTSAPPHIRE/rent-anything-hub',
      deployed: null,
      compliance: {
        neurodivergent: true,
        ecoCode: true,
        noBlueLight: true,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: true,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Partial',
    },
    {
      id: 'ordainchurch',
      name: 'Ordain.Church',
      tagline: 'Fast-Track Ordination Platform',
      description: 'Streamlined ordination and religious certification services',
      color: '#7C3AED', // Violet
      icon: '✝️',
      github: 'https://github.com/MIDNGHTSAPPHIRE/instant-ordain-certificate-pro',
      deployed: null,
      compliance: {
        neurodivergent: false,
        ecoCode: false,
        noBlueLight: false,
        docs: { blueprint: false, roadmap: false, kanban: false, investors: false },
        tests: false,
        cicd: false,
        wcagAAA: false,
        dyslexic: false,
        stripe: false,
      },
      complianceLevel: 'Not Started',
    },
  ];

  // Accessibility mode styles
  const getModeStyles = () => {
    const baseStyles = {
      default: {
        bg: 'bg-gradient-to-br from-slate-900 to-slate-800',
        text: 'text-white',
        card: 'bg-slate-800 border-slate-700',
      },
      neurodivergent: {
        bg: 'bg-white',
        text: 'text-slate-900',
        card: 'bg-slate-50 border-slate-300',
        fontSize: 'text-lg',
        lineHeight: 'leading-relaxed',
      },
      ecoCode: {
        bg: 'bg-slate-950',
        text: 'text-slate-100',
        card: 'bg-slate-900 border-slate-800',
        noAnimations: true,
      },
      noBlueLight: {
        bg: 'bg-amber-950',
        text: 'text-amber-50',
        card: 'bg-amber-900 border-amber-800',
      },
    };
    return baseStyles[accessibilityMode] || baseStyles.default;
  };

  const modeStyles = getModeStyles();

  return (
    <div className={`apps-repository min-h-screen ${modeStyles.bg} ${modeStyles.text} transition-colors duration-300`}>
      {/* Header with Accessibility Mode Toggle */}
      <div className="sticky top-0 z-50 backdrop-blur-md border-b border-opacity-10 border-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-4xl font-bold">🚀 Apps & Repositories</h1>
              <p className={`mt-2 ${modeStyles.text} opacity-80`}>
                REVVEL Master Standards Compliance Hub
              </p>
            </div>

            {/* Accessibility Mode Toggle - PROMINENT */}
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold opacity-90">Accessibility Modes:</label>
              <div className="flex flex-wrap gap-2">
                {[
                  { mode: 'default', label: 'Default', icon: '🎨' },
                  { mode: 'neurodivergent', label: 'Neurodivergent', icon: '🧠' },
                  { mode: 'ecoCode', label: 'ECO CODE', icon: '🔋' },
                  { mode: 'noBlueLight', label: 'No Blue Light', icon: '🌙' },
                ].map((item) => (
                  <motion.button
                    key={item.mode}
                    onClick={() => setAccessibilityMode(item.mode)}
                    className={`px-3 py-2 rounded-lg font-medium text-sm transition-all ${
                      accessibilityMode === item.mode
                        ? 'bg-blue-500 text-white shadow-lg'
                        : `${modeStyles.card} opacity-60 hover:opacity-100`
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.icon} {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: 'Total Apps', value: apps.length, icon: '📦' },
            { label: 'Deployed', value: apps.filter(a => a.deployed).length, icon: '✅' },
            { label: 'Partial Compliance', value: apps.filter(a => a.complianceLevel === 'Partial').length, icon: '⚠️' },
            { label: 'Priority Modes', value: '3', icon: '🎯' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className={`${modeStyles.card} rounded-lg p-4 border`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
            >
              <div className="text-2xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-sm opacity-70">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {apps.map((app, idx) => (
              <motion.div
                key={app.id}
                className={`${modeStyles.card} rounded-xl border overflow-hidden cursor-pointer transition-all hover:shadow-xl`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => setSelectedApp(app)}
                whileHover={accessibilityMode !== 'ecoCode' ? { y: -5 } : {}}
              >
                {/* App Header */}
                <div
                  className="p-6 text-white"
                  style={{
                    background: `linear-gradient(135deg, ${app.color}88, ${app.color}44)`,
                  }}
                >
                  <div className="flex items-start justify-between">
                    <div className="text-5xl">{app.icon}</div>
                    <div className="flex gap-2">
                      {app.deployed && (
                        <a
                          href={app.deployed}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <ExternalLink size={18} />
                        </a>
                      )}
                      <a
                        href={app.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white bg-opacity-20 rounded-lg hover:bg-opacity-30 transition-all"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Github size={18} />
                      </a>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mt-4">{app.name}</h3>
                  <p className="text-sm opacity-90 mt-1">{app.tagline}</p>
                </div>

                {/* Compliance Badges */}
                <div className="p-6">
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-3 opacity-70">PRIORITY MODES</h4>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {[
                        {
                          key: 'neurodivergent',
                          label: 'Neurodivergent',
                          icon: Brain,
                        },
                        {
                          key: 'ecoCode',
                          label: 'ECO CODE',
                          icon: Leaf,
                        },
                        {
                          key: 'noBlueLight',
                          label: 'No Blue Light',
                          icon: Moon,
                        },
                      ].map((mode) => (
                        <div
                          key={mode.key}
                          className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-medium ${
                            app.compliance[mode.key]
                              ? 'bg-green-500 bg-opacity-20 text-green-600'
                              : 'bg-gray-500 bg-opacity-20 text-gray-600'
                          }`}
                        >
                          <mode.icon size={14} />
                          {app.compliance[mode.key] ? <Check size={14} /> : <X size={14} />}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Standards */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2 opacity-70">STANDARDS</h4>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      {[
                        { label: 'Tests', key: 'tests', icon: TestTube },
                        { label: 'CI/CD', key: 'cicd', icon: Code },
                        { label: 'WCAG AAA', key: 'wcagAAA', icon: Eye },
                        { label: 'Docs', key: 'docs', icon: FileText },
                      ].map((item) => (
                        <div
                          key={item.key}
                          className={`flex items-center gap-1 px-2 py-1 rounded ${
                            item.key === 'docs'
                              ? app.compliance.docs.blueprint ||
                                app.compliance.docs.roadmap ||
                                app.compliance.docs.kanban ||
                                app.compliance.docs.investors
                                ? 'bg-blue-500 bg-opacity-20 text-blue-600'
                                : 'bg-gray-500 bg-opacity-20 text-gray-600'
                              : app.compliance[item.key]
                              ? 'bg-blue-500 bg-opacity-20 text-blue-600'
                              : 'bg-gray-500 bg-opacity-20 text-gray-600'
                          }`}
                        >
                          <item.icon size={12} />
                          {item.label}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Compliance Level */}
                  <div className="pt-4 border-t border-opacity-20 border-white">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-semibold opacity-70">Compliance</span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          app.complianceLevel === 'Full'
                            ? 'bg-green-500 text-white'
                            : app.complianceLevel === 'Partial'
                            ? 'bg-yellow-500 text-white'
                            : 'bg-red-500 text-white'
                        }`}
                      >
                        {app.complianceLevel}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal for detailed app info */}
      <AnimatePresence>
        {selectedApp && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedApp(null)}
          >
            <motion.div
              className={`${modeStyles.card} rounded-2xl max-w-2xl w-full max-h-96 overflow-y-auto border`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-3xl font-bold mb-2">{selectedApp.name}</h2>
                    <p className="opacity-70">{selectedApp.description}</p>
                  </div>
                  <button
                    onClick={() => setSelectedApp(null)}
                    className="text-2xl opacity-50 hover:opacity-100"
                  >
                    ✕
                  </button>
                </div>

                {/* Detailed Compliance Info */}
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Priority Accessibility Modes</h3>
                    <div className="space-y-2">
                      {[
                        { key: 'neurodivergent', label: 'Neurodivergent Mode', desc: 'ADHD/autism-friendly UI' },
                        { key: 'ecoCode', label: 'ECO CODE Mode', desc: 'Low-power, minimal animations' },
                        { key: 'noBlueLight', label: 'No Blue Light Mode', desc: 'Warm palette for eye strain' },
                      ].map((mode) => (
                        <div key={mode.key} className="flex items-start gap-3">
                          {selectedApp.compliance[mode.key] ? (
                            <Check className="text-green-500 flex-shrink-0 mt-1" size={20} />
                          ) : (
                            <X className="text-red-500 flex-shrink-0 mt-1" size={20} />
                          )}
                          <div>
                            <div className="font-medium">{mode.label}</div>
                            <div className="text-sm opacity-70">{mode.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-opacity-20 border-white">
                    <h3 className="font-semibold mb-2">REVVEL Standards</h3>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>
                        <div className="opacity-70">Documentation</div>
                        <div className="font-medium">
                          {selectedApp.compliance.docs.blueprint ? '✓' : '○'} Blueprint
                        </div>
                        <div className="font-medium">
                          {selectedApp.compliance.docs.roadmap ? '✓' : '○'} Roadmap
                        </div>
                      </div>
                      <div>
                        <div className="opacity-70">Quality</div>
                        <div className="font-medium">
                          {selectedApp.compliance.tests ? '✓' : '○'} Tests
                        </div>
                        <div className="font-medium">
                          {selectedApp.compliance.cicd ? '✓' : '○'} CI/CD
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-6 pt-6 border-t border-opacity-20 border-white">
                  <a
                    href={selectedApp.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
                  >
                    <Github size={18} /> View on GitHub
                  </a>
                  {selectedApp.deployed && (
                    <a
                      href={selectedApp.deployed}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-green-500 text-white rounded-lg font-medium hover:bg-green-600 transition-colors flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={18} /> Open App
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AppsRepository;
