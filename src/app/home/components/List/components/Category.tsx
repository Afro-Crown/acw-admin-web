import Option from "./Option";

const Category = () => {
    const data = ['1', '2'];

    return (
        <div className="font-Assistant">
            <div className="w-full flex items-start flex-col">
                <p className="text-[#2E2E2E] text-2xl border-b border-black py-3 mb-4">Corte</p>
                <div className="w-full grid md:grid-cols-2 gap-6">
                    {
                        data.map((item, index) => (
                            <Option key={index} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Category;