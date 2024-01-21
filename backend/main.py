from flask import Flask
from flask import request
import requests
import uuid
import openai
app = Flask(__name__)

@app.route('/')
def hello():
    return {"test":"yapping"}

user ={}
journals = {
}


        
print(journals)


def ask_ollama_engine(context):
    r = requests.post("http://100.111.60.93:11434/api/generate",json={"text":context})
    print(r.json())
    return r.json()

def ask_gpt(question):
    e =openai.ChatCompletion.create(
        model="gpt-4",
        messages=[{"role": "user", "content": f"{question} give positive reinforcment to the user! talk alittle about the current scores"}])
    return e['choices'][0]['message']['content']

@app.route('/examine_results',methods=["POST"])
def examine_results():
    data = request.get_json()
    #sample data {"answers":[0,2,3,4,5]}
    answers = data["answers"]
    total = sum(answers)
    return {"score":total}+5
    #use the score list to return the score and what value it would be



@app.route("/journal_submisson",methods=["POST"])
def journal_submiss():
    #sample data {"text":"Amazing something about life"}
    req_json = request.get_json()
    
    journal_id = "0215-4381-5327-1564"
    stress_help = ask_gpt(req_json['text'])
    journals[journal_id] = {"text":"journal","advice" :stress_help}
    print(stress_help)
    return {"journal_id":journal_id,"advice":stress_help}
    #return the journal id


 
@app.route("/getadvice/<id>")
def get_advice(id):
    if id in journals:
        return {"advice": journals[id]['advice'], "ready": True}
    else:
        return {"ready": False}

@app.route("/get/<id>")
def get_journal(id):
    return journals[id]

@app.route("/getdata")
def get_data():
    return journals
    #return the advice and the journal text
#get ideas
#basically use the chat gpt api tpo get some ideas given the context yea ok




if __name__ == '__main__':
    app.run("0.0.0.0",port=8080)
