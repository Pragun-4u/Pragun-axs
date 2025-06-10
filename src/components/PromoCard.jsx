const PromoCard = () => (
  <div className="bg-white rounded-2xl shadow-md flex items-center overflow-hidden">
    <div className="p-8 w-full lg:w-1/2">
      <h2 className="text-3xl font-bold text-slate-800">
        Try Venus for free now!
      </h2>
      <p className="mt-4 text-gray-500">
        Enter in this creative world. Venus is the best product for your
        business.
      </p>
      <div className="mt-8 flex items-center gap-4">
        <button className="bg-indigo-600 text-white font-semibold py-2 px-5 rounded-lg hover:bg-indigo-700 transition-colors">
          Try for free
        </button>
        <button className="text-gray-500 font-semibold hover:text-slate-800">
          Skip
        </button>
      </div>
    </div>
    <div className="hidden lg:block w-1/2">
      <img
        src="https://resize.imagekit.co/AW1mPLV-52GuXPeUwhpbKN2JtTKaE9cGxN0rv22mHgg/h:300/dpr:2/plain/s3://betalist-production/8vzxwz0c72cm2arfzxodj6vepmgj"
        alt="Abstract UI elements"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
);

export default PromoCard;
