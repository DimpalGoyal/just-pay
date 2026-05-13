export function Button({ label, onClick }) {
  return (
    <div className="border py-2 rounded-md flex justify-center shadow-md mt-5 bg-black text-white cursor-pointer">
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
