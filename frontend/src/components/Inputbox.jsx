export function Inputbox({ label, placeHd }) {
  return (
    <div className="py-1">
      <div>
        <span
        >{label}</span>
      </div>
      <div >
        <input placeholder={placeHd} type="text"
        className="border-1"
        ></input>
      </div>
    </div>
  );
}
