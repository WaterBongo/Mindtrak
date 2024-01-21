"""
curl http://100.111.60.93:11434/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
    "model": "openchat_3.5",
    "messages": [{"role": "user", "content": "You are a large language model named OpenChat. Write a poem to describe yourself"}]
  }'
"""


"""
curl -X POST http://100.111.60.93:11434/api/generate -d '{
  "model": "openchat",
  "prompt":"Why is the sky blue?"
 }'

"""