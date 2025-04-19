import DistanceDetails from "./DistanceDetails";

function ProximityToKeyInfra() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Map View - Takes 2/3 width on larger screens */}
        <div className="p-4  md:col-span-2">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Proximity to Key Infrastructure
          </h3>
          <div className="bg-gray-100 rounded p-4 h-80 flex items-center justify-center relative">
            {/* Interactive Map Placeholder */}
            {/* <div className="text-gray-500 text-center">Interactive Map</div> */}

            {/* Transportation Icons */}
            <div className="absolute right-[300px] top-1/5">
              <div className="w-6 h-6 rounded-full bg-blue-500 flex items-center justify-center text-white text-xs">
                H
              </div>
            </div>

            <div className="absolute right-[300px] top-3/4">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white text-xs">
                P
              </div>
            </div>

            <div className="absolute left-[300px] bottom-[65px]">
              <div className="w-6 h-6 rounded-full bg-amber-500 flex items-center justify-center text-white text-xs">
                R
              </div>
            </div>

            <div className="absolute left-[290px] top-1/5">
              <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center text-white text-xs">
                A
              </div>
            </div>

            {/* Center Subject Property Marker */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white font-bold">
                S
              </div>
            </div>

            {/* Connecting Lines FROM Subject to each node */}
            {/* Line to Highway */}
            <div className="absolute left-1/2 top-1/2 w-0 h-0">
              <div className="absolute h-0 border-t-2 border-dashed border-blue-500 w-[100px] origin-left transform -rotate-45"></div>
            </div>

            {/* Line to Port */}
            <div className="absolute left-1/2 top-1/2 w-0 h-0">
              <div className="absolute h-0 border-t-2 border-dashed border-green-500 w-[120px] origin-left transform rotate-45"></div>
            </div>

            {/* Line to Rail */}
            <div className="absolute left-1/2 top-1/2 w-0 h-0">
              <div className="absolute h-0 border-t-2 border-dashed border-amber-500 w-[110px] origin-left transform rotate-135"></div>
            </div>

            {/* Line to Airport */}
            <div className="absolute left-1/2 top-1/2 w-0 h-0">
              <div className="absolute h-0 border-t-2 border-dashed border-purple-500 w-[130px] origin-left transform -rotate-135"></div>
            </div>

            {/* Legend */}
            <div className="absolute top-4 left-4 bg-white p-2 rounded shadow-md opacity-90">
              <div className="space-y-2">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-red-500 mr-2"></div>
                  <span className="text-sm">Subject</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-blue-500 mr-2"></div>
                  <span className="text-sm">Highway</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-green-500 mr-2"></div>
                  <span className="text-sm">Port</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-amber-500 mr-2"></div>
                  <span className="text-sm">Rail</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-purple-500 mr-2"></div>
                  <span className="text-sm">Airport</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Distance Details */}
        <DistanceDetails />
      </div>
    </div>
  );
}

export default ProximityToKeyInfra;
