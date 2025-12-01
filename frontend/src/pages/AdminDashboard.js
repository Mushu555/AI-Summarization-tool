import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import * as apiService from '../services/api';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const { user } = useAuth();
  const [users, setUsers] = useState([]);
  const [videos, setVideos] = useState([]);
  const [summaries, setSummaries] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingVideos, setLoadingVideos] = useState(false);
  const [loadingSummaries, setLoadingSummaries] = useState(false);
  const [activeTab, setActiveTab] = useState('users');
  const [filterStatus, setFilterStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch all users
  const fetchUsers = async () => {
    setLoadingUsers(true);
    try {
      // This would be replaced with an actual admin API endpoint
      console.log('Fetching all users...');
      // For now, show demo data
      setUsers([
        { id: '1', username: 'john_doe', email: 'john@example.com', role: 'user', created_at: '2024-01-15' },
        { id: '2', username: 'jane_smith', email: 'jane@example.com', role: 'admin', created_at: '2024-01-10' },
        { id: '3', username: 'bob_wilson', email: 'bob@example.com', role: 'user', created_at: '2024-01-20' },
      ]);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoadingUsers(false);
    }
  };

  // Fetch all videos
  const fetchVideos = async () => {
    setLoadingVideos(true);
    try {
      console.log('Fetching all videos...');
      // Demo data
      setVideos([
        { id: '1', title: 'Video 1', user_id: '1', status: 'completed', created_at: '2024-01-15', duration: 600 },
        { id: '2', title: 'Video 2', user_id: '2', status: 'processing', created_at: '2024-01-18', duration: 900 },
        { id: '3', title: 'Video 3', user_id: '3', status: 'completed', created_at: '2024-01-19', duration: 450 },
      ]);
    } catch (error) {
      console.error('Error fetching videos:', error);
    } finally {
      setLoadingVideos(false);
    }
  };

  // Fetch all summaries
  const fetchSummaries = async () => {
    setLoadingSummaries(true);
    try {
      console.log('Fetching all summaries...');
      // Demo data
      setSummaries([
        { id: '1', video_id: '1', status: 'completed', created_at: '2024-01-15' },
        { id: '2', video_id: '2', status: 'processing', created_at: '2024-01-18' },
        { id: '3', video_id: '3', status: 'completed', created_at: '2024-01-19' },
      ]);
    } catch (error) {
      console.error('Error fetching summaries:', error);
    } finally {
      setLoadingSummaries(false);
    }
  };

  // Load data on mount
  useEffect(() => {
    fetchUsers();
    fetchVideos();
    fetchSummaries();
  }, []);

  // Filter and search functions
  const filteredUsers = users.filter(u => 
    u.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
    u.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredVideos = videos.filter(v => {
    const statusMatch = filterStatus === 'all' || v.status === filterStatus;
    const searchMatch = v.title.toLowerCase().includes(searchTerm.toLowerCase());
    return statusMatch && searchMatch;
  });

  const filteredSummaries = summaries.filter(s => {
    const statusMatch = filterStatus === 'all' || s.status === filterStatus;
    return statusMatch;
  });

  // Delete functions
  const deleteUser = (userId) => {
    setUsers(users.filter(u => u.id !== userId));
  };

  const deleteVideo = (videoId) => {
    setVideos(videos.filter(v => v.id !== videoId));
  };

  const deleteSummary = (summaryId) => {
    setSummaries(summaries.filter(s => s.id !== summaryId));
  };

  // Stats
  const stats = {
    totalUsers: users.length,
    totalVideos: videos.length,
    totalSummaries: summaries.length,
    completedSummaries: summaries.filter(s => s.status === 'completed').length,
    processingSummaries: summaries.filter(s => s.status === 'processing').length,
  };

  if (!user?.role === 'admin') {
    return (
      <div className="admin-dashboard error">
        <h2>Access Denied</h2>
        <p>You do not have permission to access this page.</p>
      </div>
    );
  }

  return (
    <div className="admin-dashboard">
      <div className="admin-header">
        <h1>Admin Dashboard</h1>
        <p>Welcome, {user?.username}</p>
      </div>

      {/* Stats Cards */}
      <div className="admin-stats">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.totalUsers}</p>
        </div>
        <div className="stat-card">
          <h3>Total Videos</h3>
          <p className="stat-number">{stats.totalVideos}</p>
        </div>
        <div className="stat-card">
          <h3>Total Summaries</h3>
          <p className="stat-number">{stats.totalSummaries}</p>
        </div>
        <div className="stat-card">
          <h3>Completed</h3>
          <p className="stat-number">{stats.completedSummaries}</p>
        </div>
        <div className="stat-card">
          <h3>Processing</h3>
          <p className="stat-number">{stats.processingSummaries}</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="admin-tabs">
        <button 
          className={`tab-button ${activeTab === 'users' ? 'active' : ''}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </button>
        <button 
          className={`tab-button ${activeTab === 'videos' ? 'active' : ''}`}
          onClick={() => setActiveTab('videos')}
        >
          Videos
        </button>
        <button 
          className={`tab-button ${activeTab === 'summaries' ? 'active' : ''}`}
          onClick={() => setActiveTab('summaries')}
        >
          Summaries
        </button>
      </div>

      {/* Search and Filter */}
      <div className="admin-controls">
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        {activeTab !== 'users' && (
          <select 
            value={filterStatus} 
            onChange={(e) => setFilterStatus(e.target.value)}
            className="filter-select"
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="processing">Processing</option>
            <option value="failed">Failed</option>
          </select>
        )}
      </div>

      {/* Users Tab */}
      {activeTab === 'users' && (
        <div className="admin-section">
          <h2>Manage Users</h2>
          {loadingUsers ? (
            <p>Loading users...</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                  <th>Role</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredUsers.length > 0 ? (
                  filteredUsers.map(u => (
                    <tr key={u.id}>
                      <td>{u.username}</td>
                      <td>{u.email}</td>
                      <td><span className={`role-badge ${u.role}`}>{u.role}</span></td>
                      <td>{new Date(u.created_at).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="btn-delete"
                          onClick={() => deleteUser(u.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5">No users found</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Videos Tab */}
      {activeTab === 'videos' && (
        <div className="admin-section">
          <h2>Manage Videos</h2>
          {loadingVideos ? (
            <p>Loading videos...</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>User ID</th>
                  <th>Status</th>
                  <th>Duration</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredVideos.length > 0 ? (
                  filteredVideos.map(v => (
                    <tr key={v.id}>
                      <td>{v.title}</td>
                      <td>{v.user_id}</td>
                      <td><span className={`status-badge ${v.status}`}>{v.status}</span></td>
                      <td>{Math.round(v.duration / 60)} min</td>
                      <td>{new Date(v.created_at).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="btn-delete"
                          onClick={() => deleteVideo(v.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="6">No videos found</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      )}

      {/* Summaries Tab */}
      {activeTab === 'summaries' && (
        <div className="admin-section">
          <h2>Manage Summaries</h2>
          {loadingSummaries ? (
            <p>Loading summaries...</p>
          ) : (
            <table className="admin-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Video ID</th>
                  <th>Status</th>
                  <th>Created At</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredSummaries.length > 0 ? (
                  filteredSummaries.map(s => (
                    <tr key={s.id}>
                      <td>{s.id}</td>
                      <td>{s.video_id}</td>
                      <td><span className={`status-badge ${s.status}`}>{s.status}</span></td>
                      <td>{new Date(s.created_at).toLocaleDateString()}</td>
                      <td>
                        <button 
                          className="btn-delete"
                          onClick={() => deleteSummary(s.id)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr><td colSpan="5">No summaries found</td></tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
