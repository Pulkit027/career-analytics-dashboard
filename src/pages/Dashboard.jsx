import { Briefcase, Target, Award, TrendingUp } from 'lucide-react';
import StatsCard from '../components/dashboard/StatsCard';
import ApplicationsChart from '../components/dashboard/ApplicationsChart';
import StatusPieChart from '../components/dashboard/StatusPieChart';
import {
  mockDashboardStats,
  mockApplicationsOverTime,
  mockApplicationsByStatus,
} from '../data/mockData.js';

const Dashboard = () => {
  const userName = "Pulkit";

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Welcome back, {userName} 👋
        </h1>
        <p className="text-gray-600 mt-1">
          Here’s your career analytics overview and application performance.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard
          title="Total Applications"
          value={mockDashboardStats.totalApplications}
          icon={Briefcase}
          color="blue"
          trend={{ value: '+2 this week', positive: true }}
        />

        <StatsCard
          title="Active Interviews"
          value={mockDashboardStats.activeInterviews}
          icon={Target}
          color="yellow"
        />

        <StatsCard
          title="Offers Received"
          value={mockDashboardStats.offersReceived}
          icon={Award}
          color="green"
          trend={{ value: '+1 this month', positive: true }}
        />

        <StatsCard
          title="Skills Improved"
          value={mockDashboardStats.skillsLearned}
          icon={TrendingUp}
          color="purple"
        />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ApplicationsChart data={mockApplicationsOverTime} />
        <StatusPieChart data={mockApplicationsByStatus} />
      </div>

    </div>
  );
};

export default Dashboard;


