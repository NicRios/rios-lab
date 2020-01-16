from flask import render_template
from app import app

@app.route('/')
def index():
    return render_template("index.html")

@app.route('/Contact')
def contact():
    return render_template("contact.html")

@app.route('/Company')
def company():
    return render_template("company.html")

@app.route('/Portfolio')
def portfolio():
    return render_template("portfolio.html")


@app.route('/Services')
def services():
    return render_template("services.html")

@app.route('/Privacy-Policy')
def pp():
    return render_template("privacyPolicy.html")
