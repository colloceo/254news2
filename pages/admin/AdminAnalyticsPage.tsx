
import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

const trafficData = [
  { name: 'Jan', uv: 4000, pv: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398 },
  { name: 'Mar', uv: 2000, pv: 9800 },
  { name: 'Apr', uv: 2780, pv: 3908 },
  { name: 'May', uv: 1890, pv: 4800 },
  { name: 'Jun', uv: 2390, pv: 3800 },
  { name: 'Jul', uv: 3490, pv: 4300 },
];

const engagementData = [
    { name: 'Politics', comments: 450, shares: 200 },
    { name: 'Business', comments: 320, shares: 150 },
    { name: 'Technology', comments: 680, shares: 450 },
    { name: 'Sports', comments: 820, shares: 500 },
    { name: 'Entertainment', comments: 210, shares: 90 },
];

const AdminAnalyticsPage: React.FC = () => {
    // Note: recharts uses inline styles, which is an exception to the 'no inline styles' rule for library integration.
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-6">Analytics</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Website Traffic (Last 6 Months)</h2>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={trafficData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.3)" />
                            <XAxis dataKey="name" stroke="#6B7280" />
                            <YAxis stroke="#6B7280"/>
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                            <Legend />
                            <Line type="monotone" dataKey="pv" name="Page Views" stroke="#16A34A" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="uv" name="Unique Visitors" stroke="#DC2626" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">Engagement by Category</h2>
                     <ResponsiveContainer width="100%" height={300}>
                        <BarChart data={engagementData}>
                            <CartesianGrid strokeDasharray="3 3" stroke="rgba(128,128,128,0.3)" />
                            <XAxis dataKey="name" stroke="#6B7280" />
                            <YAxis stroke="#6B7280" />
                            <Tooltip contentStyle={{ backgroundColor: '#1F2937', border: 'none' }} />
                            <Legend />
                            <Bar dataKey="comments" fill="#16A34A" />
                            <Bar dataKey="shares" fill="#DC2626" />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default AdminAnalyticsPage;
