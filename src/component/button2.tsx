export function Tombol_2({isiPesan, namaTombol}) {
    return (
        <button 
            className="bg-blue-500 hover:bg-blue-70 text-white p-2 rounded"
            onClick={() => alert(isiPesan)}
        >
            {namaTombol}
        </button>
    );
}

export default function Tombol_1() {
    // menambahkan fungso untuk menangani klik tombol
    function handleClick() {
        alert("Tombol telah ditekan!!!")
    }
}