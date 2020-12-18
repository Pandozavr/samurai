import React from "react";
import styles from "./FormControls.module.css"

export const ElementCreator = Element => ({ input, meta, ...props }) => {

    const hasError = meta.touched && meta.error;

    return (
        <div>
            <div>
                <Element  className={hasError ? styles.error : ""} {...input} {...props}/>
            </div>
            {hasError && <span className={styles.red}>{meta.error}</span>}
        </div>

    )

};


/*
export const Textarea = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <textarea  className={hasError ? styles.error : ""} {...input} {...props}/>
            </div>
            {hasError && <span className={styles.red}>{meta.error}</span>}
        </div>

    )
};

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div>
            <div>
                <input  className={hasError ? styles.error : ""} {...input} {...props}/>
            </div>
            {hasError && <span className={styles.red}>{meta.error}</span>}
        </div>

    )
};*/
