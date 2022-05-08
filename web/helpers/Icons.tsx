import { MailIcon, PencilAltIcon } from "@heroicons/react/solid";
import { BellIcon, DocumentSearchIcon } from "@heroicons/react/outline";
import { DestinationType, RuleType, SourceType } from "../pages/rules";

export type SVGIconProps = {
  className: string,
  isActive: boolean,
}

export const NotionIcon = ({className, isActive}: SVGIconProps) => (
  <svg viewBox="13.38 3.2 485.44 505.7" className={className} xmlns="http://www.w3.org/2000/svg">
    <path d="m186.84 13.95c-79.06 5.85-146.27 11.23-149.43 11.86-8.86 1.58-16.92 7.59-20.71 15.5l-3.32 6.96.32 165.88.47 165.88 5.06 10.28c2.85 5.69 22.14 32.26 43.17 59.61 41.59 53.92 44.59 56.93 60.4 58.51 4.59.47 39.06-1.11 76.38-3.32 37.48-2.37 97.56-6.01 133.62-8.06 154.01-9.35 146.1-8.56 154.95-16.15 11.07-9.17 10.28 5.85 10.75-195.76.32-170.94.16-182.16-2.37-187.38-3-5.85-8.38-9.96-78.59-59.3-46.96-32.89-50.28-34.63-71.32-34.95-8.69-.31-80.48 4.43-159.38 10.44zm177.73 21.66c6.64 3 55.19 36.84 62.3 43.33 1.9 1.9 2.53 3.48 1.58 4.43-2.21 1.9-302.66 19.77-311.35 18.5-3.95-.63-9.8-3-13.12-5.22-13.76-9.33-47.91-37.32-47.91-39.37 0-5.38-1.11-5.38 132.83-15.02 25.62-1.74 67.68-4.9 93.3-6.96 55.49-4.43 72.1-4.27 82.37.31zm95.51 86.5c2.21 2.21 4.11 6.48 4.74 10.59.47 3.8.79 74.64.47 157.18-.47 141.68-.63 150.54-3.32 154.65-1.58 2.53-4.74 5.22-7.12 6.01-6.63 2.69-321.46 20.56-327.94 18.66-3-.79-7.12-3.32-9.33-5.53l-3.8-4.11-.47-152.75c-.32-107.21 0-154.65 1.27-158.92.95-3.16 3.32-6.96 5.38-8.22 2.85-1.9 21.51-3.48 85.71-7.27 45.07-2.53 114.8-6.8 154.81-9.17 95.17-5.86 94.86-5.86 99.6-1.12z" fill={isActive ? '#FFF' : '#000'}/>
    <path d="m375.48 174.45c-17.08 1.11-32.26 2.69-34 3.64-5.22 2.69-8.38 7.12-9.01 12.18-.47 5.22 1.11 5.85 18.18 7.91l7.43.95v67.52c0 40.16-.63 66.73-1.42 65.94-.79-.95-23.24-35.1-49.97-75.9-26.72-40.95-48.86-74.64-49.18-74.95-.32-.32-17.71.63-38.58 2.06-25.62 1.74-39.69 3.32-42.54 4.9-4.59 2.37-9.65 10.75-9.65 16.29 0 3.32 6.01 5.06 18.66 5.06h6.64v194.18l-10.75 3.32c-8.38 2.53-11.23 4.11-12.65 7.27-2.53 5.38-2.37 10.28.16 10.28.95 0 18.82-1.11 39.37-2.37 40.64-2.37 45.22-3.48 49.49-11.86 1.27-2.53 2.37-5.22 2.37-6.01 0-.63-5.53-2.53-12.18-4.11-6.8-1.58-13.6-3.16-15.02-3.48-2.69-.79-2.85-5.69-2.85-73.69v-72.9l48.07 75.43c50.44 79.06 56.77 88.08 64.52 92.03 9.65 5.06 34.16 1.58 46.49-6.48l3.8-2.37.32-107.84.47-108 8.38-1.58c9.96-1.9 14.55-6.48 14.55-14.39 0-5.06-.32-5.38-5.06-5.22-2.83.13-19.12 1.08-36.04 2.19z" fill={isActive ? '#FFF' : '#000'}/>
  </svg>
)

