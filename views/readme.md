<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title></title>
</head>
<body>
<!-- README FILE FOR ASSIGNMENT 4 --> 
<h2>CD Collection</h2>
<p>The CD Collection web service allows users to maintain a 

collection of CDs. CDs will be able to be stored based on the artist 

of the CD, the identification number of the CD (or ASIN), or the track 

of a song that is on the CD. The user will also be able to retrieve 

a list of all of the CDs that are found in the collection and a list 

of genres associated with each CD. </p>

<ul>
<li><strong>all-cds.ejs</strong> is a file that shows a list of all of the CDs within the collection.</li>

<li><strong>all-genres.ejs</strong> is a file that shows a list of all of the genres associated with CDs in the collection.</li>

<li><strong>all-tracks.ejs</strong> is a file that shows a list of all of the tracks in the collection.</li> 

<li><strong>index.ejs</strong> is a files that shows the home page of the CD Collection web service. It provides links to the CD Collection (all-cds.ejs), Genres (all-genres.ejs), and Tracks (all-tracks.ejs).</li>


<h2>Attribute values: id, class, name, rel</h2> 
<h4>id Attribute values:</h4>
<strong>CDs;</strong> applied to a DIV tag in all-cds.html and one-cd.html; informs the user that that  file provides you with a list relating to all of the CDS within the collection<br />
<strong>queries:</strong> applied to a DIV tag; informs the user that the file represents a list of possible queries for this particular data 
collection.<br />

<h4>class Attribute Values:</h4>
<strong>all:</strong> located in all-cds.ejs; informs the user that a list of all of the CDs are being shown<br />
<strong>all-tracks:</strong> located in all-tracks.ejs; informs the user that a list of all of the tracks are being shown<br />
<strong>cd-name:</strong> applied to a SPAN tag and located in all-cds.ejs and one-cd.ejs; informs the user that this is the name of a particular CD<br />
<strong>single:</strong> applied to a SPAN tag and located in one-cd.ejs; informs the user that only a single cd from the list of CDs is being shown<br />
<strong>track-name:</strong>applied to a SPAN tag and located in one-track.ejs<br />

<h4>name Attribute Values:</h4>
<strong>ASIN-keyword:</strong> applied to a FORM/INPUT tag; informs the user that an ASIN should be provided in this form<br />
<strong>track-keyword:</strong> applied to a FORM/INPUT tag; informs the user that a track name should be provided in this form (identified by its track number)<br /> 

<h4>rel Attribute Values:</h4> 
<strong>ASIN:</strong> located in all-cds.ejs and cd.ejs; indicates that this is the ASIN for a particular CD and links to the /{ASIN} location</strong> 
<strong>artist:</strong> located in one-cd.ejs; indicates that this is the artist for a particular CD<br />
</div>
</body>
</html> 
