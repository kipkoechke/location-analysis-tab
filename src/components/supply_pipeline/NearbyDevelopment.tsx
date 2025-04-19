const NearbyDevelopment = () => {
  const data = [
    {
      image: "/assets/supply-pipeline-1.png",
      address: "640 Columbia",
      submarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CREBI",
      sf: "336,350",
    },
    {
      image: "/assets/supply-pipeline-2.png",
      address: "WB Mason",
      submarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
    {
      image: "/assets/supply-pipeline-1.png",
      address: "640 Columbia",
      submarket: "Brooklyn",
      deliveryDate: "Jun-25",
      owner: "CREBI",
      sf: "336,350",
    },
    {
      image: "/assets/supply-pipeline-2.png",
      address: "WB Mason",
      submarket: "Bronx",
      deliveryDate: "May-25",
      owner: "Link Logistics",
      sf: "150,000",
    },
  ];

  return (
    <div className="mb-8">
      <h3 className="text-lg font-bold text-primary mb-4">
        Nearby Developments
      </h3>
      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {data.map((item, index) => (
          <div key={index} className="flex items-start gap-4 ">
            {/* Image Section */}
            <div className="flex-shrink-0 w-[161px] h-[140px] rounded-md overflow-hidden">
              <img
                src={item.image}
                alt={item.address}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-between">
              <p className="text-tertiary">
                <span className="font-bold text-primary">Address:</span>
                {item.address}
              </p>
              <p className="text-tertiary">
                <span className="font-bold text-primary">Submarket:</span>
                {item.submarket}
              </p>
              <p className="text-tertiary">
                <span className="font-bold text-primary">Delivery Date:</span>
                {item.deliveryDate}
              </p>
              <p className="text-tertiary">
                <span className="font-bold text-primary">Owner:</span>
                {item.owner}
              </p>
              <p className="text-tertiary">
                <span className="font-bold text-primary">SF:</span> {item.sf}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyDevelopment;
