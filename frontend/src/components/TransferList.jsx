const ArrowRightIcon = (props) => (
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
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const transferData = [
  {
    name: "Alex Manda",
    time: "Today, 16:36",
    amount: 50,
    avatar: "https://i.pravatar.cc/40?img=1",
    type: "in",
  },
  {
    name: "Laura Santos",
    time: "Today, 08:49",
    amount: 27,
    avatar: "https://i.pravatar.cc/40?img=2",
    type: "out",
  },
  {
    name: "Jadon S.",
    time: "Yesterday, 14:36",
    amount: 157,
    avatar: "https://i.pravatar.cc/40?img=3",
    type: "in",
  },
];

const TransfersList = () => (
  <div className="bg-white p-6 rounded-2xl shadow-md">
    <h2 className="text-xl font-bold text-slate-800 mb-4">Your Transfers</h2>
    <div className="space-y-4">
      {transferData.map((item, index) => (
        <div key={index} className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={item.avatar}
              alt={item.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-slate-700">{item.name}</p>
              <p className="text-xs text-gray-400">{item.time}</p>
            </div>
          </div>
          <span
            className={`font-semibold text-sm px-2 py-1 rounded-md ${
              item.type === "in"
                ? "bg-green-100 text-green-600"
                : "bg-red-100 text-red-600"
            }`}
          >
            {item.type === "in" ? `+$${item.amount}` : `-$${item.amount}`}
          </span>
        </div>
      ))}
    </div>
    <button className="w-full flex justify-center items-center gap-2 mt-6 text-sm font-semibold text-indigo-600 hover:text-indigo-800">
      View all <ArrowRightIcon className="w-4 h-4" />
    </button>
  </div>
);

export default TransfersList;
