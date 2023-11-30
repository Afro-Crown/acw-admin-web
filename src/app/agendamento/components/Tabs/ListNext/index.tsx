import ServiceCard from "./service-card";

function ListNext() {
    const data: string[] = ['1', '2'];
    return (
        <div className="w-full">
            {
                data.map((item, index) => (
                    <ServiceCard key={index} />
                ))
            }
        </div>
    )
}

export default ListNext;