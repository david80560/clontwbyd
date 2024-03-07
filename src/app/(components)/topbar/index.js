import { Search as SearchIcon } from "lucide-react";
import { GripVertical, User } from "lucide-react";
import Image from "next/image";
import twtlogo from "../../images/twtlogo.png";

export default function Topbar() {
  return (
    <div className="bg-[#0E0E10] flex justify-between p-2">
      <Principal />
      <Search />
      <UserInit />
    </div>
  );
}

const Principal = () => {
  return (
    <div className="flex gap-4">
      <Image className="h-8 w-8" src={twtlogo} />
      <p className="text-[#b27fff] border-b-2 border-[#b27fff] font-bold">
        Navega
      </p>
      <GripVertical className="text-white" />
    </div>
  );
};

const Search = () => {
  return (
    <div className="flex items-center">
      <input
        className="px-2 py-1 bg-inherit border-[1px] rounded-md font-semibold border-gray-500 rounded-l-md outline-[#5C16C5] outline-8 w-80"
        placeholder="Búsqueda"
      />
      <SearchIcon size={36} strokeWidth={3} className="text-white bg-[#383838] rounded-md p-[1px]" />
    </div>
  );
};

const UserInit = () => {
  return (
    <div className="text-xs font-bold flex items-center gap-2">
      <button className=" text-white px-4 py-2 bg-[#383838] hover:bg-[#505050] rounded-md">
        Iniciar Sesion
      </button>
      <button className="text-white px-4 py-2 bg-[#5C16C5] rounded-md">
        Registrate
      </button>
      <User size={29} className="text-white rounded-md cursor-pointer p-1 hover:bg-slate-600" />
    </div>
  );
};
