Pull the info about any movie in the themoviedb.org database in JSON format.

Run `npm install` to install the node-fetch dep.

Put your api key from themoviedb.org in a file named `api.json` like this:

```
{
    "key": "ksadjf092fij2f"
}
```

Execute the downloader `node downloader.js 'lord of the rings' 123` to
download the info of a given movie and id. The movie name is the filename
used by the downloader to save the movie info as JSON.

Create the folder `output/` if required.
