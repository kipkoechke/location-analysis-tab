function TableHeaders() {
  return (
    <div className="grid grid-cols-8 gap-4 px-4 py-3 text-sm text-gray-600">
      <div className="col-span-3 flex items-center justify-center">
        Property
      </div>
      <div className="col-span-1">Date</div>
      <div className="col-span-1">Tenant</div>
      <div className="col-span-1">PP</div>
      <div className="col-span-1">PPSF</div>
      <div className="col-span-1">Cap Rate</div>
    </div>
  );
}

export default TableHeaders;
