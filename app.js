// This is a sample application which you can use as a starting point for your
// project. The only parts you should *need* to change are indicated with `TODO`
// below. However, you are welcome to change more if you wish.

////////////////////////////////////////////////////////////////////////////////

var USER_OR_GROUP_NAME = 'odorsey'; // TODO: Insert GitHub username or group name.

////////////////////////////////////////////////////////////////////////////////

if (! USER_OR_GROUP_NAME) { 
  throw new Error(
    'You must set your GitHub username or group name in the app.js file'); 
}

// Import some utility functions.
var utils = require('./utils');

// Create a new web application.
var app = utils.initializeWebApp();

// Connect to your database.
var db = utils.connectToDatabase(USER_OR_GROUP_NAME);

// TODO: Start defining your resource handlers. You may just need to modify the
// examples below, or you may need to add additional handlers by copying,
// pasting, and modifying these examples.

////////////////////////////////////////////////////////////////////////////////
// Example of handling PUT to create or update a resource. /////////////////////
// Here we create or update an item using the ID specified in the URI. /////////
// USED FOR all-cds.ejs/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/cds/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/list-parties.ejs`.
    var item = req.body.item;
    
    item.type = 'cd'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling GET of a "collection" resource. /////////////////////////
// Here we list all items of type `cd`. /////////////////////////////////////
// USED FOR all-cds.ejs/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/cds/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'cd'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'all-cds',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);


////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of a "single" resource. //////////////////////////
// This handler is more complicated, because we want to show not only the //////
// item requested, but also links to a set of related items.////////////////////
// USED FOR one-cd.ejs//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/cds/:id', // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'cd'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      }

      // Otherwise, get the related items associated with this item.
      else {
        
        var related_type = 'track'; // TODO: change to type of related item.

        // Set our query to find the items related to the requested item.
        req.query.cd = item_id; // TODO: change `party` to reflect the
                                   // relation between the item fetched above
                                   // and the related items to be fetched below.

        // Get items of the specified type that match the query.
        db.getSome(related_type, req.query, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); }

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
            'one-cd', // TODO: change to the name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling PUT to create or update a resource. /////////////////////
// Here we create or update an item using the ID specified in the URI. /////////
// USED FOR one-cd.ejs//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/tracks/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/list-parties.ejs`.
    var item = req.body.item;
    
    item.type = 'track'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling GET of a "collection" resource. /////////////////////////
// Here we list all items of type `party`. /////////////////////////////////////
// USED FOR one-cd.ejs//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/tracks/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'track'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'all-tracks',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of a "single" resource. //////////////////////////
// This handler is more complicated, because we want to show not only the //////
// item requested, but also links to a set of related items. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/cds/:id',      // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'cd'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the related items associated with this item.
      else {
        
        var related_type = 'track'; // TODO: change to type of related item.

        // Set our query to find the items related to the requested item.
        req.query.cd = item_id; // TODO: change `party` to reflect the
                                   // relation between the item fetched above
                                   // and the related items to be fetched below.

        // Get items of the specified type that match the query.
        db.getSome(related_type, req.query, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
            'one-cd', // TODO: change to the name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling PUT to create or update a resource. /////////////////////
// Here we create or update an item using the ID specified in the URI. /////////
// USED FOR one-cd.ejs//////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.put('/genres/:id',      // TODO: change to suit your URI design.
  function(req, res) {
  
    // Get the item ID from the URI.
    var item_id = req.params.id;

    // Get the item info that was PUT from the input form.
    // See the form in `views/list-parties.ejs`.
    var item = req.body.item;
    
    item.type = 'genre'; // TODO: change to the type of item you want

    // Save the new item to the database, specifying the ID.
    db.save(item_id, item, function(err) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 
      
      // Otherwise, redirect back to the URI from which the form was submitted.
      else { res.redirect('back' ); }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// Example of handling GET of a "collection" resource. /////////////////////////
// Here we list all items of type `cd`. /////////////////////////////////////
// USED FOR all-cds.ejs/////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/genres/',         // TODO: change to suit your URI design. 
  function(req, res) {

    var item_type = 'genre'; // TODO: change to the type of item you want.

    // Get all items of the specified type from the database.
    db.getAll(item_type, function(err, items) {

      // If there was a database error, return an error status.
      if (err) { res.send(err, 500); } 

      // Otherwise, use the returned data to render an HTML page.
      else {
        res.render(
          'all-genres',   // TODO: change to the name of your HTML template.
          { items: items }
        );
      }
    });
  }
);

////////////////////////////////////////////////////////////////////////////////
// An example of handling GET of a "single" resource. //////////////////////////
// This handler is more complicated, because we want to show not only the //////
// item requested, but also links to a set of related items. ///////////////////
////////////////////////////////////////////////////////////////////////////////
app.get('/genres/',      // TODO: change to suit your URI design.
  function(req, res) {

    var item_type = 'genre'; // TODO: change to the type of item you want.

    // Get the item ID from the URI.
    var item_id = req.params.id;
  
    // Get one item of the specified type, identified by the item ID.
    db.getOne(item_type, item_id, function(err, item) {
        
      // If there was a database error, return an error status.
      if (err) {
        if (err.error == 'not_found') { res.send(404); }
        else { res.send(err, 500); }
      } 

      // Otherwise, get the related items associated with this item.
      else {
        
        var related_type = 'cd'; // TODO: change to type of related item.

        // Set our query to find the items related to the requested item.
        req.query.genre = item_id; // TODO: change `party` to reflect the
                                   // relation between the item fetched above
                                   // and the related items to be fetched below.

        // Get items of the specified type that match the query.
        db.getSome(related_type, req.query, function(err, items) {

          // If there was a database error, return an error status.
          if (err) { res.send(err, 500); } 

          // Otherwise, use the returned data to render an HTML page.
          else {
            res.render(
            'all-genres', // TODO: change to the name of your HTML template.
              { item: item, related_items: items }
            );
          }
        });
      }
    });
  }
);




// Handle GET of the "index" resource.
app.get('/', function(req, res) { res.render('index'); });

// Start listening for incoming HTTP connections.
app.listen(process.env.PORT);
