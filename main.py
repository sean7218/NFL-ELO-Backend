import os
from flask import Flask, render_template, url_for, json, jsonify
import app as app_module
from app import module_one


app = Flask(__name__) # pylint: disable=invalid-name

@app.route('/')
def hello_world():
    """Return the pathname of the KOS root directory."""
    return "Hello World"

@app.route('/hello/<name>')
def hello_name(name):
    """url variable can also be <int:file_id> or <float:revision_number>."""
    return 'Hello %s!' % name

@app.route('/data/<name>')
def jsondata(name):
    """serve local json to browser."""
    file_name = name + ".json"
    data = get_json(file_name)
    return jsonify(data)

def get_json(name):
    """get root working directory and load json file."""
    working_directory = os.path.realpath(os.path.dirname(__file__))
    json_url = os.path.join(working_directory, "static", name)
    data = json.load(open(json_url))
    return data



if __name__ == '__main__':
    app_module.appFunction()
    module_one.funcModuleOne()
    module_one.controllers.funcFromController()
    app.run(debug=True)
