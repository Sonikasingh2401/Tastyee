
import MenuItemList from "./MenuItemList";

const MenuCategory = ({data , showItem , setshowIndex})=>{

    const handleClick = ()=>{
        setshowIndex();
    };

    return (

    <div>
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">
                {data.title} ({data.itemCards.length})
                </span>
                <span>⬇️</span>
            </div>
            {showItem && <MenuItemList item={data.itemCards}/>}
        </div>
    </div>
    )
};

export default MenuCategory;
