

function Button({ buttonName, onClick, buttonId, currentPage }) {

    return (
        <button onClick={onClick} id={buttonId} class={currentPage === buttonId ? "z-10 px-5 py-1 text-lg text-purple-600 font-semibold border-transparent bg-white rounded-full border border-purple-600 hover:text-black hover:bg-white focus:outline-none focus:ring-2" : "z-10 px-5 py-1 text-lg text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-purple-600 hover:bg-white hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"}>{buttonName}</button>
    )
}


export default Button;