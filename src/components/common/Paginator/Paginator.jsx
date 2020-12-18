import React, {useState} from "react";
import styles from "./Paginator.module.css";

let Paginator = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let [currentNumberPart, setCurrentNumberPart] = useState(1)

    let partSize = 20;
    let numberPart = Math.ceil(pagesCount / partSize);
    let leftBorder = (currentNumberPart - 1) * partSize;
    let rightBorder = leftBorder + partSize;

    let partArray = pages.slice(leftBorder, rightBorder);

    let nextClick = () => {
        setCurrentNumberPart(++currentNumberPart)
    };
    let prevClick = () => {
        setCurrentNumberPart(--currentNumberPart)
    };


    return (
        <div className={styles.page}>
            {currentNumberPart != 1 && <button onClick={prevClick}>prev</button>}
            {partArray.map(p => {
                return (
                        <span className={props.currentPage === p && styles.SelectedPage}
                              onClick={(e) => {
                                  props.onPageChanged(p)
                              }}>{p}</span>
                )
            })}
            {currentNumberPart != numberPart && <button onClick={nextClick}>next</button>}
        </div>
    )

};


export default Paginator;