import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const contributionData = [
  { month: "Jan", contributions: 1 },
  { month: "Feb", contributions: 2 },
  { month: "Mar", contributions: 5 },
  { month: "Apr", contributions: 7 },
  { month: "May", contributions: 10 },
  { month: "Jun", contributions: 8 },
  { month: "Jul", contributions: 9 },
  { month: "Aug", contributions: 1 },
  { month: "Sep", contributions: 13 },
  { month: "Oct", contributions: 15 },
  { month: "Nov", contributions: 17 },
  { month: "Dec", contributions: 2 },
];

const ChartComponent = () => {
  return (
    <div>
      <h3 className="text-center text-gray-500 font-semibold mb-4">
        Total Contributions
      </h3>
      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={contributionData}>
          <defs>
            <linearGradient id="colorContributions" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFB74D" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#FFB74D" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" />
          {/* <XAxis dataKey="month" tick={{ fill: "#888" }} />
          <YAxis tick={{ fill: "#888" }} /> */}
          <Tooltip />
          <Area
            type="monotone"
            dataKey="contributions"
            stroke="#FF9800"
            fillOpacity={1}
            fill="url(#colorContributions)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ChartComponent;
