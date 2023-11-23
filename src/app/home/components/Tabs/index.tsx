import Image from "next/image";
import { useState } from "react";
import ServiceCard from "./ListNext/service-card";
import HistoryList from "../HistoryList";
import CanceledList from "../CanceledList";

import scheduleIcon from "../../../../../public/schedule-icon.svg";
import ListNext from "./ListNext";

function Tabs() {
    const [tab, setTab] = useState<'NEXT' | 'HISTORY' | 'CANCELED'>('NEXT')

    return (
        <div className="w-full">
            <nav className="text-black font-semibold flex justify-between mt-8">
                <div onClick={() => setTab('NEXT')} className="flex flex-1 flex-row gap-2 justify-center">
                    <Image alt="Schedule icon" src={scheduleIcon}/>
                    <span>Próximos</span>
                </div>
                <div onClick={() => setTab('HISTORY')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span>Histórico</span>
                </div>
                <div onClick={() => setTab('CANCELED')} className="flex flex-1 flex-row gap-2 justify-center">
                    <span>Cancelados</span>
                </div>
            </nav>
            <div className="md:px-10 py-10 text-black">
            {
                tab == 'NEXT' &&
                <ListNext />
            }
            {
                tab == 'HISTORY' &&
                <HistoryList />
            }
            {
                tab == 'CANCELED' &&
                <CanceledList />
            }
            </div>
        </div>
    )
}

export default Tabs;