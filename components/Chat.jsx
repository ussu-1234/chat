import React, { useState } from 'react'

// Image assets from Figma
const imgFrame10 = "https://www.figma.com/api/mcp/asset/31e66fe1-0b6c-4069-9a8c-f8b578efe0fd";
const imgFrame11 = "https://www.figma.com/api/mcp/asset/692d0c18-d52b-4851-840e-b38f97316a31";
const imgFrame12 = "https://www.figma.com/api/mcp/asset/0c0574a3-d8f6-49bb-8e1c-881b6b7a3711";
const imgFrame13 = "https://www.figma.com/api/mcp/asset/6f0045d4-b04e-4a02-95d2-ecad79f99860";
const imgFrame14 = "https://www.figma.com/api/mcp/asset/6740ea27-a1a2-45dd-a47d-3b5284c52dd8";
const imgEllipse1113 = "https://www.figma.com/api/mcp/asset/d6ebcc18-98c5-4659-bc33-7df7f93168f3";
const imgEllipse1112 = "https://www.figma.com/api/mcp/asset/8fd0a51b-b016-42c0-b10f-e74d615eab45";
const imgShape = "https://www.figma.com/api/mcp/asset/a0d0f6c5-f7de-4c9b-8e08-92ecc1c54310";
const img = "https://www.figma.com/api/mcp/asset/0211543c-8993-4e03-b858-a7cd907f8ce6";
const img1 = "https://www.figma.com/api/mcp/asset/afd8f228-3bd0-4df0-89ff-efd12d10136f";
const img2 = "https://www.figma.com/api/mcp/asset/3ab27551-9365-4711-959d-83a7906c2d0d";
const img3 = "https://www.figma.com/api/mcp/asset/8cd5d4ea-b7e8-4964-83dd-52f31e6ecae7";
const img4 = "https://www.figma.com/api/mcp/asset/12ec8df4-b91f-47f9-b5f2-83a6fc06a3c6";
const img5 = "https://www.figma.com/api/mcp/asset/8c00f6ca-72bf-4d57-80f1-c703e6dd65a6";
const img6 = "https://www.figma.com/api/mcp/asset/ebd597b6-11a8-47d5-a335-18e67886c984";
const img7 = "https://www.figma.com/api/mcp/asset/a787452d-d928-4db4-9c97-5e474d584003";
const img8 = "https://www.figma.com/api/mcp/asset/2f5f82e4-c893-4e61-857c-02d72bfa185e";

function KeyboardArrowUp({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]">
        <div className="absolute inset-0">
          <img alt="" className="block max-w-none size-full" src={imgShape} />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowUp1({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]">
        <div className="absolute inset-0">
          <img alt="" className="block max-w-none size-full" src={imgShape} />
        </div>
      </div>
    </div>
  );
}

function KeyboardArrowUp2({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[35.83%] left-1/4 right-1/4 top-[33.33%]">
        <div className="absolute inset-0">
          <img alt="" className="block max-w-none size-full" src={imgShape} />
        </div>
      </div>
    </div>
  );
}

