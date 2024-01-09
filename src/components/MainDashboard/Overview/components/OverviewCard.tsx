interface OverviewCardProps {
  cardTitle: string;
  cardValue: string;
}

const OverviewCard = ({ cardTitle, cardValue }: OverviewCardProps) => {
  return (
    <div className="w-full p-5 flex flex-col gap-4  rounded-lg shadow-[0px_2px_6px_0px_rgba(26,24,30,0.04)] bg-white">
      <h3 className="text-[#4D4D4D] text-base font-normal">{cardTitle}</h3>
      <p className="text-[#1A181E] text-[32px] font-medium">{cardValue}</p>
    </div>
  );
};

export default OverviewCard;
