# kinect2datachannel
Send Kinect v2 skeleton info to js web pages using WebRTC DataChannels.

This project is extracted from Shawn Van Every's Microstories project for more general use.  The original project is here: https://github.com/vanevery/microstorieslive_act2

How to Use
==========

Note: This project only works on Windows.  It requires a Kinect v.2 and a modified version of the Kinect BodyBasics app, which sends the Kinect skeleton data in OSC messages.  So far we've been using https://github.com/rev3rend/ITPKinect2OSC.

1. Download and compile https://github.com/rev3rend/ITPKinect2OSC.  Run it.  You should see a skeleton stick figure showing what your kinect sees.
2. Download this repo and `cd` into the top level directory.
3. Run `npm install`.  This will fetch and install dependencies.
4. Run `./nwjs-v0.12.3-win-x64/nw.exe .`
You will see a new node-webkit app open, and a kinect skeleton stick figure mirroring what your kinect sees.
5. In the same top level directory of this repo, run: `node server.js`.  This starts a bare-bones web server on port 8080 of your machine.  If you already have something listening on that port, you will need to change ports.
6. In your web browser, go to:  `localhost:8080/skeleton.html`  (or use whatever port the server is listening on, if you've changed it.)
You should see the same kinect skeleton stick figure.
If your local network allows it, you can determine the ip address of your machine, and access the same page from other computers, so you can get the same kinect information simultaneously in multiple places.

For more information about node-webkit, go to http://nwjs.io.
