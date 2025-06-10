const Loader = () => {
  return (
    <div className="fixed inset-0  bg-opacity-80 flex items-center justify-center z-50">
      <div
        className="w-16 h-16 border-4 border-solid  border-cyan-[#0d274d]/20 border-t-cyan-400 rounded-full animate-spin"
        style={{
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
        }}
      ></div>
    </div>
  );
};

export default Loader;
