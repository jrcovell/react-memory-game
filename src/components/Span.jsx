function Span({children, type, page}) {
    // page === main page, only want border on main page
    const styles = {
        easy: "bg-white rounded-md p-1 text-green-600" + (page ? " border-3 border-black-600 bg-white" : ""),
        intermediate: "bg-white, rounded-md p-1 text-yellow-500" + (page ? " border-3 border-black-600 bg-white" : ""),
        hard: "bg-white rounded-md p-1 text-red-700" + (page ? " border-3 border-black-600 bg-white" : ""),
    };

    return (
        <span className={styles[type]}>
            {children}
        </span>
    )
}

export default Span
