import React, { useState } from 'react'

// Image assets from Figma
const imgFrame10 = "https://www.figma.com/api/mcp/asset/25fabf66-7aec-4605-8b75-21d405eec345";
const imgRectangle = "https://www.figma.com/api/mcp/asset/f87d17f6-ce12-439d-ab6c-dfc96485854c";
const imgMeteorIconsCheckDouble = "https://www.figma.com/api/mcp/asset/2c399230-5794-4cd8-ab8f-dbc45f334ba0";
const img = "https://www.figma.com/api/mcp/asset/cf4ece22-9d2e-45ba-bd49-5cca47656ab7";
const img1 = "https://www.figma.com/api/mcp/asset/51fa772a-0354-4883-b353-d822d8c444c6";
const img2 = "https://www.figma.com/api/mcp/asset/5a4b8c5b-a430-4598-8e43-4966e1887806";
const img3 = "https://www.figma.com/api/mcp/asset/fa84d87e-77eb-4da7-8bc9-e13aea7f4c49";
const img4 = "https://www.figma.com/api/mcp/asset/c397d1d6-4daa-43e4-8745-622b00da6bf5";
const img5 = "https://www.figma.com/api/mcp/asset/e5e362c1-5f4a-4d55-b84e-29c4584a66ed";
const img6 = "https://www.figma.com/api/mcp/asset/27bb0102-1e8e-4c71-a5e1-7e6bb5fbbe17";
const imgEllipse1 = "https://www.figma.com/api/mcp/asset/2802aef7-c1af-4087-817f-6df170e42483";
const img7 = "https://www.figma.com/api/mcp/asset/9668d333-9599-465a-9385-43e6f075a701";
const img8 = "https://www.figma.com/api/mcp/asset/84dc7eba-52ed-4591-835b-2410aeacfbfb";
const imgIconlyBulkMoreCircle = "https://www.figma.com/api/mcp/asset/66b3923e-1b89-4939-b3fb-2f9e8d3194c5";

function NativeHomeIndicator({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[148px]">
        <img alt="" className="block max-w-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

export default function PrivateChat({ onNavigateBack, onNavigateToSubMenu }) {
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
          <div className="content-stretch flex flex-[1_0_0] gap-[5px] items-start min-h-px min-w-px relative shrink-0">
            <div className="relative rounded-[80px] shrink-0 size-[32px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgFrame10} />
            </div>
            <div className="box-border content-stretch flex flex-col items-start pb-[4px] pt-0 px-0 relative shrink-0">
              <p className="font-normal leading-[18px] relative shrink-0 text-[#292929] text-[12px]">
                Swift Cargo Solutions
              </p>
              <div className="box-border content-stretch flex gap-[4px] items-center mb-[-4px] relative shrink-0">
                <div className="relative shrink-0 size-[10px]">
                  <img alt="" className="block max-w-none size-full" src={imgEllipse1} />
                </div>
                <p className="font-normal leading-[18px] relative shrink-0 text-[#6a6a6a] text-[12px]">
                  Online
                </p>
              </div>
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

      {/* Message List */}
      <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[903px] items-start left-0 pb-[24px] pt-[10px] px-[14px] top-[100px] w-[375px] overflow-y-auto">
        {/* Incoming Message 1 */}
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-center relative shrink-0 w-full">
          <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
            <div className="relative rounded-[80px] shrink-0 size-[32px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgFrame10} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative shrink-0">
              <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
                14:23
              </p>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="bg-[#f0f0f0] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[1px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                  <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-black whitespace-pre-wrap">
                    Hello, I would like to know what kind of shipping services the company currently offers?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outgoing Message 1 */}
        <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
          <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end justify-center min-h-px min-w-px relative shrink-0">
            <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
              14:23
            </p>
            <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
              <div className="relative shrink-0 size-[18px]">
                <img alt="" className="block max-w-none size-full" src={imgMeteorIconsCheckDouble} />
              </div>
              <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative shrink-0">
                <div className="bg-[#153860] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[6px] rounded-br-[1px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                  <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-white whitespace-pre-wrap">
                    Hello, we have both small parcel delivery services, full-load shipping services, and temperature-controlled shipping services. Are you interested in any particular type?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Incoming Message 2 */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[10px] items-start relative shrink-0 w-full">
            <div className="rounded-[80px] shrink-0 size-[32px]" />
            <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
              <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
                14:23
              </p>
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0">
                <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
                  <div className="bg-[#f0f0f0] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[1px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0">
                    <p className="font-normal leading-[20px] relative shrink-0 text-[14px] text-black">
                      Perfect! ✅
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Incoming Message 3 */}
          <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
            <div className="relative rounded-[80px] shrink-0 size-[32px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgFrame10} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative shrink-0">
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="bg-[#f0f0f0] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[1px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                  <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-black whitespace-pre-wrap">
                    I'm interested in the full-load shipping service. I'd like to know how much area the service covers?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outgoing Message 2 */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end justify-center min-h-px min-w-px relative shrink-0">
              <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
                14:23
              </p>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="block max-w-none size-full" src={imgMeteorIconsCheckDouble} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-[#153860] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[6px] rounded-br-[1px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                    <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-white whitespace-pre-wrap">
                      We can provide services nationwide. And we also have express delivery services in the Bangkok area.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Incoming Message 4 */}
        <div className="content-stretch flex flex-col gap-[10px] items-start justify-end relative shrink-0 w-full">
          <div className="content-stretch flex gap-[10px] items-end relative shrink-0 w-full">
            <div className="relative rounded-[80px] shrink-0 size-[32px]">
              <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[80px] size-full" src={imgFrame10} />
            </div>
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-start min-h-px min-w-px relative shrink-0">
              <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
                14:23
              </p>
              <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
                <div className="bg-[#f0f0f0] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[1px] rounded-br-[6px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                  <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-black whitespace-pre-wrap">
                    That's great. Is there also a real-time package tracking service?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outgoing Message 3 */}
        <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
          <div className="content-stretch flex gap-[16px] items-center justify-end relative shrink-0 w-full">
            <div className="content-stretch flex flex-[1_0_0] flex-col gap-[2px] items-end justify-center min-h-px min-w-px relative shrink-0">
              <p className="font-normal leading-[18px] opacity-30 relative shrink-0 text-[#292929] text-[12px]">
                14:23
              </p>
              <div className="content-stretch flex gap-[10px] items-center relative shrink-0 w-full">
                <div className="relative shrink-0 size-[18px]">
                  <img alt="" className="block max-w-none size-full" src={imgMeteorIconsCheckDouble} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[10px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="bg-[#153860] box-border content-stretch flex gap-[10px] items-start px-[16px] py-[8px] relative rounded-bl-[6px] rounded-br-[1px] rounded-tl-[6px] rounded-tr-[6px] shrink-0 w-full">
                    <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-white whitespace-pre-wrap">
                      Yes, customers can track the status of their shipments through our online system 24 hours a day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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

