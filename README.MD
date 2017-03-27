## create a simple Blog
- multiple views // routes
  * route '/' = indexView
  * route '/posts/<nummer>' = showPage <nummer>
  * route '/posts/new' = create new entry
  * multiple http actions // POST; UPDATE; DELETE ..

## with suport of the API on
- http://reduxblog.herokuapp.com/
- `reduxblog.herokuapp.com/api/posts?key=<yourString>`
- `?key=1337unique`
- check for documentation here

## to run
- clone or dl repo
- `npm install`
- `npm start`
- `localhost:8080`

## notes
- `"react-router": "^2.0.0-rc5", npm install --save this`
![react-router application flow] (http://i.imgur.com/JPg0Rkp.png)
