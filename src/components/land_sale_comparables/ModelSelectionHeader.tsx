function ModelSelectionHeader() {
  return (
    <div className=" py-4 flex items-center justify-between">
      <h1 className="text-2xl font-bold">Comparables</h1>
      <div className="flex flex-col items-end">
        <p className="text-sm text-gray-500 mb-1">Underwriting Model</p>
        <div className="border border-primary rounded px-2 py-1 text-sm flex items-center">
          Industrial.Template.v2.4.xlsx
          <svg
            className="w-4 h-4 ml-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default ModelSelectionHeader;
