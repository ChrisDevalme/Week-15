const React = require('react')

function Index(props) {
    return (
        <div>
            <h1>Logs Index Page</h1>
            <a href='/logs/new'>Create a new log</a>
            <ul>
                {
                    props.logs.map((log) => {
                        return (
                            <li key={log._id}>
                                <a href={`/logs/${log._id}`}>{log.title}</a> says {log.entry} and the ship {log.shipIsBroken? 'Ship is Broken': 'Ship is Not Broken'} 
                            </li>
                        )
                    })
                }
            </ul>

        </div>
    )
}

module.exports = Index