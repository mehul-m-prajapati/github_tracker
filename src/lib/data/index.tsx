import { AlertTriangle, Globe, LucideSearchCheck } from "lucide-react";
import { FaBroadcastTower, FaMobileAlt } from "react-icons/fa";

export const features = [
  {
    title: "Real-Time Tracking",
    description:
      "Stay updated on repository activities, new releases, and commits.",
    icon: FaBroadcastTower,
  },
  {
    title: "Comprehensive Analytics",
    description: "Visualize contributions, stars, forks, and issues with ease.",
    icon: LucideSearchCheck,
  },
  {
    title: "Custom Alerts",
    description:
      "Get notified instantly about the updates you care about the most.",
    icon: AlertTriangle,
  },
  {
    title: "Collaboration Insights",
    description: "Analyze team performance and contributions over time.",
    icon: Globe,
  },
  {
    title: "Mobile-Friendly Design",
    description: "Track your projects anytime, anywhere.",
    icon: FaMobileAlt,
  },
];

export const steps = [
  {
    title: "Connect Your GitHub Account",
    description: "Log in securely with GitHub OAuth.",
  },
  {
    title: "Choose Repositories to Track",
    description: "Select repositories or users you want to monitor.",
  },
  {
    title: "Set Preferences",
    description: "Customize alerts and analytics views.",
  },
  {
    title: "Gain Insights",
    description: "Dive deep into real-time updates and detailed analytics.",
  },
];
