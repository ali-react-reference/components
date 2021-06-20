import React from 'react'

// props is received as the first argument for the component
// it is an object that contains all of the properties that are passed to the child component
const ApprovalCard = (props)=>{ 
    // console.log(props.children) 
    return (
        <div class="card ">
            <div className="content">{props.children}</div>
            <div class="extra content">
                <div class="ui two buttons">
                    <div class="ui basic green button">Approve</div>
                    <div class="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    );
}

export default ApprovalCard;