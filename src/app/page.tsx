import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  return (
    <div className="flex items-center justify-center h-screen">
      <SearchBox />
    </div>
  );
}

export function SearchBox() {
  return(
    <div className="flex flex-col w-5/6 max-w-3xl px-2 py-4 bg-white rounded-3xl bg-opacity-25 drop-shadow-2xl">
      <h1 className="px-2 py-2 mx-4 text-lg text-slate-700">Search for a series!</h1>
      <div className="flex m-1 rounded-xl w-11/12 self-center text-left bg-white justify-left items-center">
        <FontAwesomeIcon icon={faMagnifyingGlass} className='text-2xl w-1/12 h-auto text'/>
        <textarea className="flex resize-none w-10/12 h-10 items-center p-2 outline-none overflow-clip" placeholder='Search for a series...'></textarea>
      </div>
    </div>
  );
}