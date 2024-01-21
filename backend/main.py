from flask import Flask
from flask import request
import uuid
import openai
app = Flask(__name__)

@app.route('/')
def hello():
    return 'Hello, World!'

user ={}
journals = {}
@app.route("signup",methods=["POST"])
def fake_register():
    #get json
    data = request.get_json()
    user = data
    return {"status":True}
    {
        "username":"glizzy",
        "password":"passe",
        "name":"",
        "email":"",

    }


@app.route('/examine_results',methods=["POST"])
def examine_results():
    data = request.get_json()
    #sample data {"answers":[0,2,3,4,5]}
    answers = data["answers"]
    total = sum(answers) + 5



if __name__ == '__main__':
    app.run()
