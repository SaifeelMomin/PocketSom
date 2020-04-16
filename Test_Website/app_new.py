import pandas as pd
import os
import json
import numpy as np
from datetime import datetime, date
import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func, desc
from flask import Flask, jsonify, render_template, redirect, url_for
from flask_sqlalchemy import SQLAlchemy

# might be able to remove
import pymysql

# additional packages might be able to remove
from sqlalchemy import Table
from sqlalchemy import Column, Integer, Text
import csv

# project 2 config file
from config import pw

# gp config file
from db_config import pwd


app = Flask(__name__, template_folder="templates")
app.config["SQLALCHEMY_DATABASE_URI"] = (
    os.environ.get("JAWSDB_URL", "")
    or f"mysql+pymysql://root:{pwd}@127.0.0.1:3306/wine_db"
)

db = SQLAlchemy(app)
session = db.session
Base = automap_base()
Base.prepare(db.engine, reflect=True)
wine_index = Base.classes.wine_index


@app.route("/")
def index():
    result = render_template("index.html")
    return result


@app.route("/wine")
def wine():
    result = render_template("wine.html")
    return result


@app.route("/wine_data/<wine>")
def get_wine_data(wine):
    qry = (
    session.query("* from wine_data;")
    .statement
    )
    df = pd.read_sql_query(qry, db.engine).drop(columns = "ID")
    df = df.loc[df[wine]> 0]
    data = {
    "Wine_Name": pd.DataFrame(df[wine]).columns.values.tolist(),
    "Attribute_Labels": np.array(pd.DataFrame(df["Attributes"]).values).flatten().tolist(),
    "Attribute_Values": np.array(pd.DataFrame(df[wine]).values).flatten().tolist()
    }
    return jsonify(data)
@app.route("/sandbox")
def sandbox():
    result = render_template("sandbox.html")
    return result


if __name__ == "__main__":
    app.run(debug=True)
