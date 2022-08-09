// https://docs.github.com/en/rest/overview/resources-in-the-rest-api
// https://gist.github.com/stevecalla/7b5b839fb4c91b9b470d8210f857eb5e

curl http://api.github.com // doesn't work
// need an s on https
curl https://api.github.com 
curl -v https://api.github.com //confirms connection to github api

curl -u "stevecalla" https://api.github.com //requests password "4184Longview"
curl --user "stevecalla:PASSWD" https://api.github.com //gives list of ???

curl -i https://api.github.com/users/stevecalla

// https://stackoverflow.com/questions/13735051/how-to-capture-curl-output-to-a-file
//SECTION:SAVE TO FILE
// curl https://stevecalla.github.io/bessie-the-dog/index.html -O //saves to index.html in the current directory

// SECTION: SAVE TO CLIPBOARD
// Example: curl https://stevecalla.github.io/bessie-the-dog/ | pbcopy
// . This will copy all the content from the given URL to your clipboard.

// http://www.muskfoundation.org/