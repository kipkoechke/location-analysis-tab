import Link from "next/link";
import { BsArrowUpRight } from "react-icons/bs";

function MunicipalReferences() {
  const references = [
    {
      name: "NYC Zoning Resolution",
      url: "https://zr.planning.nyc.gov/",
    },
    {
      name: "IBZ Incentives Guide",
      url: "https://nyc-business.nyc.gov/nycbusiness/description/industrial-business-zone-relocation-credit",
    },
    {
      name: "FEMA Flood Maps",
      url: "https://www.fema.gov/flood-maps",
    },
  ];

  return (
    <div>
      <h4 className="font-bold mb-3">Municipal References</h4>
      <div className="space-y-2">
        {references.map((reference, index) => (
          <ReferenceLink
            key={index}
            name={reference.name}
            url={reference.url}
          />
        ))}
      </div>
    </div>
  );
}

function ReferenceLink({ name, url }: { name: string; url: string }) {
  return (
    <Link
      href={url}
      className="rounded p-2 w-full flex gap-8 items-center text-blue-900 font-bold leading-3"
    >
      <span className="text-xs">{name}</span>
      <BsArrowUpRight className="h-3 w-3" />
    </Link>
  );
}

export default MunicipalReferences;
