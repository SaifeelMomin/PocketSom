import pickle

with open("ingr_map.pkl", "rb") as f:
    data = pickle.load(f)

print(data)
