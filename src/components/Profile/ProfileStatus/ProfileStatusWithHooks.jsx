import React, {useEffect, useState} from "react";

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let activateEditMode = () => {
        setEditMode(true);
    };
    let deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    };

    let [status, setStatus] = useState(props.status);
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    };

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

        return (
            <div>
                { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || "------"}</span>
                </div>
                }
                {editMode &&
                    <div>
                        <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} value={status}/>
                    </div>
                }
            </div>
        )
};

export default ProfileStatusWithHooks;