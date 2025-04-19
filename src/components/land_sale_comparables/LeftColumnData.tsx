interface Property {
  pros?: string[];
}

function LeftColumnData({ property }: { property: Property }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Pros</h3>
      <ol className="list-decimal pl-5 space-y-3">
        {property.pros?.map((pro, index) => (
          <li key={index} className="text-sm">
            {pro}
          </li>
        )) || <p className="text-sm text-gray-500">No pros data available</p>}
      </ol>
    </div>
  );
}

export default LeftColumnData;
