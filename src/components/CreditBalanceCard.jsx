import React from "react";

const WavyLineIcon = (props) => (
  <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 25 C 15 5, 25 35, 35 20 S 45 5, 55 15 S 65 30, 75 20"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const BuildingIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
    <path d="M9 22v-4h6v4" />
    <path d="M8 6h.01" />
    <path d="M16 6h.01" />
    <path d="M12 6h.01" />
    <path d="M12 10h.01" />
    <path d="M12 14h.01" />
    <path d="M16 10h.01" />
    <path d="M16 14h.01" />
    <path d="M8 10h.01" />
    <path d="M8 14h.01" />
  </svg>
);

const CarIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M14 16.5V14a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2.5" />
    <path d="M18 18h-2.12a2 2 0 0 1-1.79-.9L10.33 9.4a2 2 0 0 0-1.79-.9H5" />
    <path d="m3 14 3 3h2" />
    <path d="M19 14l-3 3h-2" />
    <circle cx="7" cy="18" r="2" />
    <circle cx="17" cy="18" r="2" />
  </svg>
);

const GraduationCapIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
    <path d="M6 12v5c3.33 1.67 6.67 1.67 10 0v-5" />
  </svg>
);

const recentTransactions = [
  {
    icon: BuildingIcon,
    color: "sky",
    title: "Bill & Taxes",
    date: "Today, 16:36",
    amount: 154.5,
  },
  {
    icon: CarIcon,
    color: "green",
    title: "Car Energy",
    date: "23 Jun, 13:06",
    amount: 40.5,
  },
  {
    icon: GraduationCapIcon,
    color: "yellow",
    title: "Design Course",
    date: "21 Jun, 19:04",
    amount: 70.0,
  },
];

const iconColors = {
  sky: "bg-sky-100 text-sky-600",
  green: "bg-green-100 text-green-600",
  yellow: "bg-yellow-100 text-yellow-600",
};

const CreditBalanceCard = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md flex flex-col gap-6">
    <div className="p-3 rounded-xl flex justify-between bg-gradient-to-br from-indigo-500 to-purple-600 text-white">
      <div className="flex justify-between items-start">
        <div>
          <p className="text-sm text-indigo-200">Credit Balance</p>
          <p className="text-3xl font-bold mt-1">$25,215</p>
        </div>
      </div>
      <div className="mt-4">
        <WavyLineIcon className="h-8 w-24 text-indigo-300" />
      </div>
    </div>
    <div>
      <h3 className="text-md font-semibold text-slate-700 mb-4">Recent</h3>
      <div className="space-y-4">
        {recentTransactions.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.title} className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <div className={`p-2 rounded-lg ${iconColors[item.color]}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <p className="font-semibold text-slate-700">{item.title}</p>
                  <p className="text-xs text-gray-400">{item.date}</p>
                </div>
              </div>
              <p className="font-semibold text-slate-700">
                -${item.amount.toFixed(2)}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

export default CreditBalanceCard;
