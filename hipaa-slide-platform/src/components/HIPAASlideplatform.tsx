import React, { useState, useEffect } from 'react';
import { 
  Upload, 
  Search, 
  User, 
  Settings, 
  FileText, 
  BarChart3, 
  ShoppingCart, 
  Lock, 
  Eye, 
  Download, 
  RotateCw, 
  ZoomIn, 
  ZoomOut, 
  Layers, 
  Edit3, 
  Save, 
  Share2, 
  Bell, 
  Shield, 
  CheckCircle, 
  Clock, 
  AlertTriangle,
  LogOut,
  Menu,
  X,
  Trash2,
  Filter,
  Package,
  Microscope,
  Activity,
  Database,
  Cpu,
  Star,
  Users,
  TrendingUp,
  Award,
  Building2,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Play,
  Calendar,
  BookOpen,
  HelpCircle
} from 'lucide-react';

// Mock Data
const mockUsers = {
  patient: { id: '1', email: 'patient@example.com', role: 'Patient', organization: 'Self', name: 'John Doe' },
  business: { id: '2', email: 'business@hospital.com', role: 'Business User', organization: 'City Hospital', name: 'Dr. Sarah Smith' },
  pci: { id: '3', email: 'analyst@pcibio.com', role: 'PCI User', organization: 'PCI', name: 'Alex Johnson' },
  admin: { id: '4', email: 'admin@pcibio.com', role: 'PCI Admin', organization: 'PCI', name: 'Admin User' }
};

const mockSlides = [
  { id: 'slide001', filename: 'breast_biopsy_001.svs', upload_date: '2025-08-15', status: 'processed', patient_hash: 'pat_hash_001', analysis_status: 'completed' },
  { id: 'slide002', filename: 'lung_tissue_002.scn', upload_date: '2025-08-14', status: 'processing', patient_hash: 'pat_hash_002', analysis_status: 'queued' },
  { id: 'slide003', filename: 'liver_sample_003.tiff', upload_date: '2025-08-13', status: 'uploaded', patient_hash: 'pat_hash_003', analysis_status: 'pending' }
];

const mockServices = [
  { 
    id: 'svc001', 
    name: 'Basic Pathology Analysis', 
    price: 150, 
    description: 'Standard tissue analysis with automated cell counting and basic measurements',
    features: ['Automated cell counting', 'Basic morphometry', '24-48h turnaround', 'PDF report']
  },
  { 
    id: 'svc002', 
    name: 'Advanced AI Analysis', 
    price: 300, 
    description: 'Comprehensive AI-powered analysis with deep learning algorithms',
    features: ['AI pattern recognition', 'Biomarker quantification', 'Detailed reporting', 'Quality metrics']
  },
  { 
    id: 'svc003', 
    name: 'Priority Processing', 
    price: 100, 
    description: 'Fast-track processing with guaranteed 24-hour turnaround',
    features: ['24h guarantee', 'Priority queue', 'Real-time updates', 'Rush delivery']
  }
];

