export default function createPage({body, state}) {
    return (
        `<!DOCTYPE html>
         <html lang="en">
             <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Task 5</title>
                <link rel="icon" href="../images/favicon.ico" type="image/x-icon"/>
                <link href="../style.css" rel="stylesheet"></head>
             </head>
             <body>
                <div id="root">${body}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(state)}
                </script>
                <script async src="../common.js"></script>
                <script async src="../js/index.js"></script>
             </body>
        </html>`
    );
}