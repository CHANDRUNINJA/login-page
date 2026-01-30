import React, { useState, useEffect } from 'react';
import '../styles/Dashboard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const DashboardPage = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('Dashboard');
    const [stats, setStats] = useState({ sales: 0, orders: 0, customers: 0, products: 0 });
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const statsRes = await axios.get('http://localhost:5000/api/dashboard/stats');
                setStats(statsRes.data);

                const ordersRes = await axios.get('http://localhost:5000/api/dashboard/orders');
                setOrders(ordersRes.data);
            } catch (err) {
                console.error("Error fetching dashboard data", err);
            }
        };
        fetchData();
    }, []);

    const handleLogout = () => {
        navigate('/');
    };

    const renderContent = () => {
        switch (activeTab) {
            case 'Dashboard':
                return (
                    <>
                        {/* Stats Cards */}
                        <section className="stats">
                            <div className="card">
                                <h3>Total Sales</h3>
                                <p>₹{stats.sales.toLocaleString('en-IN')}</p>
                            </div>
                            <div className="card">
                                <h3>Orders</h3>
                                <p>{stats.orders}</p>
                            </div>
                            <div className="card">
                                <h3>Customers</h3>
                                <p>{stats.customers}</p>
                            </div>
                            <div className="card">
                                <h3>Products</h3>
                                <p>{stats.products}</p>
                            </div>
                        </section>

                        {/* Table */}
                        <section className="table-section">
                            <h2>Recent Orders</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Customer</th>
                                        <th>Product</th>
                                        <th>Status</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={index}>
                                            <td>{order.orderId}</td>
                                            <td>{order.customer}</td>
                                            <td>{order.product}</td>
                                            <td className={order.status.toLowerCase()}>{order.status}</td>
                                            <td>₹{order.amount.toLocaleString('en-IN')}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </section>
                    </>
                );
            case 'Products':
                return <div className="placeholder-content"><h2>Products Management</h2><p>Here you can manage your products.</p></div>;
            case 'Orders':
                return <div className="placeholder-content"><h2>Order History</h2><p>View all your orders here.</p></div>;
            case 'Customers':
                return <div className="placeholder-content"><h2>Customer Base</h2><p>Manage your customers.</p></div>;
            case 'Analytics':
                return <div className="placeholder-content"><h2>Analytics & Reports</h2><p>View detailed analytics.</p></div>;
            case 'Settings':
                return <div className="placeholder-content"><h2>Settings</h2><p>Configure your application.</p></div>;
            default:
                return <div>Select a tab</div>;
        }
    };

    return (
        <div style={{ background: '#f4f6f9', minHeight: '100vh' }}>
            {/* Top Navigation Bar */}
            <header className="topbar">
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <h2 className="logo">MyStore</h2>
                    <nav className="top-nav">
                        {['Dashboard', 'Products', 'Orders', 'Customers', 'Analytics', 'Settings'].map(tab => (
                            <a
                                key={tab}
                                className={activeTab === tab ? 'active' : ''}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </a>
                        ))}
                    </nav>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                    <a className="logout" onClick={handleLogout} style={{ cursor: 'pointer', marginRight: '15px' }}>Logout</a>
                    <div className="user">
                        <span>Admin</span>
                        <img src="https://i.pravatar.cc/40" alt="profile" />
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="main">
                <div className="content-area">
                    {renderContent()}
                </div>
            </main>
        </div>
    );
};

export default DashboardPage;
