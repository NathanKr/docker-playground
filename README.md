<h2>Motivation</h2>
Play with docker

<h2>Setup</h2>
<ul>
<li>enter the directory simple and build the image using :
docker build -t myimage:1.0 . </li>
<li>run the image as container using : docker container run -it -p 80:80 image_id</li>
<li>open the browser on localhost and you will see 'Hello Nathan' which is part of index.html</li>
</ul>