interface Property {
  cons?: string[];
}

function MiddleColumnData({ property }: { property: Property }) {
  return (
    <div>
      <h3 className="font-bold text-lg mb-3">Cons</h3>
      <ol className="list-decimal pl-5 space-y-3">
        {property.cons?.map((con, index) => (
          <li key={index} className="text-sm">
            {con}
          </li>
        )) || <p className="text-sm text-gray-500">No cons data available</p>}
      </ol>
    </div>
  );
}

export default MiddleColumnData;