export const GoogleDocsIcon = ({className, isActive}: SVGIconProps) => (
  <svg viewBox="0 0 441 441" className={className} xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M91.8125 440H350.188C366.584 440 380 426.561 380 410.136V111.5L270.688 2H91.8125C75.4156 2 62 15.4386 62 31.8636V410.136C62 426.561 75.4156 440 91.8125 440ZM131.562 196.114H310.438V171.227H131.562V196.114ZM131.562 230.955H310.438V255.841H131.562V230.955ZM131.562 290.682H260.75V315.568H131.562V290.682Z" fill={isActive ? '#FFF' : '#3086F6'}/>
    <path d="M270.688 2L380 111.5H270.688V2Z" fill={isActive ? '#DDD' : '#0C67D6'}/>
  </svg>
)

export const ConfluenceIcon = ({className, isActive}: SVGIconProps) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 256 246" version="1.1" preserveAspectRatio="xMidYMid">
    <defs>
        <linearGradient x1="99.140087%" y1="112.708084%" x2="33.8589812%" y2="37.7549606%" id="linearGradient-1">
            <stop stopColor={isActive ? '#FFF' : "#0052CC"} offset="18%"/>
            <stop stopColor={isActive ? '#FFF' : "#2684FF"} offset="100%"/>
        </linearGradient>
        <linearGradient x1="0.92569163%" y1="-12.5823074%" x2="66.1800713%" y2="62.3057471%" id="linearGradient-2">
            <stop stopColor={isActive ? '#FFF' : "#0052CC"} offset="18%"/>
            <stop stopColor={isActive ? '#FFF' : "#2684FF"} offset="100%"/>
        </linearGradient>
    </defs>
    <g>
				<path d="M9.26054484,187.329971 C6.61939782,191.637072 3.65318655,196.634935 1.13393863,200.616972 C-1.12098385,204.42751 0.0895487945,209.341911 3.85635171,211.669157 L56.6792921,244.175582 C58.5334859,245.320393 60.7697695,245.67257 62.8860683,245.153045 C65.0023672,244.633521 66.8213536,243.285826 67.9346417,241.412536 C70.0475593,237.877462 72.7699724,233.285929 75.7361837,228.369333 C96.6621947,193.831256 117.710105,198.057091 155.661356,216.179423 L208.037333,241.087471 C210.020997,242.031639 212.302415,242.132457 214.361632,241.366949 C216.420848,240.601441 218.082405,239.034833 218.967618,237.024168 L244.119464,180.137925 C245.896483,176.075046 244.088336,171.3377 240.056161,169.492071 C229.003977,164.291043 207.021507,153.92962 187.233221,144.380857 C116.044151,109.802148 55.5415672,112.036965 9.26054484,187.329971 Z" fill="url(#linearGradient-1)"/>
				<path d="M246.11505,58.2319428 C248.756197,53.9248415 251.722408,48.9269787 254.241656,44.9449416 C256.496579,41.1344037 255.286046,36.2200025 251.519243,33.8927572 L198.696303,1.38633231 C196.82698,0.127283893 194.518741,-0.298915762 192.323058,0.209558312 C190.127374,0.718032386 188.241461,2.11550922 187.115889,4.06811236 C185.002971,7.60318607 182.280558,12.1947186 179.314347,17.1113153 C158.388336,51.6493918 137.340426,47.4235565 99.3891748,29.3012247 L47.1757299,4.5150757 C45.1920661,3.57090828 42.9106475,3.47008979 40.8514312,4.2355977 C38.7922149,5.00110562 37.1306578,6.56771434 36.2454445,8.57837881 L11.0935983,65.4646223 C9.31657942,69.5275012 11.1247267,74.2648471 15.1569014,76.1104765 C26.2090859,81.3115044 48.1915557,91.6729274 67.9798418,101.22169 C139.331444,135.759766 199.834028,133.443683 246.11505,58.2319428 Z" fill="url(#linearGradient-2)"/>
		</g>
</svg>
)

export const getRuleTypeIcon = (type: RuleType, outerSize = 10, innerSize = 6) => {
  if (type === 'Notification') {
    return <div className={`h-${outerSize} w-${outerSize} rounded-lg bg-yellow-100 flex items-center justify-center`}>
      <BellIcon className={`h-${innerSize} w-${innerSize} text-yellow-600`} />
    </div>
  }

  if (type === 'Update') {
    return <div className={`h-${outerSize} w-${outerSize} rounded-lg bg-green-100 flex items-center justify-center`}>
        <DocumentSearchIcon className={`h-${innerSize} w-${innerSize} text-green-600`} />
      </div>
  }

  return null;
}

