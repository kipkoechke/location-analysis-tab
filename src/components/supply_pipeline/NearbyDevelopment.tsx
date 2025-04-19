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
          <DevelopmentCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

const DevelopmentCard = ({
  item,
}: {
  item: {
    image: string;
    address: string;
    submarket: string;
    deliveryDate: string;
    owner: string;
    sf: string;
  };
}) => {
  return (
    <div className="flex items-start gap-4">
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
        <Detail label="Address" value={item.address} />
        <Detail label="Submarket" value={item.submarket} />
        <Detail label="Delivery Date" value={item.deliveryDate} />
        <Detail label="Owner" value={item.owner} />
        <Detail label="SF" value={item.sf} />
      </div>
    </div>
  );
};

const Detail = ({ label, value }: { label: string; value: string }) => {
  return (
    <p className="text-tertiary">
      <span className="font-bold text-primary">{label}:</span> {value}
    </p>
  );
};

export default NearbyDevelopment;
