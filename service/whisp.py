import sys # Potential Performance Improvements have been ignored for the sake of speed
import whisper
model = whisper.load_model("tiny.en")
result = model.transcribe(sys.argv[1])
print(result["text"])