import React, { Component } from 'react'

const Task = (props) => (
    const placeholder = props.task.complete ? 
    <strike>
        #{props.details.id} - {props.details.description} ✅
    </strike>
    :
    <span>{props.details.id} - {props.details.description}</span>;


    <article>
<h1>
{placeholder}
</h1>
</article>
)






export default Task;