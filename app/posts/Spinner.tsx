const Spinner = () => {
  return (
    <div className="flex gap-2 items-center">
      <div className="text-lg font-semibold tracking wide">
        Loading author ...
      </div>
      <div className="animate-spin h-6 w-6 rounded-full border-t-2 border-t-blue-600"></div>
    </div>
  );
};
export default Spinner;
