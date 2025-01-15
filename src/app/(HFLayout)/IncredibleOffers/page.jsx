import Card from "@/Components/Card/Card";
import CardDetails from "@/Components/Card/CardDetails";
import GetIncredibleOffers from "@/Components/IncredibleOffersProducts/GetIncredibleOffers";

const IncredibleOffersList = async () => {
  const data = await GetIncredibleOffers();

  return (
    <div>

      <div>
        <CardDetails product={data} />
      </div>
    </div>
  );
};

export default IncredibleOffersList;
