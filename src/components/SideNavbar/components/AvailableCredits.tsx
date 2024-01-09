import walletIcon from "../../../assets/walletIcon.svg";

interface AvailableCreditsProps {
  creditBalance: string;
}
const AvailableCredits = ({ creditBalance }: AvailableCreditsProps) => {
  return (
    <div className="px-3 py-2 bg-[#353C53] mx-[6px] flex gap-3 rounded mt-auto">
      {/* wallet icon */}
      <div className="bg-[rgba(255,255,255,0.10)] p-[6px]">
        <img src={walletIcon} alt="" className="" />
      </div>
      {/* available credis */}
      <div className="flex flex-col justify-between text-white">
        <div className="text-[13px] opacity-80 leading-none">Available credits</div>
        {/* show credit balance */}
        <div className=" text-basefont-medium leading-none">{creditBalance}</div>
      </div>
    </div>
  );
};

export default AvailableCredits;
