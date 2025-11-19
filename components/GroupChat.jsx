import React, { useState } from 'react'

// Image assets from Figma
const imgEllipse1113 = "https://www.figma.com/api/mcp/asset/def4e6fd-c6de-4ba7-acc7-4615f86797f2";
const imgImage41 = "https://www.figma.com/api/mcp/asset/b0f43ea0-6a5a-4f7f-ad2d-0ab2470a4ea7";
const imgRectangle = "https://www.figma.com/api/mcp/asset/1a837ea2-ee1a-410a-8535-23b1558f56c6";
const img = "https://www.figma.com/api/mcp/asset/b7ee2795-063c-401d-984c-86d314b3f038";
const img1 = "https://www.figma.com/api/mcp/asset/552f0289-b582-408c-8c32-81eff159d6fe";
const img2 = "https://www.figma.com/api/mcp/asset/b6665eed-a173-4267-8c7f-c3beb28d1409";
const img3 = "https://www.figma.com/api/mcp/asset/5540c4cd-4649-402a-9c4a-62a841e9f91a";
const img4 = "https://www.figma.com/api/mcp/asset/2de5306c-3ff4-4934-b506-80096b9aaf2f";
const img5 = "https://www.figma.com/api/mcp/asset/43731598-2615-4ae8-b847-c919c3b00e09";
const img6 = "https://www.figma.com/api/mcp/asset/df1c5212-2223-443c-9d80-1b968e4bccf2";
const img7 = "https://www.figma.com/api/mcp/asset/278f9437-598b-446f-ba26-e5d6027b0740";
const img8 = "https://www.figma.com/api/mcp/asset/ec0ac9be-8cfe-40f3-80d8-8740e3ac09ba";
const imgIconlyBulkMoreCircle = "https://www.figma.com/api/mcp/asset/73ba005a-e7c4-49a2-8b72-8931cc490c92";

function NativeHomeIndicator({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[148px]">
        <img alt="" className="block max-w-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

export default function GroupChat({ onNavigateBack, onNavigateToSubMenu }) {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    if (message.trim()) {
      // Here you would typically send the message
      console.log('Sending message:', message);
      setMessage(''); // Clear input after sending
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <div className="bg-white relative size-full">
      {/* Status Bar */}
      <div className="absolute bg-[#ddedff] h-[44px] left-0 top-0 w-[375px]">
        <div className="absolute flex flex-col font-medium justify-center leading-[0] left-[30px] not-italic text-[#153860] text-[16px] top-1/2 translate-y-[-50%] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <div className="absolute box-border content-stretch flex gap-[5px] items-center left-[283px] px-0 py-px top-[15px]">
          <div className="h-[10px] relative shrink-0 w-[18px]">
            <img alt="" className="block max-w-none size-full" src={img3} />
          </div>
          <div className="h-[10.965px] relative shrink-0 w-[15.272px]">
            <img alt="" className="block max-w-none size-full" src={img4} />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
            <div className="col-[1] h-[13px] ml-0 mt-[calc(50%+-6.5px)] relative row-[1] w-[26.978px]">
              <img alt="" className="block max-w-none size-full" src={img5} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute bg-white border-[#e9e9e9] border-b border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[6px] items-center left-0 px-[14px] py-[12px] top-[44px] w-[375px]">
        <div className="relative shrink-0 size-[24px] cursor-pointer" onClick={onNavigateBack}>
          <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
            <div className="flex-none h-[15px] rotate-[90deg] w-[12.049px]">
              <div className="relative size-full">
                <div className="absolute inset-[-5%_-6.22%]">
                  <img alt="" className="block max-w-none size-full" src={img6} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px pl-0 pr-[24px] py-0 relative shrink-0">
          <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-center min-h-px min-w-px relative shrink-0">
            <div className="relative shrink-0 size-[32px]">
              <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1113} width="32" />
            </div>
            <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#292929] text-[12px]">
                Work Contact Group (4)
              </p>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-end min-h-px min-w-px relative shrink-0">
          <div className="relative shrink-0 size-[24px]">
            <div className="absolute contents inset-[8.33%_8.33%_55.72%_55.83%]">
              <div className="absolute inset-[8.33%_8.33%_55.72%_55.83%]">
                <img alt="" className="block max-w-none size-full" src={img7} />
              </div>
            </div>
            <div className="absolute inset-[12.5%_12.5%_8.33%_8.33%]">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
          <div className="relative shrink-0 size-[24px] cursor-pointer" onClick={onNavigateToSubMenu}>
            <img alt="" className="block max-w-none size-full" src={imgIconlyBulkMoreCircle} />
          </div>
        </div>
      </div>

      {/* Empty State */}
      <div className="absolute left-[167.5px] size-[40px] top-[120px]">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgImage41} />
      </div>
      <div className="absolute content-stretch flex flex-col font-normal gap-[2px] items-start left-0 text-center top-[170px] w-[375px] whitespace-pre-wrap">
        <p className="leading-[24px] relative shrink-0 text-[#454545] text-[16px] w-full">
          Work Contact Group (4)
        </p>
        <p className="leading-[20px] relative shrink-0 text-[darkgrey] text-[14px] w-full">
          Start the conversation Work Contact Group now!
        </p>
      </div>

      {/* Message Input Box */}
      <div className="absolute bg-white border-[#e9e9e9] border-b-0 border-l-0 border-r-0 border-solid border-t bottom-0 box-border content-stretch flex gap-[10px] items-center left-0 pb-[52px] pt-[20px] px-[14px] w-[375px]">
        <div className="bg-white border-2 border-slate-300 border-solid flex-[1_0_0] h-[48px] min-h-px min-w-px relative rounded-[12px] shrink-0">
          <div className="box-border content-stretch flex h-[48px] items-center justify-between overflow-clip px-[20px] py-[10px] relative rounded-[inherit] w-full">
            <input 
              type="text" 
              placeholder="Type message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              className="bg-transparent border-none outline-none font-normal leading-[24px] flex-1 text-[#292929] text-[16px] placeholder:opacity-40 placeholder:text-[#292929]"
            />
            <div className="relative shrink-0 size-[24px] cursor-pointer" onClick={handleSend}>
              <div className="absolute inset-[8.33%_8.37%_8.88%_8.33%]">
                <img alt="" className="block max-w-none size-full" src={img} />
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[12.7%_14.59%_12.5%_16.66%]">
            <div className="absolute inset-[-4.18%_-4.55%]">
              <img alt="" className="block max-w-none size-full" src={img1} />
            </div>
          </div>
        </div>
        <div className="overflow-clip relative shrink-0 size-[24px]">
          <div className="absolute inset-[8.33%]">
            <div className="absolute inset-[-3.75%]">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        </div>
      </div>

      {/* Home Indicator */}
      <NativeHomeIndicator className="absolute bottom-0 h-[34px] left-0 rounded-tl-[8px] rounded-tr-[8px] w-[375px]" />
    </div>
  );
}

