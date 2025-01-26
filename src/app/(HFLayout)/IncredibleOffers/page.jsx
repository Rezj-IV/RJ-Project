import CardDetails from "@/Components/Card/CardDetails";
import GetIncredibleOffers from "@/Components/IncredibleOffersProducts/GetIncredibleOffers";

const IncredibleOffersList = async () => {
  const data = await GetIncredibleOffers();

  return (
    <>
      <div>
        <CardDetails product={data} />
      </div>
    </>
  );
};

export default IncredibleOffersList;