export default function Chat({ onNavigateToChat, onNavigateToGroup, onNavigateToSubMenu }) {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <div className="bg-white relative size-full">
      {/* Status Bar */}
      <div className="absolute bg-[#ddedff] h-[44px] left-0 top-0 w-[375px]">
        <div className="absolute flex flex-col font-medium justify-center leading-[0] left-[30px] not-italic text-[#153860] text-[16px] top-1/2 translate-y-[-50%] whitespace-nowrap">
          <p className="leading-[16px]">9:41</p>
        </div>
        <div className="absolute box-border content-stretch flex gap-[5px] items-center left-[283px] px-0 py-px top-[15px]">
          <div className="h-[10px] relative shrink-0 w-[18px]">
            <img alt="" className="block max-w-none size-full" src={img} />
          </div>
          <div className="h-[10.965px] relative shrink-0 w-[15.272px]">
            <img alt="" className="block max-w-none size-full" src={img1} />
          </div>
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
            <div className="col-[1] h-[13px] ml-0 mt-[calc(50%+-6.5px)] relative row-[1] w-[26.978px]">
              <img alt="" className="block max-w-none size-full" src={img2} />
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <div className="absolute bg-[#ddedff] border-[#e1e4f1] border-b border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[6px] items-center left-0 px-[14px] py-[12px] rounded-bl-[8px] rounded-br-[8px] top-[44px] w-[375px]">
        <div className="relative shrink-0 size-[24px]">
          <div className="absolute flex inset-[26.04%_19.79%_23.76%_17.71%] items-center justify-center">
            <div className="flex-none h-[15px] rotate-[90deg] w-[12.049px]">
              <div className="relative size-full">
                <img alt="" className="block max-w-none size-full" src={img3} />
              </div>
            </div>
          </div>
        </div>
        <div className="box-border content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px pl-0 pr-[24px] py-0 relative shrink-0">
          <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#153860] text-[16px] text-center">
            <p className="leading-[24px] whitespace-pre-wrap">Chat</p>
          </div>
        </div>
      </div>

      {/* Messages Panel */}
      <div className="absolute bg-white content-stretch flex flex-col items-center left-1/2 overflow-clip top-[92px] translate-x-[-50%] w-[347px]">
        <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
          {/* Search Bar */}
          <div className="box-border content-stretch flex flex-col gap-[10px] items-start px-0 py-[12px] relative shrink-0 w-full">
            <div className="bg-[#f3f3f3] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[12px] shrink-0 w-full">
              <div className="opacity-40 relative shrink-0 size-[18px]">
                <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]">
                  <div className="absolute inset-[-3.9%_-4%]">
                    <img alt="" className="block max-w-none size-full" src={img4} />
                  </div>
                </div>
              </div>
              <input 
                type="text" 
                placeholder="Search messages"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent border-none outline-none font-normal leading-[20px] flex-1 text-[#292929] text-[14px] placeholder:opacity-40 placeholder:text-[#292929]"
              />
            </div>
          </div>

          {/* Message Lists */}
          <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full">
            {/* Companies Section */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-semibold leading-[24px] min-h-px min-w-px relative shrink-0 text-[#153860] text-[14px] whitespace-pre-wrap">
                  Companies (2)
                </p>
                <KeyboardArrowUp2 className="overflow-clip relative shrink-0 size-[24px]" />
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToChat}>
                <div className="relative rounded-[66.667px] shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[66.667px] size-full" src={imgFrame10} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
                      <p className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 text-[#292929] whitespace-pre-wrap">
                        Ocean Express Logistics
                      </p>
                      <p className="relative shrink-0 text-[darkgrey]">
                        16:02
                      </p>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] whitespace-pre-wrap">
                        Typing...
                      </p>
                      <div className="bg-[#e22437] box-border content-stretch flex flex-col gap-[10px] h-[20px] items-center justify-center px-[5px] py-[4px] relative rounded-[38px] shrink-0">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
                          <p className="leading-[normal] whitespace-pre-wrap">2</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToChat}>
                <div className="relative rounded-[66.667px] shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[66.667px] size-full" src={imgFrame11} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col font-normal items-start leading-[20px] relative shrink-0 text-[14px] w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 text-[#292929] whitespace-pre-wrap">
                        Swift Cargo Solutions
                      </p>
                      <p className="relative shrink-0 text-[darkgrey]">
                        10:02
                      </p>
                    </div>
                    <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full whitespace-pre-wrap">
                      It's very good to use
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Friends Section */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-semibold leading-[24px] min-h-px min-w-px relative shrink-0 text-[#153860] text-[14px] whitespace-pre-wrap">
                  Friends (3)
                </p>
                <KeyboardArrowUp1 className="overflow-clip relative shrink-0 size-[24px]" />
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToChat}>
                <div className="relative rounded-[66.667px] shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[66.667px] size-full" src={imgFrame12} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex font-normal gap-[12px] items-start leading-[20px] relative shrink-0 text-[14px] w-full">
                      <p className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 text-[#292929] whitespace-pre-wrap">
                        Ocean Express Logistics
                      </p>
                      <p className="relative shrink-0 text-[darkgrey]">
                        16:02
                      </p>
                    </div>
                    <div className="content-stretch flex items-center relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[14px] text-[rgba(0,0,0,0.4)] whitespace-pre-wrap">
                        Typing...
                      </p>
                      <div className="bg-[#e22437] box-border content-stretch flex flex-col gap-[10px] h-[20px] items-center justify-center px-[5px] py-[4px] relative rounded-[38px] shrink-0">
                        <div className="flex flex-col font-medium justify-center leading-[0] relative shrink-0 text-[16px] text-center text-white w-full">
                          <p className="leading-[normal] whitespace-pre-wrap">1</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[12px] relative rounded-[12px] shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToChat}>
                <div className="relative rounded-[66.667px] shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[66.667px] size-full" src={imgFrame13} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col font-normal items-start leading-[20px] relative shrink-0 text-[14px] w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 text-[#292929] whitespace-pre-wrap">
                        Swift Cargo Solutions
                      </p>
                      <p className="relative shrink-0 text-[darkgrey]">
                        14:23
                      </p>
                    </div>
                    <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full whitespace-pre-wrap">
                      Yes, we did it! 🔥
                    </p>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-start overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToChat}>
                <div className="relative rounded-[66.667px] shrink-0 size-[32px]">
                  <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[66.667px] size-full" src={imgFrame14} />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col font-normal items-start leading-[20px] relative shrink-0 text-[14px] w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] min-h-px min-w-px relative shrink-0 text-[#292929] whitespace-pre-wrap">
                        Horizon Shipping Co., Ltd.
                      </p>
                      <p className="relative shrink-0 text-[darkgrey]">
                        10:02
                      </p>
                    </div>
                    <p className="relative shrink-0 text-[rgba(0,0,0,0.4)] w-full whitespace-pre-wrap">
                      It's very good to use
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Groups Section */}
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 w-full">
                <p className="flex-[1_0_0] font-semibold leading-[24px] min-h-px min-w-px relative shrink-0 text-[#153860] text-[14px] whitespace-pre-wrap">
                  Groups (2)
                </p>
                <KeyboardArrowUp className="overflow-clip relative shrink-0 size-[24px]" />
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToGroup}>
                <div className="relative shrink-0 size-[32px]">
                  <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1113} width="32" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[#292929] text-[14px] whitespace-pre-wrap">
                        Work Contact Group (4)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="box-border content-stretch flex gap-[10px] items-center overflow-clip px-0 py-[12px] relative shrink-0 w-full cursor-pointer hover:bg-gray-50" onClick={onNavigateToGroup}>
                <div className="relative shrink-0 size-[32px]">
                  <img alt="" className="block max-w-none size-full" height="32" src={imgEllipse1112} width="32" />
                </div>
                <div className="content-stretch flex flex-[1_0_0] flex-col gap-[8px] items-start min-h-px min-w-px relative shrink-0">
                  <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
                    <div className="content-stretch flex gap-[12px] items-start relative shrink-0 w-full">
                      <p className="flex-[1_0_0] font-normal leading-[20px] min-h-px min-w-px relative shrink-0 text-[#292929] text-[14px] whitespace-pre-wrap">
                        Work Contact Group (2)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="absolute contents left-0 top-[708px]">
        <div className="absolute bg-[#153860] box-border content-stretch flex gap-[8px] items-start left-0 px-[8px] py-0 rounded-tl-[8px] rounded-tr-[8px] top-[708px] w-[375px]">
          <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px pb-[16px] pt-[12px] px-0 relative shrink-0">
            <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-[32px]">
              <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[8.33%_10.42%]">
                    <div className="absolute inset-[-3.75%_-3.95%]">
                      <img alt="" className="block max-w-none size-full" src={img5} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-medium leading-[16px] min-w-full relative shrink-0 text-[#e2f8ff] text-[12px] text-center tracking-[0.5px] w-[min-content] whitespace-pre-wrap">
              Home
            </p>
          </div>
          <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px pb-[16px] pt-[12px] px-0 relative shrink-0">
            <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
              <div className="bg-gradient-to-r box-border col-[1] content-stretch flex flex-col from-[#00c188] from-[2.071%] items-center justify-center ml-0 mt-0 overflow-clip relative rounded-[16px] row-[1] to-[#23b9e9]">
                <div className="box-border content-stretch flex h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]">
                  <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid justify-items-start leading-[0] relative shrink-0">
                    <div className="col-[1] ml-0 mt-0 relative row-[1] size-[24px]">
                      <div className="absolute inset-[8.33%]">
                        <img alt="" className="block max-w-none size-full" src={img6} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[#e22437] box-border col-[1] content-stretch flex flex-col gap-[10px] h-[14px] items-center justify-center ml-[33.63px] mt-[3px] p-[3px] relative rounded-[38px] row-[1]">
                <div className="flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[12px] text-center text-white w-full">
                  <p className="leading-[18px] whitespace-pre-wrap">3</p>
                </div>
              </div>
            </div>
            <p className="font-semibold leading-[16px] min-w-full relative shrink-0 text-[#e2f8ff] text-[12px] text-center tracking-[0.5px] w-[min-content] whitespace-pre-wrap">
              Chat
            </p>
          </div>
          <div className="box-border content-stretch flex flex-[1_0_0] flex-col gap-[4px] items-center justify-center min-h-px min-w-px pb-[16px] pt-[12px] px-0 relative shrink-0">
            <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 w-[32px]">
              <div className="box-border content-stretch flex gap-[10px] h-[32px] items-center justify-center px-[20px] py-[4px] relative shrink-0 w-[64px]">
                <div className="relative shrink-0 size-[24px]">
                  <div className="absolute inset-[18.75%_16.67%_21.25%_16.67%]">
                    <div className="absolute inset-[-5.21%_-4.69%]">
                      <img alt="" className="block max-w-none size-full" src={img7} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-medium leading-[16px] min-w-full relative shrink-0 text-[#e2f8ff] text-[12px] text-center tracking-[0.5px] w-[min-content] whitespace-pre-wrap">
              Settings
            </p>
          </div>
        </div>
        <div className="absolute bg-[#153860] bottom-0 h-[34px] left-0 w-[375px]">
          <div className="absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[148px]">
            <div className="absolute inset-0">
              <img alt="" className="block max-w-none size-full" src={img8} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

