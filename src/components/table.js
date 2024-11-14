import React from 'react';

const ComparisonTable = () => {
    return (
        <div className="max-w-5xl bg-black mx-auto rounded-[25px] overflow-x-auto my-[100px]">
            <h2 className='text-center mx-auto'>Compared to Freelancers,<br/>Agencies, and Hiring</h2>
            <table className="w-full text-left mt-[100px]">
                <thead>
                    <tr className="">
                        <th className="py-6 px-6 pl-0 font-bold text-white">Feature</th>
                        <th className="py-6 px-6 font-bold border-lime-400 bg-lime-400 text-black rounded-t-[12px] text-center">
                            <svg className='h-[20px] mx-auto' viewBox="0 0 444 92" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M38.1666 37.6667H67.3333L29.8333 91.8333V54.3333H0.666626L38.1666 0.166664V37.6667Z" fill="black"></path><path d="M85.76 67V24.84H95.44L95.6 38.28L94.24 35.24C94.8267 33.1067 95.84 31.1867 97.28 29.48C98.72 27.7733 100.373 26.44 102.24 25.48C104.16 24.4667 106.16 23.96 108.24 23.96C109.147 23.96 110 24.04 110.8 24.2C111.653 24.36 112.347 24.5467 112.88 24.76L110.24 35.56C109.653 35.24 108.933 34.9733 108.08 34.76C107.227 34.5467 106.373 34.44 105.52 34.44C104.187 34.44 102.907 34.7067 101.68 35.24C100.507 35.72 99.4667 36.4133 98.56 37.32C97.6533 38.2267 96.9333 39.2933 96.4 40.52C95.92 41.6933 95.68 43.0267 95.68 44.52V67H85.76Z" fill="black"></path><path d="M135.315 67.8C131.102 67.8 127.342 66.8667 124.035 65C120.728 63.08 118.115 60.4667 116.195 57.16C114.275 53.8533 113.315 50.0933 113.315 45.88C113.315 41.6667 114.275 37.9067 116.195 34.6C118.115 31.2933 120.728 28.7067 124.035 26.84C127.342 24.92 131.102 23.96 135.315 23.96C139.475 23.96 143.208 24.92 146.515 26.84C149.822 28.7067 152.408 31.2933 154.275 34.6C156.195 37.9067 157.155 41.6667 157.155 45.88C157.155 50.0933 156.195 53.8533 154.275 57.16C152.408 60.4667 149.822 63.08 146.515 65C143.208 66.8667 139.475 67.8 135.315 67.8ZM135.315 59.08C137.608 59.08 139.635 58.4933 141.395 57.32C143.208 56.1467 144.622 54.5733 145.635 52.6C146.702 50.6267 147.208 48.3867 147.155 45.88C147.208 43.32 146.702 41.0533 145.635 39.08C144.622 37.1067 143.208 35.56 141.395 34.44C139.635 33.2667 137.608 32.68 135.315 32.68C133.022 32.68 130.942 33.2667 129.075 34.44C127.262 35.56 125.848 37.1333 124.835 39.16C123.822 41.1333 123.315 43.3733 123.315 45.88C123.315 48.3867 123.822 50.6267 124.835 52.6C125.848 54.5733 127.262 56.1467 129.075 57.32C130.942 58.4933 133.022 59.08 135.315 59.08Z" fill="black"></path><path d="M182.437 67.8C178.49 67.8 174.944 66.84 171.797 64.92C168.65 63 166.17 60.3867 164.357 57.08C162.544 53.7733 161.637 50.04 161.637 45.88C161.637 41.72 162.544 37.9867 164.357 34.68C166.17 31.3733 168.65 28.76 171.797 26.84C174.944 24.92 178.49 23.96 182.437 23.96C186.224 23.96 189.664 24.68 192.757 26.12C195.85 27.56 198.25 29.56 199.957 32.12L194.517 38.68C193.717 37.56 192.704 36.5467 191.477 35.64C190.25 34.7333 188.944 34.0133 187.557 33.48C186.17 32.9467 184.784 32.68 183.397 32.68C181.05 32.68 178.944 33.2667 177.077 34.44C175.264 35.56 173.824 37.1333 172.757 39.16C171.69 41.1333 171.157 43.3733 171.157 45.88C171.157 48.3867 171.69 50.6267 172.757 52.6C173.877 54.5733 175.37 56.1467 177.237 57.32C179.104 58.4933 181.184 59.08 183.477 59.08C184.864 59.08 186.197 58.8667 187.477 58.44C188.81 57.96 190.064 57.2933 191.237 56.44C192.41 55.5867 193.504 54.52 194.517 53.24L199.957 59.88C198.144 62.2267 195.637 64.1467 192.437 65.64C189.29 67.08 185.957 67.8 182.437 67.8Z" fill="black"></path><path d="M215.082 54.12L213.162 44.92L233.162 24.84H246.282L215.082 54.12ZM205.882 67V7.8H215.722V67H205.882ZM234.362 67L218.842 48.2L225.802 42.28L246.522 67H234.362Z" fill="black"></path><path d="M251.391 84.6V24.84H261.071L261.231 34.44L259.551 33.72C259.871 32.0667 260.778 30.52 262.271 29.08C263.765 27.5867 265.578 26.3867 267.711 25.48C269.898 24.5733 272.165 24.12 274.511 24.12C278.245 24.12 281.551 25.0533 284.431 26.92C287.365 28.7867 289.658 31.3467 291.311 34.6C293.018 37.8533 293.871 41.6133 293.871 45.88C293.871 50.0933 293.018 53.8533 291.311 57.16C289.658 60.4133 287.365 63 284.431 64.92C281.551 66.7867 278.298 67.72 274.671 67.72C272.218 67.72 269.845 67.24 267.551 66.28C265.311 65.32 263.391 64.0667 261.791 62.52C260.245 60.9733 259.285 59.3467 258.911 57.64L261.311 56.52V84.6H251.391ZM272.671 59C274.911 59 276.911 58.44 278.671 57.32C280.431 56.2 281.791 54.6533 282.751 52.68C283.765 50.7067 284.271 48.44 284.271 45.88C284.271 43.32 283.791 41.08 282.831 39.16C281.871 37.1867 280.511 35.64 278.751 34.52C276.991 33.4 274.965 32.84 272.671 32.84C270.325 32.84 268.271 33.4 266.511 34.52C264.805 35.5867 263.445 37.1067 262.431 39.08C261.418 41.0533 260.911 43.32 260.911 45.88C260.911 48.44 261.418 50.7067 262.431 52.68C263.445 54.6533 264.805 56.2 266.511 57.32C268.271 58.44 270.325 59 272.671 59Z" fill="black"></path><path d="M301.041 67V24.84H310.721L310.881 38.28L309.521 35.24C310.108 33.1067 311.121 31.1867 312.561 29.48C314.001 27.7733 315.655 26.44 317.521 25.48C319.441 24.4667 321.441 23.96 323.521 23.96C324.428 23.96 325.281 24.04 326.081 24.2C326.935 24.36 327.628 24.5467 328.161 24.76L325.521 35.56C324.935 35.24 324.215 34.9733 323.361 34.76C322.508 34.5467 321.655 34.44 320.801 34.44C319.468 34.44 318.188 34.7067 316.961 35.24C315.788 35.72 314.748 36.4133 313.841 37.32C312.935 38.2267 312.215 39.2933 311.681 40.52C311.201 41.6933 310.961 43.0267 310.961 44.52V67H301.041Z" fill="black"></path><path d="M351.076 67.8C346.65 67.8 342.73 66.8667 339.316 65C335.956 63.1333 333.316 60.6 331.396 57.4C329.53 54.1467 328.596 50.44 328.596 46.28C328.596 42.9733 329.13 39.96 330.196 37.24C331.263 34.52 332.73 32.1733 334.596 30.2C336.516 28.1733 338.783 26.6267 341.396 25.56C344.063 24.44 346.97 23.88 350.116 23.88C352.89 23.88 355.476 24.4133 357.876 25.48C360.276 26.5467 362.356 28.0133 364.116 29.88C365.876 31.6933 367.21 33.88 368.116 36.44C369.076 38.9467 369.53 41.6933 369.476 44.68L369.396 48.12H335.236L333.396 41.4H361.156L359.876 42.76V41C359.716 39.3467 359.183 37.9067 358.276 36.68C357.37 35.4 356.196 34.4133 354.756 33.72C353.37 32.9733 351.823 32.6 350.116 32.6C347.503 32.6 345.29 33.1067 343.476 34.12C341.716 35.1333 340.383 36.6 339.476 38.52C338.57 40.3867 338.116 42.7333 338.116 45.56C338.116 48.28 338.676 50.6533 339.796 52.68C340.97 54.7067 342.596 56.28 344.676 57.4C346.81 58.4667 349.29 59 352.116 59C354.09 59 355.903 58.68 357.556 58.04C359.21 57.4 360.996 56.2533 362.916 54.6L367.796 61.4C366.356 62.7333 364.703 63.88 362.836 64.84C361.023 65.7467 359.103 66.4667 357.076 67C355.05 67.5333 353.05 67.8 351.076 67.8Z" fill="black"></path><path d="M390.671 67.8C386.938 67.8 383.578 67.1867 380.591 65.96C377.658 64.68 375.258 62.8667 373.391 60.52L379.791 55C381.391 56.8133 383.178 58.12 385.151 58.92C387.125 59.72 389.205 60.12 391.391 60.12C392.298 60.12 393.098 60.0133 393.791 59.8C394.538 59.5867 395.178 59.2667 395.711 58.84C396.245 58.4133 396.645 57.9333 396.911 57.4C397.231 56.8133 397.391 56.1733 397.391 55.48C397.391 54.2 396.911 53.1867 395.951 52.44C395.418 52.0667 394.565 51.6667 393.391 51.24C392.271 50.8133 390.805 50.3867 388.991 49.96C386.111 49.2133 383.711 48.36 381.791 47.4C379.871 46.3867 378.378 45.2667 377.311 44.04C376.405 43.0267 375.711 41.88 375.231 40.6C374.805 39.32 374.591 37.9333 374.591 36.44C374.591 34.5733 374.991 32.8933 375.791 31.4C376.645 29.8533 377.791 28.52 379.231 27.4C380.671 26.28 382.351 25.4267 384.271 24.84C386.191 24.2533 388.191 23.96 390.271 23.96C392.405 23.96 394.458 24.2267 396.431 24.76C398.458 25.2933 400.325 26.0667 402.031 27.08C403.791 28.04 405.285 29.2133 406.511 30.6L401.071 36.6C400.058 35.64 398.938 34.7867 397.711 34.04C396.538 33.2933 395.338 32.7067 394.111 32.28C392.885 31.8 391.738 31.56 390.671 31.56C389.658 31.56 388.751 31.6667 387.951 31.88C387.151 32.04 386.485 32.3067 385.951 32.68C385.418 33.0533 384.991 33.5333 384.671 34.12C384.405 34.6533 384.271 35.2933 384.271 36.04C384.325 36.68 384.485 37.2933 384.751 37.88C385.071 38.4133 385.498 38.8667 386.031 39.24C386.618 39.6133 387.498 40.04 388.671 40.52C389.845 41 391.365 41.4533 393.231 41.88C395.845 42.5733 398.031 43.3467 399.791 44.2C401.551 45.0533 402.938 46.04 403.951 47.16C404.965 48.12 405.685 49.24 406.111 50.52C406.538 51.8 406.751 53.2133 406.751 54.76C406.751 57.2667 406.031 59.5067 404.591 61.48C403.205 63.4533 401.285 65 398.831 66.12C396.431 67.24 393.711 67.8 390.671 67.8Z" fill="black"></path><path d="M427.899 67.8C424.166 67.8 420.806 67.1867 417.819 65.96C414.886 64.68 412.486 62.8667 410.619 60.52L417.019 55C418.619 56.8133 420.406 58.12 422.379 58.92C424.353 59.72 426.433 60.12 428.619 60.12C429.526 60.12 430.326 60.0133 431.019 59.8C431.766 59.5867 432.406 59.2667 432.939 58.84C433.473 58.4133 433.873 57.9333 434.139 57.4C434.459 56.8133 434.619 56.1733 434.619 55.48C434.619 54.2 434.139 53.1867 433.179 52.44C432.646 52.0667 431.793 51.6667 430.619 51.24C429.499 50.8133 428.033 50.3867 426.219 49.96C423.339 49.2133 420.939 48.36 419.019 47.4C417.099 46.3867 415.606 45.2667 414.539 44.04C413.633 43.0267 412.939 41.88 412.459 40.6C412.033 39.32 411.819 37.9333 411.819 36.44C411.819 34.5733 412.219 32.8933 413.019 31.4C413.873 29.8533 415.019 28.52 416.459 27.4C417.899 26.28 419.579 25.4267 421.499 24.84C423.419 24.2533 425.419 23.96 427.499 23.96C429.633 23.96 431.686 24.2267 433.659 24.76C435.686 25.2933 437.553 26.0667 439.259 27.08C441.019 28.04 442.513 29.2133 443.739 30.6L438.299 36.6C437.286 35.64 436.166 34.7867 434.939 34.04C433.766 33.2933 432.566 32.7067 431.339 32.28C430.113 31.8 428.966 31.56 427.899 31.56C426.886 31.56 425.979 31.6667 425.179 31.88C424.379 32.04 423.713 32.3067 423.179 32.68C422.646 33.0533 422.219 33.5333 421.899 34.12C421.633 34.6533 421.499 35.2933 421.499 36.04C421.553 36.68 421.713 37.2933 421.979 37.88C422.299 38.4133 422.726 38.8667 423.259 39.24C423.846 39.6133 424.726 40.04 425.899 40.52C427.073 41 428.593 41.4533 430.459 41.88C433.073 42.5733 435.259 43.3467 437.019 44.2C438.779 45.0533 440.166 46.04 441.179 47.16C442.193 48.12 442.913 49.24 443.339 50.52C443.766 51.8 443.979 53.2133 443.979 54.76C443.979 57.2667 443.259 59.5067 441.819 61.48C440.433 63.4533 438.513 65 436.059 66.12C433.659 67.24 430.939 67.8 427.899 67.8Z" fill="black"></path></svg>                        </th>
                        <th className="py-6 px-6 font-bold text-white text-[16px] border-b border-stone-800 pl-12">Freelancers</th>
                        <th className="py-6 px-6 font-bold text-white text-[16px] border-b border-stone-800">Agencies</th>
                        <th className="py-6 px-6 font-bold text-white text-[16px] border-b border-stone-800">In-House</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Cost</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black bg-lime-400 text-black">$9,995 flat rate</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">$80-150/hr variable</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">$15-30k/mo + overhead</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">$120-180k/yr + benefits</td>
                    </tr>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Turnaround</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black">48hr Average</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">Varies</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">1-2 weeks minimum</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Depends on workload</td>
                    </tr>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Capacity</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black">Unlimited requests</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">Limited by hours</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Project scope based</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Limited by bandwidth</td>
                    </tr>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Reliability</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black">Dedicated Dev</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">May disappear</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Account manager + team</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Reliable but vacation/sick</td>
                    </tr>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Tech Stack</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black">Modern, no bloat</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">Varies widely</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Often page builders</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Mixed experience</td>
                    </tr>
                    <tr className="">
                        <td className="py-6 px-6 pl-0 text-white font-bold">Hiring Process</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black">Start immediately</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800 pl-12">Finding + vetting</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Long sales cycle</td>
                        <td className="py-6 px-6 text-white text-[14px] border-b border-stone-800">Months of recruiting</td>
                    </tr>
                    <tr>
                        <td className="py-6 px-6 pl-0 text-white font-bold">Risk Level</td>
                        <td className="py-6 px-4 font-bold bg-lime-400 text-center text-black rounded-b-[12px]">Cancel anytime</td>
                        <td className="py-6 px-6 text-white text-[14px] pl-12">High turnover risk</td>
                        <td className="py-6 px-6 text-white text-[14px]">Long contracts</td>
                        <td className="py-6 px-6 text-white text-[14px]">High commitment</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default ComparisonTable;