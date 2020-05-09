import joblib  
import FirstPrediction

# wrf = joblib.load('data/wrf_wne.joblib')
wrf = joblib.load('static/data/wrf_wne.joblib')

def SecondPredict(modelIn):
    X = [modelIn]
    p2 = wrf.predict(X)
    return p2 

# wrf = joblib.load('wrf_wne.joblib')
