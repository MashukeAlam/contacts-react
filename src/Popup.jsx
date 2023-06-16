export const Popup = ({trigger, name, phone, email, back}) => {
    return trigger ? (
        
        <div className="bg-zinc-400 bg-opacity-80 fixed flex flex-row top-0 left-0 w-screen h-screen justify-center items-center bg-transparent" onClick={() => back}>
            <div className="border-4 text-xl rounded bg-white p-8 popup flex flex-col justify-center items-center font-bold text-emerald-800 text-md">
                <h3>{name}</h3>
                <h3>{email}</h3>
                <h3>{phone}</h3>
                <button className="border-4 text-red-400 align-bottom" onClick={back}>X</button>
            </div>
        </div>
    ) : "";
}