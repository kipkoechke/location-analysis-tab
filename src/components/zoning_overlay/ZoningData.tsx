import { FaCheckCircle } from "react-icons/fa";
import { GrRadialSelected } from "react-icons/gr";
import MunicipalReferences from "./MunicipalReferences";

function ZoningData() {
  const specialDistricts: {
    name: string;
    status: "active" | "inactive" | "warning";
  }[] = [
    { name: "Industrial Business Zone", status: "active" },
    { name: "Opportunity Zone", status: "active" },
    { name: "Waterfront Access Plan", status: "inactive" },
  ];

  const environmentalData: {
    name: string;
    status: "active" | "inactive" | "warning";
  }[] = [
    { name: "Flood Zone: AE", status: "warning" },
    { name: "E-Designation: No", status: "active" },
    { name: "Historic District: No", status: "active" },
  ];

  return (
    <div>
      <div className="mb-6">
        <h3 className="font-bold text-lg mb-4">Zoning Overlays</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Special Districts */}
          <ZoningCategory title="Special Districts" items={specialDistricts} />

          {/* Environmental */}
          <ZoningCategory title="Environmental" items={environmentalData} />

          {/* Municipal References */}
          <MunicipalReferences />
        </div>
      </div>
    </div>
  );
}

function ZoningCategory({
  title,
  items,
}: {
  title: string;
  items: { name: string; status: "active" | "inactive" | "warning" }[];
}) {
  return (
    <div className="bg-gray-50 rounded p-4">
      <h4 className="font-bold mb-3">{title}</h4>
      <div className="space-y-2">
        {items.map((item, index) => (
          <ZoningItem key={index} name={item.name} status={item.status} />
        ))}
      </div>
    </div>
  );
}

function ZoningItem({
  name,
  status,
}: {
  name: string;
  status: "active" | "inactive" | "warning";
}) {
  const getStatusIcon = () => {
    switch (status) {
      case "active":
        return (
          <div className="bg-green-500 rounded-full w-4 h-4 flex items-center justify-center">
            <FaCheckCircle className="h-3 w-3 text-white" />
          </div>
        );
      case "warning":
        return (
          <div className="bg-yellow-500 rounded-full w-4 h-4 flex items-center justify-center">
            <GrRadialSelected className="h-3 w-3 text-white" />
          </div>
        );
      case "inactive":
        return <div className="bg-gray-300 rounded-full w-4 h-4"></div>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded p-2 flex justify-between items-center">
      <span className="text-xs">{name}</span>
      {getStatusIcon()}
    </div>
  );
}

export default ZoningData;
