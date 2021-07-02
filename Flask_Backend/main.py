from flask import Flask, request, jsonify,json
from flask_cors import CORS,cross_origin
from flask_pymongo import PyMongo





app = Flask(__name__)
app.config['SECRET_KEY'] = 'the quick brown fox jumps over the lazy   dog'
app.config['CORS_HEADERS'] = 'Content-Type'

cors = CORS(app, resources={r"/*": {"origins": "http://localhost:3000"}})





mongodb_client = PyMongo(app, uri="mongodb://localhost:27017/Demo")
db = mongodb_client.db

@app.route('/', methods=['GET'])
@cross_origin(origin='localhost',headers=['Content- Type','Authorization'])
def foo():
    data=db.Demo_data.find()
    response = []
    for document in data:
        document['_id'] = str(document['_id'])
        response.append(document)
    return json.dumps(response)


@app.route("/add",methods=['POST'])
def add_one():
    name = request.json['name']
    db.Demo_data.insert_one({'name': name})
    return jsonify(message="success")


if __name__ == "__main__":
    app.run(host='0.0.0.0', port=5000, debug=True)
