import Image from "next/image";
import { useState } from "react";

import scheduleIcon from "../../../../../public/schedule-icon.svg";
import ListNext from "./ListNext";
import ListHistory from "./ListHistory";
import ListCanceled from "./ListCanceled";

function Tabs() {
    const [tab, setTab] = useState<'NEXT' | 'HISTORY' | 'CANCELED'>('NEXT')

    const classTabActive = 'border-b border-black pb-1'

    return (
        <div className="w-full">
            <nav className="text-black font-semibold flex justify-between mt-8">
                <div onClick={() => setTab('NEXT')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span className={`flex items-center ${tab == 'NEXT' ? classTabActive : ''}`}>
                        <Image alt="Schedule icon" src={scheduleIcon} className="mr-2"/>
                        Próximos
                    </span>
                </div>
                <div onClick={() => setTab('HISTORY')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span className={tab == 'HISTORY' ? classTabActive : ''}>Histórico</span>
                </div>
                <div onClick={() => setTab('CANCELED')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span className={tab == 'CANCELED' ? classTabActive : ''}>Cancelados</span>
                </div>
            </nav>
            <div className="md:px-10 py-10 text-black">
            {
                tab == 'NEXT' &&
                <ListNext />
            }
            {
                tab == 'HISTORY' &&
                <ListHistory />
            }
            {
                tab == 'CANCELED' &&
                <ListCanceled />
            }
            </div>
        </div>
    )
}

export default Tabs;