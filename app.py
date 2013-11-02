import os
from flask import Flask, render_template, session, request, redirect, url_for
from flask.testsuite.config import SECRET_KEY

server = Flask(__name__)
server.secret_key = SECRET_KEY

@server.route("/")
def index():
	everything = open('index.html').read()
	return everything

if __name__ == "__main__":
    port = int(os.environ.get("PORT", 5000))
    server.run(host="0.0.0.0", port=port, debug=True)


