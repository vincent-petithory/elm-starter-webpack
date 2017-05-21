# elm-starter

This repo serves as bare minimum config files to use Elm with webpack.
Just like elm-reactor saves time to experiment with Elm, this project helps with starting Elm for greater things (you know, with Css and what else).

Run

    $ ./init.sh
    
It will use `yarn` if you have it, else will fall back to `npm`

Startup the webpack dev server with:

    $ yarn start
    
or if you use `npm`:

    $ npm start


Build the project with:

    $ yarn build
    or
    $ npm run build
    
Manually compile Elm source (mostly to get a more helpful color output in the terminal):
    
    $ yarn elm
    or
    $ npm run elm
