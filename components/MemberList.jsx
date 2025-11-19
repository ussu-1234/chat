import React, { useState } from 'react'

// Image assets from Figma
const imgEllipse1113 = "https://www.figma.com/api/mcp/asset/441fcf44-d3ec-4e28-ae2e-1f97cc3f4c85";
const imgImage41 = "https://www.figma.com/api/mcp/asset/8ca6383b-02dc-49bd-9ca6-428bf006ec9f";
const imgEllipse1112 = "https://www.figma.com/api/mcp/asset/cfc65090-40b5-4821-95fc-360ee773582c";
const imgEllipse1114 = "https://www.figma.com/api/mcp/asset/09e5bfb6-5d36-425e-b920-6e8d77096558";
const imgEllipse1115 = "https://www.figma.com/api/mcp/asset/d6619698-7d79-4be3-8409-a6f32b689005";
const imgEllipse1116 = "https://www.figma.com/api/mcp/asset/1bf8c8e1-0767-44a5-b555-e335bda86e28";
const imgRectangle = "https://www.figma.com/api/mcp/asset/ed42cf21-37e0-4a59-8486-25f9990c7724";
const imgClose = "https://www.figma.com/api/mcp/asset/8b09982f-06ed-425c-a796-891e66f0d871";
const img = "https://www.figma.com/api/mcp/asset/fd787910-35f4-4d04-9c0d-a86982975110";
const img1 = "https://www.figma.com/api/mcp/asset/23ddf792-2b68-44e8-b205-a6e3b5607d02";
const img2 = "https://www.figma.com/api/mcp/asset/b74a1ab6-9dba-419f-a429-08d019fe3943";
const img3 = "https://www.figma.com/api/mcp/asset/68ada38e-07b4-4386-bf1b-2a3739be6885";
const img4 = "https://www.figma.com/api/mcp/asset/483ce79e-1d8d-4a9a-adc3-bf12d215466c";
const img5 = "https://www.figma.com/api/mcp/asset/03f78a75-6097-42a5-b64a-f3cded01fd1b";
const img6 = "https://www.figma.com/api/mcp/asset/5cf22add-c534-4a42-8150-30b836608dd6";
const img7 = "https://www.figma.com/api/mcp/asset/b64c9b2f-09c8-4ac6-8882-bdd12ae76fc6";
const img8 = "https://www.figma.com/api/mcp/asset/23b77464-f358-4cfa-95e9-3770e86caede";
const imgIconlyBulkMoreCircle = "https://www.figma.com/api/mcp/asset/d0bc919c-daeb-4484-9359-fb2de02679e9";
const img9 = "https://www.figma.com/api/mcp/asset/9b015789-1de4-431b-bc70-7f0cbe4e117a";
const img10 = "https://www.figma.com/api/mcp/asset/5e6c8a05-e975-45bd-932d-d83ac31deed6";
const img11 = "https://www.figma.com/api/mcp/asset/7928499a-9a11-4242-a081-9e8d05ad3337";
const img12 = "https://www.figma.com/api/mcp/asset/ea96f4f8-9c4b-4668-a5db-dcffbaf785e7";

function NativeHomeIndicator({ className }) {
  return (
    <div className={className}>
      <div className="absolute bottom-[8px] h-[5px] left-[calc(50%+0.5px)] translate-x-[-50%] w-[148px]">
        <img alt="" className="block max-w-none size-full" src={imgRectangle} />
      </div>
    </div>
  );
}

function IconlyLightClose({ className, onClick }) {
  return (
    <div className={className} onClick={onClick}>
      <div className="absolute inset-[20.83%_20.83%_20.91%_20.91%]">
        <img alt="" className="block max-w-none size-full" src={imgClose} />
      </div>
    </div>
  );
}

