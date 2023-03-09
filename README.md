# transcription-service

AI Transcription Service using OpenAI's Whisper 

Requires Python 3.7-3.9 installed on the Machine 

and Whisper installed:

``pip install -U openai-whisper``

# Use Case

## Request
 multipart/form-data POST (containing a file input named audio) to localhost:{PORT}/upload returns a JSON Response.

 ```
 <form action="/upload" method="post" enctype="multipart/form-data">
  <input type="file" name="audio" />
 </form>
 ```
## Response
``{
   success: boolean,
   message: string,
   transcription: string,
}``

# Instructions

The Model used can be changed by entering whisp.py and changing the Model.

Run whisp.py manually if it's the first time a model has been used otherwise 
the initial transcription using the model will be botched.

I recomended to run this behind NGINX Proxy for Load Balancing (otherwise other requests will be blocked while transcriptions are being processed).
Multiple Services can be run for Load Balancing.

This Project is dependent on dotenv and you must create a .env file local to where you run the Service
that contains the Variables below: 

The BASE_URL Environmental Variable must be set if this approach is taken.

The PORT environmental Variable must also be set to an open port.

run npm install before first run then npm start

# Extra
Express is an Awful Choice for writing something like this because it's single threaded.

To get the most out of this, you would need to run multiple instances of "transcription-service" behind an NGINX Proxy for 
load balancing and it will still be extremely Inefficient.

For using AI Models in your Web Application, I'd recommend using a Service such as https://replicate.com/ 

The only valid use case I can think of off of the top of my head for something like this would be for use in a Desktop Application where
the model is running on a User's Machine.
