import { GoShieldCheck } from "react-icons/go";
import { FaDollarSign, FaRegCheckCircle } from "react-icons/fa"

interface HomeBoxtype {
    isRelative: boolean
}

// using isRelative to change minor styling based on whether the component is used with position relative to the first image in landing page or not.
const HomeBox = ({ isRelative }: HomeBoxtype) => {
    const templates = [
        {
            icon: <FaRegCheckCircle className="w-5 h-5 text-[#1F2B59]" />,
            header: 'Risk-Free Guarantee',
            paragraph: "If you're not satisfied with your vehicle, simply return it for a full refund.",
        },
        {
            icon: <GoShieldCheck className="w-5 h-5 text-[#1F2B59]" />,
            header: 'Trusted Quality',
            paragraph: 'We ensure every vehicle we sell meets the highest safety and quality standards.',
        },
        {
            icon: <FaDollarSign className="w-5 h-5 text-[#1F2B59]" />,
            header: '6-Month Warranty',
            paragraph: 'Enjoy a 6-month warranty on every car you purchase from us, covering major repairs.',
        }
    ]

    return (
        <div className={`w-[100%] font-main hidden sm:flex items-center justify-center ${isRelative? 'absolute -bottom-16 md:-bottom-12 min-lg:-bottom-14': ''}`}>
            <div className={`rounded-xl border flex justify-between ${isRelative ? 'bg-[#D7E1EF] w-[94%] ' : 'bg-white border-[#F5F7FB] shadow-md w-[100%] '}`}>
            {
                templates.map(template => (
                    <div key={template.paragraph} className={`flex flex-col gap-2 px-4 lg:px-8 py-3 lg:py-6 border-r-2 last:border-0 cursor-pointer first:rounded-l-xl last:rounded-r-xl ${isRelative ? 'bg-[#D7E1EF] hover:bg-[#EDF1F8] border-r-[#EDF1F8]' : 'bg-white hover:bg-[#F5F7FB] border-r-[#F5F7FB]'}`} >
                    <div className="flex gap-4 lg:gap-8 items-center">
                        {template.icon}
                        <h3 className="text-[16px] lg:text-lg xl:text-2xl 2xl:text-3xl text-[#1F2B59] font-extrabold tracking-wide">
                            {template.header}
                        </h3>
                    </div>
                    <p className="text-[12px] lg:text-[15px] xl:text-[17px] 2xl:text-[24px] text-blue-900 tracking-wide leading-relaxed lg:leading-[25px] xl:leading-relaxed font-semibold">
                        {template.paragraph}
                    </p>
            </div>
                ))
            }
            </div>
        </div>
    )
}

export default HomeBox