export default function MemberList({ onNavigateBack }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
          <div className="relative shrink-0 size-[24px] cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <img alt="" className="block max-w-none size-full" src={imgIconlyBulkMoreCircle} />
          </div>
        </div>
      </div>

      {/* Overlay */}
      <div className="absolute bg-[rgba(0,0,0,0.4)] bottom-0 h-[812px] left-0 w-[375px] z-10" onClick={() => setIsMenuOpen(false)} />

      {/* Member List Panel */}
      <div className="absolute bg-white content-stretch flex flex-col gap-[173px] h-[768px] items-center left-0 rounded-tl-[8px] rounded-tr-[8px] top-[44px] w-[375px] z-20">
        <div className="content-stretch flex flex-col gap-[8px] items-center relative shrink-0 w-full">
          {/* Header with Title and Close */}
          <div className="bg-[#ddedff] border-[#e1e4f1] border-b border-l-0 border-r-0 border-solid border-t-0 box-border content-stretch flex gap-[6px] items-center px-[14px] py-[12px] relative rounded-tl-[8px] rounded-tr-[8px] shrink-0 w-full">
            <div className="box-border content-stretch flex flex-[1_0_0] gap-[10px] items-center justify-center min-h-px min-w-px pl-[24px] pr-0 py-0 relative shrink-0">
              <div className="flex flex-[1_0_0] flex-col font-semibold justify-center leading-[0] min-h-px min-w-px relative shrink-0 text-[#153860] text-[16px] text-center">
                <p className="leading-[24px] whitespace-pre-wrap">Member List</p>
              </div>
            </div>
            <IconlyLightClose className="overflow-clip relative shrink-0 size-[24px] cursor-pointer" onClick={onNavigateBack} />
          </div>

          {/* Content */}
          <div className="bg-white content-stretch flex flex-col items-center overflow-clip relative shrink-0 w-[347px]">
            <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-full">
              {/* Search Bar */}
              <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[20px] pt-[12px] px-0 relative shrink-0 w-full">
                <div className="bg-[#f3f3f3] box-border content-stretch flex gap-[4px] items-center overflow-clip px-[20px] py-[10px] relative rounded-[12px] shrink-0 w-full">
                  <div className="opacity-40 relative shrink-0 size-[18px]">
                    <div className="absolute inset-[11.58%_10.24%_8.33%_11.58%]">
                      <div className="absolute inset-[-3.9%_-4%]">
                        <img alt="" className="block max-w-none size-full" src={img9} />
                      </div>
                    </div>
                  </div>
                  <input 
                    type="text" 
                    placeholder="Search by name"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="bg-transparent border-none outline-none font-normal leading-[20px] flex-1 text-[#292929] text-[14px] placeholder:opacity-40 placeholder:text-[#292929]"
                  />
                </div>
              </div>

              {/* Add Member Button and Member List */}
              <div className="content-stretch flex flex-col gap-[2px] items-start relative shrink-0 w-full">
                {/* Add Member Button */}
                <div className="border border-[#153860] border-solid box-border content-stretch flex gap-[4px] h-[40px] items-center justify-center pb-[8px] pt-[8px] px-[16px] relative rounded-[20px] shrink-0 w-full cursor-pointer hover:bg-gray-50">
                  <div className="overflow-clip relative shrink-0 size-[24px]">
                    <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]">
                      <div className="absolute inset-[-5.36%_-0.75px]">
                        <img alt="" className="block max-w-none size-full" src={img10} />
                      </div>
                    </div>
                    <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2">
                      <div className="absolute inset-[-0.75px_-5.36%]">
                        <img alt="" className="block max-w-none size-full" src={img11} />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col font-semibold justify-center leading-[0] relative shrink-0 text-[#153860] text-[14px] text-center whitespace-nowrap">
                    <p className="leading-[24px]">Add Member</p>
                  </div>
                </div>

                {/* Member List */}
                <div className="box-border content-stretch flex flex-col gap-[2px] items-start pb-0 pt-[10px] px-0 relative shrink-0 w-full">
                  {/* Member 1 */}
                  <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[34px]">
                        <img alt="" className="block max-w-none size-full" height="34" src={imgEllipse1112} width="34" />
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[24px] min-h-px min-w-px relative shrink-0 text-[#153860] text-[16px] whitespace-pre-wrap">
                        Anuwat Sakul-amphon
                      </p>
                      <div className="relative shrink-0 size-[24px] cursor-pointer">
                        <div className="absolute inset-[11.46%_13.72%_11.46%_15.63%]">
                          <div className="absolute inset-[-4.05%_-4.42%]">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 2 */}
                  <div className="bg-white box-border content-stretch flex items-center px-0 py-[10px] relative rounded-[33px] shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[34px]">
                        <img alt="" className="block max-w-none size-full" height="34" src={imgEllipse1114} width="34" />
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[24px] min-h-px min-w-px relative shrink-0 text-[#414668] text-[16px] whitespace-pre-wrap">
                        Nattida Kanjanaboon
                      </p>
                      <div className="relative shrink-0 size-[24px] cursor-pointer">
                        <div className="absolute inset-[11.46%_13.72%_11.46%_15.63%]">
                          <div className="absolute inset-[-4.05%_-4.42%]">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 3 */}
                  <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[34px]">
                        <img alt="" className="block max-w-none size-full" height="34" src={imgEllipse1115} width="34" />
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[24px] min-h-px min-w-px relative shrink-0 text-[#414668] text-[16px] whitespace-pre-wrap">
                        Narongchai Wichaisawat
                      </p>
                      <div className="relative shrink-0 size-[24px] cursor-pointer">
                        <div className="absolute inset-[11.46%_13.72%_11.46%_15.63%]">
                          <div className="absolute inset-[-4.05%_-4.42%]">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Member 4 */}
                  <div className="box-border content-stretch flex items-center px-0 py-[10px] relative shrink-0 w-full">
                    <div className="content-stretch flex flex-[1_0_0] gap-[14px] items-center min-h-px min-w-px relative shrink-0">
                      <div className="relative shrink-0 size-[34px]">
                        <img alt="" className="block max-w-none size-full" height="34" src={imgEllipse1116} width="34" />
                      </div>
                      <p className="flex-[1_0_0] font-normal leading-[24px] min-h-px min-w-px relative shrink-0 text-[#414668] text-[16px] whitespace-pre-wrap">
                        Pimrada Chumprapop
                      </p>
                      <div className="relative shrink-0 size-[24px] cursor-pointer">
                        <div className="absolute inset-[11.46%_13.72%_11.46%_15.63%]">
                          <div className="absolute inset-[-4.05%_-4.42%]">
                            <img alt="" className="block max-w-none size-full" src={img12} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Save Button */}
      <div className="absolute bg-[#edf1f3] box-border content-stretch flex gap-[10px] items-center justify-center left-1/2 overflow-clip px-[24px] py-[11px] rounded-[10px] top-[710px] translate-x-[-50%] w-[347px] z-20 cursor-pointer hover:bg-gray-200">
        <p className="font-semibold leading-[24px] relative shrink-0 text-[#acb5bb] text-[14px] text-center">
          Save
        </p>
      </div>

      {/* Home Indicator */}
      <NativeHomeIndicator className="absolute bottom-0 h-[34px] left-0 rounded-tl-[8px] rounded-tr-[8px] w-[375px]" />
    </div>
  );
}

