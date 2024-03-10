function Listing({list1,list2,list3}) {
    return(
        <div className="listingsb02">
        <ul>
            <li>{list1}</li>
            <hr className="hr1b02"></hr>
            <li>{list2}</li>
            <hr className="hr2b02"></hr>
            <li >{list3}</li>
        </ul>
        </div>
    )
}
export default Listing;