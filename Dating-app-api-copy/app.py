from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_marshmallow import Marshmallow
from flask_cors import CORS
from flask_heroku import Heroku
from environs import Env

import os

app = Flask(__name__)
CORS(app)
heroku = Heroku(app)

env = Env()
env.read_env()
DATABASE_URL = env("DATABASE_URL")

basedir = os.path.abspath(os.path.dirname(__file__))
# app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///" +  \
# os.path.join(basedir, "app.sqlite")
app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URL


db = SQLAlchemy(app)
ma = Marshmallow(app)


class Profile(db.Model):
    __tablename__ = 'profiles'
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    profileImgUrl = db.Column(db.String(200), nullable=False)
    password = db.Column(db.String(20), nullable=False)
    gender = db.Column(db.String(10), nullable=False)
    email = db.Column(db.String(60), nullable=False)
    hotScore = db.Column(db.String(3), nullable=False)
    notScore = db.Column(db.String(3), nullable=False)

    def __init__(self, name, description, profileImgUrl, password, gender, email, hotScore, notScore):
        self.name = name
        self.description = description
        self.profileImgUrl = profileImgUrl
        self.password = password
        self.gender = gender
        self.email = email
        self.hotScore = hotScore
        self.notScore = notScore


class ProfileSchema(ma.Schema):
    class Meta:
        fields = ('id', 'name', 'description',
                  'profileImgUrl', 'password', 'gender', 'email', 'hotScore', 'notScore')


profile_schema = ProfileSchema()
profiles_schema = ProfileSchema(many=True)


@app.route('/', methods=['GET'])
def home():
    return "<h1>Dating Profile Flask API</h1>"

# Get
@app.route('/profiles', methods=['GET'])
def get_profiles():
    all_profiles = Profile.query.all()
    result = profiles_schema.dump(all_profiles)
    return jsonify(result)

# Get individual by ID
@app.route('/profile/<id>', methods=['GET'])
def get_profile(id):
    profile = Profile.query.get(id)

    result = profile_schema.dump(profile)
    return jsonify(result)

# POST
@app.route('/profile', methods=['POST'])
def add_profile():
    name = request.json['name']
    description = request.json['description']
    profileImgUrl = request.json['profileImgUrl']
    password = request.json['password']
    gender = request.json['gender']
    email = request.json['email']
    hotScore = request.json['hotScore']
    notScore = request.json['notScore']

    new_profile = Profile(name, description, profileImgUrl,
                          password, gender, email, hotScore, notScore)

    db.session.add(new_profile)
    db.session.commit()

    profile = Profile.query.get(new_profile.id)
    return profile_schema.jsonify(profile)

# PUT / PATCH
@app.route('/profile/<id>', methods=['Patch'])
def update_scores(id):
    profile = Profile.query.get(id)

    # new_name = request.json['name']
    # new_description = request.json['description']
    # new_profileImgUrl = request.json['profileImgUrl']
    # new_password = request.json['password']
    # new_gender = request.json['gender']
    # new_email = request.json['email']
    new_hotScore = request.json['hotScore']
    new_notScore = request.json['notScore']

    # profile.name = new_name
    # profile.description = new_description
    # profile.profileImgUrl = new_profileImgUrl
    # profile.password = new_password
    # profile.gender = new_gender
    # profile.email = new_email
    profile.hotScore = new_hotScore
    profile.notScore = new_notScore

    db.session.commit()
    return profile_schema.jsonify(profile)

# PUT / PATCH
# @app.route('/profile/<id>', methods=['Patch'])
# def update_notScore(id):
#     profile = Profile.query.get(id)

#     new_notScore = request.json['notScore']

#     profile.notScore = new_notScore

#     db.session.commit()
#     return profile_schema.jsonify(profile)


# Delete
@app.route('/profile/<id>', methods=['DELETE'])
def delete_profile(id):
    record = Profile.query.get(id)
    db.session.delete(record)
    db.session.commit()

    return jsonify('Item deleted')


if __name__ == "__main__":
    app.debug = True
    app.run()
