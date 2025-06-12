import BalanceChart from "./BalanceChart";
import CreditBalanceCard from "./CreditBalanceCard";
import PromoCard from "./PromoCard";
import TransfersList from "./TransferList";

const SearchIcon = (props) => (
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
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const WavyLineIcon = (props) => (
  <svg viewBox="0 0 80 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M5 25 C 15 5, 25 35, 35 20 S 45 5, 55 15 S 65 30, 75 20"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const BarChartIcon = (props) => (
  <svg viewBox="0 0 50 40" xmlns="http://www.w3.org/2000/svg" {...props}>
    <rect x="2" y="15" width="6" height="25" fill="currentColor" rx="3" />
    <rect x="12" y="5" width="6" height="35" fill="currentColor" rx="3" />
    <rect x="22" y="20" width="6" height="20" fill="currentColor" rx="3" />
    <rect x="32" y="10" width="6" height="30" fill="currentColor" rx="3" />
    <rect x="42" y="25" width="6" height="15" fill="currentColor" rx="3" />
  </svg>
);

const MiniChartIcon = (props) => (
  <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      d="M3 15L7 11L11 15L15 9L19 13"
      stroke="currentColor"
      fill="transparent"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DashboardContent = () => {
  const userName = localStorage.getItem("user");
  return (
    <div className="flex-1 p-8">
      <div className="flex justify-between items-center mb-10">
        <div>
          <p className="text-gray-500 text-sm">Hi {userName ?? ""},</p>
          <h1 className="text-4xl font-bold text-slate-800">
            Welcome to Venus!
          </h1>
        </div>
        <div className="relative">
          <SearchIcon className="absolute w-5 h-5 left-4 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            className="pl-12 pr-4 py-3 w-64 rounded-xl bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex justify-between items-end">
          <div>
            <p className="text-sm text-indigo-100">Activity</p>
            <p className="text-3xl font-bold">$540.50</p>
          </div>
          <WavyLineIcon className="h-10 w-20 text-indigo-200" />
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md flex justify-between items-end">
          <div>
            <p className="text-sm text-gray-500">Spent this month</p>
            <p className="text-3xl font-bold text-slate-800">$682.5</p>
          </div>
          <BarChartIcon className="h-10 w-12 text-indigo-500" />
        </div>

        <div className="p-6 rounded-2xl bg-white shadow-md flex items-center gap-4">
          <div className="p-3 rounded-full bg-indigo-100">
            <MiniChartIcon className="h-6 w-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-sm text-gray-500">Earnings</p>
            <p className="text-2xl font-bold text-slate-800">$350.40</p>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white flex justify-between items-end">
          <div>
            <p className="text-sm text-indigo-100">Activity</p>
            <p className="text-3xl font-bold">$540.50</p>
          </div>
          <WavyLineIcon className="h-10 w-20 text-indigo-200" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <BalanceChart />
        <TransfersList />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
        <div className="lg:col-span-1">
          <CreditBalanceCard />
        </div>
        <div className="lg:col-span-2">
          <PromoCard />
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;
