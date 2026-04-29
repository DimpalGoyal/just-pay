export function Button({ label }) {
  return (
    <div className="border-1 py-2 rounded-md flex justify-center shadow-md mt-5 bg-black text-white">
      <button>{label}</button>
    </div>
  );
}
