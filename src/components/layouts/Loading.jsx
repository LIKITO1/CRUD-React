import styles from "./Loading.module.css"
function Loading({sumir}){
    return(
        <>
            <div className={`${styles.cont} d-${sumir} h-100 w-100 position-absolute d-flex align-items-center justify-content-center`}>
                <div className="spinner-border"></div>
            </div>
        </>
    )
}
export default Loading