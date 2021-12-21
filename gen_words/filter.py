import json

max_size = 7
words = {"dictionary": []}

with open('words.txt', 'r') as f, open('words.json', 'w') as o:
  for word in f.read().strip().split('\n'):
    if len(word) <= max_size and word.isalpha():
      words['dictionary'].append(word.lower())
  # write out
  o.write(json.dumps(words))