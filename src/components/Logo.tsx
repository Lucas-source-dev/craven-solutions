export default function Logo() {
  return (
    <div className="flex items-center gap-2.5">
      <svg viewBox="0 0 44 44" width="34" height="34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <rect width="44" height="44" rx="11" fill="#4F46E5"/>
        <path
          d="M30 14H18C14.686 14 12 16.686 12 20V24C12 27.314 14.686 30 18 30H30V26H18C17.448 26 17 25.552 17 25V19C17 18.448 17.448 18 18 18H30V14Z"
          fill="white"
        />
        <rect x="24" y="19" width="6" height="6" rx="1.5" fill="#A5B4FC"/>
      </svg>
      <div className="flex flex-col leading-none gap-0.5">
        <span className="text-sm font-black text-slate-900 tracking-widest">CRAVEN</span>
        <span className="text-[9px] font-semibold text-gray-400 tracking-[0.2em] uppercase">Solutions</span>
      </div>
    </div>
  );
}