const HIPAASlideplatform = () => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [currentPage, setCurrentPage] = useState('login');
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [selectedSlide, setSelectedSlide] = useState<any>(null);
  const [cart, setCart] = useState<any[]>([]);
  const [sessionTimer, setSessionTimer] = useState(1800);

  // Session timeout handler
  useEffect(() => {
    if (currentUser && sessionTimer > 0) {
      const timer = setTimeout(() => setSessionTimer(sessionTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else if (sessionTimer === 0) {
      handleLogout();
    }
  }, [sessionTimer, currentUser]);

  const handleLogin = (userType: string) => {
    setCurrentUser(mockUsers[userType as keyof typeof mockUsers]);
    setCurrentPage('dashboard');
    setSessionTimer(1800);
  };

  const handleLogout = () => {
    setCurrentUser(null);
    setCurrentPage('login');
    setCart([]);
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 200);
  };

  const addToCart = (service: any) => {
    setCart(prev => [...prev, service]);
  };

  const removeFromCart = (serviceId: string) => {
    setCart(prev => prev.filter(item => item.id !== serviceId));
  };

  // Professional Login Component
  const LoginComponent = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <Microscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Precision Cellular Immunology</h1>
                <p className="text-sm text-gray-600">Digital Pathology Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 font-medium">About Us</a>
              <a href="#products" className="text-gray-600 hover:text-blue-600 font-medium">Products</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 font-medium">Contact</a>
              <a href="#store" className="text-gray-600 hover:text-blue-600 font-medium">Online Store</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex items-center justify-center py-12 px-4">
        <div className="max-w-md w-full">
          {/* Login Card */}
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
            <div className="text-center mb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Access Portal</h2>
              <p className="text-gray-600">HIPAA-Compliant Digital Pathology Platform</p>
            </div>
            
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-center mb-6 text-gray-800">Select User Type</h3>
              
              <button 
                onClick={() => handleLogin('patient')} 
                className="w-full p-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-2">
                  <User className="w-5 h-5" />
                  <span>Patient Portal</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleLogin('business')} 
                className="w-full p-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Building2 className="w-5 h-5" />
                  <span>Clinical User</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleLogin('pci')} 
                className="w-full p-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white rounded-xl hover:from-purple-700 hover:to-purple-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Microscope className="w-5 h-5" />
                  <span>Analyst Portal</span>
                </div>
              </button>
              
              <button 
                onClick={() => handleLogin('admin')} 
                className="w-full p-4 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <div className="flex items-center justify-center space-x-2">
                  <Settings className="w-5 h-5" />
                  <span>Administrator</span>
                </div>
              </button>
            </div>
            
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center space-x-2 text-blue-800">
                <Shield className="w-4 h-4" />
                <p className="text-sm font-medium">Enterprise Security</p>
              </div>
              <p className="text-xs text-blue-700 mt-1">
                End-to-end encryption • HIPAA compliant • SOC 2 certified
              </p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
              <Activity className="w-6 h-6 text-blue-600 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">AI Analysis</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
              <Database className="w-6 h-6 text-purple-600 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">Secure Storage</p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 text-center">
              <TrendingUp className="w-6 h-6 text-green-600 mx-auto mb-2" />
              <p className="text-xs font-medium text-gray-700">Analytics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Header Component
  const Header = () => (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center space-x-4">
          <button onClick={() => setSidebarOpen(!sidebarOpen)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
              <Microscope className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">PCI Digital Pathology</h1>
              <p className="text-xs text-gray-500">HIPAA Compliant Platform</p>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="hidden md:flex items-center space-x-3 text-sm text-gray-600 bg-gray-50 rounded-lg px-3 py-2">
            <Clock className="w-4 h-4" />
            <span>Session: {Math.floor(sessionTimer / 60)}:{(sessionTimer % 60).toString().padStart(2, '0')}</span>
          </div>
          
          <button className="relative p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>
          
          <div className="flex items-center space-x-3 bg-gray-50 rounded-lg px-3 py-2">
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900">{currentUser?.name}</p>
              <p className="text-xs text-gray-500">{currentUser?.role}</p>
            </div>
            <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">{currentUser?.name?.charAt(0)}</span>
            </div>
          </div>
          
          <button 
            onClick={handleLogout} 
            className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );

  // Sidebar Component
  const Sidebar = () => {
    const menuItems = [
      { key: 'dashboard', icon: BarChart3, label: 'Dashboard', roles: ['Patient', 'Business User', 'PCI User', 'PCI Admin'] },
      { key: 'upload', icon: Upload, label: 'Upload Slides', roles: ['Business User', 'PCI User', 'PCI Admin'] },
      { key: 'slides', icon: FileText, label: 'My Slides', roles: ['Patient', 'Business User', 'PCI User', 'PCI Admin'] },
      { key: 'analysis', icon: Cpu, label: 'Analysis Queue', roles: ['PCI User', 'PCI Admin'] },
      { key: 'reports', icon: BookOpen, label: 'Reports', roles: ['Patient', 'Business User', 'PCI User', 'PCI Admin'] },
      { key: 'catalog', icon: Package, label: 'Services', roles: ['Business User', 'PCI User', 'PCI Admin'] },
      { key: 'cart', icon: ShoppingCart, label: `Cart (${cart.length})`, roles: ['Business User', 'PCI User', 'PCI Admin'] },
      { key: 'admin', icon: Settings, label: 'Admin Panel', roles: ['PCI Admin'] }
    ];

    return (
      <aside className={`bg-gradient-to-b from-slate-900 to-slate-800 text-white w-64 min-h-screen ${sidebarOpen ? 'block' : 'hidden'} lg:block shadow-xl`}>
        <div className="p-6 border-b border-slate-700">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-white">Navigation</h2>
              <p className="text-xs text-slate-400 mt-1">{currentUser?.organization}</p>
            </div>
            <button onClick={() => setSidebarOpen(false)} className="lg:hidden p-1 hover:bg-slate-700 rounded">
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
        
        <nav className="mt-6 px-4">
          {menuItems
            .filter(item => item.roles.includes(currentUser?.role))
            .map(item => (
              <button
                key={item.key}
                onClick={() => setCurrentPage(item.key)}
                className={`w-full flex items-center space-x-3 px-4 py-3 mb-2 text-left rounded-lg transition-all duration-200 ${
                  currentPage === item.key 
                    ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                    : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {currentPage === item.key && <ChevronRight className="w-4 h-4 ml-auto" />}
              </button>
            ))}
        </nav>

        {/* Sidebar Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-700">
          <div className="flex items-center space-x-2 text-slate-400 text-xs">
            <Shield className="w-4 h-4" />
            <span>HIPAA Compliant</span>
          </div>
        </div>
      </aside>
    );
  };

  // Enhanced Dashboard Component
  const Dashboard = () => (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Welcome back, {currentUser?.name}. Here's your analysis overview.</p>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Total Slides</p>
                <p className="text-3xl font-bold text-gray-900">{mockSlides.length}</p>
                <p className="text-xs text-green-600 mt-1">↗ 12% from last month</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Processing</p>
                <p className="text-3xl font-bold text-gray-900">1</p>
                <p className="text-xs text-yellow-600 mt-1">2 in queue</p>
              </div>
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-yellow-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Completed</p>
                <p className="text-3xl font-bold text-gray-900">1</p>
                <p className="text-xs text-green-600 mt-1">100% accuracy</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">Cart Value</p>
                <p className="text-3xl font-bold text-gray-900">${cart.reduce((sum, item) => sum + item.price, 0)}</p>
                <p className="text-xs text-purple-600 mt-1">{cart.length} items</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                <ShoppingCart className="w-6 h-6 text-purple-600" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Activity */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              <p className="text-sm text-gray-600">Latest slide uploads and analyses</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                {mockSlides.map(slide => (
                  <div key={slide.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">{slide.filename}</p>
                        <p className="text-sm text-gray-600">{slide.upload_date}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        slide.status === 'processed' ? 'bg-green-100 text-green-800' :
                        slide.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {slide.status}
                      </span>
                      <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* System Status */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="p-6 border-b border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
              <p className="text-sm text-gray-600">Platform health overview</p>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="font-medium text-gray-900">System Health</span>
                  </div>
                  <span className="text-green-600 font-semibold">Operational</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                      <Shield className="w-4 h-4 text-blue-600" />
                    </div>
                    <span className="font-medium text-gray-900">HIPAA Compliance</span>
                  </div>
                  <span className="text-blue-600 font-semibold">Active</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <Lock className="w-4 h-4 text-purple-600" />
                    </div>
                    <span className="font-medium text-gray-900">Encryption</span>
                  </div>
                  <span className="text-purple-600 font-semibold">AES-256</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center">
                      <Activity className="w-4 h-4 text-indigo-600" />
                    </div>
                    <span className="font-medium text-gray-900">Uptime</span>
                  </div>
                  <span className="text-indigo-600 font-semibold">99.9%</span>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-green-800">SOC 2 Type II Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Upload Component
  const UploadComponent = () => (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Upload Digital Slides</h1>
          <p className="text-gray-600">Securely upload your pathology slides for AI-powered analysis</p>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">File Upload</h3>
          
          <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-blue-400 hover:bg-blue-50 transition-colors">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Drag and drop your slides here</h4>
            <p className="text-gray-600 mb-4">or click to browse your files</p>
            <p className="text-sm text-gray-500 mb-6">Supported formats: .svs, .scn, .tiff, .ndpi • Max size: 2GB per file</p>
            
            <div className="space-y-4">
              <button 
                onClick={simulateUpload}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Select Files
              </button>
              
              {uploadProgress > 0 && (
                <div className="max-w-md mx-auto">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Uploading...</span>
                    <span>{uploadProgress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div 
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 h-3 rounded-full transition-all duration-300" 
                      style={{ width: `${uploadProgress}%` }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          </div>
          
          <div className="mt-8 p-6 bg-amber-50 rounded-xl border border-amber-200">
            <div className="flex items-start space-x-3">
              <AlertTriangle className="w-5 h-5 text-amber-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-amber-800 mb-1">HIPAA Compliance Notice</h4>
                <p className="text-sm text-amber-700">
                  All uploaded files are automatically encrypted and de-identified. Patient data is stored separately and accessed only during report generation.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Alternative Upload Method */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Alternative: Server Path Upload</h3>
          <p className="text-gray-600 mb-6">Connect to existing DICOM or network storage</p>
          
          <div className="flex space-x-4">
            <input 
              type="text" 
              placeholder="/network/path/to/slides" 
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
            <button className="bg-gradient-to-r from-gray-600 to-gray-700 text-white px-8 py-3 rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-200 font-semibold">
              Connect
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Slides Component
  const SlidesComponent = () => (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Digital Slide Library</h1>
            <p className="text-gray-600">Manage and analyze your pathology slides</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search slides..." 
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <button className="flex items-center space-x-2 bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
              <Filter className="w-4 h-4" />
              <span>Filter</span>
            </button>
          </div>
        </div>
        
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Slide</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Upload Date</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Status</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Analysis</th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {mockSlides.map(slide => (
                  <tr key={slide.id} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                          <FileText className="w-5 h-5 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{slide.filename}</p>
                          <p className="text-sm text-gray-500">{slide.patient_hash.substring(0, 12)}...</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">{slide.upload_date}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        slide.status === 'processed' ? 'bg-green-100 text-green-800' :
                        slide.status === 'processing' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {slide.status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                        slide.analysis_status === 'completed' ? 'bg-green-100 text-green-800' :
                        slide.analysis_status === 'queued' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {slide.analysis_status}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center space-x-2">
                        <button 
                          onClick={() => {
                            setSelectedSlide(slide);
                            setCurrentPage('viewer');
                          }}
                          className="p-2 text-blue-600 hover:bg-blue-100 rounded-lg transition-colors"
                          title="View Slide"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-green-600 hover:bg-green-100 rounded-lg transition-colors" title="Download">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-purple-600 hover:bg-purple-100 rounded-lg transition-colors" title="Share">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );

  // Enhanced Service Catalog
  const ServiceCatalog = () => (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Analysis Services</h1>
          <p className="text-gray-600">Professional pathology analysis powered by AI</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockServices.map(service => (
            <div key={service.id} className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 hover:shadow-lg transition-all duration-200 transform hover:-translate-y-1">
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
              
              <div className="space-y-3 mb-6">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                <div>
                  <span className="text-3xl font-bold text-gray-900">${service.price}</span>
                  <span className="text-gray-500 text-sm ml-1">per slide</span>
                </div>
                <button 
                  onClick={() => addToCart(service)}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Enhanced Cart Component
  const CartComponent = () => {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    
    return (
      <div className="p-6 bg-gray-50 min-h-screen">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Shopping Cart</h1>
            <p className="text-gray-600">Review your selected analysis services</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-sm border border-gray-100">
            {cart.length === 0 ? (
              <div className="p-12 text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Your cart is empty</h3>
                <p className="text-gray-600 mb-6">Add some analysis services to get started</p>
                <button 
                  onClick={() => setCurrentPage('catalog')}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 font-semibold"
                >
                  Browse Services
                </button>
              </div>
            ) : (
              <div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Selected Services</h3>
                  {cart.map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-gray-100 rounded-lg mb-4">
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                          <Package className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900">{item.name}</h4>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4">
                        <span className="text-xl font-bold text-gray-900">${item.price}</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="p-2 text-red-600 hover:bg-red-100 rounded-lg transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="border-t border-gray-100 p-6">
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <p className="text-sm text-gray-600">Total Amount</p>
                      <p className="text-3xl font-bold text-gray-900">${total}</p>
                    </div>
                    <button className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-8 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all duration-200 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // Main render function
  if (!currentUser) {
    return <LoginComponent />;
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 overflow-auto">
          {currentPage === 'dashboard' && <Dashboard />}
          {currentPage === 'upload' && <UploadComponent />}
          {currentPage === 'slides' && <SlidesComponent />}
          {currentPage === 'catalog' && <ServiceCatalog />}
          {currentPage === 'cart' && <CartComponent />}
        </main>
      </div>
    </div>
  );
};

export default HIPAASlideplatform;