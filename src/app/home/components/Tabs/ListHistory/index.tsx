import Filter from "./filter";
import ServiceCard from "./service-card";

function ListHistory() {
    const data: string[] = ['1', '2'];
    return (
        <div className="w-full">
            <Filter />
            {
                data.map((item, index) => (
                    <ServiceCard key={index} />
                ))
            }
        </div>
    )
}

export default ListHistory;