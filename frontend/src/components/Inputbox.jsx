export function Inputbox({ label, placeHd, onChange }) {
  return (
    <div className="py-2">
      <div className="text-md">
        {label}
      </div>
      <div >
        <input onChange={onChange} placeholder={placeHd} type="text"
        class='w-full border rounded py-1 pl-1'
        ></input>
      </div>
    </div>
  );
}
