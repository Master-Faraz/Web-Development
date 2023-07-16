import React from 'react'
import Dropdown_blood from './DropdownBlood'
import PropTypes from 'prop-types'

// Internal dropdown is used for finding donors , blood banks by selecting state , city etc

function InternalDropdown(props) {
    return (
        <div className='row align-items-start text-center' >
            <div className="container" >

                <div className="col-12 " style={{ height: "4vh", borderRadius: "30px 30px 0px 0px", background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)" }}>{props.name}</div>

                <div className="col-12" style={{
                    height: "7vh",
                    borderRadius: "0px 0px 30px 30px",
                    background: "linear-gradient(180deg, #D3E1EA 0%, rgba(85, 95, 93, 0.00) 100%)"

                }}>
                    <div className="row" >
                        <div className="col-3 text-center mt-1" >
                            <Dropdown_blood name={props.dd1} />
                        </div>

                        <div className="col-3 text-center mt-1" >
                            <Dropdown_blood name={props.dd2} />
                        </div>

                        <div className="col-3 text-center mt-1" >
                            <Dropdown_blood name={props.dd3} />
                        </div>

                        <div className="col-3 text-center mt-1" >
                            <button type="button" className="btn btn-primary text-black-50 " style={{
                                background: "linear-gradient(90deg, #ACB6E5 0%, #86FDE8 100%)"
                            }}>Search</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

InternalDropdown.defaultProps = {
    name: 'Enter Name',
    dd1: 'Dropdown 1',
    dd2: 'dropdown 2',
    dd3: 'dropdown 3',
}

InternalDropdown.propTypes = {
    name: PropTypes.string,
}



export default InternalDropdown