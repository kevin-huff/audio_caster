# Audio Caster

In the world of sound and Chrome's delight,
Here's a Node.js app that's out of sight.
Audio from your PC, you'll share,
To a phone, with wireless flair.

## Features

- Audio capture, clear and neat,
- Real-time sharing, quite the feat.
- Simple buttons, start and stop,
- With Socket.IO, the data will hop.

## Prerequisites

Before you begin, just a few things to do,
Node.js and npm, you'll need those too.

- Node.js (version 14 or higher, please)
- npm installed with utmost ease

## Installation

Clone the repo, download the code,
Then follow the steps down this road.

```bash
git clone https://github.com/kevin-huff/audio_caster.git
cd audio_caster
```

Install the packages, it won't take long,
Just type this command, you can't go wrong.

```bash
npm install
```

## Usage

To start the server, here's what you do,
Run the command, and you're nearly through.

```bash
node server.js
```
Open your browser, navigate with care,
http://localhost:3000 will take you there.
Click "Start Sharing" to capture the sound,
On your phone, receiver.html will be found.

# Accessing the App from Outside Your Home
Want to share the sound beyond your place?
Here are some tips to help you interface:

**Hosting on Glitch.com**

Glitch.com is a site that's pretty grand,
It hosts Node.js apps, you'll understand.

- Go to Glitch.com, sign up for free,
- Create a new project, as easy as can be.
- Copy your files, or remix with glee,
- Your app's online, for all to see.

**Setting Up Port Forwarding**

If you prefer to host on your own,
Here's how to make your server known:

- Log in to your router, find the port forwarding screen,
- Forward port 3000, keep your IP seen.
- Use your public IP, find it with ease,
- WhatIsMyIP, if you please.
- Share your IP with those you trust,
They can access your app, no need to fuss.

## Project Structure

A simple layout, easy to see,
Here's what each file is meant to be.

- ``server.js``: The server's heart,
Express and Socket.IO play their part.
- ``public/``: The files for the client-side,
With index.html and receiver.html inside.

# server.js

This file sets up the server, nice and quick,
Express and Socket.IO, doing the trick.

# public/index.html

For capturing audio, this page is the key,
With buttons to start and stop, you'll see.

# public/receiver.html

To receive the audio, this page you'll need,
It plays the sound with impressive speed.

## License

This project's free, for all to share,
Under the Unlicense, with love and care.
No lawyers needed, it’s all fun and fair.
For full details, the `LICENSE` file you'll see.

## Acknowledgements

Big thanks to Express and Socket.IO,
For making this project quite the show.
Web Audio API, you're cool too,
And MDN Web Docs, we couldn't do it without you.

A special shoutout to ChatGPT,
For rhyming this README so cleverly.
If you liked the help, or found it neat,
Feel free to share, or give a tweet!