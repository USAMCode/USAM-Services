import ShiftingDropDown from "./dropdown";
const Header= () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex flex-row bg-[#CDD2E8] text-black justify-center p-5">
      <div>
        {/* <h1 className="text-3xl text-primary font-bold">USAM Technology</h1> */}
      </div>
        <ul className="flex flex-row space-x-14 text-2xl text-primary">
          <li className="cursor-pointer hover:text-gray-700">Home</li>
          <li className="cursor-pointer hover:text-gray-700">About</li>
          <li className="cursor-pointer hover:text-gray-700">
            <ShiftingDropDown />
          </li>
          <li className="cursor-pointer hover:text-gray-700">Testimonials</li>
          <li className="cursor-pointer hover:text-gray-700">Contact</li>
        </ul>
    </div>
  );
}
export default Header