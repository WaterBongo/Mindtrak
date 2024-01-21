from flask import Flask
from flask import request
import requests
import uuid
import openai
app = Flask(__name__)

@app.route('/')
def hello():
            
    gen_random_4uuids()
    print(journals)
    return 'Hello, World!'

user ={}
journals = {
    "0ce7af1e-a335-4d6a-b2c7-e2c8c61e1a1e": {
        "advice": "Immediate Recommendations:\n1. Maintain Composure: First, remind yourself that failing or being questioned doesn't define your abilities. Everyone has their strengths and weaknesses. Take deep breathes, drink some water, and try to calm your nerves.\n2. Talk About it: If you feel comfortable, talk to someone who can comfort you, such as a teacher, coach, or different friend. They could offer advice or a shoulder to lean on.\n3. Give Space to Your Emotions: It's normal to feel upset, but remember not to let it consume you. Allow yourself some time alone to process your feelings. \n\nFuture Recommendations:\n1. Build Confidence: Confidence will help you handle such situations better. Regular practice especially in math as it is your area, will help you gain more confidence.\n2. Find a Support System: Surround yourself with individuals who motivate you, believe in you and bring positive energy. They will help you stay resilient in challenging situations.\n3. Self Affirmations: Regularly affirm yourself about your abilities. Self-love and self-validation are fundamental in building your confidence and resilience.\n\nStress-Reduction Tips:\n1. Regular Exercise: Regular physical activity helps in managing stress. Find a type of exercise you enjoy, and engage in it regularly.\n2. Meditation and Mindfulness: Practice focusing on your breath and being present in the moment without worrying about the past or future. \n3. Balanced Diet: Good nutrition has a profound effect on your mood and energy. So, eat a healthy balanced diet.\n4. Quality Sleep: Ensure you are getting enough quality sleep. It can improve your mood, productivity, and overall health.\n5. Socializing: Spend time with your loved ones. It can help you to reduce stress significantly.\n6. Hobbies: Engage in activities that make you happy and relaxed.",
        "text": "Today i was attending a math competition and someone that I thought was my friend started questing my abilities and it really annoyed me that. "
    },
    "xxxx-xxxx-xxxx-xxxx": {
        "advice": "somthing yada",
        "text": "Amazing something about life"
    }
}


def gen_random_4uuids():
    for i in range(8):
        ithing = str(uuid.uuid4())
        journals[ithing] = {
        "advice": "\nSet Boundaries: Politely but firmly let your friend know that their behavior is not helpful and is causing undue stress. Explain how you and your teammates prefer to work and that constant pressure is counterproductive.\n\nTeam Intervention: If the behavior continues, consider a team discussion. Sometimes peer pressure can be more effective than one-on-one conversations. The team can set expectations for everyone's behavior.\n\nDesignate a Mediator: If direct confrontation is challenging, perhaps a team leader or another neutral party could mediate the situation and relay concerns to the problematic friend.\n\nFocus on Your Work: Concentrate on the tasks at hand and try to block out distractions. Remember that you have control over your own actions and responses, even if you can't control your friend's behavior.\n\nTake Breaks: Make sure to take short breaks to clear your mind, especially when you feel tension rising. A quick walk, some deep breathing, or a moment of quiet can help reset your focus.\n\nLong-term Strategies:\n\nDiscuss After the Event: Once the competition is over, it might be beneficial to have a conversation with your friend about their behavior and its impact on you and the team.\n\nTeam Debriefing: Having a post-competition meeting to discuss what worked and what didn't can help address any interpersonal issues and improve team dynamics for future events.\n\nBuild a Supportive Team Culture: For future competitions, establish team norms and support mechanisms. This could include how you deal with stress collectively and how you'll communicate under pressure.\n\nStress Reduction Techniques:\n\nMindfulness and Meditation: Practice mindfulness meditation to stay present and reduce anxiety. Apps like Headspace or Calm can guide you through short meditation sessions tailored to stress relief.\n\nPhysical Activity: Regular exercise can significantly reduce stress. Even short bursts of activity like walking or stretching can make a difference.\n\nProper Nutrition and Sleep: Ensure that you are eating nutritiously and getting enough sleep, as physical well-being greatly affects stress levels.\n\nHobbies and Interests: Engage in hobbies or activities you enjoy outside of math competitions to give your mind a break from the stress of competition.\n\nTime Management: Develop good time management skills so you can work on problems efficiently without rushing. Techniques like the Pomodoro Technique can help keep you focused and stress-free while working.\n\nJournaling: Writing down your thoughts and feelings can be a helpful way to process stress and gain perspective on the situation.\n",
        "text": "Today i was attending a math competition and someone that I thought was my friend started questing my abilities and it really annoyed me that. "
    }
        
gen_random_4uuids()
print(journals)
@app.route("/signup",methods=["POST"])
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

def ask_ollama_engine(context):
    r = requests.post("http://100.111.60.93:11434/api/generate",json={"text":context})
    print(r.json())
    return r.json()


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
    data = request.get_json()
    #sample data {"text":"Amazing something about life"}
    journal = data["text"]
    journal_id = str(uuid.uuid4())
    stress_help=  ask_ollama_engine(journal)
    journals[journal_id] = {"text":journal,"advice" :stress_help}
    print(stress_help)
    return {"journal_id":journal_id,"advice":stress_help["response"]}
    #return the journal id


 
@app.route("/getadvice/<id>")
def get_advice(id):
    return journals[id]['advice']

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
