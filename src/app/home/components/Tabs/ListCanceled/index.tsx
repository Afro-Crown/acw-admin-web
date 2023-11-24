import ServiceCard from "./service-card";

function ListCanceled() {
    const data: string[] = ['1', '2', '3'];
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

export default ListCanceled;