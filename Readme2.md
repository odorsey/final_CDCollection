<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>ReadMe File for final Project</title>
</head>
<body>
<!-- README FILE FOR FINAL PROJECT --> 
<h2>CD Collection</h2>
<p>CD Collection is a web service allows users to locate and maintain a 

collection of CDs. CDs will be able to be searched for based on the artist 

of the CD, the identification number of the CD (or ASIN), or the track 

number of a song that is on the CD. The user will also be about to retrieve 

a list of all of the CDs that are found in the collection. </p>

<ul>
<li><strong>all-cds.html</strong> is a file that shows how a list of all of 

the CDs within the collection would be represented.</li>

<li><strong>cd.html</strong> is a file that shows how the contents of one 

particular CD would be represented.</li> 

<li><strong>cd-track.html</strong> is a file that shows how all of the 

tracks of a particular CD would be represented.</li> 

<li><strong>cd-forms.html</strong> is a file that presents forms for the queries that can be posed by the user.</li>

<li><strong>find-cds.html</strong> is a file that shows how how a list of 

CDs matching a query would be represented.</li> 
</ul> 

<h2>Attribute values: id, class, name, rel</h2> 
<h4>id Attribute values:</h4>
<strong>CDs;</strong> applied to a DIV tag in all-cds.html, cd.html, and find-cds.html; informs the user that that  file provides you with a list 
relating to all of the CDS within the collection<br />
<strong>find-cds:</strong> applied to a DIV tag in find-cds.html; informs the user that the file represents a list of possible queries for this 
particular data collection<br /> 
<strong>queries:</strong> applied to a DIV tag; informs the user that the file represents a list of possible queries for this particular data 
collection.<br />

<h4>class Attribute Values:</h4>
<strong>all:</strong> located in all-cds.html; informs the user that a list of all of the CDs are being shown<br />
<strong>all-tracks:</strong> located in cd-track.html; informs the user that a list of all of the tracks are being shown<br />
<strong>cd-name:</strong> applied to a SPAN tag and located in all-cds.html; informs the user that this is the name of a particular CD<br />
<strong>queries:</strong> located in find-cds.html; informs the user that the file represents a list of queries<br />
<strong>single:</strong> applied to a SPAN tag and located in cd.html; informs the user that only a single item from the list of CDs is being 
shown<br />
<strong>track-name:</strong>applied to a SPAN tag and located in cd-track.html<br />

<h4>name Attribute Values:</h4>
<strong>ASIN-keyword:</strong> applied to a FORM/INPUT tag; informs the user that an ASIN should be searched for in this form<br />
<strong>track-keyword:</strong> applied to a FORM/INPUT tag; informs the user that a track name should be searched for in this form (identified by 
its track number)<br /> 

<h4>rel Attribute Values:</h4> 
<strong>ASIN:</strong> located in all-cds.html and cd.html; indicates that this is the ASIN for a particular CD and links to the /{ASIN} location</strong> 
<strong>all-cds:</strong>located in find-cds.html; indicates that this is a starting URI for the application and links to the / location<br />
<strong>artist:</strong> located in all-cds.html; indicates that this is the artist for a particular CD<br />
<strong>track-number:</strong> located in find-cds.html; indicates that a track should be identified by its track number<br /> 
</div>
</body>
</html> 
