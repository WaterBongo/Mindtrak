import requests
oegpwjegopew = {"text":"Today i was attending a math competition and someone that I thought was my friend started questing my abilities and it really annoyed me that i cried. "}
r = requests.post(" http://127.0.0.1:8080/journal_submitssion",json=oegpwjegopew)
print(r.text)