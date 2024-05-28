import { 
  Appbar,
  Sidebar,
  UserFeed,
  UserHeader,
  UserProfile,
  UserPhotos,
  UserRecommendations,
} from '@/components';
import './dashboard.scss';
  
export default function DashboardPage () {
  return (
    <div className="dashboard">
      <Sidebar />
      <Appbar />
      <div className="main-content">
        <UserHeader />
        <UserProfile />
        <UserPhotos />
        <UserFeed />
        <UserRecommendations />
      </div>
    </div>
  );
}
