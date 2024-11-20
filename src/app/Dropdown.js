
export default function Dropdown({opciones}){
    return <>
        <select>
            {opciones.map((opcion, index) =>
                <option key={index}>{opcion}</option>
            )}
        </select>
    </>
}