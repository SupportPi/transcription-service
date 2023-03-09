# transcription-service

AI Transcription Service using OpenAI's Whisper 

Requires Python 3.7-3.9 installed on the Machine (for torch)

And Whisper installed:

``pip install -U openai-whisper``

# Use Case
 multipart/form-data POST (containing a file input named audio) to localhost:{PORT}/upload returns a JSON Response.

# Response
``{
 success: boolean,
 message: string,
 transcription: string
}``

# Instructions

Run Service behind NGINX Proxy for Load Balancing (otherwise other requests will be blocked
while transcriptions are being processed), the BASE_URL Environmental Variable must be set if this approach is taken.

The PORT environmental Variable must also be set to an open port.

run npm install before first run then npm start