export const getTypeIcon = (type: SourceType | DestinationType, className: string) => {
  if (type === 'github') {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="currentColor">
    <path fillRule="evenodd" clipRule="evenodd" d="M62 12C34.375 12 12 34.375 12 62C12 84.125 26.3125 102.812 46.1875 109.437C48.6875 109.875 49.625 108.375 49.625 107.062C49.625 105.875 49.5625 101.937 49.5625 97.75C37 100.062 33.75 94.6875 32.75 91.875C32.1875 90.4375 29.75 86 27.625 84.8125C25.875 83.875 23.375 81.5625 27.5625 81.5C31.5 81.4375 34.3125 85.125 35.25 86.625C39.75 94.1875 46.9375 92.0625 49.8125 90.75C50.25 87.5 51.5625 85.3125 53 84.0625C41.875 82.8125 30.25 78.5 30.25 59.375C30.25 53.9375 32.1875 49.4375 35.375 45.9375C34.875 44.6875 33.125 39.5625 35.875 32.6875C35.875 32.6875 40.0625 31.375 49.625 37.8125C53.625 36.6875 57.875 36.125 62.125 36.125C66.375 36.125 70.625 36.6875 74.625 37.8125C84.1875 31.3125 88.375 32.6875 88.375 32.6875C91.125 39.5625 89.375 44.6875 88.875 45.9375C92.0625 49.4375 94 53.875 94 59.375C94 78.5625 82.3125 82.8125 71.1875 84.0625C73 85.625 74.5625 88.625 74.5625 93.3125C74.5625 100 74.5 105.375 74.5 107.062C74.5 108.375 75.4375 109.937 77.9375 109.437C97.6875 102.812 112 84.0625 112 62C112 34.375 89.625 12 62 12Z" />
    </svg>
  }

  if (type === 'doc') {
    return <PencilAltIcon className={className} />
  }

  if (type === 'email') {
    return <MailIcon className={className} />
  }

  if (type === 'slack') {
    return <svg className={className} xmlns="http://www.w3.org/2000/svg" width="124" height="124" viewBox="0 0 124 124" fill="currentColor">
    <path d="M33.4173 74.9921C33.4173 80.7401 28.7716 85.3858 23.0236 85.3858C17.2756 85.3858 12.6299 80.7401 12.6299 74.9921C12.6299 69.2441 17.2756 64.5984 23.0236 64.5984H33.4173V74.9921ZM38.6141 74.9921C38.6141 69.2441 43.2598 64.5984 49.0078 64.5984C54.7559 64.5984 59.4015 69.2441 59.4015 74.9921V100.976C59.4015 106.724 54.7559 111.37 49.0078 111.37C43.2598 111.37 38.6141 106.724 38.6141 100.976V74.9921Z" />
    <path d="M49.0078 33.2598C43.2598 33.2598 38.6141 28.6141 38.6141 22.8661C38.6141 17.1181 43.2598 12.4724 49.0078 12.4724C54.7559 12.4724 59.4015 17.1181 59.4015 22.8661V33.2598H49.0078ZM49.0078 38.5354C54.7559 38.5354 59.4015 43.1811 59.4015 48.9291C59.4015 54.6771 54.7559 59.3228 49.0078 59.3228H22.9448C17.1968 59.3228 12.5511 54.6771 12.5511 48.9291C12.5511 43.1811 17.1968 38.5354 22.9448 38.5354H49.0078Z" />
    <path d="M90.6614 48.9291C90.6614 43.1811 95.307 38.5354 101.055 38.5354C106.803 38.5354 111.449 43.1811 111.449 48.9291C111.449 54.6771 106.803 59.3228 101.055 59.3228H90.6614V48.9291ZM85.4645 48.9291C85.4645 54.6771 80.8189 59.3228 75.0708 59.3228C69.3228 59.3228 64.6771 54.6771 64.6771 48.9291V22.8661C64.6771 17.1181 69.3228 12.4724 75.0708 12.4724C80.8189 12.4724 85.4645 17.1181 85.4645 22.8661V48.9291V48.9291Z" />
    <path d="M75.0708 90.5826C80.8189 90.5826 85.4645 95.2283 85.4645 100.976C85.4645 106.724 80.8189 111.37 75.0708 111.37C69.3228 111.37 64.6771 106.724 64.6771 100.976V90.5826H75.0708ZM75.0708 85.3858C69.3228 85.3858 64.6771 80.7401 64.6771 74.9921C64.6771 69.2441 69.3228 64.5984 75.0708 64.5984H101.134C106.882 64.5984 111.528 69.2441 111.528 74.9921C111.528 80.7401 106.882 85.3858 101.134 85.3858H75.0708Z" />
    </svg>
  }

  return null;
}