# Secrets

_Secrets_ is an application where you can anonymously share your deepest, 
darkest secrets with the entire internet and have people comment on them.
This is totally a good idea where nothing can go wrong.

The best part of this totally viable application is: you have to build it!

### Before you get started:

1. Make sure you have a database created in Postgres named **secrets**.
 You should be able to accomplish this by running `createdb secrets` in
 your terminal or using your Postgres GUI program (like Postico).
 
2. Check out the hosted finished version of this application here: (url pending).
  This should give you clear direction in the necessary features and functionality.
  Oh, you should also share a secret with us ... please keep it clean. :)
  
3. Check out the files you already have! You shouldn't have to write any HTML or
  CSS if using the CSS file available in the `public/stylesheets` folder or the views
  available in `views`. A lot of the server is also scaffolded out for you already. Take
  some time to understand what you have already and what you'll need to build.
  
### What you need to do:

1. Fill in the model definitions for `SecretModel` and `CommentModel` in `db/models.js`.
Both models should really only need a `text` column. Keep in mind that comments should reference a secret and you'll probably have to do this
using either `belongsTo` or `hasMany`, or both!

2. You should be able to build this application feature-complete with 6 routes:
    
    - `GET /secrets`
        - This route serves up all secrets in database and renders the `index.html` view.
          An extra challenge in layering in pagination (prev/next page) but it shouldn't
          be necessary as the template is written now.
          
    - `GET /`
        - Redirects to `GET /secrets`
        
    - `POST /secrets`
        - Adds a new secret to the database, then redirects to `GET /secrets`
        
    - `GET /secrets/1`
        - Accesses a secret from the database by its ID, along with comments,
          and renders out `secret.html`
          
    - `GET /secrets/add`
        - Renders out the form to add a new secret.
        
    - `POST /secrets/1/comments`
        - Adds a new comment to a secret, to be seen on the single secret route.
        
3. As mentioned earlier, there is a beyond-the-basics challenge of implementing pagination for
    the `GET /secrets` route. Look at how the `hrefs` in `index.html` for **Previous/Next Page**
    links are written. Your `GET /secrets` should use `req.query` to enhance your existing query.
    `limit`, `offset` in your `where` object will be useful to you.