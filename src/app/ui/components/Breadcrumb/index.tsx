import { CaretLeft, Dot } from "@phosphor-icons/react";
import { Breadcrumb } from "./interface/breadcrumb.interface";

function BreadCrumb({route}: {route: Breadcrumb[]}) {
  return (
    <div className="text-[#2E2E2E] flex items-center text-sm font-Assistant font-normal ">
        {
            route.map((item, index) => {
                if(index == 0) {
                    return (
                        <div key={index} className="flex items-center">
                            <CaretLeft size={12} />
                            <span className="ml-1">{item.label}</span>
                            <Dot size={20} />
                        </div>
                    )
                }

                return (
                    <span key={index}>{item.label}</span>
                )
            })
        }
    </div>
  );
}

export default BreadCrumb;