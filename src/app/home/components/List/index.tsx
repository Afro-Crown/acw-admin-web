import Category from "./components/Category";
import Option from "./components/Option";

const List = () => {
    const data = ['1', '2'];

    return (
        <div className="w-full min-h-[200px] mb-6">
            {
                data.map((item, index) => (
                    <Category key={index} />
                ))
            }
        </div>
    )
}

export default List;