function Filter() {

    const classActive = "border border-[#2E2E2E] bg-[#2E2E2E] py-1 px-4 rounded-2xl text-white font-ASSISTANT text-sm";
    const classBasic = "border border-[#2E2E2E] py-1 px-4 rounded-2xl text-[#2E2E2E] font-ASSISTANT text-sm cursor-pointer";

    return (
        <div className="mb-3 flex pb-3 items-center gap-2 whitespace-nowrap overflow-x-auto md:justify-center md:overflow-x-hidden">
            <span
                className={classActive}
            >todos</span>
            <Ellipse />
            <span className={classBasic}>esse mês</span>
            <Ellipse />
            <span className={classBasic}>mês passado</span>
            <Ellipse />
            <span className={classBasic}>esse ano</span>
        </div>
    )
}

const Ellipse = () => {
    return (
        <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="2" cy="2" r="2" fill="#2E2E2E"/>
        </svg>
    )
};

export default Filter;