const CheckCircleIcon = (props) => (
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
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const ChevronDownIcon = (props) => (
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
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const BalanceChart = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md col-span-1 lg:col-span-2">
    <div className="flex justify-between items-center mb-4">
      <div className="flex items-center gap-2">
        <h2 className="text-xl font-bold text-slate-800">Balance</h2>
        <span className="flex items-center gap-1 text-xs bg-green-100 text-green-600 font-semibold px-2 py-0.5 rounded-full">
          <CheckCircleIcon className="w-3 h-3" /> On track
        </span>
      </div>
      <button className="flex items-center gap-1 text-sm text-gray-500 hover:text-slate-800">
        Monthly <ChevronDownIcon className="w-4 h-4" />
      </button>
    </div>

    <div className="relative h-60">
      <div className="absolute top-0 left-4 w-44 p-3 bg-white rounded-lg shadow-xl z-10">
        <p className="text-xs text-gray-400">Saves</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-slate-800">43.50%</p>
          <span className="text-xs font-semibold text-green-500">+2.45%</span>
        </div>
      </div>
      <div className="absolute top-8 right-4 w-44 p-3 bg-white rounded-lg shadow-xl z-10">
        <p className="text-xs text-gray-400">Balance</p>
        <div className="flex items-baseline gap-2">
          <p className="text-xl font-bold text-slate-800">$52,422</p>
          <span className="text-xs font-semibold text-red-500">-4.75%</span>
        </div>
      </div>

      <svg
        className="absolute bottom-0 left-0 w-full h-full"
        viewBox="0 0 400 150"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="area-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "rgba(102, 112, 232, 0.2)" }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "rgba(102, 112, 232, 0)" }}
            />
          </linearGradient>
        </defs>
        <path
          d="M0,120 C40,100 60,50 100,80 C140,110 160,90 200,110 C240,130 260,80 300,100 C340,120 380,90 400,100 L400,150 L0,150 Z"
          fill="url(#area-gradient)"
        />
        <path
          d="M0,120 C40,100 60,50 100,80 C140,110 160,90 200,110 C240,130 260,80 300,100 C340,120 380,90 400,100"
          fill="none"
          stroke="#6670e8"
          strokeWidth="3"
        />
      </svg>
    </div>
  </div>
);

export default BalanceChart;
