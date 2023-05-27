# MtrackerServer
About

Mtracker is a period tracking app where you create the cycles, selecting start and end date of period, 
as well as the symptoms such as mood, flow and pain. it uses charts to visualize period duration,
mood and flow amount per cycle, as well as recurrence of different pains in cycles.

Installation
-To mantain data privacy create a MongoDB atlas account to use as the database, this can be done by following the 
instructions on this video: https://www.youtube.com/watch?v=HhHzCfrqsoE or the following tutorial
 https://www.mongodb.com/docs/atlas/tutorial/create-atlas-account/

-Clone/ Download the  server repo, create a .env file where you paste the following variables 
TOKEN_SECRET= 
MONGODB_URI=
SESS_SECRET=
PORT=

Token secret: can be any string of characters you want.
MongoDB URI: this will be the URI you get from your Mongo Atlas account, it can also be a local cluster if you prefer to only run it locally,
this would mean no deployment.
Sess secret: can be any string of characters.
PORT: Can be any port you choose, if running locally, needs to be the same number used in the client side, usually in the 5000- 5050 range is ok.

Then run the following commands

npm -i
npm start

Needs to be run alongside the client side, which is in the following repository: https://github.com/afisman/MtrackerClient,
follow the instructions on the readme to be able to run the client with no issues.

For deployment to render.com (free deployment) follow the instructions in the following video: https://www.youtube.com/watch?v=bnCOyGaSe84,
after deployment, the url received for the API will be the one used on the react app.