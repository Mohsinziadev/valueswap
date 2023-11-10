import Image from "next/image";
import {wallet,lightdark,eye} from "@/assets/index";

const Navbar = () => {
  return (
    <div className="flex w-full py-10 justify-end text-white">
      <div className="flex flex-row gap-8 ">
        <div className="flex gap-2 items-center ">
          <Image src={wallet} className="h-5 w-5 " alt="dummy" />
          <label htmlFor="">
            Connected <span className="text-sm font-light">0xb9B2****</span>
          </label>
          <Image src={eye} className="h-3 w-5" alt="dummy" />
        </div>
        <div className="flex gap-2 items-center ">
          <Image src={lightdark} className="h-5 w-5 " alt="dummsy" />
          <label htmlFor="">Light Mode</label>
        </div>
      </div>
    </div>
  );
}
export default Navbar