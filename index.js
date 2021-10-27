var sass = require('node-sass');
var fs = require('fs');

sass.render(
    {
        file: 'src/style.scss',
        includePaths: ['src/**'],
        outFile: 'dist/style.css.map',
        outputStyle: 'compressed',
        sourceMap: true,
    },
    function (error, result) {
        // node-style callback from v3.0.0 onwards
        if (error) {
            console.log('Error Status: ' + error.status); // used to be "code" in v2x and below
            console.log('Error column: ' + error.column);
            console.log('Error message: ' + error.message);
            console.log('Error at line: ' + error.line);
        } else {
            console.clear();
            fs.writeFile('dist/style.css', result.css, (err) =>
                console.log(err ? err : '\nscss compile generated')
            );
            fs.writeFile('dist/style.css.map', result.map, (err) =>
                console.log(err ? err : 'source map generated')
            );
        }
    }
);
