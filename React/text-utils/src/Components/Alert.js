import React from 'react'

function Alert(props) {

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }


    return (
        // If not null then exectue the code
        props.alert && <div>
            <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong> {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert 