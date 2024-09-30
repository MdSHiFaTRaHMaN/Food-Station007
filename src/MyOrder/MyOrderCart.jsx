
const MyOrderCart = ({order}) => {
    console.log(order)
    const {name,image, price}= order;
    return (
        <tr className="border-b border-dashed last:border-b-0">
            <td className="p-3 pl-0">
                <div className="flex items-center">
                    <div className="relative inline-block shrink-0 rounded-sm me-3">
                        <img src={image} className="w-[50px] h-[50px] inline-block shrink-0 rounded-2xl" alt="" />
                    </div>
                    <div className="flex flex-col justify-start">
                        <a href="javascript:void(0)" className="mb-1 font-semibold transition-colors duration-200 ease-in-out text-lg/normal text-secondary-inverse hover:text-primary"> {name} </a>
                    </div>
                </div>
            </td>
            <td className="p-3 pr-0 text-end">
                <span className="font-semibold text-light-inverse text-md/normal">$ {price}</span>
            </td>
            <td className="p-3 pr-0 text-end">
                <span className="text-center align-baseline inline-flex px-2 py-1 mr-auto items-center font-semibold text-base/none text-success bg-success-light rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-1">
                        <path d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
                    </svg> 6.5% </span>
            </td>
            <td className="p-3 pr-12 text-end">
                <span className="text-center align-baseline inline-flex px-4 py-3 mr-auto items-center font-semibold text-[.95rem] leading-none text-primary bg-primary-light rounded-lg"> In Progress </span>
            </td>
            <td className="pr-0 text-start">
                <span className="font-semibold text-light-inverse text-md/normal">2023-08-23</span>
            </td>
        </tr>
    );
};

export default MyOrderCart;