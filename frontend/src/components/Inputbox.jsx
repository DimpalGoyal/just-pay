export function Inputbox({ label, placeHd }) {
  return (
    <div className="py-2">
      <div className="text-md">
        {label}
      </div>
      <div >
        <input placeholder={placeHd} type="text"
        class='w-full border-1 rounded py-1 pl-1'
        ></input>
      </div>
    </div>
  );
}
