import React, { useState } from 'react';
import { Link, Routes, Route, useLocation } from 'react-router-dom';
import {
  Squares2X2Icon,
  ClipboardDocumentListIcon,
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
  UsersIcon,
  AcademicCapIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon
} from '@heroicons/react/24/outline';

import ExamManagement from './ExamManagement';
import FeedbackManagement from './FeedbackManagement';
import QuestionBank from './QuestionBank';
import ResultManagement from '../Admin/ResultsManagement';
import SecuritySettings from './SecuritySettings';
import Profile from './Profile';

const AdminDashboard = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: Squares2X2Icon, path: '/admin' },
    { name: 'Exam Management', icon: ClipboardDocumentListIcon, path: '/admin/exams' },
    { name: 'Feedback Management', icon: ChatBubbleLeftRightIcon, path: '/admin/feedback' },
    { name: 'Question Bank', icon: QuestionMarkCircleIcon, path: '/admin/questions' },
    { name: 'Result Management', icon: ChartBarIcon, path: '/admin/results' },
    { name: 'Security Settings', icon: ShieldCheckIcon, path: '/admin/security' },
    { name: 'Profile', icon: UserCircleIcon, path: '/admin/profile' },
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center">
                <h1 className="text-xl font-bold text-gray-900">Admin Portal</h1>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center sm:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="block h-6 w-6" />
                ) : (
                  <Bars3Icon className="block h-6 w-6" />
                )}
              </button>
            </div>

            {/* Desktop navigation */}
            <div className="hidden sm:flex sm:space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`inline-flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    isActivePath(item.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  <item.icon className="h-5 w-5 mr-2" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile navigation */}
        {isMobileMenuOpen && (
          <div className="sm:hidden">
            <div className="pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`flex items-center px-4 py-2 text-base font-medium ${
                    isActivePath(item.path)
                      ? 'bg-blue-50 text-blue-700'
                      : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <item.icon className="h-5 w-5 mr-3" />
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <Routes>
          <Route path="/" element={<DashboardContent />} />
          <Route path="/exams" element={<ExamManagement />} />
          <Route path="/feedback" element={<FeedbackManagement />} />
          <Route path="/questions" element={<QuestionBank />} />
          <Route path="/results" element={<ResultManagement />} />
          <Route path="/security" element={<SecuritySettings />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

// Dashboard Stats Component
const StatsCard = ({ title, value, icon: Icon, change, changeType }) => (
  <div className="bg-white rounded-lg shadow p-6">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm font-medium text-gray-600">{title}</p>
        <p className="text-2xl font-semibold text-gray-900 mt-2">{value}</p>
      </div>
      <div className={`p-3 rounded-full ${
        title.includes('Pending') ? 'bg-yellow-100' :
        title.includes('Active') ? 'bg-blue-100' :
        title.includes('Completed') ? 'bg-green-100' : 'bg-purple-100'
      }`}>
        <Icon className={`w-6 h-6 ${
          title.includes('Pending') ? 'text-yellow-600' :
          title.includes('Active') ? 'text-blue-600' :
          title.includes('Completed') ? 'text-green-600' : 'text-purple-600'
        }`} />
      </div>
    </div>
    {change && (
      <div className="mt-2 flex items-center">
        <span className={`text-sm ${changeType === 'increase' ? 'text-green-600' : 'text-red-600'}`}>
          {changeType === 'increase' ? '↑' : '↓'} {change}%
        </span>
        <span className="text-sm text-gray-500 ml-2">from last month</span>
      </div>
    )}
  </div>
);

// Recent Activity Component
const ActivityItem = ({ type, title, time, status }) => (
  <div className="flex items-center py-3">
    <div className={`p-2 rounded-full mr-4 ${
      type === 'exam' ? 'bg-blue-100' :
      type === 'feedback' ? 'bg-purple-100' :
      'bg-green-100'
    }`}>
      {type === 'exam' ? <ClipboardDocumentListIcon className="w-5 h-5 text-blue-600" /> :
       type === 'feedback' ? <ChatBubbleLeftRightIcon className="w-5 h-5 text-purple-600" /> :
       <CheckCircleIcon className="w-5 h-5 text-green-600" />}
    </div>
    <div className="flex-1">
      <p className="text-sm font-medium text-gray-900">{title}</p>
      <p className="text-xs text-gray-500">{time}</p>
    </div>
    <div className={`px-3 py-1 rounded-full text-xs font-medium ${
      status === 'Completed' ? 'bg-green-100 text-green-800' :
      status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
      'bg-blue-100 text-blue-800'
    }`}>
      {status}
    </div>
  </div>
);

// Enhanced DashboardContent
const DashboardContent = () => {
  const stats = [
    { title: 'Active Exams', value: '12', icon: ClipboardDocumentListIcon, change: '8', changeType: 'increase' },
    { title: 'Total Students', value: '1,234', icon: UsersIcon, change: '12', changeType: 'increase' },
    { title: 'Pending Results', value: '45', icon: ClockIcon, change: '5', changeType: 'decrease' },
    { title: 'Completed Exams', value: '89', icon: CheckCircleIcon, change: '15', changeType: 'increase' }
  ];

  const recentActivities = [
    {
      type: 'exam',
      title: 'Mathematics Final Exam Published',
      time: '2 hours ago',
      status: 'Active'
    },
    {
      type: 'feedback',
      title: 'New Feedback Received',
      time: '3 hours ago',
      status: 'Pending'
    },
    {
      type: 'result',
      title: 'Physics Mid-term Results Published',
      time: '5 hours ago',
      status: 'Completed'
    },
    {
      type: 'exam',
      title: 'Chemistry Quiz Scheduled',
      time: '1 day ago',
      status: 'Scheduled'
    },
    {
      type: 'feedback',
      title: 'Technical Issue Resolved',
      time: '1 day ago',
      status: 'Completed'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold text-gray-900">Welcome back, Admin!</h2>
        <p className="mt-1 text-gray-600">Here's what's happening with your exam portal today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <StatsCard key={index} {...stat} />
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link to="/admin/exams" className="flex items-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
            <ClipboardDocumentListIcon className="w-6 h-6 text-blue-600 mr-3" />
            <span className="text-blue-600 font-medium">Create New Exam</span>
          </Link>
          <Link to="/admin/questions" className="flex items-center p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
            <QuestionMarkCircleIcon className="w-6 h-6 text-purple-600 mr-3" />
            <span className="text-purple-600 font-medium">Add Questions</span>
          </Link>
          <Link to="/admin/results" className="flex items-center p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors">
            <ChartBarIcon className="w-6 h-6 text-green-600 mr-3" />
            <span className="text-green-600 font-medium">View Results</span>
          </Link>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
          <Link to="/admin/activity" className="text-sm text-blue-600 hover:text-blue-700">View all</Link>
        </div>
        <div className="divide-y divide-gray-200">
          {recentActivities.map((activity, index) => (
            <ActivityItem key={index} {...activity} />
          ))}
        </div>
      </div>

      {/* System Status */}
      <div className="bg-white rounded-lg shadow p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center p-4 bg-green-50 rounded-lg">
            <CheckCircleIcon className="w-6 h-6 text-green-600 mr-3" />
            <div>
              <p className="font-medium text-green-600">All Systems Operational</p>
              <p className="text-sm text-green-500">Last checked: 5 minutes ago</p>
            </div>
          </div>
          <div className="flex items-center p-4 bg-blue-50 rounded-lg">
            <ClockIcon className="w-6 h-6 text-blue-600 mr-3" />
            <div>
              <p className="font-medium text-blue-600">Next Scheduled Maintenance</p>
              <p className="text-sm text-blue-500">In 5 days</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;