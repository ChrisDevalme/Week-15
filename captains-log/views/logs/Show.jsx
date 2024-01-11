const React = require('react')

function Show(props) {
    return (
        <div>
            <h1>{props.log.title}</h1>
            <a href='/logs'>Go Back To Index</a>
            <p>
                The {props.log.title} says {props.log.entry} and the {props.log.shipIsBroken? 'Ship is Broken': 'Ship is Not Broken'}
            </p>
            <form action={`/logs/${props.log._id}?_method=DELETE`} method='POST'>
                <input type="submit" value={`Delete This ${props.log.title}`}/>
            </form>
            <div>
                <a href={`/logs/${props.log._id}/edit`}>
                    <button>{`Edit This ${props.log.title}`}</button>
                </a>
            </div>
        </div>
    )
}

module.exports = Show