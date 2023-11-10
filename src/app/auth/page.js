"use client";
import { swap, logotext, setting, info, hazard, close } from "@/assets/index";
import Autocomplete from "@/components/Autocomplete";
import Navbar from "@/components/Navbar";
import Modal from "@/components/common/Modal";
import Image from "next/image";
import { useState } from "react";

const page = () => {
  const [settingModal, setSeetingModal] = useState(false);
  const options = [
    "Binance Coin",
    "Ethirium ",
    "Ripple ",
    "Dogecoin  ",
    "Uniswap ",
    "Monero",
    "Polkadot",
    "Cosmos ",
  ];
  return (
    <div>
      <div className="w-full px-10">
        <Navbar />
      </div>
      <div className="flex justify-center items-center w-full background">
        <div className="flex flex-col max-w-[1300px]  flex-col gap-2  w-full h-screen ">
          <div className="w-full flex justify-center items-center">
            <div className="py-10 w-[24rem] lg:px-4">
              <div className="flex flex-col items-center gap-2 w-full">
                <Image
                  alt="dummy"
                  src={logotext}
                  className="h-32 w-32 contain"
                />
                <div className="flex flex-col gap-6 mt-10 w-full">
                  <Autocomplete options={options} />
                  <Autocomplete options={options} />
                </div>
                <div className="flex w-full mt-6 justify-between">
                  <div className="flex text-sm gap-2 font-normal  ">
                    1 BNB = 3.47 LTC <span className="text-[#F0C724]"> | </span>{" "}
                    1 LTC = 0.288435 BNB
                  </div>
                  <div className="flex gap-2 ">
                    <Image
                      src={swap}
                      className="h-5 w-6 contain cursor-pointer"
                    />
                    <Image
                      src={setting}
                      onClick={() => setSeetingModal(true)}
                      className="h-5 w-5 cursor-pointer contain"
                    />
                  </div>
                </div>
                <div className="w-full mt-6">
                  <button className="bg-[#F0C724] text-black py-4 w-full font-bold text-2xl rounded-sm">
                    X Swap
                  </button>
                </div>
                <div className="w-full flex flex-col gap-1 bg-[#0A090A] border border-gray-900 p-6 mt-6">
                  <div className="w-full flex justify-between">
                    <p className="text-xs flex gap-1 items-center text-gray-300 font-light">
                      Minimum received{" "}
                      <Image src={info} alt="info" className="h-3 w-3 " />{" "}
                    </p>{" "}
                    <h4 className="text-xs">3.5 LTC</h4>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs flex gap-1 items-center text-gray-300 font-light">
                      Price Impact{" "}
                      <Image src={info} alt="info" className="h-3 w-3 " />{" "}
                    </p>{" "}
                    <h4 className="text-xs text-[#F0C724]">48.54%</h4>
                  </div>
                  <div className="w-full flex justify-between">
                    <p className="text-xs flex gap-1 items-center text-gray-300 font-light">
                      Liquidity Provider Fee{" "}
                      <Image src={info} alt="info" className="h-3 w-3 " />{" "}
                    </p>{" "}
                    <h4 className="text-xs">0.11 BNB</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Modal
            isOpen={settingModal}
            className="w-[300px] bg-black border border-white"
            toggle={() => setSeetingModal(false)}
          >
            <div className="px-4 py-6 w-full">
              <div className="flex justify-between ">
                <h3 className="text-xl font-bold">Settings</h3>
                <Image
                  src={close}
                  onClick={() => setSeetingModal(false)}
                  className="h-6 w-6 cursor-pointer "
                />
              </div>
              <div className="text-xs font-light text-white mt-3 flex gap-2">
                Slippage tolerance
                <Image src={info} alt="info" className="h-3 w-3 " />
              </div>
              <div className="text-white font-bolder flex justify-between border-b-2 pb-2 text-3xl border-b-gray-900  mt-5 flex gap-2">
                50.00%
                <h1 className="font-bold text-[#F0C724] text-2xl">Auto</h1>
              </div>
              <div className="flex justify-between mt-4 items-center  ">
                <Image src={hazard} className="h-8 w-8 " />
                <h3 className="text-[#FF7A00]">
                  Your transaction may be frontrun
                </h3>
              </div>
              <div className="text-xs font-light text-white mt-10 flex gap-2">
                Transaction deadline
                <Image src={info} alt="info" className="h-3 w-3 " />
              </div>
              <div className="text-white font-bolder flex justify-between border-b-2 pb-2 text-3xl border-b-gray-900  mt-5 flex gap-2">
                30
                <h1 className="font-normal text-xl">minutes</h1>
              </div>
              <div className="flex justify-between mt-6 ">
                <h3 className="text-xl font-bold">Interface Settings</h3>
              </div>
              <div className="mt-5">
                <div className="flex justify-between items-center">
                  <div className="text-xs font-light text-white mt-3 flex gap-2">
                    Lorem ipsum
                    <Image src={info} alt="info" className="h-3 w-3 " />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="text-xs font-light text-white mt-3 flex gap-2">
                    Lorem ipsum
                    <Image src={info} alt="info" className="h-3 w-3 " />
                  </div>
                  <div className="ml-0 md:ml-10">
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        value=""
                        className="sr-only peer"
                      />
                      <div className="w-8 h-4 bg-gray-200 peer-focus:outline-none   rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-3 after:w-3 after:transition-all dark:border-gray-600 peer-checked:bg-primary"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
export default page;
