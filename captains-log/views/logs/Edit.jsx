const React = require('react')

function Edit(props) {
    const { title, entry, _id, shipIsBroken} = props.log
    return (
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Go Back To Index Page</a>
            <form action={`/logs/${_id}?_method=PUT`} method='POST'>
                title: <input type="text" name="title" defaultValue={title}/><br/>
                entry: <input type="text" name="entry" defaultValue={entry}/><br/>
                Ship Is Broken: <input type="checkbox" name="shipIsBroken" defaultChecked/><br/>
                <input type="submit" value="Update a Log" />
            </form>
        </div>   
    )
}

module.exports = Edit