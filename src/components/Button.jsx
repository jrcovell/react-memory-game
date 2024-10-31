
function Button({children, onClick, type, disabled}) {
  const base =
    " inline-block text-sm   rounded-full  font-bold uppercase tracking-wide text-stone-800  transition-colors duration-500 hover:bg-slate-300 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-stone-300 disabled:cursor-not-allowed";
const card = "hover:bg-red-400 bg-red-800 transition-colors duration-500 p-1 text-xl md:p-20 md:text-md disabled:cursor-not-allowed rounded-lg"
  const styles = {
    primary: base + " px-3 py-1 md:px-4 md:py-2 m-1",
    small: base + " py-2 px-3 md:px-5 md:py-2.5 text-xs",
    card: 'hover:bg-red-400 hover: transition duration-300 ease-in-out  transition-colors  p-1 text-sm md:p-4 md:text-md md:bg-blue-300 disabled:cursor-not-allowed rounded-lg bg-black',
    active: 'hover:bg-red-400 transition-colors duration-500 p-10 text-sm md:p-4 md:text-md md:bg-pink-3d00 disabled:cursor-not-allowed rounded-lg bg-green-300',
    easy: base + "py-2 px-3 md:px-5 md:py-2.5 text-xs bg-green-400",
    intermediate: base + "py-2 px-3 md:px-5 md:py-2.5 text-xs bg-yellow-400",
    hard: base + "py-2 px-3 m-1 md:px-5 md:py-2.5 text-xs bg-red-400",
    secondary:
      " inline-block text-sm rounded-full   border-2 border-stone-300  font-bold uppercase tracking-wide text-stone-500  transition-colors duration-500 hover:bg-stone-500 focus:outline-none focus:ring focus:ring-offset-2 focus:ring-offset-stone-300 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5 hover:text-stone-800",
  };



  return (
    <button onClick={onClick} disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
